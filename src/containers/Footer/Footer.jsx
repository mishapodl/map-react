import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { routesFooter } from '../../routes';

export const Footer = () => {
  return (
    <footer>
      <Navigation menu={routesFooter}/>
    </footer>
  );
};
