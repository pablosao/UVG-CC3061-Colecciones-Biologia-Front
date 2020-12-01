import * as types from "../types/form";

export const getCountries = () => ({
  type: types.GET_COUNTRIES,
});
export const countriesFound = (countries) => ({
  type: types.COUNTRIES_FOUND,
  payload: countries,
});

export const getDepartamentos = () => ({
  type: types.GET_DEPARTAMENTOS,
});
export const departamentosFound = (departamentos) => ({
  type: types.DEPARTAMENTOS_FOUND,
  payload: departamentos,
});

export const getMunicipios = () => ({
  type: types.GET_MUNICIPIOS,
});
export const municipiosFound = (municipios) => ({
  type: types.MUNICIPIOS_FOUND,
  payload: municipios,
});

export const getLifeStage = () => ({
  type: types.GET_LIFE_STAGE,
});
export const lifeStagesFound = (lifeStages) => ({
  type: types.LIFE_STAGE_FOUND,
  payload: lifeStages,
});

export const getOrganismConservation = () => ({
  type: types.GET_ORGANISM_CONSERVATION,
});
export const organismConservationFound = (organismConservations) => ({
  type: types.ORGANISM_CONSERVATION_FOUND,
  payload: organismConservations,
});

export const getRegistrationBase = () => ({
  type: types.GET_REGISTRATION_BASE,
});
export const registrationBaseFound = (registrationBases) => ({
  type: types.REGISTRATION_BASE_FOUND,
  payload: registrationBases,
});
