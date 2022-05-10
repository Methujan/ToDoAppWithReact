import React from "react";

export default function Todo({ text }) {
  console.log("text", text);
  return (
    <div className="todo-container">
      <li className="todo-list">{text}</li>
      <button></button>
      <button></button>
    </div>
  );
}
