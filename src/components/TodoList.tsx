import React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "@/pages";

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
    <ul>
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
