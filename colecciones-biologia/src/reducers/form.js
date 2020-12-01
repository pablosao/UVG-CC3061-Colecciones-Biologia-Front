import { combineReducers } from "redux";

import * as types from "../types/form";

const countries = (state = [], action) => {
  switch (action.type) {
    case types.COUNTRIES_FOUND:
      return action.payload;
    default:
      return state;
  }
};
const departamentos = (state = [], action) => {
  switch (action.type) {
    case types.DEPARTAMENTOS_FOUND:
      return action.payload;
    default:
      return state;
  }
};
const municipios = (state = [], action) => {
  switch (action.type) {
    case types.MUNICIPIOS_FOUND:
      return action.payload;
    default:
      return state;
  }
};
const lifeStage = (state = [], action) => {
  switch (action.type) {
    case types.LIFE_STAGE_FOUND:
      return action.payload;
    default:
      return state;
  }
};
const organismConservation = (state = [], action) => {
  switch (action.type) {
    case types.ORGANISM_CONSERVATION_FOUND:
      return action.payload;
    default:
      return state;
  }
};
const registrationBase = (state = [], action) => {
  switch (action.type) {
    case types.REGISTRATION_BASE_FOUND:
      return action.payload;
    default:
      return state;
  }
};

const specimenForm = combineReducers({
  countries,
  departamentos,
  municipios,
  lifeStage,
  organismConservation,
  registrationBase,
});

export default specimenForm;

export const getCountries = (state) =>
  state.countries.length > 0 ? state.countries : null;
export const getDepartamentos = (state) =>
  state.departamentos.length > 0 ? state.departamentos : null;
export const getMunicipios = (state) =>
  state.municipios.length > 0 ? state.municipios : null;
export const getLifeStages = (state) =>
  state.lifeStage.length > 0 ? state.lifeStage : null;
export const getOrganismConservation = (state) =>
  state.organismConservation.length > 0 ? state.organismConservation : null;
export const getRegistrationBases = (state) =>
  state.registrationBase.length > 0 ? state.registrationBase : null;
