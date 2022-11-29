import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import User from "./components/UserComponent";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <User />        
      </Box>
    </ChakraProvider>
  );
}
