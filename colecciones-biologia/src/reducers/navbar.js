import { combineReducers } from "redux";

import * as types from "../types/navbar";

const hamburgerMenuClicked = (state = false, action) => {
  switch (action.type) {
    case types.HAMBURGUER_CLICKED:
      return !state;
    default:
      return state;
  }
};

const navBar = combineReducers({
  hamburgerMenuClicked,
});

export default navBar;

export const getHamburgerClick = (state) => state.hamburgerMenuClicked;
