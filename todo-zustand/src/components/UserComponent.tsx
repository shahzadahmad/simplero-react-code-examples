import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import useStore from "../store";

function UserComponent() {
  const store = useStore((state) => state);     

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
    <div>
        Username: {store.newTodo}
        <div>
            <Input
                type="text"
                value={store.newTodo}
                onChange={(evt) => store.setNewTodo(evt.target.value)}                
            />
    </div>
    </div>
    </Grid>
  );
}

export default UserComponent;
