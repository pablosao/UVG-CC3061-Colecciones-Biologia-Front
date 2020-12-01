import { call, takeEvery, put, select } from "redux-saga/effects";

import { API_BASE_URL } from "../settings";
import * as formActions from "../actions/form";
import * as types from "../types/form";

function* getCountries(action) {
  console.log("lLEGA", action);
  try {
    const response = yield call(fetch, `${API_BASE_URL}/api/countries/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const countries = yield response.json();
      yield put(formActions.countriesFound(countries));
    } else {
      yield put(formActions.countriesFound([]));
    }
  } catch {
    yield put(formActions.countriesFound([]));
  }
}

export function* watchGetCountries() {
  yield takeEvery(types.GET_COUNTRIES, getCountries);
}

function* getDepartamentos(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/api/departamentos/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const departamentos = yield response.json();
      yield put(formActions.departamentosFound(departamentos));
    } else {
      yield put(formActions.departamentosFound([]));
    }
  } catch {
    yield put(formActions.departamentosFound([]));
  }
}

export function* watchGetDepartamentos() {
  yield takeEvery(types.GET_DEPARTAMENTOS, getDepartamentos);
}

function* getMunicipios(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/api/municipios/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const municipios = yield response.json();
      yield put(formActions.municipiosFound(municipios));
    } else {
      yield put(formActions.municipiosFound([]));
    }
  } catch {
    yield put(formActions.municipiosFound([]));
  }
}

export function* watchGetMunicipios() {
  yield takeEvery(types.GET_MUNICIPIOS, getMunicipios);
}

function* getLifeStages(action) {
  try {
    const response = yield call(fetch, `${API_BASE_URL}/api/life-stage/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      const lifeStages = yield response.json();
      yield put(formActions.lifeStagesFound(lifeStages));
    } else {
      yield put(formActions.lifeStagesFound([]));
    }
  } catch {
    yield put(formActions.lifeStagesFound([]));
  }
}

export function* watchGetLifeStages() {
  yield takeEvery(types.GET_LIFE_STAGE, getLifeStages);
}

function* getOrganismConservation(action) {
  try {
    const response = yield call(
      fetch,
      `${API_BASE_URL}/api/organism-conservation/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const organismConservation = yield response.json();
      yield put(formActions.organismConservationFound(organismConservation));
    } else {
      yield put(formActions.organismConservationFound([]));
    }
  } catch {
    yield put(formActions.organismConservationFound([]));
  }
}

export function* watchGetOrganismConservation() {
  yield takeEvery(types.GET_ORGANISM_CONSERVATION, getOrganismConservation);
}

function* getRegistrationBases(action) {
  try {
    const response = yield call(
      fetch,
      `${API_BASE_URL}/api/registration-bases/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const registrationBases = yield response.json();
      yield put(formActions.registrationBaseFound(registrationBases));
    } else {
      yield put(formActions.registrationBaseFound([]));
    }
  } catch {
    yield put(formActions.registrationBaseFound([]));
  }
}

export function* watchGetRegistrationBases() {
  yield takeEvery(types.GET_REGISTRATION_BASE, getRegistrationBases);
}
