import React from 'react';
import './BarContacts.scss';

export const contacts = [
  {
    name: "mail",
    href: "mailto: mishapod@gmail.com",
    icon: "icon far fa-envelope"
  },
  {
    name: "github",
    href: "https://github.com/mishapodl",
    icon: "icon fab fa-github"
  },
  {
    name: "stackoverflow",
    href: "https://ru.stackoverflow.com/users/252282/michael-podlevskykh",
    icon: "icon fab fa-stack-overflow"
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/michael-podlevskykh-574b98119/",
    icon: "icon fab fa-linkedin"
  }
];

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
