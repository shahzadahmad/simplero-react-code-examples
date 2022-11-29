import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useProxy } from "valtio";

import store from "../store";

function UserComponent() {
  const snapshot = useProxy(store);

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">      
    <div>
        Username: {snapshot.newTodo}
        <div>
            <Input
                type="text"
                value={snapshot.newTodo}
                onChange={(evt) => (store.newTodo = evt.target.value)}
            />
        </div>
    </div>
    </Grid>
  );
}

export default UserComponent;
