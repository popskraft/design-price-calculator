const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Load pricing data
const pricingData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/pricing_data.json'), 'utf8'));

exports.handler = async function(event, context) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { query } = JSON.parse(event.body);

    if (!query) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No query provided' })
      };
    }

    const systemMessage = `You are a design service pricing assistant. Use this pricing data and rules:
    ${JSON.stringify(pricingData)}
    
    Follow these calculation rules:
    1. Business Cards:
       - Base price for one design
       - Apply bulk discounts for multiple quantities
       - Example: "2 business cards" = base_price * 2 - (bulk_discount_percent)
    
    2. Logo Design:
       - Base price for one logo
       - Each variation adds variations_price
       - Example: "3 logo variations" = base_price + (variations_price * 2)
    
    3. Website Design:
       - Start with base_price
       - Add page_price for each additional page
       - Add responsive_design if mentioned
       - Add prices for any extra features mentioned
       - Example: "5 page website with contact form" = base_price + (page_price * 4) + extra_features.contact_form
    
    4. Brochure:
       - Base price plus per_page_price for additional pages
       - Apply bulk discounts for multiple copies
       - Example: "3 page brochure, 2 copies" = (base_price + per_page_price * 2) * 2 * (1 - bulk_discount)
    
    5. Social Media Posts:
       - Use bulk_pricing for multiple posts
       - If quantity not in bulk_pricing, interpolate between closest tiers
       - Example: "3 social media posts" = bulk_pricing[0].price (250 for 3 posts)
    
    You MUST respond in exactly this format:
    
    DESIGN SERVICE QUOTE
    ━━━━━━━━━━━━━━━━━━━━━
    
    Service Overview
    • Project: [Name of the service]
    • Timeline: [X] hours (adjust based on quantity)
    • Rate: $[Y]/hour
    
    Pricing Breakdown
    • Base Cost: $[Base] (explain calculation)
    • Additional Costs: [List each add-on with price]
    • Quantity Adjustments: [Explain any bulk pricing or discounts]
    Final Price: $[Total Amount]
    
    What's Included
    • [Key feature 1]
    • [Key feature 2]
    • [Key feature 3]
    • [Additional features based on quantity]
    
    Additional Notes
    • [Pricing explanation]
    • [Quantity-specific details]
    
    Next Steps
    Ready to proceed? Contact us to get started!`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: query }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    // Safely extract usage data
    const usage = completion.usage || { prompt_tokens: 0, completion_tokens: 0 };
    const responseText = completion.choices[0]?.message?.content || 'No response generated';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        response: responseText,
        token_usage: {
          prompt_tokens: usage.prompt_tokens || 0,
          completion_tokens: usage.completion_tokens || 0,
          total_tokens: (usage.prompt_tokens || 0) + (usage.completion_tokens || 0)
        }
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.message,
        token_usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      })
    };
  }
};
