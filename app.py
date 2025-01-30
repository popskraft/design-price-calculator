from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
from openai import OpenAI
import os
import json
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__, static_folder='static', static_url_path='')

# Configure OpenAI
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# Load pricing data from JSON file
def load_pricing_data():
    pricing_file = os.path.join(os.path.dirname(__file__), 'config', 'pricing_data.json')
    try:
        with open(pricing_file, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Warning: Pricing data file not found at {pricing_file}")
        return {}
    except json.JSONDecodeError:
        print(f"Warning: Invalid JSON in pricing data file {pricing_file}")
        return {}

PRICING_DATA = load_pricing_data()

# Initialize token usage tracking
USAGE_LOG_FILE = 'token_usage.json'

def load_usage_log():
    try:
        with open(USAGE_LOG_FILE, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {'total_tokens': 0, 'requests': []}

def save_usage_log(usage_data):
    with open(USAGE_LOG_FILE, 'w') as f:
        json.dump(usage_data, f, indent=2)

def log_token_usage(prompt_tokens, completion_tokens, query):
    usage_log = load_usage_log()
    
    request_data = {
        'timestamp': datetime.now().isoformat(),
        'prompt_tokens': prompt_tokens,
        'completion_tokens': completion_tokens,
        'total_tokens': prompt_tokens + completion_tokens,
        'query': query
    }
    
    usage_log['requests'].append(request_data)
    usage_log['total_tokens'] += (prompt_tokens + completion_tokens)
    
    save_usage_log(usage_log)
    return request_data

def get_service_price(query):
    # Prepare the system message with pricing information and response format
    system_message = f"""You are a professional design service pricing assistant. Use this comprehensive pricing data:
    {PRICING_DATA}
    
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
    
    ### DESIGN SERVICE QUOTE
    ━━━━━━━━━━━━━━━━━━━━━
    
     ### SERVICE OVERVIEW
    - Project: [Service Name]
    - Package: [Selected Package]
    - Timeline: [Estimated Hours] hours
    - Rate: $[Hourly Rate]/hour
    
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
    Ready to proceed? Contact us to get started!"""

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": query}
            ],
            temperature=0.7,
            max_tokens=500
        )
        
        # Log token usage
        usage_data = log_token_usage(
            response.usage.prompt_tokens,
            response.usage.completion_tokens,
            query
        )
        
        return {
            'response': response.choices[0].message.content,
            'token_usage': usage_data
        }
    except Exception as e:
        return str(e)

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.json
    query = data.get('query', '')
    if not query:
        return jsonify({'error': 'No query provided'}), 400
    
    response = get_service_price(query)
    return jsonify(response)

@app.route('/api/usage', methods=['GET'])
def get_usage():
    usage_log = load_usage_log()
    return jsonify(usage_log)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    print(f"Static folder path: {app.static_folder}")
    print(f"Static URL path: {app.static_url_path}")
    app.run(debug=True, host='127.0.0.1', port=8080)
