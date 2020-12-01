import { combineReducers } from "redux";

import * as types from "../types/selectedSpecies";

const speciesSelected = (state = null, action) => {
  switch (action.type) {
    case types.SPECIES_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

const species = combineReducers({
  speciesSelected,
});

export default species;

export const getSelectedSpecies = (state) =>
  state.speciesSelected ? state.speciesSelected : null;
