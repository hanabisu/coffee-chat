
import React from "react";
import "./App.css";
import { AuthGuard } from "./auth/AuthGuard";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavRoute from "./NavRoute";

export const history = createBrowserHistory({});

function App() {
  return (
    <Router history={history}>
      <AuthGuard>
        <NavRoute />
      </AuthGuard>
    </Router>
  );
}
export default App;