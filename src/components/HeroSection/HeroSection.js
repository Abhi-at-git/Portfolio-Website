import React from 'react';
import './style.css';
import image from '../../assets/images/self.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h4>Hello!</h4>
        <h1>
          I'm <span>Abhinav</span>,<br /> Web Developer, <br /> React Native Developer, <br /> Data Analyser
        </h1>
        <p className="testimonial">
        "Abhinav is a skilled and creative developer with a passion for delivering exceptional results. Always reliable and detail-oriented, and a true asset to any project."
        </p>
        <div className="buttons">
          <button className="portfolio-btn">Portfolio</button>
          <button className="hire-me-btn">Hire me</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Abhinav" />
      </div>
    </div>
  );
};

export default HeroSection;
