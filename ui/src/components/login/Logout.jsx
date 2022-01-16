
import React, { useContext } from "react";
import { UserContext } from "../../Context";
import Button from '@mui/material/Button';

export const Logout = () => {
    let User = useContext(UserContext);
    return (
      <div>
        <Button onClick={User.actions.handleLogout}>Logout</Button>
      </div>
    );
  };