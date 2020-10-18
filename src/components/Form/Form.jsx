import React, { useState } from 'react';
import './Form.scss';

export const Form = ({ updateForm, error }) => {
  const initInputState = {
    name: '',
    password: ''
  };
  const [dataForm, setDataForm] = useState(initInputState);
  const { name, password } = dataForm;

  const onChange = ({ target }) =>
    setDataForm({
      ...dataForm,
      [target.name]: target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    updateForm(dataForm);
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form action="POST" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
