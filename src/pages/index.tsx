import React, { useEffect, useState } from "react";
import axios from "axios";
import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/todos");
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);

  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleComplete = async (id: number) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      try {
        const updatedTodo = {
          ...todoToUpdate,
          completed: !todoToUpdate.completed,
        };
        await axios.put(`http://localhost:3001/todos/${id}`, updatedTodo);
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <main>
      <div>
        <AddTodo addTodo={addNewTodo} />
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </main>
  );
}
