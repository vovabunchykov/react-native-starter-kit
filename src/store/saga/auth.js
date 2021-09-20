import {takeEvery, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../api';
import {reset} from '../../Navigation';
import {AUTH_TOKEN_KEY, AUTH_ID_KEY} from '../../constants/data';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../redux/auth/login';

function* login(data) {
  try {
    const result = yield api().auth.login(data.data);
    console.log('LOGIN, result - ', result);
    yield AsyncStorage.setItem(AUTH_TOKEN_KEY, result.data.token);
    yield AsyncStorage.setItem(AUTH_ID_KEY, JSON.stringify(1));
    api().setToken(result.data.token);
    reset('Main');
    yield put({type: LOGIN_SUCCESS});
  } catch (error) {
    yield put({type: LOGIN_FAILURE, error});
  }
}

function* logout() {
  try {
    yield AsyncStorage.clear();
    api().deleteToken();
    reset('Welcome');
  } catch (err) {
    console.log(err);
  }
}

export default function* () {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  const authToken = yield AsyncStorage.getItem(AUTH_TOKEN_KEY);
  if (authToken) {
    api().setToken(authToken);
    reset('Main');
  } else {
    reset('Welcome');
  }
}
