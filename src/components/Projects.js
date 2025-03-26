import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Description 1' },
    { title: 'Project 2', description: 'Description 2' },
    { title: 'Project 3', description: 'Description 3' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
