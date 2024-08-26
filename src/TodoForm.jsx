import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
      setErrorMessage("");
    } else {
      setErrorMessage("The input is empty. Kindly write something on the list.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4 mt-3">
      <input
        type="text"
        className="p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
      )}
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
