import { Todo } from "@/pages";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.scss";

export interface AddTodoProps {
  addTodo: (newTodo: Todo) => void;
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const addNewTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        title: todo,
      });
      const newTodo: Todo = response.data;
      addTodo(newTodo);
      setTodo("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.input}
      />
      <button className={styles.addTodoButton} onClick={addNewTodo}>
        Add Todo
      </button>
    </div>
  );
};
