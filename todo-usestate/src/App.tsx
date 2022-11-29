import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import User from "./components/UserComponent";

export function App() {
  
  const [username, setUsername] = React.useState("owais");
  const [otherUsername, setOtherUsername] = React.useState("calvin");

  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>        
        <User username={username} updateUsername={setUsername} />
        <User username={otherUsername} updateUsername={setOtherUsername} />
      </Box>
    </ChakraProvider>
  );
}
