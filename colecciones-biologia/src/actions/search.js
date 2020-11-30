import * as types from "../types/search";

export const searchSuggestions = (userInput) => ({
  type: types.SUGGESTIONS_SEARCHING,
  payload: { search: userInput },
});

export const foundSuggestions = ({ suggestions }) => ({
  type: types.SUGGESTIONS_FOUNDED,
  payload: suggestions,
});
