import React from "react";

function Form({ setInputText }) {
  function inputTextHandler(input) {
    console.log(input.target.value);
    setInputText(input.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
  }

  return (
    <form>
      <input
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
