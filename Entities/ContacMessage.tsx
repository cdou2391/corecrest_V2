{
    "name": "ContactMessage",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Name of the person"
      },
      "email": {
        "type": "string",
        "format": "email",
        "description": "Email address"
      },
      "subject": {
        "type": "string",
        "description": "Message subject"
      },
      "message": {
        "type": "string",
        "description": "Message content"
      },
      "status": {
        "type": "string",
        "enum": [
          "unread",
          "read",
          "replied"
        ],
        "default": "unread",
        "description": "Message status"
      }
    },
    "required": [
      "name",
      "email",
      "subject",
      "message"
    ]
  }