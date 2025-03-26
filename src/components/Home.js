import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1>Welcome to My Portfolio</h1>
      <p>Full Stack Developer & Designer</p>
      <div className="cta-buttons">
        <button className="primary-btn">View Projects</button>
        <button className="secondary-btn">Contact Me</button>
      </div>
    </section>
  );
};

export default Home;
