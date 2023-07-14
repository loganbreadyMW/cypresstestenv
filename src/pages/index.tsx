import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AddTodo } from "@/components/AddTodo";
import { useState } from "react";
import { TodoList } from "@/components/TodoList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <main>
      <div>
        <h1>something </h1>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
