import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h2>ToDo List {inputText}</h2>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
