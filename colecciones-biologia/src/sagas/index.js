import { fork, all } from "redux-saga/effects";

import { watchLoginStarted, watchRefreshTokenStarted } from "./auth";
import { watchSearchSuggestion, watchSearch } from "./search";
import {
  watchGetCountries,
  watchGetDepartamentos,
  watchGetMunicipios,
  watchGetLifeStages,
  watchGetOrganismConservation,
  watchGetRegistrationBases,
} from "./form";

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSearchSuggestion),
    fork(watchSearch),
    fork(watchGetCountries),
    fork(watchGetDepartamentos),
    fork(watchGetMunicipios),
    fork(watchGetLifeStages),
    fork(watchGetOrganismConservation),
    fork(watchGetRegistrationBases),
  ]);
}

export default mainSaga;
