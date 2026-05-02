import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home" aria-label="Welcome to Little Lemon">
      <div className="hero__inner container">

        <div className="hero__text">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__subtitle">Chicago</h2>
          <p className="hero__description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <a
            href="#reservations"
            className="hero__button"
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </a>
        </div>

        <div className="hero__image">
          <img
            src="/food/16b32d4e-ae68-4777-ae52-b3d371d963ca_8256x5504.jpg"
            alt="Delicious Mediterranean food from Little Lemon"
            className="hero__photo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
