let nextTodoId = 0;

export const addTodo = todo => ({
  type: "ADD_TODO",
  payload: {
    todo,
    id: ++nextTodoId
  }
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: { id }
});

export const setFilter = filterType => ({
  type: "SET_FILTER",
  payload: { filterType }
});
