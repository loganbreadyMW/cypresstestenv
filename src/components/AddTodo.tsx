import { Todo } from "@/pages";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface AddTodoProps {
  addTodo: (newTodo: Todo) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const addNewTodo = async () => {
    try {
      if (todo === "") {
        toast.error("Please enter a todo");
        return;
      }

      const response = await axios.post("http://localhost:3001/todos", {
        title: todo,
      });

      if (response.status === 200) {
        toast.success("Todo added successfully");
      } else {
        toast.error("Error adding todo");
      }

      const newTodo: Todo = response.data;
      addTodo(newTodo);
      setTodo("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer test-dataid="alert" />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.input}
        data-testid="add-todo-input"
      />
      <button
        data-testid="add-todo-button"
        className={styles.addTodoButton}
        onClick={addNewTodo}
      >
        Add Todo
      </button>
    </div>
  );
};
