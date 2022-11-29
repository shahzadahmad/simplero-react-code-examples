import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import User from "./components/UserComponent";

import { TodoProvider } from "./store";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <User/>                  
        </Box>
      </TodoProvider>
    </ChakraProvider>
  );
}
