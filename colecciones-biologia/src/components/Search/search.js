import React from "react";
import SearchField from "./SearchField/searchfield";

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
        <div className="search-button">
          Buscar
        </div>
        {/* <img
            src="https://www.picsporadic.com/wp-content/uploads/2019/03/guatemala-atitlan-150315-016-hdr-gx1_web.jpg"
            alt=""
          /> */}
        </div>
    </div>
  );
};

export default Search;
