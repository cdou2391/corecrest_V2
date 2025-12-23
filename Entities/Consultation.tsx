{
    "name": "Consultation",
    "type": "object",
    "properties": {
      "full_name": {
        "type": "string",
        "description": "Full name of the person booking"
      },
      "email": {
        "type": "string",
        "format": "email",
        "description": "Email address"
      },
      "phone": {
        "type": "string",
        "description": "Phone number"
      },
      "company": {
        "type": "string",
        "description": "Company name (optional)"
      },
      "service_interest": {
        "type": "string",
        "enum": [
          "website_development",
          "saas_products",
          "web_app_development",
          "it_advisory"
        ],
        "description": "Service the client is interested in"
      },
      "preferred_date": {
        "type": "string",
        "format": "date",
        "description": "Preferred consultation date"
      },
      "preferred_time": {
        "type": "string",
        "description": "Preferred consultation time (Rwanda time)"
      },
      "project_details": {
        "type": "string",
        "description": "Brief description of the project"
      },
      "status": {
        "type": "string",
        "enum": [
          "pending",
          "confirmed",
          "completed",
          "cancelled"
        ],
        "default": "pending",
        "description": "Consultation status"
      }
    },
    "required": [
      "full_name",
      "email",
      "phone",
      "service_interest",
      "preferred_date",
      "preferred_time"
    ]
  }