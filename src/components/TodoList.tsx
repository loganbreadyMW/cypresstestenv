import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "@/pages";
import styles from "../styles/Home.module.scss";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onToggleComplete,
}) => {
  return (
    <ul className={styles.todoListContainer} data-testid="todoListContainer">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};
