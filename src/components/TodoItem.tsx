import { Todo } from "@/pages";
import React from "react";

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
    <li style={{ color: "red" }} key={id}>
      {title}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};
