import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation = ({ menu }) => (
  <nav>
    <ul>
      {menu.map(({ name, to }) => {
        return <li key={name}>{<Link to={to}>{name}</Link>}</li>;
      })}
    </ul>
  </nav>
);
