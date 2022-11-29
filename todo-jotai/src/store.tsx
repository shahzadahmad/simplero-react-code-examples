import { atom } from "jotai";

// Standard interface and functions
export interface Todo {  
  //text: string;  
}

// Atoms
export const todosAtom = atom<Todo[]>([]);

export const newTodoAtom = atom<string>("");