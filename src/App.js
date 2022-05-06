import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDo List</h2>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
