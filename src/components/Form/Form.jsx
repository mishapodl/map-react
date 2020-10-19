import React, { useState } from 'react';
import './Form.scss';

export const Form = ({ updateForm, msg, toggle, modal }) => {
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
    <div className="regisetr-modal">
      <div className={`bg-overlay ${modal ? 'show' : ''}`} />
      <div className="modal-form">
        {msg ? <p>{msg}</p> : null}
        <form action="POST" onSubmit={onSubmit}>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <div className="form-btns">
            <button>Submit</button>
            <button onClick={toggle}>Cancle</button>
          </div>
        </form>
      </div>
    </div>
  );
};
