http://localhost:8080/api-docs/#/default/post_api_email
{
    "openapi": "3.0.0",
    "info": {
        "title": "Sending Email With Nodemailer",
        "version": "1.0.0",
        "description": "Documentation"
    },
    "paths": {
        "/api/email": {
            "post": {
                "summary": "Send an email",
                "description": "Sends an e-mail message to the address specified in the \".env\" file.",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "company_name": {
                                        "type": "string"
                                    },
                                    "telephone": {
                                        "type": "string"
                                    },
                                    "email": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Data from the email sent."
                    },
                    "400": {
                        "description": "error message."
                    }
                }
            }
        }
    },
    "components": {},
    "tags": []
}