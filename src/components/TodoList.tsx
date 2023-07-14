interface TodoListProps {
  todos: string[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
