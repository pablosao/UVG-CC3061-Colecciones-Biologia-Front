import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import navbar, * as navbarSelectors from "./navbar";
import search, * as searchSelectors from "./search";

const reducer = combineReducers({
  navbar,
  search,
  form: formReducer,
});

export default reducer;

//Navbar selectors
export const getMenuClick = (state) =>
  navbarSelectors.getHamburgerClick(state.navbar);

//Search Selectors
export const getSearchSuggestions = (state) =>
  searchSelectors.getSuggestions(state.search);
