import React, { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BarContacts } from '../../components/BarContacts/BarContacts';
import { routesHeader } from '../../routes';
import { Logo } from './../../components/Logo/Logo';
import './Header.scss';

export const Header = () => {
  const [mobile, setMobile] = useState(null);

  const isToggle = () => setMobile(!mobile);

  return (
    <header>
      <div>
        <Logo />
        <div className="menu-panel">
          <Navigation 
            menu={routesHeader} 
            toggle={isToggle} 
            mobile={mobile} 
          />
          <div className="auth-panel">
            {/* {!isAuthenticated ? (
              <>
                <RegisterModal />
                <Login />
              </>
            ) : (
              <Logout />
            )} */}
            Hello
          </div>
        </div>
      </div>
      <h1>Simple Map</h1>
      <BarContacts />
    </header>
  );
};
