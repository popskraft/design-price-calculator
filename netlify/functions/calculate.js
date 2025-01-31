const axios = require('axios');
const { PRICING_DATA } = require('../../shared/pricing_data.js');

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

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
    ${JSON.stringify(PRICING_DATA)}
    
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
    
    Note: All services have a standard rate of $50/hour.
    
    You MUST respond in exactly this format:
    
    ### DESIGN SERVICE QUOTE
    ━━━━━━━━━━━━━━━━━━━━━
    
    ### SERVICE OVERVIEW
    - Project: [Service Name]
    - Package: [Selected Package]
    - Timeline: [Estimated Hours] hours
    - Rate: $50/hour
    
    ### PRICING BREAKDOWN
    - Base Package: $[Amount] ([Package Name])
    - Additional Features: [List each with price]
    - Rush Fees: [If applicable]
    - Revision Policy: [X revisions included, $Y per additional]
    - Final Price: $[Total Amount]
    
    ### PACKAGE INCLUDES
    [List all included features and deliverables]
    
    ### ADDITIONAL NOTES
    - [Pricing explanations]
    - [Important details about deliverables]
    - [Timeline considerations]
    
    ### RECOMMENDED ADD-ONS
    - [Suggested additions that might benefit the project]
    
    ### NEXT STEPS
    Ready to proceed? Contact us to get started!`;

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: query }
        ],
        temperature: 0.7,
        max_tokens: 500
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const responseText = response.data.choices[0]?.message?.content || 'No response generated';
    const usage = response.data.usage || { prompt_tokens: 0, completion_tokens: 0 };

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
    console.error('Error:', error.response?.data || error.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: error.response?.data?.error || error.message,
        token_usage: {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      })
    };
  }
};
