import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        todo: newTodo,
      };
      addTodo(todo);
      setNewTodo("");
    }
  };

  return (
    <div className="mb-5">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
        className="border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 mr-2"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
