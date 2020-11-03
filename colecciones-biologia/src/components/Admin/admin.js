import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../img/logo005.png";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./style.css";

const Admin = () => {
  return (
    <div class='sidebar'>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Colecciones Biologia</MenuItem>
          <SubMenu title="Opciones">
            <MenuItem>Ver Colecciones</MenuItem>
            <MenuItem>Agregar una nueva especie</MenuItem>
            <MenuItem>Ver usuarios</MenuItem>
            <MenuItem >Salir</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <div class='row'>
        <div class='col col-md-1 '/>
        <div class='col col-md-10 col-sm-11'>
          <div class='texto-left'>
            <h2>Colecciones Biologia</h2>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
          </div>
        </div>
        <div class='col col-md-1 '/>
      </div>
    </div>
  );
};

export default Admin;
