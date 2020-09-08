import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import * as selectors from "../../reducers";
import * as actions from "../../actions/navbar";

import { MenuItems } from "./menuItems";
import logo from "../../img/logo004.png";
import "./style.css";
import Button from "./button";

const NavBar = ({ clicked, onClick }) => {
  return (
    <nav className="NavBarItems">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu-icon" onClick={onClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
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
      <Button>Sign Up</Button>
    </nav>
  );
};

export default connect(
  (state) => ({
    clicked: selectors.getMenuClick(state),
  }),
  (dispatch) => ({
    onClick() {
      dispatch(actions.showHideMenu());
    },
  })
)(NavBar);
