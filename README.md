# 📚 Book Tracker App

A full-stack Book Tracker app where users can register, log in, and manage their personal collection of books. Built using:

- **Frontend**: React JS
- **Backend**: Node.js, Express, Sequelize (PostgreSQL)
- **Authentication**: JWT (JSON Web Tokens)

---

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Add, View, Edit, Delete Books
- Secure user-specific data access

---

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AbubakrShahid/book-management-app.git
cd book-management-app
# 📦 Backend Setup
# Navigate to the backend folder
cd backend
# Install dependencies
npm install
# Set up environment variables
## Create a .env file in the backend directory:

PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=booktracker
DB_PORT=5432
JWT_SECRET=your_jwt_secret
## ⚠️ Make sure PostgreSQL is running locally and you’ve created the booktracker database.

# Start the backend server
npm run dev
## Runs at: http://localhost:8081

# 💻 Frontend Setup
## Navigate to the frontend folder
cd ../frontend
## Install dependencies
npm install
## Start the React app
npm start
Runs at: http://localhost:3000

🔐 API Endpoints
Auth Endpoints
POST /api/auth/register – Register a new user

POST /api/auth/login – Login and receive JWT token

GET /api/auth/me – Get logged-in user info (token required)

Book Endpoints (Token required)
POST /api/books – Add a book

GET /api/books – Get all books

PUT /api/books/:id – Edit a book

DELETE /api/books/:id – Delete a book

Include this header in all book requests:

Authorization: Bearer <your_token_here>

🧪 Sample Test Flow
Register a new user

Log in and copy the returned token

Use the token to access book endpoints

Add, edit, and delete books

🧰 Tech Stack
React

Node.js

Express.js

Sequelize ORM

PostgreSQL

JWT Authentication


