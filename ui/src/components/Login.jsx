import React, { useEffect, useContext } from "react";
import { LoginWithGoogle } from "../init-app";
import { UserContext } from "../Context";
import { history } from "../App";

export const Login = React.memo(() => {
  let user = useContext(UserContext);
  let handleLogin = () => LoginWithGoogle(user.actions.setAuthState);

  useEffect(() => {
    if (user.isLoggedIn) {
      history.push("/");
    }
  }, [user.isLoggedIn]);

  return <button onClick={handleLogin}>Login with Google</button>;
});