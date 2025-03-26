import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>A passionate developer with experience in modern web technologies.</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>CSS/SASS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
