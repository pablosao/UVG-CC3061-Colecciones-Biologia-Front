import * as types from "../types/search";

export const searchSuggestions = (userInput) => ({
  type: types.SUGGESTIONS_SEARCHING,
  payload: { search: userInput },
});

export const foundSuggestions = ({ suggestions }) => ({
  type: types.SUGGESTIONS_FOUNDED,
  payload: suggestions,
});

export const searchResults = (userInput) => ({
  type: types.SEARCH_RESULTS,
  payload: { search: userInput },
});

export const resultsFounded = ({ results }) => ({
  type: types.SEARCH_RESULTS_FOUNDED,
  payload: results,
});
