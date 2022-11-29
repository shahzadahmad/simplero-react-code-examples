import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

function UserComponent({ username, updateUsername}: { username: any; updateUsername: any}) {  
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
        <div>
            Username: {username}
            <div>
                <Input
                    type="text"
                    value={username}
                    onChange={(evt) => updateUsername(evt.target.value)}                    
                />
        </div>
      </div>
    </Grid>
  );
}

export default UserComponent;
