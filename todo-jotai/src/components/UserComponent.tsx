import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";

import { newTodoAtom} from "../store";

function UserComponent() {
  const [text, textSet] = useAtom(newTodoAtom);  

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">     
      <div>
        Username: {text}
        <div>
            <Input
                type="text"
                value={text}
                onChange={(evt) => textSet(evt.target.value)}                
            />
        </div>
    </div>      
    </Grid>
  );
}

export default UserComponent;
