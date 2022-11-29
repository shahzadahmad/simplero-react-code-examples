import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";

import User from "./components/UserComponent";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <JotaiProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <User />          
        </Box>
      </JotaiProvider>
    </ChakraProvider>
  );
}
