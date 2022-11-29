import create from "zustand";

// Standard interface and functions
export interface Todo {  
  //text: string;  
}

// Zustand implementation
type Store = {
  todos: Todo[];
  newTodo: string;
  setTodos: (todos: Todo[]) => void;  
  setNewTodo: (newTodo: string) => void;
};

const useStore = create<Store>(
  (set): Store => ({
    todos: [],
    newTodo: "",
    setTodos: (todos: Todo[]) =>
      set((state) => ({
        ...state,
        todos,
      })),
      
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),   
  })
);

export default useStore;
