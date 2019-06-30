import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./actions";

function TodoForm() {
  const [todo, setTodo] = useState({
    title: "",
    task: ""
  });

  const initialState = { title: "", task: "" };
  const dispatch = useDispatch();

  function handleFormChange(e) {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  function handSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo(initialState);
  }

  return (
    <form onSubmit={handSubmit}>
      <label htmlFor="title">Enter Todo Title</label>
      <input
        id="title"
        name="title"
        value={todo.title}
        placeholder="input your todo title..."
        onChange={handleFormChange}
      />
      <label htmlFor="todo">Enter Todo</label>
      <input
        id="todo"
        name="task"
        value={todo.task}
        placeholder="Todo description..."
        onChange={handleFormChange}
      />
      <button>Save</button>
    </form>
  );
}

export default TodoForm;
