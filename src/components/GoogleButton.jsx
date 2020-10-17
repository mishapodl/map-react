import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { CLIENT_ID } from './../config';

export const GoogleButton = () => {
  const [isSignIn, setSignIn] = useState(false);

  const onSuccess = res => {
    setSignIn(true);
    console.log('Success login: ', res);
  };

  const onFailure = res => {
    setSignIn(false);
    console.log('Failure login: ', res);
  };

  const onLogout = res => {
    setSignIn(false);
    console.log('LogOut: ', res);
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

  return (
    <>
      {button}
      <p>{isSignIn ? 'You are loged in' : 'please sing in'}</p>
    </>
  );
};
