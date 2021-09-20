import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';

const appReducer = combineReducers({
  user,
  auth,
});

export default function (state: {}, action: {type: string}) {
  return appReducer(state, action);
}
