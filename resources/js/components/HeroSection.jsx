import React from "react";
import '../../sass/hero.scss';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="hero">
      <div className="hero__topbar">
        <div className="hero__logo" onClick={() => scrollTo('top')}>
          🐾 PAWTASTIC
        </div>
        <nav className="hero__nav">
          <a className="hero__link" onClick={() => scrollTo("about")}>About Us</a>
          <a className="hero__link" onClick={() => scrollTo("appointment-form")}>Schedule a Visit</a>
        </nav>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">We care for your furry little loved ones while you’re away</h1>
        <button className="hero__button" onClick={() => scrollTo("appointment-form")}>
          Schedule a Visit
        </button>
      </div>
    </header>
  );
}
