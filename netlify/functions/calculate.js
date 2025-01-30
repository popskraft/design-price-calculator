const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Pricing data embedded directly
const pricingData = {
    "presentation_design": {
        "description": "Professional presentation design services",
        "hours": 8,
        "rate": 50,
        "quantity_rules": {
            "base_price": 400,
            "packages": {
                "economy": {
                    "price": 400,
                    "deliverables": [
                        "Up to 10 slides",
                        "Basic template design",
                        "Stock images integration",
                        "Simple animations",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 800,
                    "deliverables": [
                        "Up to 20 slides",
                        "Custom template design",
                        "Premium stock images",
                        "Custom icons and graphics",
                        "Advanced animations",
                        "2 revision rounds",
                        "Speaker notes"
                    ]
                },
                "premium": {
                    "price": 1500,
                    "deliverables": [
                        "Up to 40 slides",
                        "Premium template design",
                        "Custom illustrations",
                        "Infographics design",
                        "Complex animations",
                        "3 revision rounds",
                        "Speaker notes",
                        "PDF handouts",
                        "Mobile-optimized version"
                    ]
                }
            },
            "add_ons": {
                "additional_slide": 40,
                "custom_infographic": 100,
                "animation_package": 200,
                "template_variation": 150,
                "presentation_training": 300
            }
        },
        "rush_fees": {
            "48_hours": 0.5,
            "24_hours": 0.75
        }
    },
    "logo_brand_identity": {
        "description": "Comprehensive brand identity development",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1000,
            "packages": {
                "economy": {
                    "price": 1000,
                    "deliverables": [
                        "Logo (2 concepts)",
                        "Basic color palette",
                        "Simple style guide",
                        "AI-Generated Mood Board",
                        "Basic brand guidelines PDF"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "deliverables": [
                        "Logo (3 concepts)",
                        "Extended color palette",
                        "Typography system",
                        "Comprehensive style guide",
                        "Social media kit",
                        "Digital brand book",
                        "AI-Enhanced brand illustrations (3)",
                        "Brand voice guidelines"
                    ]
                },
                "premium": {
                    "price": 3500,
                    "deliverables": [
                        "Logo (5 concepts)",
                        "Complete color system",
                        "Advanced typography system",
                        "Interactive brand guidelines",
                        "Comprehensive social media kit",
                        "Custom AI illustration system",
                        "Motion design guidelines",
                        "Brand training session",
                        "3D logo variations"
                    ]
                }
            }
        },
        "rush_fees": {
            "48_hours": 0.5,
            "24_hours": 0.75,
            "3_days": 0.75
        }
    },
    "enterprise_website": {
        "description": "Custom enterprise-level ProcessWire websites",
        "hours": 80,
        "rate": 50,
        "quantity_rules": {
            "base_price": 4000,
            "packages": {
                "economy": {
                    "price": 4000,
                    "features": [
                        "ProcessWire CMS setup",
                        "Basic theme customization",
                        "Standard SEO setup",
                        "Up to 5 templates",
                        "Mobile responsive",
                        "Basic security package"
                    ]
                },
                "optimal": {
                    "price": 8000,
                    "features": [
                        "Custom theme development",
                        "Advanced SEO implementation",
                        "Up to 15 templates",
                        "Enhanced security package",
                        "Performance optimization",
                        "Custom admin interface",
                        "API integration"
                    ]
                },
                "premium": {
                    "price": 15000,
                    "features": [
                        "Custom module development",
                        "International SEO setup",
                        "Unlimited templates",
                        "Advanced security suite",
                        "CDN integration",
                        "Custom API development",
                        "1 year support package"
                    ]
                }
            }
        },
        "rush_fees": {
            "1_month": 0.3,
            "2_weeks": 0.6
        }
    },
    "quick_websites": {
        "description": "Fast-turnaround websites and landing pages",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1000,
            "packages": {
                "economy": {
                    "price": 1000,
                    "features": [
                        "Single page design",
                        "Mobile responsive",
                        "Basic SEO setup",
                        "Contact form",
                        "3 content sections"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "features": [
                        "Up to 5 pages",
                        "Mobile responsive",
                        "Standard SEO setup",
                        "Custom forms",
                        "CMS integration",
                        "Social media integration"
                    ]
                },
                "premium": {
                    "price": 3500,
                    "features": [
                        "Up to 10 pages",
                        "Advanced SEO setup",
                        "Custom animations",
                        "Blog setup",
                        "Basic e-commerce",
                        "Analytics dashboard"
                    ]
                }
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },
    "print_materials": {
        "description": "Print design services",
        "hours": 8,
        "rate": 50,
        "quantity_rules": {
            "base_price": 400,
            "packages": {
                "economy": {
                    "price": 400,
                    "deliverables": [
                        "Single-sided design",
                        "Standard templates",
                        "Stock images",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 800,
                    "deliverables": [
                        "Double-sided design",
                        "Custom design",
                        "Premium stock images",
                        "Basic infographics",
                        "2 revision rounds"
                    ]
                },
                "premium": {
                    "price": 1500,
                    "deliverables": [
                        "Multi-page design",
                        "Custom illustrations",
                        "Complex infographics",
                        "Premium paper selection",
                        "3 revision rounds"
                    ]
                }
            }
        },
        "rush_fees": {
            "48_hours": 0.5,
            "24_hours": 0.75
        }
    },
    "social_media_design": {
        "description": "Social media graphics and templates",
        "hours": 6,
        "rate": 50,
        "quantity_rules": {
            "base_price": 300,
            "packages": {
                "economy": {
                    "price": 300,
                    "posts": 5,
                    "features": [
                        "Single platform",
                        "Basic templates",
                        "Stock images"
                    ]
                },
                "optimal": {
                    "price": 600,
                    "posts": 10,
                    "features": [
                        "2 platforms",
                        "Custom templates",
                        "Content calendar",
                        "Basic animations"
                    ]
                },
                "premium": {
                    "price": 1200,
                    "posts": 20,
                    "features": [
                        "All platforms",
                        "Custom illustrations",
                        "Advanced animations",
                        "Strategy guide"
                    ]
                }
            }
        },
        "rush_fees": {
            "48_hours": 0.4,
            "24_hours": 0.6
        }
    },
    "ui_ux_design": {
        "description": "User interface and experience design",
        "hours": 30,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1500,
            "packages": {
                "economy": {
                    "price": 1500,
                    "features": [
                        "5 key screens",
                        "Basic wireframes",
                        "Standard UI elements",
                        "Simple prototype"
                    ]
                },
                "optimal": {
                    "price": 3000,
                    "features": [
                        "10 screens",
                        "Detailed wireframes",
                        "Custom UI kit",
                        "Interactive prototype",
                        "User flow diagrams"
                    ]
                },
                "premium": {
                    "price": 5000,
                    "features": [
                        "20 screens",
                        "Design system",
                        "Micro-interactions",
                        "Advanced prototype",
                        "Usability testing"
                    ]
                }
            }
        },
        "rush_fees": {
            "2_weeks": 0.35,
            "1_week": 0.65
        }
    }
};

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
