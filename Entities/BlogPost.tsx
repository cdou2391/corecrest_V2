{
    "name": "BlogPost",
    "type": "object",
    "properties": {
      "title": {
        "type": "string",
        "description": "Blog post title"
      },
      "slug": {
        "type": "string",
        "description": "URL-friendly slug"
      },
      "excerpt": {
        "type": "string",
        "description": "Short preview excerpt"
      },
      "content": {
        "type": "string",
        "description": "Full blog content"
      },
      "author": {
        "type": "string",
        "description": "Author name"
      },
      "cover_image": {
        "type": "string",
        "description": "Cover image URL"
      },
      "category": {
        "type": "string",
        "enum": [
          "technology",
          "saas",
          "web_design",
          "it_strategy",
          "digital_transformation"
        ],
        "description": "Blog category"
      },
      "published": {
        "type": "boolean",
        "default": false,
        "description": "Whether the post is published"
      }
    },
    "required": [
      "title",
      "slug",
      "excerpt",
      "content",
      "author",
      "category"
    ]
  }