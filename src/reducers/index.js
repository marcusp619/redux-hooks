import { combineReducers } from "redux";
import todosReducers from "./todosReducer";

const rootReducer = combineReducers({
  todos: todosReducers
});

export default rootReducer;
