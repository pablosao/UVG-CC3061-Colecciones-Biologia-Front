import { combineReducers } from "redux";

import * as types from "../types/search";

const searching = (state = null, action) => {
  switch (action.type) {
    case types.SUGGESTIONS_SEARCHING:
      return action.payload.search;
    case types.SUGGESTIONS_FOUNDED:
      return null;
    default:
      return state;
  }
};

const suggestions = (state = [], action) => {
  switch (action.type) {
    case types.SUGGESTIONS_FOUNDED:
      return action.payload;
    default:
      return state;
  }
};

const search = combineReducers({
  searching,
  suggestions,
});

export default search;

export const getSuggestions = (state) =>
  state.suggestions.length > 0 ? state.suggestions : null;
