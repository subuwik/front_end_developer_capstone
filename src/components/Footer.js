import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="footer__inner container">

        <div className="footer__column">
          <div className="footer__logo" aria-label="Little Lemon Restaurant">
            <img src="/food/images.jpg" alt="Little Lemon" className="footer__logo-img" />
            <span className="footer__logo-text">Little Lemon</span>
          </div>
          <p className="footer__tagline">
            A family owned Mediterranean restaurant in Chicago.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Navigation</h3>
          <nav aria-label="Footer navigation">
            <ul className="footer__list">
              <li><a href="#home" className="footer__link">Home</a></li>
              <li><a href="#about" className="footer__link">About</a></li>
              <li><a href="#menu" className="footer__link">Menu</a></li>
              <li><a href="#reservations" className="footer__link">Reservations</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__list" aria-label="Contact information">
            <li>
              <address className="footer__address">
                123 Main Street, Chicago, IL 60601
              </address>
            </li>
            <li>
              <a href="tel:+13125550123" className="footer__link" aria-label="Call us at (312) 555-0123">
                (312) 555-0123
              </a>
            </li>
            <li>
              <a href="mailto:hello@littlelemon.com" className="footer__link" aria-label="Email us">
                hello@littlelemon.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Opening Hours</h3>
          <ul className="footer__list">
            <li>Monday – Friday: 12pm – 10pm</li>
            <li>Saturday – Sunday: 11am – 11pm</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {currentYear} Little Lemon Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
