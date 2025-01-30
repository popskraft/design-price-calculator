const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Load pricing data
const pricingData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../config/pricing_data.json'), 'utf8'));

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { query } = JSON.parse(event.body);

    if (!query) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No query provided' })
      };
    }

    const systemMessage = `You are a design service pricing assistant. Use this pricing data:
    ${JSON.stringify(pricingData)}
    
    You MUST respond in exactly this format:
    
    🎨 DESIGN SERVICE QUOTE
    ━━━━━━━━━━━━━━━━━━━━━
    
    📋 Service Overview
    • Project: [Name of the service]
    • Timeline: [X] hours
    • Rate: $[Y]/hour
    
    💰 Pricing
    • Base Cost: $[Total] ([Hours] × $[Rate])
    • Additional Costs: [If any, or "None"]
    ▸ Final Price: $[Total Amount]
    
    ✨ What's Included
    • [Key feature 1]
    • [Key feature 2]
    • [Key feature 3]
    
    📝 Additional Notes
    • [Important detail 1]
    • [Important detail 2]
    
    ⚡️ Next Steps
    Ready to proceed? Contact us to get started!`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: query }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        response: response.choices[0].message.content,
        token_usage: {
          prompt_tokens: response.usage.prompt_tokens,
          completion_tokens: response.usage.completion_tokens,
          total_tokens: response.usage.prompt_tokens + response.usage.completion_tokens
        }
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
