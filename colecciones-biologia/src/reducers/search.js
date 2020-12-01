import { combineReducers } from "redux";
import actions from "redux-form/lib/actions";

import * as types from "../types/search";

const searching = (state = null, action) => {
  switch (action.type) {
    case types.SEARCH_RESULTS:
      return action.payload.search;
    default:
      return state;
  }
};

const searchResults = (state = [], action) => {
  switch (action.type) {
    case types.SEARCH_RESULTS_FOUNDED:
      return action.payload;
    default:
      return state;
  }
};

const searchingSuggestions = (state = null, action) => {
  switch (action.type) {
    case types.SUGGESTIONS_SEARCHING:
      return action.payload.search;
    case types.SUGGESTIONS_FOUNDED:
      return null;
    case types.SEARCH_RESULTS:
      return null;
    default:
      return state;
  }
};

const suggestions = (state = [], action) => {
  switch (action.type) {
    case types.SUGGESTIONS_FOUNDED:
      return action.payload;
    case types.SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
};

const search = combineReducers({
  searchingSuggestions,
  suggestions,
  searching,
  searchResults,
});

export default search;

export const getSuggestions = (state) =>
  state.suggestions.length > 0 ? state.suggestions : null;

export const getSearching = (state) =>
  state.searching ? state.searching : null;

export const getSearchResults = (state) =>
  state.searchResults.length > 0 ? state.searchResults : null;
