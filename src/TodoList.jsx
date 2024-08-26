import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TodoList = ({ tasks, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [currentTask, setCurrentTask] = useState("");

  const handleEdit = (index) => {
    setIsEditing(index);
    setCurrentTask(tasks[index]);
  };

  const handleUpdate = (index) => {
    editTask(index, currentTask);
    setIsEditing(null);
    setCurrentTask("");
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded-lg"
        >
          {isEditing === index ? (
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
            />
          ) : (
            <span>{task}</span>
          )}
          <div className="flex space-x-2">
            {isEditing === index ? (
              <button
                onClick={() => handleUpdate(index)}
                className="text-green-500 hover:text-green-700 transition duration-300"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  <FiTrash2 />
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
