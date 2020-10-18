import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '../components/Form/Form';
import * as auth from './../redux/actions';
import { checkCredentials } from '../utils';

const Home = () => {
  const [isLogIn, setIsLogin] = useState(false);

  const dispatch = useDispatch();
  let { user, error } = useSelector(state => state.authReducer);

  const updateForm = dataForm => {
    if (checkCredentials(dataForm)) {
      setIsLogin(true);
      dispatch(auth.logIn(dataForm));
    } else {
      setIsLogin(false);
      dispatch(auth.logInFailure('Invalid user data!'));
    }
  };

  const onLogout = () => {
    dispatch(auth.logOut());
    setIsLogin(false);
  };

  return (
    <div>
      <Link to="/about">About</Link>
      {isLogIn ? (
        <>
          <p>Hello: {user}</p>
          <button onClick={onLogout}>Logout</button>
        </>
      ) : (
        <Form updateForm={updateForm} error={error} />
      )}
    </div>
  );
};
export default Home;
