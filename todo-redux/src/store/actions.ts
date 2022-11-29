import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { Store, Todo } from "./types";

export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";

export type ActionTypes =
  | { type: typeof SET_TODOS; payload: Todo[] }
  | { type: typeof SET_NEWTODO; payload: string };

export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: text,
});

export const setTodos = (todos: Todo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});
