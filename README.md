MERN Stack Blog Application

A fully functional blog application built with the MERN stack — MongoDB, Express.js, React.js, and Node.js.
This project demonstrates seamless integration between the frontend and backend, featuring post creation, listing, reading, authentication, categories, and commenting functionality.

📖 Project Overview

This application allows users to:

Browse all blog posts on the homepage.

Click a post to read the full content.

Create, edit, and delete posts (authenticated users only).

Categorize posts and view posts by category.

Register and log in with secure JWT authentication.

Add comments to posts.

Search and filter posts by keywords or categories.

Tech Stack:

Frontend: React + Vite + Tailwind CSS

Backend: Node.js + Express.js + MongoDB (Mongoose)

Auth: JWT-based authentication

State Management: React Context API and Hooks

API Communication: Axios

⚙️ Setup Instructions
Prerequisites

Ensure you have the following installed:

Node.js
 (v18 or higher)

MongoDB
 (local or Atlas cloud)

Git

🧩 Clone the Repository
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-MorganWambulwa.git
cd mern-stack-integration-MorganWambulwa

🖥️ Server Setup
cd server
npm install


Create a .env file in the server directory (use .env.example as reference):

MONGODB_URI=your_mongo_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret


Start the backend:

npm run dev


The backend will run at http://localhost:5000
.

💻 Client Setup
cd client
npm install


Create a .env file in the client folder:

VITE_API_URL=http://localhost:5000/api


Start the frontend:

npm run dev


Access the app via http://localhost:5173
 (or the port specified by Vite).

✨ Core Features
📝 Posts

View all posts

View single post

Create, edit, delete posts (authenticated)

Add featured images

🗂️ Categories

Create and list categories

Assign posts to categories

🔐 Authentication

Register and log in

JWT-based protected routes

💬 Comments

Add comments to posts

🔎 Search & Filtering

Search posts by keyword

Filter posts by category

📱 Responsive UI

Built with React + Tailwind CSS for a clean and mobile-friendly design

📡 API Endpoints
Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get single post by ID or slug
POST	/api/posts	Create new post (protected)
PUT	/api/posts/:id	Update post (protected)
DELETE	/api/posts/:id	Delete post (protected)
POST	/api/posts/:id/comments	Add comment to post
Categories
Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create category (protected)
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user


 Screenshots

Home Page / Post List
<img width="1881" height="959" alt="Home Screenshot" src="https://github.com/user-attachments/assets/664d6237-d2e3-4df5-bb38-ec7dd15caafb" />


Single Post Page
<img width="1904" height="953" alt="Singlepost Screenshot" src="https://github.com/user-attachments/assets/cd215d99-7865-4b2d-b829-fbb8593a2c35" />


💡 Notes

.env files are excluded from version control for security reasons.

Ensure the backend server is running before accessing the frontend.

You can use Postman to test API endpoints directly.
