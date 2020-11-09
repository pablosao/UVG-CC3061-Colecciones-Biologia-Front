import { combineReducers } from "redux";

import * as types from "../types/search";

const suggestions = (state = [], action) => {
  switch (action.type) {
    case types.SUGGESTIONS_FOUNDED:
      return action.payload;
    default:
      return state;
  }
};

const search = combineReducers({
  suggestions,
});

export default search;

export const getSuggestions = (state) =>
  state.suggestions.length > 0 ? state.suggestions : null;
