import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as auth from '../../redux/actions';
import { Login } from './LogIn';
import './Authorization.scss';

export const Authorization = ({ toggle }) => {
  let { isLogIn } = useSelector(state => state.authReducer);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(auth.logOut());

  return (
    <>
      {!isLogIn ? (
        <Login toggle={toggle} />
      ) : (
        <button onClick={onLogout}>Logout</button>
      )}
    </>
  );
};
