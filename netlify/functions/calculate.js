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
    if (!event.body) {
      throw new Error('Request body is empty');
    }

    const { query } = JSON.parse(event.body);

    const systemMessage = `You are a professional design service pricing assistant. Your task is to analyze user requests and match them with the most appropriate design service from our pricing data.

Here's how you should approach each request:

1. Understand the core service being requested, even if it's not an exact match to our service names.
2. Consider synonyms and related terms (e.g., "website", "web site", "site" should match to website-related services).
3. Look at the context and requirements to determine the most appropriate service level.
4. If multiple services could apply, explain why you chose the specific one.

Available services and their common variations:
- quick_websites_landing_pages (website, web site, site, landing page, simple website)
- enterprise_website_design (large website, complex website, full website)
- website_design_figma (figma design, web design, website mockup)
- responsive_web_design (mobile website, adaptive design)
- portfolio_website_design (personal website, artist website, showcase website)
- blog_design (blog website, content website)
- ecommerce_website_design (online store, shop website, e-commerce)
- logo_design (logo, brand mark, company logo)
- brand_identity (branding, brand design, corporate identity)
- ui_ux_design (user interface, UX, UI, app design)
- custom_illustrations (illustrations, drawing, art)
- infographics_design (infographic, data visualization)
- packaging_design (package, product packaging)
- email_template_design (email design, newsletter template)
- motion_graphics (animation, animated graphics)

Always explain your choice in the response. Format your response as JSON with these fields:
{
  "selected_service": "service_name",
  "confidence": 0.1-1.0,
  "explanation": "Why this service was selected",
  "package_recommendation": "economy|optimal|premium",
  "package_explanation": "Why this package level was selected"
}`;

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

    const aiResponse = response.data.choices[0].message.content;
    let parsedResponse;
    
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (e) {
      throw new Error('Failed to parse AI response as JSON');
    }

    // Validate the selected service exists in our pricing data
    if (!PRICING_DATA[parsedResponse.selected_service]) {
      throw new Error(`Invalid service selected: ${parsedResponse.selected_service}`);
    }

    // Get the pricing data for the selected service
    const serviceData = PRICING_DATA[parsedResponse.selected_service];
    const packageData = serviceData.quantity_rules.packages[parsedResponse.package_recommendation];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        service: parsedResponse.selected_service,
        confidence: parsedResponse.confidence,
        explanation: parsedResponse.explanation,
        package: parsedResponse.package_recommendation,
        package_explanation: parsedResponse.package_explanation,
        pricing: {
          service_data: serviceData,
          package_data: packageData
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
