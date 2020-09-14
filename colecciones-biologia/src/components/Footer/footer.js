import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo005.png";
import "./style.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="img-footer">
          <img src={logo} alt="" />
        </div>
        <div className="footer-info">
          <ul>
            <li>18 Av. 11-95 zona 15, Vista Hermosa III. </li>
            <li>Guatemala, Guatemala. 01015</li>
            <li>PBX: 2507-1500</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
