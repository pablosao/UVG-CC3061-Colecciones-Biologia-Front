import { combineReducers } from "redux";

import navbar, * as navbarSelectors from "./navbar";

const reducer = combineReducers({
  navbar,
});

export default reducer;

//Navbar selectors
export const getMenuClick = (state) =>
  navbarSelectors.getHamburgerClick(state.navbar);
