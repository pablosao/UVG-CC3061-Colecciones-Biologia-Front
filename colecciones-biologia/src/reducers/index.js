import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import navbar, * as navbarSelectors from "./navbar";
import search, * as searchSelectors from "./search";
import auth, * as authSelectors from "./auth";
import specimenForm, * as specimenFormSelectors from "./form";

const reducer = combineReducers({
  navbar,
  search,
  auth,
  specimenForm,
  form: formReducer,
});

export default reducer;

//Navbar selectors
export const getMenuClick = (state) =>
  navbarSelectors.getHamburgerClick(state.navbar);

//Search Selectors
export const getSearchSuggestions = (state) =>
  searchSelectors.getSuggestions(state.search);
export const getSearchingWord = (state) =>
  searchSelectors.getSearching(state.search);
export const getSearchResults = (state) =>
  console.log(searchSelectors.getSearchResults(state.search));

// Auth Selectors
export const getAuthToken = (state) => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state) =>
  authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = (state) =>
  authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = (state) => getAuthToken(state) != null;
export const getAuthUserID = (state) => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = (state) =>
  authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = (state) =>
  authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = (state) =>
  authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = (state) =>
  authSelectors.getRefreshingError(state.auth);

// Specimen Form Selectors
export const getCountries = (state) =>
  specimenFormSelectors.getCountries(state.specimenForm);
export const getDepartamentos = (state) =>
  specimenFormSelectors.getDepartamentos(state.specimenForm);
export const getMunicipios = (state) =>
  specimenFormSelectors.getMunicipios(state.specimenForm);
export const getLifeStages = (state) =>
  specimenFormSelectors.getLifeStages(state.specimenForm);
export const getOrganismConservations = (state) =>
  specimenFormSelectors.getOrganismConservation(state.specimenForm);
export const getRegistrationBases = (state) =>
  specimenFormSelectors.getRegistrationBases(state.specimenForm);
