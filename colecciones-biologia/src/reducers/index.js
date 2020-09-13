import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import navbar, * as navbarSelectors from "./navbar";

const reducer = combineReducers({
  navbar,
  form: formReducer,
});

export default reducer;

//Navbar selectors
export const getMenuClick = (state) =>
  navbarSelectors.getHamburgerClick(state.navbar);
