import React from 'react';
import './BarContacts.scss';
import { contacts } from './../../routes';

export const BarContacts = ({ showHaderSection }) => {
  return (
    <section className="contact-information">
      {showHaderSection && (
        <header>
          <h3>Contact information</h3>
        </header>
      )}
      <ul>
        {contacts.map(({ name, icon, href }) => (
          <li key={name}>
            <a href={href}>
              <i className={icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
