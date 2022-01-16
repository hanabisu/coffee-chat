
import React, { useContext } from "react";
import { UserContext } from "../../Context";
import NavBar  from "../navbar/NavBar";
import Button from '@mui/material/Button';

export const Landing = () => {
    let User = useContext(UserContext);
    let userName = User.currentUser.profile.firstName;

    const startChat = () => {};
  
    return (
      <div>
        <NavBar/>
        <h1 className="landing">Welcome {userName}!</h1>
        <Button onClick={startChat}>Start Chat</Button> 
      </div>
    );
  };