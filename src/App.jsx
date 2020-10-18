import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Footer, Header, About, Profile } from './containers/';
import { NotFound } from './components/NotFound';

import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
