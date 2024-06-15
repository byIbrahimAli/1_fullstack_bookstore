> [!IMPORTANT]
> This project is currently under development. Deadline is 10th Aug 2024.

# Mission

To create a fullstack app from the following technologies:

- Javascript
- React
- NodeJS
- C#
- .NET
- T-SQL
- NGINX
- RESTful API's

# Objective:

Create a comprehensive online bookstore application that includes a ReactJS frontend, a .NET Core backend API, a NodeJS service for supplementary functionalities, and a SQL database managed with T-SQL. The application will use NGINX for request routing and serve static content.

# Project Breakdown:

## Individual Projects

### JavaScript (JS): Client-Side Form Validation

- Project: Implement client-side form validation.
- Criteria:
  - Use vanilla JavaScript to validate user inputs in real-time for forms within the React application.
  - Include validation for registration, login, and product checkout forms.
  - Ensure user-friendly error messages and feedback.

### C# and .NET: Primary Backend API

- Project: Develop a .NET Core RESTful API.
- Criteria:
  - Implement CRUD operations for managing users, products, and orders.
  - Include endpoints for user registration, login, product listing, adding products to the cart, and order processing.
  - Use Entity Framework Core to interact with the SQL database.

### ReactJS: Frontend Application

- Project: Build the main user interface for the online bookstore.
- Criteria:
  - Create components for user registration, login, product listing, product detail view, shopping cart, and checkout.
  - Fetch data from the .NET backend API and display it dynamically.
  - Incorporate JavaScript validation for forms.
  - Ensure a responsive design for different screen sizes.

### NodeJS: Auxiliary Backend Service

- Project: Develop a recommendation engine.
- Criteria:
  - Use NodeJS to create a service that analyzes user behavior (e.g., products viewed, items purchased) and generates product recommendations.
  - Store user behavior data in a NoSQL database like MongoDB.
  - Create an API endpoint to fetch recommendations and integrate it with the React frontend.

### NGINX: Reverse Proxy and Static Content Serving

- Project: Set up NGINX to manage incoming requests and serve static content.
- Criteria:
  - Configure NGINX to act as a reverse proxy, routing requests to the .NET API and NodeJS service.
  - Serve static files (e.g., images, CSS, JavaScript) directly from NGINX.
  - Ensure secure connections using HTTPS.

### T-SQL: Database Management

- Project: Design and implement the SQL database.
- Criteria:
  - Create tables for users, products, orders, and order details.
  - Write stored procedures for complex queries and transactions.
  - Ensure data integrity and relationships using primary and foreign keys.

### RESTful APIs: Supplementary Endpoints

- Project: Develop additional API endpoints for specific features.
- Criteria:
  - Implement a product search endpoint in the .NET API.
  - Create an endpoint for retrieving user order history.
  - Ensure these endpoints are integrated and accessible from the React frontend.

## Combining Projects into a Full-Stack Application

### Frontend Development (ReactJS)

**1. User Interface:**

- Develop a responsive and dynamic user interface using ReactJS.
- Integrate form validation using JavaScript.
- Implement components for user registration, login, product browsing, and order management.

**2. API Integration:**

- Connect the React frontend to the .NET backend API for data retrieval and updates.
- Use Axios or Fetch API to handle HTTP requests.

**3. Recommendations:**

- Fetch product recommendations from the NodeJS service and display them on the product detail and checkout pages.

### Backend Development (C# and .NET)

**1. Core API:**

- Develop the core RESTful API using .NET Core.
- Implement authentication and authorization mechanisms.
- Ensure the API can handle user management, product management, and order processing.

**2. Database Interaction:**

- Use Entity Framework Core to interact with the SQL database.
- Implement CRUD operations and stored procedures as needed.

### Auxiliary Backend (NodeJS)

**1. Recommendation Engine:**

- Create a recommendation engine using NodeJS.
- Store and analyze user behavior data in MongoDB.
- Provide an API endpoint to fetch personalized product recommendations.

### Server Configuration (NGINX)

**1. Reverse Proxy:**

- Configure NGINX to route requests to the appropriate backend service (React frontend, .NET API, or NodeJS service).
- Ensure efficient and secure handling of static files.
- Implement HTTPS for secure connections.

### Database Management (T-SQL)

**1. Database Schema:**

- Design and implement the database schema using T-SQL.
- Create tables and relationships to store users, products, orders, and order details.
- Implement stored procedures for complex operations and ensure data integrity.

## Deliverables:

1. **ReactJS Frontend:** A responsive web application with user-friendly interfaces for registration, login, browsing products, and managing orders.
1. **.NET Backend API:** A robust API handling all core functionalities, including user management, product management, and order processing.
1. **NodeJS Service:** A recommendation engine providing personalized product suggestions based on user behavior.
1. **SQL Database:** A well-designed relational database with all necessary tables, relationships, and stored procedures.
1. **NGINX Configuration:** A fully configured NGINX server managing incoming requests and serving static content securely.
1. **Documentation:** Comprehensive documentation for the entire application, including setup instructions, API documentation, and usage guidelines.

# File Structure

online-bookstore-monorepo/
├── frontend/
│ └── react-app/
├── backend/
│ └── dotnet-api/
├── services/
│ └── nodejs-recommendation/
├── nginx/
│ └── config/
├── database/
│ └── t-sql-scripts/
└── README.md
