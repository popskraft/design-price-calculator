// Pricing data for design services
const PRICING_DATA = {
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
            }
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
                        "Simple style guide"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "deliverables": [
                        "Logo (3 concepts)",
                        "Extended color palette",
                        "Comprehensive style guide"
                    ]
                }
            }
        }
    },
    "enterprise_website": {
        "description": "Custom enterprise-level websites",
        "hours": 80,
        "rate": 50,
        "quantity_rules": {
            "base_price": 4000,
            "packages": {
                "economy": {
                    "price": 4000,
                    "features": [
                        "Basic website setup",
                        "Standard templates",
                        "Mobile responsive"
                    ]
                },
                "optimal": {
                    "price": 8000,
                    "features": [
                        "Custom theme",
                        "Advanced SEO",
                        "Performance optimization"
                    ]
                }
            }
        }
    }
};

// For Node.js (Netlify)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRICING_DATA };
}

// For browser/frontend
if (typeof window !== 'undefined') {
    window.PRICING_DATA = PRICING_DATA;
}
