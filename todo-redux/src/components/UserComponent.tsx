import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Store } from "../store/types";
import { setNewTodo } from "../store/actions";

function UserComponent() {
  const text = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">      
      <div>
        Username: {text}
        <div>
            <Input
                type="text"
                value={text}
                onChange={(evt) => dispatch(setNewTodo(evt.target.value))}           
            />
        </div>
    </div>      

    </Grid>
  );
}

export default UserComponent;
