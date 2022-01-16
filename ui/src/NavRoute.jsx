import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Redirection } from "./components/Redirection";
import { Landing } from "./components/landing/Landing";
import { UserContext } from "./Context";

const NavRoute = () => {
  let User = useContext(UserContext);
  return (
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/redirect" component={Redirection} />
      {!User.isLoggedIn && <Navigate push to="/login" />}
      <Route exact path="/" component={Landing} />
    </Routes>
  );
};
export default NavRoute;