
import React, { useContext } from "react";
import { UserContext } from "../../Context";
import NavBar  from "../navbar/NavBar";

export const Landing = () => {
    let User = useContext(UserContext);
    let userName = User.currentUser.profile.firstName;
  
    return (
      <div>
        <NavBar/>
        <h1 className="landing">Welcome {userName}!</h1>
        <button onClick={User.actions.handleLogout}>Log out</button>
      </div>
    );
  };