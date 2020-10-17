import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { countIncrement } from './redux/actions/actions';

const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    return dispatch(countIncrement());
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={increment}>Increment</button>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
