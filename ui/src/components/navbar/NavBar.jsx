import React from "react";
import { Logout } from "../Logout"
const NavBar = () => {
    return (
        <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/coffee-chats" className="navbar-brand">
          Coffee Chats
        </a>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={"/groups"} className="nav-link">
              Groups
            </Link>
          </li> */}
          <li className="nav-item">
          <Logout/>
          </li>
        </div>
      </nav>


    </div>
    )
}

export default NavBar;
