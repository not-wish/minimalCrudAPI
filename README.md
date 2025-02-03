# Minimal CRUD API

A clean, modular backend API built with Node.js, Express, MongoDB, and Mongoose. This project demonstrates a simple product management system with basic CRUD operations using dedicated controller and route files.

## Features

- **CRUD Endpoints:** Create, Read, Update, and Delete products.
- **Modular Structure:** Organized routes and controllers for maintainability.
- **Express Middleware:** Easily parse JSON and URL-encoded payloads.
- **MongoDB Integration:** Use Mongoose for data modeling and database operations.

## Project Structure

├── index.js                  # Main entry point, sets up Express, middleware, routes, and MongoDB connection
├── routes
│   └── product.routes.js     # Defines all API routes related to products
├── controllers
│   └── product.controller.js # Contains logic for each CRUD operation
└── models
    └── product.models.js     # Mongoose model for Product (not shown, ensure you create this file)

## Getting Started

### Prerequisites

- **Node.js** installed
- A **MongoDB** instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ExpressCleanAPI.git
   cd ExpressCleanAPI
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   MONGODB_URI=yourMongoDB_connection_string_here
   PORT=3000
   ```

   > **Security Note:** Do not commit your `.env` file to version control. Ensure it is added to your `.gitignore`.

## Usage

1. **Start the Server:**

   ```bash
   npm start
   ```

2. **API Endpoints:**

   - **GET /api/products/**  
     Retrieve a list of all products.
     
   - **GET /api/product/:id**  
     Retrieve a single product by its ID.
     
   - **POST /api/product/**  
     Create a new product.  
     *Body Example:*
     ```json
     {
       "name": "Product Name",
       "quantity": 100,
       "price": 60
     }
     ```

   - **PUT /api/product/:id**  
     Update an existing product by its ID.
     
   - **DELETE /api/product/:id**  
     Delete a product by its ID.

3. **Root Endpoint:**

   - **GET /**  
     Returns a greeting message: `"Hello from notwish!"`.
