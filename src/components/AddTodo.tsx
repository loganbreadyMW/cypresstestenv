import { useState } from "react";

interface AddTodoProps {
  setTodos: any;
}

export const AddTodo = ({ setTodos }: AddTodoProps) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const onClick = () => {
    setTodos((todos: string[]) => [...todos, newTodo]);
    setNewTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => onClick()}>Add Todo</button>
    </div>
  );
};
