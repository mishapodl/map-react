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
        username: action.payload.name,
        isLogIn: true,
        error: ''
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        username: null,
        isLogIn: false,
        error: ''
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload,
        success: action.msg
      };
    case AUTH.LOGIN_FAILURE:
      return {
        ...state,
        username: null,
        error: action.msg
      };
    default:
      return state;
  }
};
