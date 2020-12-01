import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import navbar, * as navbarSelectors from "./navbar";
import search, * as searchSelectors from "./search";
import auth, * as authSelectors from "./auth";

const reducer = combineReducers({
  navbar,
  search,
  auth,
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
  searchSelectors.getSearchResults(state.search);

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
