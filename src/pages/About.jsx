import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { countIncrement } from '../redux/actions/actions';

const About = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    return dispatch(countIncrement());
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <button onClick={increment}>Increment</button>
      <div>{counter}</div>
    </div>
  );
};
export default About;
