import { AUTHORIZATION as AUTH } from '../constants';

export const logIn = payload => ({
  type: AUTH.LOGIN,
  payload
});

export const logOut = payload => ({
  type: AUTH.LOGOUT,
  payload
});

export const logInFailure = msg => ({
  type: AUTH.LOGIN_FAILURE,
  msg
});

export const logInSuccess = payload => ({
  type: AUTH.LOGIN_SUCCESS,
  payload
});
