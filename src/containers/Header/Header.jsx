import React, { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BarContacts } from '../../components/BarContacts/BarContacts';
import { routesHeader } from '../../routes';
import { Logo } from './../../components/Logo/Logo';
import { Authorization } from './../../components/Authorization/Authorization';
import './Header.scss';

export const Header = () => {
  const [mobile, setMobile] = useState(null);

  const isToggle = () => setMobile(!mobile);

  return (
    <header>
      <div className="bg-overlay"></div>
      <div>
        <Logo />
        <div className="menu-panel">
          <Navigation 
            menu={routesHeader} 
            toggle={isToggle} 
            mobile={mobile} 
          />
          <div className="auth-panel">
            <Authorization />
          </div>
        </div>
      </div>
      <h1>Simple Map</h1>
      <BarContacts />
    </header>
  );
};
