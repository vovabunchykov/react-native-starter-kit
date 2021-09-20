export const GET_USER: 'USER/GET_USER' = 'USER/GET_USER';
export const GET_USER_SUCCESS: 'USER/GET_USER_SUCCESS' =
  'USER/GET_USER_SUCCESS';
export const GET_USER_FAILURE: 'USER/GET_USER_FAILURE' =
  'USER/GET_USER_FAILURE';

const initialState = {
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...initialState,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...initialState,
        loading: false,
        error: '',
      };

    case GET_USER_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.error.message,
      };

    default:
      return state;
  }
}

export const getUserData = () => {
  return {
    type: GET_USER,
  };
};
