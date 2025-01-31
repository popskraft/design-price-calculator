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

    "logo_design": {
        "description": "Custom logo design services",
        "hours": 10,
        "rate": 50,
        "quantity_rules": {
            "base_price": 500,
            "packages": {
                "economy": {
                    "price": 500,
                    "deliverables": [
                        "2 logo concepts",
                        "Basic color palette",
                        "Simple typography",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1000,
                    "deliverables": [
                        "3 logo concepts",
                        "Extended color palette",
                        "Custom typography",
                        "2 revision rounds",
                        "Vector files (AI, EPS, PNG)"
                    ]
                },
                "premium": {
                    "price": 2000,
                    "deliverables": [
                        "5 logo concepts",
                        "Complete color system",
                        "Advanced typography",
                        "3 revision rounds",
                        "Vector and raster files",
                        "Brand style guide",
                        "Favicon design"
                    ]
                }
            },
            "add_ons": {
                "additional_concept": 300,
                "brand_style_guide": 500,
                "favicon_design": 100,
                "stationery_design": 400
            }
        },
        "rush_fees": {
            "5_days": 0.5,
            "3_days": 0.75
        }
    },

    "brand_identity": {
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
            },
            "add_ons": {
                "additional_logo_concept": 300,
                "brand_style_guide": 500,
                "social_media_kit": 400,
                "brand_voice_guidelines": 250
            }
        },
        "rush_fees": {
            "5_days": 0.5,
            "3_days": 0.75
        }
    },

    "enterprise_website_design": {
        "description": "Custom enterprise-level website design services",
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
            },
            "add_ons": {
                "additional_template": 500,
                "custom_module": 1000,
                "api_integration": 750,
                "seo_optimization": 600,
                "security_package_upgrade": 800
            }
        },
        "rush_fees": {
            "4_weeks": 0.3,
            "2_weeks": 0.6
        }
    },

    "quick_websites_landing_pages": {
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
            },
            "add_ons": {
                "additional_page": 200,
                "custom_animation": 500,
                "ecommerce_setup": 1000,
                "analytics_dashboard": 750
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "website_design_figma": {
        "description": "Website design using Figma",
        "hours": 25,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1500,
            "packages": {
                "economy": {
                    "price": 1500,
                    "deliverables": [
                        "Up to 5 Figma pages",
                        "Basic components",
                        "Responsive design",
                        "Light animations",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 3000,
                    "deliverables": [
                        "Up to 10 Figma pages",
                        "Custom components",
                        "Responsive and adaptive design",
                        "Advanced animations",
                        "2 revision rounds",
                        "Prototype with interactions"
                    ]
                },
                "premium": {
                    "price": 5000,
                    "deliverables": [
                        "Up to 20 Figma pages",
                        "Fully custom components",
                        "Responsive and adaptive design",
                        "Complex animations",
                        "3 revision rounds",
                        "Interactive prototype",
                        "Design system documentation",
                        "Collaboration with developers"
                    ]
                }
            },
            "add_ons": {
                "additional_figma_page": 150,
                "interactive_prototype": 500,
                "design_system_documentation": 800,
                "developer_collaboration": 1000
            }
        },
        "rush_fees": {
            "2_weeks": 0.35,
            "1_week": 0.65
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
            },
            "add_ons": {
                "additional_screen": 200,
                "usability_testing": 1000,
                "advanced_prototype": 500,
                "design_system_creation": 1500
            }
        },
        "rush_fees": {
            "2_weeks": 0.35,
            "1_week": 0.65
        }
    },

    "ecommerce_website_design": {
        "description": "E-commerce website design services",
        "hours": 60,
        "rate": 50,
        "quantity_rules": {
            "base_price": 5000,
            "packages": {
                "economy": {
                    "price": 5000,
                    "features": [
                        "Basic e-commerce setup",
                        "Up to 20 products",
                        "Standard payment integration",
                        "Responsive design",
                        "Basic SEO setup"
                    ]
                },
                "optimal": {
                    "price": 10000,
                    "features": [
                        "Advanced e-commerce features",
                        "Up to 50 products",
                        "Multiple payment integrations",
                        "Custom product pages",
                        "Enhanced SEO setup",
                        "Inventory management integration"
                    ]
                },
                "premium": {
                    "price": 20000,
                    "features": [
                        "Full-featured e-commerce platform",
                        "Unlimited products",
                        "Custom payment solutions",
                        "Advanced product filtering",
                        "Comprehensive SEO optimization",
                        "CRM integration",
                        "1 year support package"
                    ]
                }
            },
            "add_ons": {
                "additional_product": 50,
                "custom_payment_integration": 1000,
                "advanced_seo": 1500,
                "crm_integration": 2000,
                "inventory_management": 1200
            }
        },
        "rush_fees": {
            "3_weeks": 0.3,
            "1_week": 0.6
        }
    },

    "responsive_web_design": {
        "description": "Responsive web design ensuring optimal viewing on all devices",
        "hours": 25,
        "rate": 50,
        "quantity_rules": {
            "base_price": 2000,
            "packages": {
                "economy": {
                    "price": 2000,
                    "features": [
                        "Up to 5 pages",
                        "Mobile-first design",
                        "Cross-browser compatibility",
                        "Basic animations",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 4000,
                    "features": [
                        "Up to 10 pages",
                        "Advanced responsive techniques",
                        "Custom animations",
                        "SEO-friendly structure",
                        "2 revision rounds",
                        "Performance optimization"
                    ]
                },
                "premium": {
                    "price": 7000,
                    "features": [
                        "Up to 20 pages",
                        "Fully custom responsive design",
                        "Complex animations and interactions",
                        "Comprehensive SEO setup",
                        "3 revision rounds",
                        "Performance and speed optimization",
                        "Accessibility compliance"
                    ]
                }
            },
            "add_ons": {
                "additional_page": 200,
                "custom_animation": 500,
                "seo_friendly_structure": 800,
                "performance_optimization": 1000,
                "accessibility_compliance": 700
            }
        },
        "rush_fees": {
            "2_weeks": 0.3,
            "1_week": 0.6
        }
    },

    "custom_illustrations": {
        "description": "Tailor-made illustrations for various purposes",
        "hours": 15,
        "rate": 50,
        "quantity_rules": {
            "base_price": 750,
            "packages": {
                "economy": {
                    "price": 750,
                    "deliverables": [
                        "1 custom illustration",
                        "Basic style",
                        "Standard resolution",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1500,
                    "deliverables": [
                        "2 custom illustrations",
                        "Detailed style",
                        "High resolution",
                        "2 revision rounds",
                        "Source files"
                    ]
                },
                "premium": {
                    "price": 3000,
                    "deliverables": [
                        "5 custom illustrations",
                        "Advanced style",
                        "Ultra-high resolution",
                        "Unlimited revisions",
                        "Source and editable files",
                        "Commercial usage rights"
                    ]
                }
            },
            "add_ons": {
                "additional_illustration": 700,
                "source_files": 300,
                "commercial_usage_rights": 500,
                "animated_illustration": 1000
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "infographics_design": {
        "description": "Informative and visually appealing infographics",
        "hours": 12,
        "rate": 50,
        "quantity_rules": {
            "base_price": 600,
            "packages": {
                "economy": {
                    "price": 600,
                    "deliverables": [
                        "1 infographic",
                        "Basic data visualization",
                        "Standard graphics",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1200,
                    "deliverables": [
                        "2 infographics",
                        "Advanced data visualization",
                        "Custom graphics",
                        "2 revision rounds",
                        "Source files"
                    ]
                },
                "premium": {
                    "price": 2500,
                    "deliverables": [
                        "5 infographics",
                        "Complex data visualization",
                        "Premium graphics",
                        "Unlimited revisions",
                        "Source and editable files",
                        "Interactive infographics"
                    ]
                }
            },
            "add_ons": {
                "additional_infographic": 500,
                "interactive_infographic": 1500,
                "source_files": 300
            }
        },
        "rush_fees": {
            "4_days": 0.4,
            "2_days": 0.7
        }
    },

    "photo_editing_retouching": {
        "description": "Professional photo editing and retouching services",
        "hours": 5,
        "rate": 50,
        "quantity_rules": {
            "base_price": 250,
            "packages": {
                "economy": {
                    "price": 250,
                    "deliverables": [
                        "Up to 10 photos",
                        "Basic color correction",
                        "Cropping and resizing",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 500,
                    "deliverables": [
                        "Up to 25 photos",
                        "Advanced color correction",
                        "Background removal",
                        "Skin retouching",
                        "2 revision rounds"
                    ]
                },
                "premium": {
                    "price": 1000,
                    "deliverables": [
                        "Up to 50 photos",
                        "Professional retouching",
                        "Complex background edits",
                        "High-resolution output",
                        "Unlimited revisions",
                        "Batch processing"
                    ]
                }
            },
            "add_ons": {
                "additional_photo": 30,
                "background_change": 100,
                "skin_retouching": 150,
                "complex_background_edit": 200
            }
        },
        "rush_fees": {
            "24_hours": 0.5,
            "12_hours": 0.75
        }
    },

    "packaging_design": {
        "description": "Creative packaging design for products",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1000,
            "packages": {
                "economy": {
                    "price": 1000,
                    "deliverables": [
                        "1 packaging concept",
                        "Basic dieline creation",
                        "Standard materials",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "deliverables": [
                        "2 packaging concepts",
                        "Detailed dieline creation",
                        "Premium materials",
                        "2 revision rounds",
                        "3D mockups"
                    ]
                },
                "premium": {
                    "price": 4000,
                    "deliverables": [
                        "4 packaging concepts",
                        "Advanced dieline creation",
                        "Custom materials and finishes",
                        "Unlimited revisions",
                        "3D renderings",
                        "Packaging mockups"
                    ]
                }
            },
            "add_ons": {
                "additional_concept": 500,
                "3d_rendering": 700,
                "custom_materials": 1000,
                "packaging_mockup": 800
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "business_card_design": {
        "description": "Professional business card design services",
        "hours": 4,
        "rate": 50,
        "quantity_rules": {
            "base_price": 200,
            "packages": {
                "economy": {
                    "price": 200,
                    "deliverables": [
                        "1 business card design",
                        "Standard dimensions",
                        "Basic typography",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 400,
                    "deliverables": [
                        "2 business card designs",
                        "Custom dimensions",
                        "Advanced typography",
                        "2 revision rounds",
                        "Print-ready files"
                    ]
                },
                "premium": {
                    "price": 800,
                    "deliverables": [
                        "4 business card designs",
                        "Unique dimensions and shapes",
                        "Premium typography and graphics",
                        "Unlimited revisions",
                        "Print-ready and editable files",
                        "Design variations for different uses"
                    ]
                }
            },
            "add_ons": {
                "additional_design": 150,
                "unique_shape_design": 300,
                "print_ready_files": 100
            }
        },
        "rush_fees": {
            "48_hours": 0.5,
            "24_hours": 0.75
        }
    },

    "brand_style_guide": {
        "description": "Comprehensive brand style guide development",
        "hours": 15,
        "rate": 50,
        "quantity_rules": {
            "base_price": 800,
            "packages": {
                "economy": {
                    "price": 800,
                    "deliverables": [
                        "Basic brand guidelines",
                        "Color palette",
                        "Typography",
                        "Logo usage"
                    ]
                },
                "optimal": {
                    "price": 1600,
                    "deliverables": [
                        "Detailed brand guidelines",
                        "Color palette",
                        "Typography",
                        "Logo usage and variations",
                        "Imagery style",
                        "Brand voice guidelines"
                    ]
                },
                "premium": {
                    "price": 3000,
                    "deliverables": [
                        "Comprehensive brand guidelines",
                        "Color palette and variations",
                        "Typography system",
                        "Logo usage and variations",
                        "Imagery and iconography style",
                        "Brand voice and messaging",
                        "UI elements guidelines",
                        "Print and digital applications"
                    ]
                }
            },
            "add_ons": {
                "additional_section": 300,
                "interactive_pdf": 500,
                "brand_voice_guidelines": 400
            }
        },
        "rush_fees": {
            "3_days": 0.5,
            "1_day": 0.75
        }
    },

    "icon_design": {
        "description": "Custom icon design for digital and print use",
        "hours": 10,
        "rate": 50,
        "quantity_rules": {
            "base_price": 500,
            "packages": {
                "economy": {
                    "price": 500,
                    "deliverables": [
                        "5 custom icons",
                        "Standard style",
                        "Vector files",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1000,
                    "deliverables": [
                        "10 custom icons",
                        "Detailed style",
                        "Vector and raster files",
                        "2 revision rounds",
                        "Icon set coordination"
                    ]
                },
                "premium": {
                    "price": 2000,
                    "deliverables": [
                        "25 custom icons",
                        "Advanced style customization",
                        "Vector, raster, and SVG files",
                        "Unlimited revisions",
                        "Icon set coordination",
                        "Usage guidelines"
                    ]
                }
            },
            "add_ons": {
                "additional_icon": 80,
                "svg_files": 200,
                "icon_set_coordination": 300
            }
        },
        "rush_fees": {
            "2_days": 0.4,
            "1_day": 0.7
        }
    },

    "digital_painting": {
        "description": "Custom digital painting services",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1000,
            "packages": {
                "economy": {
                    "price": 1000,
                    "deliverables": [
                        "1 digital painting",
                        "Standard resolution",
                        "Basic details",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "deliverables": [
                        "2 digital paintings",
                        "High resolution",
                        "Detailed elements",
                        "2 revision rounds",
                        "Layered PSD files"
                    ]
                },
                "premium": {
                    "price": 4000,
                    "deliverables": [
                        "5 digital paintings",
                        "Ultra-high resolution",
                        "Intricate details and textures",
                        "Unlimited revisions",
                        "Layered PSD and source files",
                        "Commercial usage rights"
                    ]
                }
            },
            "add_ons": {
                "additional_painting": 800,
                "layered_files": 300,
                "commercial_usage_rights": 500
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "character_design": {
        "description": "Unique character design for various applications",
        "hours": 18,
        "rate": 50,
        "quantity_rules": {
            "base_price": 900,
            "packages": {
                "economy": {
                    "price": 900,
                    "deliverables": [
                        "1 character design",
                        "Standard pose",
                        "Basic coloring",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1800,
                    "deliverables": [
                        "2 character designs",
                        "Multiple poses",
                        "Advanced coloring and shading",
                        "2 revision rounds",
                        "Vector and raster files"
                    ]
                },
                "premium": {
                    "price": 3500,
                    "deliverables": [
                        "4 character designs",
                        "Multiple poses and expressions",
                        "Detailed coloring and shading",
                        "Unlimited revisions",
                        "Vector, raster, and PSD files",
                        "Commercial usage rights"
                    ]
                }
            },
            "add_ons": {
                "additional_character": 800,
                "multiple_poses": 400,
                "detailed_coloring": 500
            }
        },
        "rush_fees": {
            "4_days": 0.4,
            "2_days": 0.7
        }
    },

    "motion_graphics": {
        "description": "Dynamic motion graphics for videos and presentations",
        "hours": 15,
        "rate": 50,
        "quantity_rules": {
            "base_price": 750,
            "packages": {
                "economy": {
                    "price": 750,
                    "deliverables": [
                        "30 seconds of motion graphics",
                        "Basic animations",
                        "Standard transitions",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1500,
                    "deliverables": [
                        "1 minute of motion graphics",
                        "Advanced animations",
                        "Custom transitions",
                        "2 revision rounds",
                        "Sound integration"
                    ]
                },
                "premium": {
                    "price": 3000,
                    "deliverables": [
                        "3 minutes of motion graphics",
                        "Complex animations",
                        "Custom transitions and effects",
                        "Unlimited revisions",
                        "Sound and music integration",
                        "3D elements"
                    ]
                }
            },
            "add_ons": {
                "additional_minute": 1000,
                "3d_elements": 1500,
                "sound_integration": 500
            }
        },
        "rush_fees": {
            "3_days": 0.5,
            "1_day": 0.75
        }
    },

    "email_template_design": {
        "description": "Custom email template design for marketing campaigns",
        "hours": 6,
        "rate": 50,
        "quantity_rules": {
            "base_price": 300,
            "packages": {
                "economy": {
                    "price": 300,
                    "deliverables": [
                        "1 email template",
                        "Basic layout",
                        "Responsive design",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 600,
                    "deliverables": [
                        "2 email templates",
                        "Custom layout",
                        "Responsive and interactive design",
                        "2 revision rounds",
                        "HTML and CSS files"
                    ]
                },
                "premium": {
                    "price": 1200,
                    "deliverables": [
                        "5 email templates",
                        "Advanced custom layouts",
                        "Responsive and interactive design",
                        "Unlimited revisions",
                        "HTML, CSS, and inline styles",
                        "Integration guidelines"
                    ]
                }
            },
            "add_ons": {
                "additional_template": 200,
                "interactive_design": 400,
                "integration_guidelines": 300
            }
        },
        "rush_fees": {
            "2_days": 0.4,
            "1_day": 0.7
        }
    },

    "newsletter_design": {
        "description": "Engaging newsletter design for email marketing",
        "hours": 5,
        "rate": 50,
        "quantity_rules": {
            "base_price": 250,
            "packages": {
                "economy": {
                    "price": 250,
                    "deliverables": [
                        "1 newsletter design",
                        "Basic layout",
                        "Responsive design",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 500,
                    "deliverables": [
                        "2 newsletter designs",
                        "Custom layout",
                        "Responsive and interactive design",
                        "2 revision rounds",
                        "HTML and CSS files"
                    ]
                },
                "premium": {
                    "price": 1000,
                    "deliverables": [
                        "5 newsletter designs",
                        "Advanced custom layouts",
                        "Responsive and interactive design",
                        "Unlimited revisions",
                        "HTML, CSS, and inline styles",
                        "Integration guidelines"
                    ]
                }
            },
            "add_ons": {
                "additional_design": 150,
                "interactive_design": 300,
                "integration_guidelines": 200
            }
        },
        "rush_fees": {
            "2_days": 0.4,
            "1_day": 0.7
        }
    },

    "portfolio_website_design": {
        "description": "Personal or professional portfolio website design",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1200,
            "packages": {
                "economy": {
                    "price": 1200,
                    "features": [
                        "Up to 5 portfolio items",
                        "Basic layout",
                        "Responsive design",
                        "Contact form",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 2400,
                    "features": [
                        "Up to 15 portfolio items",
                        "Custom layout and design",
                        "Responsive and interactive design",
                        "Contact and inquiry forms",
                        "2 revision rounds",
                        "SEO-friendly structure"
                    ]
                },
                "premium": {
                    "price": 4000,
                    "features": [
                        "Unlimited portfolio items",
                        "Advanced custom layout",
                        "Responsive and interactive design",
                        "Multiple contact forms",
                        "Unlimited revisions",
                        "SEO optimization",
                        "Integration with third-party services"
                    ]
                }
            },
            "add_ons": {
                "additional_portfolio_item": 100,
                "advanced_layout": 500,
                "seo_optimization": 800
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "blog_design": {
        "description": "Custom blog design for content creators",
        "hours": 15,
        "rate": 50,
        "quantity_rules": {
            "base_price": 800,
            "packages": {
                "economy": {
                    "price": 800,
                    "features": [
                        "Basic blog layout",
                        "Responsive design",
                        "Up to 5 blog posts",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1600,
                    "features": [
                        "Custom blog layout",
                        "Responsive and interactive design",
                        "Up to 20 blog posts",
                        "2 revision rounds",
                        "SEO-friendly structure"
                    ]
                },
                "premium": {
                    "price": 3000,
                    "features": [
                        "Advanced blog layout",
                        "Responsive and interactive design",
                        "Unlimited blog posts",
                        "Unlimited revisions",
                        "SEO optimization",
                        "Integration with third-party tools"
                    ]
                }
            },
            "add_ons": {
                "additional_blog_post": 50,
                "advanced_layout": 400,
                "seo_optimization": 600
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "cms_integration": {
        "description": "Content Management System integration (e.g., WordPress)",
        "hours": 10,
        "rate": 50,
        "quantity_rules": {
            "base_price": 500,
            "packages": {
                "economy": {
                    "price": 500,
                    "features": [
                        "Basic CMS setup",
                        "Installation of standard themes",
                        "Essential plugins installation",
                        "Basic configuration",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1000,
                    "features": [
                        "Advanced CMS setup",
                        "Custom theme installation",
                        "Essential and advanced plugins installation",
                        "Custom configuration",
                        "2 revision rounds",
                        "Basic training"
                    ]
                },
                "premium": {
                    "price": 2000,
                    "features": [
                        "Full-featured CMS setup",
                        "Custom theme development",
                        "Comprehensive plugins installation",
                        "Advanced configuration and customization",
                        "Unlimited revisions",
                        "Advanced training sessions",
                        "Ongoing support"
                    ]
                }
            },
            "add_ons": {
                "custom_theme_development": 1000,
                "advanced_plugins_setup": 500,
                "training_session": 300,
                "ongoing_support": 800
            }
        },
        "rush_fees": {
            "5_days": 0.5,
            "2_days": 0.75
        }
    },

    "website_maintenance_support": {
        "description": "Ongoing website maintenance and support services",
        "hours": 5,
        "rate": 50,
        "quantity_rules": {
            "base_price": 300,
            "packages": {
                "economy": {
                    "price": 300,
                    "features": [
                        "Monthly updates",
                        "Basic security monitoring",
                        "Content updates",
                        "Email support"
                    ]
                },
                "optimal": {
                    "price": 600,
                    "features": [
                        "Bi-weekly updates",
                        "Advanced security monitoring",
                        "Content and design updates",
                        "Priority email support",
                        "Monthly performance reports"
                    ]
                },
                "premium": {
                    "price": 1200,
                    "features": [
                        "Weekly updates",
                        "Comprehensive security monitoring",
                        "Content, design, and feature updates",
                        "24/7 support",
                        "Weekly performance reports",
                        "Backup and recovery services"
                    ]
                }
            },
            "add_ons": {
                "additional_update": 100,
                "performance_report": 200,
                "backup_service": 300
            }
        },
        "rush_fees": {
            "Urgent Support": 0.5
        }
    },

    "website_redesign_optimization": {
        "description": "Website redesign and optimization services",
        "hours": 25,
        "rate": 50,
        "quantity_rules": {
            "base_price": 2000,
            "packages": {
                "economy": {
                    "price": 2000,
                    "features": [
                        "Basic redesign",
                        "Responsive adjustments",
                        "SEO optimization",
                        "Up to 10 pages",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 4000,
                    "features": [
                        "Comprehensive redesign",
                        "Advanced responsive design",
                        "Enhanced SEO optimization",
                        "Up to 20 pages",
                        "2 revision rounds",
                        "Performance optimization"
                    ]
                },
                "premium": {
                    "price": 7000,
                    "features": [
                        "Full website overhaul",
                        "Custom responsive design",
                        "Advanced SEO and performance optimization",
                        "Unlimited pages",
                        "Unlimited revisions",
                        "Integration with third-party tools",
                        "Accessibility compliance"
                    ]
                }
            },
            "add_ons": {
                "additional_page": 150,
                "advanced_seo": 500,
                "performance_optimization": 800,
                "accessibility_compliance": 700
            }
        },
        "rush_fees": {
            "3_weeks": 0.3,
            "1_week": 0.6
        }
    },

    "seo_optimization": {
        "description": "Search Engine Optimization services to improve website visibility",
        "hours": 10,
        "rate": 50,
        "quantity_rules": {
            "base_price": 500,
            "packages": {
                "economy": {
                    "price": 500,
                    "features": [
                        "Basic keyword research",
                        "On-page SEO for up to 5 pages",
                        "Meta tags optimization",
                        "Basic SEO report"
                    ]
                },
                "optimal": {
                    "price": 1000,
                    "features": [
                        "Advanced keyword research",
                        "On-page SEO for up to 15 pages",
                        "Meta tags and header optimization",
                        "Basic link building",
                        "Monthly SEO reports"
                    ]
                },
                "premium": {
                    "price": 2000,
                    "features": [
                        "Comprehensive keyword research",
                        "On-page SEO for all pages",
                        "Meta tags, headers, and content optimization",
                        "Advanced link building",
                        "Technical SEO audit",
                        "Monthly detailed SEO reports",
                        "Competitor analysis"
                    ]
                }
            },
            "add_ons": {
                "additional_page_seo": 50,
                "link_building": 300,
                "technical_seo_audit": 500,
                "competitor_analysis": 400
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
        }
    },

    "vector_art_creation": {
        "description": "Creation of scalable vector artwork for various uses",
        "hours": 8,
        "rate": 50,
        "quantity_rules": {
            "base_price": 400,
            "packages": {
                "economy": {
                    "price": 400,
                    "deliverables": [
                        "1 vector illustration",
                        "Basic design",
                        "Scalable formats (SVG, EPS)",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 800,
                    "deliverables": [
                        "3 vector illustrations",
                        "Detailed design",
                        "Scalable and editable formats",
                        "2 revision rounds",
                        "Layered source files"
                    ]
                },
                "premium": {
                    "price": 1500,
                    "deliverables": [
                        "5 vector illustrations",
                        "Advanced design and detailing",
                        "Multiple scalable formats",
                        "Unlimited revisions",
                        "Layered and editable source files",
                        "Commercial usage rights"
                    ]
                }
            },
            "add_ons": {
                "additional_vector": 200,
                "editable_source_files": 300,
                "commercial_usage_rights": 500
            }
        },
        "rush_fees": {
            "2_days": 0.4,
            "1_day": 0.7
        }
    },

    "image_manipulation": {
        "description": "Professional image manipulation and editing services",
        "hours": 7,
        "rate": 50,
        "quantity_rules": {
            "base_price": 350,
            "packages": {
                "economy": {
                    "price": 350,
                    "deliverables": [
                        "Up to 10 images",
                        "Basic manipulation",
                        "Color correction",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 700,
                    "deliverables": [
                        "Up to 25 images",
                        "Advanced manipulation",
                        "Background removal",
                        "Color correction and enhancement",
                        "2 revision rounds"
                    ]
                },
                "premium": {
                    "price": 1400,
                    "deliverables": [
                        "Up to 50 images",
                        "Complex manipulation",
                        "Background removal and replacement",
                        "Color correction and enhancement",
                        "Unlimited revisions",
                        "Batch processing"
                    ]
                }
            },
            "add_ons": {
                "additional_image": 40,
                "background_replacement": 100,
                "color_enhancement": 150
            }
        },
        "rush_fees": {
            "24_hours": 0.5,
            "12_hours": 0.75
        }
    },

    "storyboarding": {
        "description": "Detailed storyboarding for videos and animations",
        "hours": 12,
        "rate": 50,
        "quantity_rules": {
            "base_price": 600,
            "packages": {
                "economy": {
                    "price": 600,
                    "deliverables": [
                        "5 storyboard panels",
                        "Basic sketches",
                        "Sequential layout",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 1200,
                    "deliverables": [
                        "10 storyboard panels",
                        "Detailed sketches",
                        "Sequential and scene layout",
                        "2 revision rounds",
                        "Annotations and descriptions"
                    ]
                },
                "premium": {
                    "price": 2500,
                    "deliverables": [
                        "20 storyboard panels",
                        "Highly detailed sketches",
                        "Sequential and scene layout",
                        "Unlimited revisions",
                        "Annotations, descriptions, and timing",
                        "Digital and printable formats"
                    ]
                }
            },
            "add_ons": {
                "additional_panel": 50,
                "detailed_sketches": 200,
                "annotations_descriptions": 150
            }
        },
        "rush_fees": {
            "3_days": 0.4,
            "1_day": 0.7
        }
    },

    "digital_brand_book": {
        "description": "Comprehensive digital brand book creation",
        "hours": 18,
        "rate": 50,
        "quantity_rules": {
            "base_price": 900,
            "packages": {
                "economy": {
                    "price": 900,
                    "deliverables": [
                        "Basic brand guidelines",
                        "Color palette",
                        "Typography",
                        "Logo usage"
                    ]
                },
                "optimal": {
                    "price": 1800,
                    "deliverables": [
                        "Detailed brand guidelines",
                        "Color palette and variations",
                        "Typography system",
                        "Logo usage and variations",
                        "Imagery style",
                        "Brand voice guidelines"
                    ]
                },
                "premium": {
                    "price": 3500,
                    "deliverables": [
                        "Comprehensive brand guidelines",
                        "Color palette and variations",
                        "Typography system",
                        "Logo usage and variations",
                        "Imagery and iconography style",
                        "Brand voice and messaging",
                        "UI elements guidelines",
                        "Print and digital applications",
                        "Interactive digital format"
                    ]
                }
            },
            "add_ons": {
                "additional_section": 300,
                "interactive_format": 500,
                "brand_voice_guidelines": 400
            }
        },
        "rush_fees": {
            "3_days": 0.5,
            "1_day": 0.75
        }
    },

    "social_media_graphics": {
        "description": "Custom social media graphics and templates",
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
            },
            "add_ons": {
                "additional_post": 50,
                "custom_animation": 200,
                "strategy_guide": 500
            }
        },
        "rush_fees": {
            "48_hours": 0.4,
            "24_hours": 0.6
        }
    },

    "digital_painting": {
        "description": "Custom digital painting services",
        "hours": 20,
        "rate": 50,
        "quantity_rules": {
            "base_price": 1000,
            "packages": {
                "economy": {
                    "price": 1000,
                    "deliverables": [
                        "1 digital painting",
                        "Standard resolution",
                        "Basic details",
                        "1 revision round"
                    ]
                },
                "optimal": {
                    "price": 2000,
                    "deliverables": [
                        "2 digital paintings",
                        "High resolution",
                        "Detailed elements",
                        "2 revision rounds",
                        "Layered PSD files"
                    ]
                },
                "premium": {
                    "price": 4000,
                    "deliverables": [
                        "5 digital paintings",
                        "Ultra-high resolution",
                        "Intricate details and textures",
                        "Unlimited revisions",
                        "Layered PSD and source files",
                        "Commercial usage rights"
                    ]
                }
            },
            "add_ons": {
                "additional_painting": 800,
                "layered_files": 300,
                "commercial_usage_rights": 500
            }
        },
        "rush_fees": {
            "1_week": 0.4,
            "3_days": 0.7
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
