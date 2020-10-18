import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BarContacts } from '../../components/BarContacts/BarContacts';
import { routesFooter } from '../../routes';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Navigation menu={routesFooter} />
        <BarContacts showHaderSection={true} />
      </div>
      <div className="footer-copy">
        <div className="footer-conteiner">
          <div className="footer-copyright">
            &copy; unknown
            <span /> 2019
          </div>
          <div className="footer-developed-by">
            <p>
              Developed by<strong>: Michael Podlevskykh</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
