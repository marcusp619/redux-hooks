export default function todosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO": {
      const { todo, id } = action.payload;
      return [...state, { ...todo, id, completed: false }];
    }
    case "TOGGLE_TODO": {
      const { id } = action.payload;
      const todos = state.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return todos;
    }
    default:
      return state;
  }
}
