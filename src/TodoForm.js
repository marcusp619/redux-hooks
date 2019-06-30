import React from "react";

function TodoForm() {
  return (
    <form>
      <label htmlFor="title">Enter Todo Title</label>
      <input id="title" placeholder="input your todo title..." />
      <label htmlFor="todo">Enter Todo</label>
      <input id="task" placeholder="Todo description..." />
      <button>Save</button>
    </form>
  );
}

export default TodoForm;
