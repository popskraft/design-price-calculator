const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Import pricing data
const { PRICING_DATA } = require('./shared/pricing_data.js');

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

// Endpoint for price calculation
app.post('/api/calculate', async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'No query provided' });
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

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: query }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const usage = completion.usage || { prompt_tokens: 0, completion_tokens: 0 };
    const responseText = completion.choices[0]?.message?.content || 'No response generated';

    res.json({
      response: responseText,
      token_usage: {
        prompt_tokens: usage.prompt_tokens || 0,
        completion_tokens: usage.completion_tokens || 0,
        total_tokens: (usage.prompt_tokens || 0) + (usage.completion_tokens || 0)
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: error.message,
      token_usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
