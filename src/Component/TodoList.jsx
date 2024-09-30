import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <ul className="list-disc pl-5">
      {todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
