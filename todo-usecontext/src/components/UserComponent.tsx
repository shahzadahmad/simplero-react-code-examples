import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

//import { useTodoContext } from "../store";

function UserComponent({initialValue}: {initialValue: string}) {
  const [text, textSet] = React.useState(initialValue);
  //const [, todosSet] = useTodoContext();

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
