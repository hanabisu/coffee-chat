
import React, { useContext } from "react";
import { UserContext } from "../Context";
export const Logout = () => {
    let User = useContext(UserContext);
    return (
      <div>
        <button onClick={User.actions.handleLogout}>Logout</button>
      </div>
    );
  };