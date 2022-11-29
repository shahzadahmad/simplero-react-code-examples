import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";

import User from "./components/UserComponent";

import store from "./store/store";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <User />      
        </Box>
      </Provider>
    </ChakraProvider>
  );
}
