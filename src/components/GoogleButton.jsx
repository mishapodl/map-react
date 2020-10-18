import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import * as auth from '../redux/actions';
import { CLIENT_ID } from './../config';

export const GoogleButton = () => {
  const dispatch = useDispatch();
  const { isSignIn } = useSelector(state => state.authReducer);

  const onSuccess = () => {
    dispatch(auth.logIn('admin'));
  };
  const onFailure = () => {
    dispatch(auth.logInFailure('Invalid user data!'));
  };
  const onLogout = () => {
    dispatch(auth.logOut(''));
  };

  const button = isSignIn ? (
    <GoogleLogout
      clientId={CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onLogout}
    />
  ) : (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );

  return <>{button}</>;
};
