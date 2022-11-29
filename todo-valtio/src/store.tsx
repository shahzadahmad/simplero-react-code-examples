import { proxy } from "valtio";

// Standard interface and functions
export interface Todo {  
  //text: string;  
}

// Valtio implementation
interface Store {
  todos: Todo[];
  newTodo: string;  
}

const store = proxy<Store>({
  todos: [],
  newTodo: "",  
});

export default store;
