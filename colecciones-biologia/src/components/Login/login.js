import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "./LoginForm/loginform";
import logo from "../../img/logocolecciones.jpg";
import * as selectors from "../../reducers";

import "./style.css";

const Login = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="main-login-container">
      <div className="login-logo">
        <img src={logo} alt="" />
      </div>
      <LoginForm />
    </div>
  );
};

export default connect((state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
}))(Login);
