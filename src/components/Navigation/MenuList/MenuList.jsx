import React from 'react';
import { Link } from 'react-router-dom';

export const MenuList = ({ menu }) => {
  return (
    <ul>
      {menu.map(({ name, to }) => {
        return <li key={name}>{<Link to={to}>{name}</Link>}</li>;
      })}
    </ul>
  );
};
