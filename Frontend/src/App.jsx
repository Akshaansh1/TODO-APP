import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config";
import AddTask from "./components/AddTask";
import DisplayTask from "./components/DisplayTask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ id: "", title: "", description: "" });
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}tasks`);
      setTasks(res.data);
    } 
    
    catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Error fetching tasks.");
    }
  };

  // Add new task
  const handleAddTask = async () => {
    const { id, title, description } = newTask;
    if (!id.trim() || !title.trim()) {
      toast.error("ID and Title are required.");
      return;
    }
    try {
      await axios.post(`${API_URL}tasks`, {
        id: Number(id),
        title,
        description,
      });
      toast.success("Task created successfully!");
      setNewTask({ id: "", title: "", description: "" });
      fetchTasks();
    } 
    
    catch (error) {
      console.error("Error creating task:", error);
      toast.error("Error creating task.");
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}tasks/${taskId}`);
      toast.success("Task deleted successfully!");
      fetchTasks();
    }
    
    catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Error deleting task.");
    }
  };

  // Update task
  const handleUpdateTask = async () => {
    if (!editTask.title.trim()) {
      toast.error("Title is required.");
      return;
    }
    try {
      await axios.put(`${API_URL}tasks/${editTask.id}`, {
        title: editTask.title,
        description: editTask.description,
        done: editTask.done,
      });
      toast.success("Task updated successfully!");
      setEditTask(null);
      fetchTasks();
    } 
    
    
    catch (error) {
      console.error("Error updating task:", error);
      toast.error("Error updating task.");
    }
  };

  // Handle changes for new task
  const handleNewTaskChange = (field, value) => {
    setNewTask({ ...newTask, [field]: value });
  };

  // Handle changes for editing task
  const handleEditFieldChange = (field, value) => {
    setEditTask({ ...editTask, [field]: value });
  };

  const cancelEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Task Manager
      </h1>
      <AddTask
        newTask={newTask}
        handleNewTaskChange={handleNewTaskChange}
        handleAddTask={handleAddTask}
      />
      <DisplayTask
        tasks={tasks}
        setEditTask={setEditTask}
        handleDeleteTask={handleDeleteTask}
        handleUpdateTask={handleUpdateTask}
        editTask={editTask}
        handleEditFieldChange={handleEditFieldChange}
        cancelEdit={cancelEdit}
      />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
