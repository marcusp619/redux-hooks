import React from "react";

function TodoItem({ title, task, id, toggleTodo }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{task}</h4>
      <button onClick={() => toggleTodo(id)}>Done</button>
    </div>
  );
}

export default TodoItem;
