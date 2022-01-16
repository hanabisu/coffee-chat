import React, { useEffect, useContext } from "react";
import { LoginWithGoogle } from "../../init-app";
import { UserContext } from "../../Context";
import { history } from "../../App";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export const Login = React.memo(() => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = () => LoginWithGoogle(user.actions.setAuthState);

  useEffect(() => {
    console.log(`checking: ${user.isLoggedIn}`)
    if (user.isLoggedIn) {
      history.push("/");
      navigate('/');
    }
  }, [navigate, user.isLoggedIn]);


  return (
    <Button color="primary" fullWidth onClick={handleLogin} variant="contained">
      Sign In with Google
    </Button>
  );
});