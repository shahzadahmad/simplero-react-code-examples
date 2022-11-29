import * as React from "react";

// Standard interface and functions
export interface Todo {  
  //text: string;  
}

// useContext implementation
const useTodos = (initial: Todo[]) => React.useState<Todo[]>(initial);

const TodoContext = React.createContext<ReturnType<typeof useTodos> | null>(
  null
);

export const useTodoContext = () => React.useContext(TodoContext)!;

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return (
    <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
  );
}
