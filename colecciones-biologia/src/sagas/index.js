import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
import { watchSearch } from "./search";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSearch),
  ]);
}

export default mainSaga;
