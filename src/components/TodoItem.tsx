import { Todo } from "@/pages";
import React from "react";
import styles from "../styles/Home.module.scss";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDelete,
  onToggleComplete,
}) => {
  const { id, title, completed } = todo;

  return (
    <li key={id} className={styles.todoItem}>
      {title}
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <label className={styles.todoLabel} htmlFor="completed">
            Completed
          </label>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleComplete(id)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};
