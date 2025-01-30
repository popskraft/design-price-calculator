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

    const systemMessage = `You are a professional design service pricing assistant. Use this comprehensive pricing data:
    ${JSON.stringify(pricingData)}
    
    Follow these calculation rules:
    1. Base Calculation:
       - Start with the base_price for the service category
       - Apply the appropriate package pricing if specified
       - Add any additional features or add-ons requested
    
    2. Quantity Adjustments:
       - Apply bulk discounts where applicable
       - Calculate package prices based on selected tier
       - Include additional items at their specified rates
    
    3. Special Considerations:
       - Add rush fees if expedited service is requested
       - Include additional revision costs beyond included revisions
       - Apply complexity multipliers where specified
       - Calculate platform-specific costs for social media
    
    4. Package Selection:
       - Recommend the most appropriate package based on requirements
       - List all included features and deliverables
       - Explain any potential upgrades or add-ons that might benefit the client
    
    You MUST respond in exactly this format:
    
    DESIGN SERVICE QUOTE
    ━━━━━━━━━━━━━━━━━━━━━
    
    Service Overview
    • Project: [Service Name]
    • Package: [Selected Package]
    • Timeline: [Estimated Hours] hours
    • Rate: $[Hourly Rate]/hour
    
    Pricing Breakdown
    • Base Package: $[Amount] ([Package Name])
    • Additional Features: [List each with price]
    • Rush Fees: [If applicable]
    • Revision Policy: [X revisions included, $Y per additional]
    Final Price: $[Total Amount]
    
    Package Includes
    [List all included features and deliverables]
    
    Additional Notes
    • [Pricing explanations]
    • [Important details about deliverables]
    • [Timeline considerations]
    
    Recommended Add-ons
    • [Suggested additions that might benefit the project]
    
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
