import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDo List</h2>
      </header>
      <Form />
    </div>
  );
}

export default App;
