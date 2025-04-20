import React from 'react';
import '../../sass/about.scss';
import CatImg from '../../assets/cat.jpg';
import BirdImg from '../../assets/bird.jpg';
import DogImg from '../../assets/dog.png';
import MouseImg from '../../assets/mouse.jpg';

export default function About() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about-us">
      <div className="about-us__content">
        <div className="left">
          <h2>Expert care for your furry, feathery, or scaley friend</h2>
          <p>
            We know how stressful it is to leave your pets at home alone. We’re a team of experienced animal caregivers, well connected to local veterinarians. Trust us to love them like our own, and to keep them safe and happy till you're home.
          </p>
          <button onClick={() => scrollTo("appointment-form")} className="about-us__btn">Schedule a visit</button>
        </div>

        <div className="right">
          <div className="about-us__image-item">
            <img src={CatImg} alt="Image 1" />
          </div>
          <div className="about-us__image-item">
            <img src={BirdImg} alt="Image 2" />
          </div>
          <div className="about-us__image-item">
            <img src={DogImg} alt="Image 3" />
          </div>
          <div className="about-us__image-item">
            <img src={MouseImg} alt="Image 4" />
          </div>
        </div>
      </div>
    </section>
  );
}
