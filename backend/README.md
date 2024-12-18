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

### Users Endpoint

`/users/login`

Logs in an existing user.

#### Description

This endpoint authenticates a user using their email and password.

#### HTTP Method

`POST`

#### Status Codes

- **200 OK**: User was successfully logged in.
- **400 Bad Request**: Validation errors occurred or required fields are missing.
- **401 Unauthorized**: Invalid email or password.
- **500 Internal Server Error**: An unexpected error occurred on the server.

#### Required Data

The request body must be a JSON object containing the following fields:

- **email** (string, required): The user's email address.
- **password** (string, required): The user's password.

#### Example Request

```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

### Users Endpoint

`/users/profile`

Retrieves the profile information of the currently authenticated user.

#### Description

This endpoint returns the profile details of the authenticated user.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the `Authorization` header or `token` cookie.

#### Status Codes

- **200 OK**: Profile information retrieved successfully.
- **401 Unauthorized**: Authentication failed or token is missing/invalid.
- **500 Internal Server Error**: An unexpected error occurred on the server.

#### Example Request

```
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```

---

### Users Endpoint

`/users/logout`

Logs out the currently authenticated user.

#### Description

This endpoint logs out the user by invalidating the current JWT token.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the `Authorization` header or `token` cookie.

#### Status Codes

- **200 OK**: User was successfully logged out.
- **401 Unauthorized**: Authentication failed or token is missing/invalid.
- **500 Internal Server Error**: An unexpected error occurred on the server.

#### Example Request

```
GET /users/logout HTTP/1.1
Host: example.com
Authorization: Bearer your_jwt_token
```
