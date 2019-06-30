import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { toggleTodo } from "./actions";

function TodosContainer() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  console.log(todos);
  return (
    <>
      {todos ? (
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={handleToggleTodo} />
        ))
      ) : (
        <h3>No Todos!</h3>
      )}
    </>
  );
}

export default TodosContainer;
