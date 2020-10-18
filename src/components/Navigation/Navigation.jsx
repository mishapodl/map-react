import React from 'react';
import { MenuList } from './MenuList/MenuList';
import './Navigation.scss';

export const Navigation = ({ menu, mobile, toggle }) => {
  return (
    <>
      <nav className={`mobile ${mobile}`}>
        <span onClick={toggle} className="close">
          <i className="fas fa-times" />
        </span>
        <MenuList menu={menu} />
      </nav>
      <div className={`menu-burger`} onClick={toggle}>
        <i className="fas fa-bars" />
      </div>
    </>
  );
};
