import { AUTHORIZATION as AUTH } from '../constants';

export const logIn = payload => ({
  type: AUTH.LOGIN,
  payload
});

export const logOut = () => ({
  type: AUTH.LOGOUT
});

export const logInFailure = msg => ({
  type: AUTH.LOGIN_FAILURE,
  msg
});

export const logInSuccess = msg => ({
  type: AUTH.LOGIN_SUCCESS,
  msg
});
