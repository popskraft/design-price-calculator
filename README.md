# Design Services Price Calculator

This is a web application that uses ChatGPT to calculate prices for design services based on predefined pricing data.

## Features

- Interactive chat interface for price inquiries
- Real-time price calculations using ChatGPT
- Predefined pricing data for common design services
- Modern, responsive UI

## Setup Instructions

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

3. Run the application:
```bash
python app.py
```

4. Open your browser and navigate to `http://localhost:5000`

## Available Services

The calculator includes pricing for:
- Business Cards
- Logo Design
- Website Design
- Brochures
- Social Media Posts

## How It Works

1. Users enter their inquiry about a design service
2. The application processes the query using ChatGPT
3. ChatGPT calculates the price based on predefined pricing data
4. The result is displayed with a detailed explanation

## Customizing Prices

To modify the pricing data, edit the `PRICING_DATA` dictionary in `app.py`. Each service should include:
- hours: estimated hours to complete
- rate: hourly rate in dollars
