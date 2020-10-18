import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={'/noimage.jpg'} alt="" />
      </Link>
    </div>
  );
};
