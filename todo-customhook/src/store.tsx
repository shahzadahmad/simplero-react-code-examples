import * as React from "react";

// Standard interface and functions
export interface Todo {  
  //text: string;  
}

// Custom hook implementation
const useTodos = (initial: Todo[] = []) => {
  const [todos, setTodos] = React.useState<Todo[]>(initial);
  const [newTodo, setNewTodo] = React.useState<string>("");

  return {
    todos,
    newTodo,
    setNewTodo
  };
};

const TodoContext = React.createContext<ReturnType<typeof useTodos> | null>(
  null
);

export const useTodoContext = () => React.useContext(TodoContext)!;

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return (
    <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
  );
}
