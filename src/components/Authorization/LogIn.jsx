import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import * as auth from '../../redux/actions';
import { checkCredentials } from '../../utils';

export const Login = () => {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const { error } = useSelector(state => state.authReducer);

  const updateForm = dataForm => {
    if (checkCredentials(dataForm)) {
      dispatch(auth.logIn(dataForm));
    } else {
      dispatch(auth.logInFailure('Invalid user data!'));
    }
  };

  return (
    <>
      <button onClick={() => setModal(true)}>Login</button>
      {modal && (
        <Form
          updateForm={updateForm}
          msg={error}
          toggle={() => setModal(false)}
        />
      )}
    </>
  );
};
