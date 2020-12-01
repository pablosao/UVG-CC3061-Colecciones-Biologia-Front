import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
import { watchSearchSuggestion, watchSearch } from "./search";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSearchSuggestion),
    fork(watchSearch),
  ]);
}

export default mainSaga;
