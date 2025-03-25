# Task Management API

## Overview
This project is built using the MERN stack. Currently, the backend is implemented using Node.js, Express, and MongoDB. The frontend is being developed using React and Tailwind CSS, with further enhancements planned.

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB database (local or cloud instance)

### Setup Steps
1. Clone the repository:
   ```sh
   git clone [<your-repo-url>](https://github.com/Akshaansh1/TODO-APP.git)
   cd TODO-APP
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

### Setup Frontend
1. Navigate to the frontend folder:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```
   The frontend will run on `http://localhost:5173` (or the default React port).

### Components Used
- **TaskForm Component:** Allows users to add tasks.
- **TaskList Component:** Displays tasks and provides update and delete options.

### Technologies Used
- **Axios:** Used for integrating the frontend with the backend.
- **Tailwind CSS:** Used for styling the frontend.
- **React Toastify:** Used for notifications and alerts.

### ScreenShots of The UI
# Look of The UI
<img width="960" alt="image" src="https://github.com/user-attachments/assets/8c351cd7-eb3d-48f5-9863-53bc3b7786c9" />
# Adding a Task
<img width="960" alt="image" src="https://github.com/user-attachments/assets/5f48988a-1fb6-4bc1-a2a2-5c67ac985468" />
# Editing
<img width="960" alt="image" src="https://github.com/user-attachments/assets/b8469a35-e7a9-4efa-bb3c-76397d2f7f8c" />
# The Change between a completed and non-completed task
<img width="960" alt="image" src="https://github.com/user-attachments/assets/baf4296f-ab0e-4a7a-8f9e-be4b4b5bc41e" />
# Deleting a Task
<img width="960" alt="image" src="https://github.com/user-attachments/assets/34ad5e32-c10f-4c82-a633-9b9c617dbc6c" />
