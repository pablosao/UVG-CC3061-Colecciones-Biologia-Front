import * as types from "../types/search";

export const foundSuggestions = ({ suggestions }) => ({
  type: types.SUGGESTIONS_FOUNDED,
  payload: suggestions,
});
