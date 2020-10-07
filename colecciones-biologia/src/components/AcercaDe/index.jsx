import React from "react";
import logo from "../../img/logocolecciones.png";
import {Styles} from "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-img" />
      <div className="about-container2">
        <div className="about-field">
          <div className="col-logo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="about-title">
        <h1>TODO UN MUNDO POR DESCUBRIR</h1>
      </div>
      
    </div>
  );
};

export default About;