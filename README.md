# MERN Blog Application

## Overview
This is a full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It demonstrates seamless integration between front-end and back-end components, including database operations, API communication, and state management. Users can view blog posts, create new posts, and interact with content depending on their access level.

The project emphasizes clean code organization, responsive UI, and a user-friendly experience. It also includes advanced features like user authentication, post creation, and dynamic post viewing.

---

## Features Implemented
- View a list of blog posts with titles and excerpts.
- View individual blog posts with full content.
- Create new blog posts (requires authentication).
- RESTful API for posts and categories.
- Form validation for post creation.
- State management in React using hooks.
- Responsive and interactive UI using React components.
- Sample seeded posts for testing and demonstration.

---

## Setup Instructions

### Prerequisites
- Node.js (v18 or above)
- MongoDB installed locally or accessible via cloud

### Installation

#### Server
```bash
cd server
npm install
Client
bash
Copy code
cd client
npm install
Environment Variables
Create a .env file in the server directory with the following variables:

ini
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Replace your_mongodb_connection_string and your_jwt_secret with your own values.

Running the Application
Start the Backend
bash
Copy code
cd server
npm run dev
Start the Frontend
bash
Copy code
cd client
npm run dev
Open your browser at http://localhost:5173 to view the application.

API Documentation
Posts
GET /api/posts – Get all blog posts

GET /api/posts/:slug – Get a specific post by slug

POST /api/posts – Create a new post (requires authentication)

PUT /api/posts/:id – Update a post (requires authentication)

DELETE /api/posts/:id – Delete a post (requires authentication)

Categories
GET /api/categories – Get all categories

POST /api/categories – Create a new category (requires authentication)

Screenshots
Home Page / Post List:
Screenshot 2025-11-01 050705.png

Single Post Page:

Replace with your actual screenshots when submitting.

Notes
The application uses JWT-based authentication for protected routes.

Seeded sample posts are included for testing purposes.

Front-end and back-end communicate via RESTful API using Axios.