import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    toast.success("Todo added successfully!");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error("Todo deleted!");
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    toast.info("Todo status updated!");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) =>
        setTodos(data.todos.map((todo) => ({ ...todo, completed: false })))
      );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // "all"
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-5">Todo List</h1>

        <AddTodo addTodo={addTodo} />

        <Filter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilter={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default TodoApp;
