import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import RealTimeClock from "./RealTimeClock";

const TodoApp = () => {

const dataStoredfun = () =>{
  const storedTasks = localStorage.getItem("Mytasks");
  if (!storedTasks) return [];
  return JSON.parse(storedTasks);

}



  const [tasks, setTasks] = useState(() => dataStoredfun() );

  localStorage.setItem("Mytasks", JSON.stringify(tasks));

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="p-4 bg-blue-500 text-white text-xl rounded-lg font-bold">
        Todo list App
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 mt-8 rounded-lg">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">
            To-Do List
          </h1>
          <RealTimeClock />
          <TodoForm addTask={addTask} />
          <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
