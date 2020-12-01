import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SearchField from "./SearchField/searchfield";
import * as selectors from "../../reducers";

import "./style.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-img" />
      <div className="search-title">
        <h1>TODO UN MUNDO POR DESCUBRIR</h1>
      </div>
      <div className="search-container2">
        <div className="search-field">
          <SearchField />
        </div>
      </div>
    </div>
  );
};

export default Search;
