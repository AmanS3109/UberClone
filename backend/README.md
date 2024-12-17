
# Backend API Documentation

### HTTP Method

`POST`

### Users Endpoint
`/users/rgister`

Registers a new user.

#### Description

This endpoint creates a new user account by accepting user details in the request body.

#### Status Codes

- **201 Created**: User was successfully created.
- **400 Bad Request**: Validation errors occurred or required fields are missing.
- **500 Internal Server Error**: An unexpected error occurred on the server.

#### Required Data

The request body must be a JSON object containing the following fields:

- **email** (string, required): The user's email address.
- **fullname.firstname** (string, required): The user's first name (minimum 3 characters).
- **fullname.lastname** (string, optional): The user's last name (minimum 3 characters).
- **password** (string, required): The user's password (minimum 6 characters).

#### Example Request

```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "securePassword123"
}
```
