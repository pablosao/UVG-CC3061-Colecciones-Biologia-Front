import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as selectors from "../../reducers";
import * as actions from "../../actions/selectedSpecies";

import "./styles.css";

const Results = ({
  searching,
  searchResults,
  isAuthenticated,
  onClick,
  selectedSpecies,
}) => {
  if (selectedSpecies) {
    return <Redirect to={`/view-species/${selectedSpecies.id}`} />;
  }
  if (searchResults && selectors.getSearchingWord) {
    return (
      <div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col col-lg-10 col-sm-12">
            <br></br>
            <h3>Resultados de Busqueda</h3>
            <hr></hr>
            <table class="table">
              <thead>
                <tr className="table-result">
                  <th scope="col">Nombre Científico</th>
                  <th scope="col">Nombre Común</th>
                  <th scope="col">Departamento</th>
                  {isAuthenticated ? <th scope="col">Opciones</th> : null}
                </tr>
              </thead>
              <tbody>
                {searchResults.map((data, idx) => (
                  <tr key={idx} onClick={() => onClick(data)}>
                    <th scope="row">{data.scientific_name}</th>
                    <td>{data.common_name}</td>
                    <td>{data.departamento.description}</td>
                    {isAuthenticated ? <td>...</td> : null}
                  </tr>
                ))}
                <br></br>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return <Redirect to="" />;
};

export default connect(
  (state) => ({
    searching: selectors.getSearchingWord(state),
    searchResults: selectors.getSearchResults(state),
    isAuthenticated: selectors.isAuthenticated(state),
    selectedSpecies: selectors.getSelectedSpecies(state),
  }),
  (dispatch) => ({
    onClick(speciesInfo) {
      dispatch(actions.speciesSecelcted(speciesInfo));
    },
  })
)(Results);
