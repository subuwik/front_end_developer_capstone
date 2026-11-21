import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#home" className="header__logo">
          <img
            src="/lemon-logo.svg"
            alt="Little Lemon logo"
            className="logo__lemon"
          />
          <div className="logo__text">
            <span className="logo__name">Little Lemon</span>
            <span className="logo__city">Chicago</span>
          </div>
        </a>

        <button
          className="header__hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="nav__list">
            <li><a href="#home" className="nav__link" onClick={closeMenu}>Home</a></li>
            <li><a href="#menu" className="nav__link" onClick={closeMenu}>Menu</a></li>
            <li><a href="#reservations" className="nav__link" onClick={closeMenu}>Reservations</a></li>
            <li><a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
