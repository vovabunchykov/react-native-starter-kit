import {GET_USER_SUCCESS} from './get';

const initialState: State = {
  name: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...initialState,
        ...action.result,
      };
    default:
      return state;
  }
}
