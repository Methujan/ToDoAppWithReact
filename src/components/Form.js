import React from "react";

function Form() {
  function inputTextHandler(input) {
    console.log(input);
  }
  return (
    <form>
      <input type="text" className="todo-input"></input>
      <button className="todo-button" type="submit">
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
