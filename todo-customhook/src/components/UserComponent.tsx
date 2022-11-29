import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import { useTodoContext } from "../store";

function UserComponent() {
  const { newTodo, setNewTodo} = useTodoContext();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
    <div>
        Username: {newTodo}
        <div>
            <Input
                type="text"
                value={newTodo}
                onChange={(evt) => setNewTodo(evt.target.value)}                
            />
        </div>
    </div>
    </Grid>
  );
}

export default UserComponent;
