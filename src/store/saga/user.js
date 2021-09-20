import {takeEvery, put} from 'redux-saga/effects';

import {GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE} from '../redux/user/get';

function* user() {
  const result = {name: 'Roger'};
  try {
    // throw {message: 'Error, user'};
    yield put({type: GET_USER_SUCCESS, result});
  } catch (error) {
    yield put({type: GET_USER_FAILURE, error});
  }
}

export default function* () {
  yield takeEvery(GET_USER, user);
}
