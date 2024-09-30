import React from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <li
      onClick={() => toggleComplete(todo.id)}
      className={`flex justify-between items-center bg-gray-50 rounded-lg px-4 py-2 mb-2 shadow-sm cursor-pointer ${
        todo.completed ? "line-through text-gray-400" : ""
      }`}
    >
      <span>{todo.todo}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
