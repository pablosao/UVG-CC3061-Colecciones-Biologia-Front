import React from "react";

import { MenuItems } from "./menuItems";
import logo from "../../img/logo004.png";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="NavBarItems">
      <div className="navbar-logo">
        <img src={logo} alt=""></img>
      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
