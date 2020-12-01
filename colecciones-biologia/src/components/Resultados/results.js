import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
//import SearchField from "./SearchField/searchfield";
import * as selectors from "../../reducers";

//import "./style.css";

const Results = ({ searching }) => {
  //const { resultados } = this.props; 
  console.log(searching)
  //const {id} = useParams()
  
  return (
    <div>
      <div className="row">
      <div className ="col-lg-1"></div>
      <div className ="col col-lg-10 col-sm-12">
        <br></br>
        <h3>Resultados de Busqueda</h3>
        <hr></hr>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre Científico</th>
            <th scope="col">Nombre Común</th>
            <th scope="col">Departamento</th>
            <th scope="col">Opciones</th>
          </tr>
          </thead>
          <tbody>
            {searching.map((data, idx) => (
              <tr>
                <th scope="row">
                  {data.scientific_name}</th>
                <td>{data.common_name}</td>
                <td>{data.id}</td>
                <td>{data.location}</td>
            </tr>))}
          <br></br>
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default connect((state) => ({
  searching: selectors.getSearchResults(state),
}))(Results);