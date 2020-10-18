import { AUTHORIZATION as AUTH } from '../constants';

const initialState = {
  username: null,
  error: '',
  success: '',
  isLogIn: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        user: action.payload.name,
        isLogIn: true,
        error: ''
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        user: null,
        isLogIn: false,
        error: ''
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        success: action.msg
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.msg
      };
    default:
      return state;
  }
};
