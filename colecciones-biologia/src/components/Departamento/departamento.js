import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import { Link } from "react-router-dom"

//import * as selectors from "../../../reducers";
//import * as actions from "../../../actions/auth";

//import "./style.css";

const renderInput = ({ input, meta, label }) => (
  <div
    className={
      meta.active
        ? "input-div one focus"
        : meta.errors && meta.touched
        ? "input-div one form-error"
        : meta.dirty
        ? "input-div one focus"
        : "input-div one"
    }
  >
 
    <div>
      <h5>{label}</h5>
      <input
        {...input}
        className="input-text"
        type={label === "Contraseña" ? "password" : "text"}
      />
    </div>
    {meta.error && meta.touched && (
      <span className="error-message">{meta.error}</span>
    )}
  </div>
);

const DepartmentForm = ({ handleSubmit, submitting, onSubmit, error }) => {
  return (
    <div>
    <div className="especimen-container">
      <section class="section">
        <h1>Nuevo departamento</h1>     
        <hr></hr>
        <h4>Seleccione el país del departamento</h4>
        <div class="buttons">
                  <div class="dropdown">
                    <button class="btn-form btn-transparent dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      País
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Guatemala</a>
                      <a class="dropdown-item" href="#">Zacapa</a>
                      <a class="dropdown-item" href="#">Izabal</a>
                      <a class="dropdown-item" href="#">Huehuetenango</a>

                    </div>
                  </div>
                </div>
        <form onSubmit={handleSubmit((values) => onSubmit(values))}>
          <Field
            name="nombre"
            type="text"
            placeholder="Municipio"
            component={renderInput}
          />
          <button className="login-btn" type="submit" disabled={submitting}>
            Registrar Departamento
          </button>
        </form>
      </section>
    </div>
  </div>
  );
};

export default reduxForm({
  form: "DepartmentForm",
  destroyOnUnmount: false,
})(
  connect(
    (state) => ({
      //isLoading: selectors.getIsAuthenticating(state),
      //error: selectors.getAuthenticatingError(state),
      //isAuthenticated: selectors.isAuthenticated(state),
      //authUsername: selectors.getAuthUsername(state),
    }),
    (dispatch) => ({
      onSubmit(values) {
        const { country, municipio } = values;
        //dispatch(actions.startLogin(email, password));
      },
    })
  )(DepartmentForm)
);
