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
      const { name } = action.payload;
      localStorage.setItem('name', name);
      return {
        ...state,
        username: name,
        isLogIn: true,
        error: ''
      };
    case AUTH.LOGOUT:
      localStorage.setItem('login', action.payload);
      return {
        ...state,
        username: null,
        isLogIn: action.payload,
        error: ''
      };
    case AUTH.LOGIN_SUCCESS:
      localStorage.setItem('login', action.payload);
      return {
        ...state,
        username: localStorage.getItem('name'),
        isLogIn: true,
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
