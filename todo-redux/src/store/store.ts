import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  SET_NEWTODO,
  SET_TODOS,
  ActionTypes,
} from "./actions";
import { Store, Todo } from "./types";

// Redux implementation
function todoReducer(
  state: Store = {
    todos: [],
    newTodo: "",
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
