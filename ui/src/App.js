import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login";
import Groups from "./components/groups";
function App() {
  const [user, setUser] = React.useState(null);

  // dummy login system for now
  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/coffee-chats" className="navbar-brand">
          Coffee Chats
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/groups"} className="nav-link">
              Groups
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
            )}

          </li>
        </div>
      </nav>


    </div>
  );
}

export default App;
