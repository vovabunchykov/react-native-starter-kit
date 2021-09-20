export const LOGIN: 'auth/LOGIN' = 'auth/LOGIN';
export const LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS' = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE: 'auth/LOGIN_FAILURE' = 'auth/LOGIN_FAILURE';
export const LOGIN_CLEAN: 'auth/LOGIN_CLEAN' = 'auth/LOGIN_CLEAN';
export const LOGOUT: 'auth/LOGOUT' = 'auth/LOGOUT';

const initialState: State = {
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...initialState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...initialState,
        loading: false,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.error.message,
      };

    case LOGIN_CLEAN:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export const login = (data) => {
  return {
    type: LOGIN,
    data,
  };
};

export const loginClean = () => {
  return {
    type: LOGIN_CLEAN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
