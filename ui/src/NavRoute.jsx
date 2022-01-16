import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./components/login/LoginPage";
import { Redirection } from "./components/Redirection";
import { Landing } from "./components/landing/Landing";
import { UserContext } from "./Context";

const NavRoute = () => {
  let User = useContext(UserContext);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/redirect"  element={<Redirection/>} />
      <Route path="/" element={!User.isLoggedIn ? <Navigate to="/login" /> : < Landing/>} />
    </Routes>
  );
};
export default NavRoute;