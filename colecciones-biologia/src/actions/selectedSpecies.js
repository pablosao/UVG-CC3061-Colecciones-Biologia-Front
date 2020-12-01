import * as types from "../types/selectedSpecies";

export const speciesSecelcted = (speciesInfo) => ({
  type: types.SPECIES_SELECTED,
  payload: speciesInfo,
});
