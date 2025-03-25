import React from "react";

function AddTask({ newTask, handleNewTaskChange, handleAddTask }) {
  return (
    <div className="p-4 border rounded bg-gray-800 shadow">
      <h2 className="text-2xl font-semibold mb-4 text-white">Add Task</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="id"
          value={newTask.id}
          onChange={(e) => handleNewTaskChange("id", e.target.value)}
          className="border p-2 rounded text-gray-900"
          placeholder="Enter task id (number)..."
        />
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={(e) => handleNewTaskChange("title", e.target.value)}
          className="border p-2 rounded text-gray-900"
          placeholder="Enter task title..."
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={(e) => handleNewTaskChange("description", e.target.value)}
          className="border p-2 rounded text-gray-900"
          placeholder="Enter task description..."
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
