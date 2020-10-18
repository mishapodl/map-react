import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { routesHeader } from '../../routes';

export const Header = () => {
  return (
    <header>
      <Navigation menu={routesHeader} />
    </header>
  );
};
