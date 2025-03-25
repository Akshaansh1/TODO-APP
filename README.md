<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management API Documentation</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; padding: 20px; }
        h1, h2, h3 { color: #333; }
        code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
    </style>
</head>
<body>
    <h1>Task Management API</h1>
    <p>This project is built using the MERN stack. Currently, the backend is implemented using Node.js, Express, and MongoDB. The frontend is being developed using React and Tailwind CSS, with further enhancements planned.</p>

    <h2>Installation & Setup</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js installed</li>
        <li>MongoDB database (local or cloud instance)</li>
    </ul>

    <h3>Setup Steps</h3>
    <pre>
    git clone &lt;your-repo-url&gt;
    cd &lt;your-repo-folder&gt;
    cd Backend
    npm install
    </pre>

    <p>Create a <code>.env</code> file in the <code>Backend</code> directory and set your MongoDB connection string:</p>
    <pre>MONGO_URL=your_mongodb_connection_string</pre>

    <p>Start the backend server:</p>
    <pre>npm start</pre>
    <p>The server will run on <code>http://localhost:3000</code>.</p>

    <h2>API Endpoints</h2>
    <h3>1. Get All Tasks</h3>
    <p><strong>Method:</strong> GET</p>
    <p><strong>URL:</strong> <code>/tasks</code></p>
    <pre>
    Response:
    [
      { "id": 1, "title": "Task 1", "description": "Sample task" }
    ]
    </pre>

    <h3>2. Create a Task</h3>
    <p><strong>Method:</strong> POST</p>
    <p><strong>URL:</strong> <code>/tasks</code></p>
    <p><strong>Request Body:</strong></p>
    <pre>
    {
      "id": 1,
      "title": "New Task",
      "description": "Task description"
    }
    </pre>

    <h2>Testing the API with Postman</h2>
    <p>Download and install Postman from <a href="https://www.postman.com/downloads/">here</a>.</p>
    <h3>Steps to Test</h3>
    <ul>
        <li>Start your backend server: <code>npm start</code></li>
        <li>Use the following endpoints in Postman:</li>
        <ul>
            <li><strong>GET:</strong> Retrieve all tasks from <code>http://localhost:3000/tasks</code></li>
            <li><strong>POST:</strong> Create a task using <code>/tasks</code> with JSON body</li>
            <li><strong>PUT:</strong> Update a task with <code>/tasks/:id</code></li>
            <li><strong>DELETE:</strong> Delete a task with <code>/tasks/:id</code></li>
        </ul>
    </ul>

    <h2>Frontend Development</h2>
    <p>The frontend is being developed using React and Tailwind CSS. More features will be added soon.</p>
</body>
</html>
