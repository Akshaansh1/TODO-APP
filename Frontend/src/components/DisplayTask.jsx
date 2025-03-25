import React from "react";

function DisplayTask({
  tasks,
  setEditTask,
  handleDeleteTask,
  handleUpdateTask,
  editTask,
  handleEditFieldChange,
  cancelEdit,
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-white">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`border p-4 rounded mb-4 flex flex-col gap-2 ${
              task.done ? "bg-slate-600" : "bg-gray-800"
            }`}
          >
            <p className="text-white">
              <strong>ID:</strong> {task.id}
            </p>
            <p className="text-white">
              <strong>Title:</strong> {task.title}
            </p>
            <p className="text-white">
              <strong>Description:</strong> {task.description}
            </p>
            <p className="text-white">
              <strong>Status:</strong> {task.done ? "Completed" : "Pending"}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setEditTask(task)}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Edit Form */}
      {editTask && (
        <div className="p-4 border rounded bg-gray-800 shadow mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Edit Task</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              value={editTask.title}
              onChange={(e) =>
                handleEditFieldChange("title", e.target.value)
              }
              className="border p-2 rounded text-gray-900"
              placeholder="Edit task title..."
            />
            <input
              type="text"
              name="description"
              value={editTask.description}
              onChange={(e) =>
                handleEditFieldChange("description", e.target.value)
              }
              className="border p-2 rounded text-gray-900"
              placeholder="Edit task description..."
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="done"
                checked={editTask.done || false}
                onChange={(e) =>
                  handleEditFieldChange("done", e.target.checked)
                }
                className="w-4 h-4"
              />
              <label className="text-white">Mark as Completed</label>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleUpdateTask}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Update Task
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayTask;
