import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import * as selectors from "../../reducers";
import * as actions from "../../actions/navbar";
import * as authActions from "../../actions/auth";

import { MenuItems } from "./menuItems";
import logo from "../../img/logo004.png";
import "./style.css";
import Button from "./button";

const NavBar = ({ clicked, onClick, isAuthenticated }) => {
  return (
    <nav className="NavBarItems">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div
        className="menu-icon"
        onClick={() => {
          onClick("showHideMenu");
        }}
      >
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          if (item.title != "Formulario" || isAuthenticated) {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
      {isAuthenticated ? (
        <Link to="">
          <Button
            onClick={() => {
              onClick("logout");
            }}
          >
            Sign out
          </Button>
        </Link>
      ) : (
        <Link to="/sign-in">
          <Button>Log in</Button>
        </Link>
      )}
    </nav>
  );
};

export default connect(
  (state) => ({
    isAuthenticated: selectors.isAuthenticated(state),
    clicked: selectors.getMenuClick(state),
  }),
  (dispatch) => ({
    onClick(path) {
      switch (path) {
        case "showHideMenu":
          dispatch(actions.showHideMenu());
          break;
        case "logout":
          dispatch(authActions.logout());
          break;
        default:
          return null;
      }
    },
  })
)(NavBar);
