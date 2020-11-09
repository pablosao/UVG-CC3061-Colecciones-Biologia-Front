import React from "react";
import { connect } from "react-redux";

import * as selectors from "../../../reducers";
import * as actions from "../../../actions/search";

import "./style.css";

const exampleSearchList = [
  "Amazilia candida",
  "Tyrannus melancholicus",
  "Myiarchus tyrannulus",
  "Crotophaga sulcirostris",
  "Todirostrum cinereum",
  "Sporophila aurita",
  "Melanerpes aurifrons",
  "Volatinia jacarina",
  "Pitangus sulphuratus",
  "Cyanerpes cyaneus",
  "Tyrannus savanna",
  "Columbina minuta",
  "Chloroceryle aenea",
  "Notiochelidon pileata",
  "Cassidix mexicanus",
  "Leptotila verreauxi",
  "Aratinga holochlora",
  "Pheucticus ludovicianus",
  "Wilsonia pusilla",
  "Compylorhynchus rufinucha",
  "Columbina inca",
  "Nyctidromus nictridomus",
  "Hylocharis leucotis",
  "Philodice dupontii",
  "Chaetura pelagica",
];

const SearchField = ({ onTextChange, suggestions }) => {
  return (
    <div className="search-form">
      <div className="search-input">
        <input placeholder="Buscar..." onChange={onTextChange} type="text" />
      </div>
      {suggestions ? (
        <div className="search-suggestions">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default connect(
  (state) => ({
    suggestions: selectors.getSearchSuggestions(state),
  }),
  (dispatch) => ({
    onTextChange(text) {
      const { value } = text.target;
      let suggestions = [];
      if (value.length > 0) {
        const regex = new RegExp(`^${value}`, "i");
        suggestions = exampleSearchList.sort().filter((v) => regex.test(v));
        dispatch(actions.foundSuggestions({ suggestions }));
      }
    },
  })
)(SearchField);
