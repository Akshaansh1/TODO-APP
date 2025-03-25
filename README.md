# Task Management App

## Overview
This project is built using the MERN stack. Currently, the backend is implemented using Node.js, Express, and MongoDB. The frontend is being developed using React and Tailwind CSS, with further enhancements planned.

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB database (local or cloud instance)

### Setup Steps
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. Navigate to the backend folder:
   ```sh
   cd Backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the `Backend` directory and set your MongoDB connection string:
   ```sh
   MONGO_URL=your_mongodb_connection_string
   ```
5. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Get All Tasks
- **Method:** `GET`
- **URL:** `/tasks`
- **Response:**
  ```json
  [
    { "id": 1, "title": "Task 1", "description": "Sample task" }
  ]
  ```

### 2. Create a Task
- **Method:** `POST`
- **URL:** `/tasks`
- **Request Body:**
  ```json
  {
    "id": 1,
    "title": "New Task",
    "description": "Task description"
  }
  ```
- **Response:**
  ```json
  { "msg": "Task Created", "task": { ... } }
  ```

## Testing the API with Postman

### **1. Install Postman**
- Download and install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/).

### **2. Start Your Backend Server**
- Run your backend server:
  ```sh
  cd Backend
  npm start
  ```
  Your API should be running at `http://localhost:3000`.

### **3. Using Postman to Test API Endpoints**

#### **Get All Tasks**
- **Method:** `GET`
- **URL:** `http://localhost:3000/tasks`

#### **Create a Task**
- **Method:** `POST`
- **URL:** `http://localhost:3000/tasks`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "id": "1",
    "title": "New Task",
    "description": "This is a sample task"
  }
  ```

#### **Update a Task**
- **Method:** `PUT`
- **URL:** `http://localhost:3000/tasks/1`
- **Headers:**
  - `Content-Type: application/json`
- **Body (JSON):**
  ```json
  {
    "title": "Updated Task",
    "description": "Updated description"
  }
  ```

#### **Delete a Task**
- **Method:** `DELETE`
- **URL:** `http://localhost:3000/tasks/1`

## Frontend Development
The frontend is being developed using React and Tailwind CSS. More features will be added soon.
