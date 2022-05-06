import React from "react";

function Form({ setInputText, todos, setTodos, inputText }) {
  function inputTextHandler(input) {
    console.log(input.target.value);
    setInputText(input.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Submit
      </button>
      <div>
        <select>
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
