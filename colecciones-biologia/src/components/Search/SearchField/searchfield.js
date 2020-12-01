import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

const renderInput = ({ input, meta, suggestions, onClick }) => {
  return (
    <div>
      <div className="search-input">
        <input {...input} placeholder="Buscar..." type="text" />
      </div>
      {suggestions ? (
        <div className="search-suggestions">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                className="suggestion"
                key={index}
                onClick={() => {
                  onClick(suggestion.common_name);
                }}
              >
                {suggestion.common_name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

const SearchField = ({
  searching,
  searchingResults,
  onTextChange,
  suggestions,
  handleSubmit,
  submitting,
  onSubmit,
  onClick,
}) => {
  if (searching && searchingResults) {
    return <Redirect to="/resultados" />;
  }
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="search"
          placeholder="Buscar..."
          onChange={onTextChange}
          suggestions={suggestions}
          onClick={onClick}
          component={renderInput}
        />
        <button className="search-btn" type="submit" disabled={submitting}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.search) {
    errors.emptySearch = "No se pueden hacer busquedas vacias.";
  }

  return errors;
};

export default reduxForm({
  form: "SearchForm",
  destroyOnUnmount: false,
  validate,
})(
  connect(
    (state) => ({
      suggestions: selectors.getSearchSuggestions(state),
      searching: selectors.getSearchingWord(state),
      searchingResults: selectors.getSearchResults(state),
    }),
    (dispatch) => ({
      onTextChange(text) {
        const { value } = text.target;
        if (value.length > 0) {
          dispatch(actions.searchSuggestions(value));
        }
      },
      onSubmit(values) {
        const { search } = values;
        if (search && search.length > 0) {
          dispatch(actions.searchResults(search));
        }
      },
      onClick(search) {
        dispatch(actions.searchResults(search));
      },
    })
  )(SearchField)
);
