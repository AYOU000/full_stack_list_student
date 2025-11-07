🧾 Full Stack Student List

A full-stack MERN (MongoDB, Express, React, Node.js) web application for managing student records.
It allows users to create, view, update, and delete students with full CRUD functionality and a clean, responsive interface.

📚 Table of Contents

Features

Tech Stack

Project Structure

Getting Started

Prerequisites

Installation

Environment Variables

Running the App

API Endpoints

Usage

Future Improvements

Contributing

License

🚀 Features

Full CRUD (Create, Read, Update, Delete) operations for student data.

RESTful API built with Express and TypeScript.

MongoDB integration using Mongoose ODM.

React frontend for dynamic and interactive UI.

Organized frontend/backend folder structure.

Clean and maintainable TypeScript codebase.

Easy to configure and extend.

🧰 Tech Stack
Layer	Technology
Frontend	React, TypeScript
Backend	Node.js, Express, TypeScript
Database	MongoDB, Mongoose
Tools	npm, concurrently, dotenv, nodemon
📁 Project Structure
full_stack_list_student/
│
├── back_end_express/        # Express + TypeScript backend
│   ├── src/
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Route logic (optional)
│   │   └── server.ts        # Entry point
│   ├── package.json
│   └── tsconfig.json
│
└── front_end_react/         # React frontend
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.tsx
    ├── public/
    ├── package.json
    └── tsconfig.json

⚙️ Getting Started
🧩 Prerequisites

Make sure you have installed:

Node.js (v16+ recommended)

npm or yarn

MongoDB (local instance or MongoDB Atlas)

Git

💾 Installation

Clone the repository:

git clone https://github.com/AYOU000/full_stack_list_student.git
cd full_stack_list_student


Install backend dependencies:

cd back_end_express
npm install


Install frontend dependencies:

cd ../front_end_react
npm install

🔐 Environment Variables

Create a .env file inside the back_end_express directory with the following values:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/students_db


If you are using local MongoDB:

MONGO_URI=mongodb://localhost:27017/students_db

▶️ Running the App

Start the backend:

cd back_end_express
npm run dev


Start the frontend:

cd ../front_end_react
npm start


The app should open automatically at:

Frontend: http://localhost:3000
Backend:  http://localhost:5000

🌐 API Endpoints
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/:id	Get a single student
POST	/api/students	Create a new student
PUT	/api/students/:id	Update an existing one
DELETE	/api/students/:id	Delete a student

📦 Example request (POST):

{
  "fullname": "Ayoub B.",
  "age": "21",
  "email": "ayoub@example.com",
  "class": "Software Engineering"
}

🧠 Usage

Launch the frontend and backend servers.

Add new students via the UI form.

View all existing students in a dynamic list.

Edit or delete entries instantly.

All data is stored and synced with MongoDB.

🌱 Future Improvements

Add authentication (JWT + bcrypt)

Add pagination, filtering, and sorting

Add file upload for student photos

Improve UI with TailwindCSS or Material UI

Dockerize the project for easier deployment

Deploy to Vercel + Render / Railway / AWS

🤝 Contributing

Contributions are welcome!
To contribute:

Fork this repository

Create a new branch:

git checkout -b feature/YourFeature


Commit your changes and push the branch

Open a Pull Request describing your update

🪪 License

This project is licensed under the MIT License.
Feel free to use and modify it for your own learning or projects.

💬 Author
AYOU000
