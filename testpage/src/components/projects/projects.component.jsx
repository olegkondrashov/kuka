import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../project-card/project-card.component';
import projects from '../../projects.js';
import './projects.styles.scss';

const Projects = () => {
  // Nehme die letzten 6 Projekte (falls mehr vorhanden sind)
  const latestProjects = projects.slice(-6);

  return (
    <section className="projects">
      <h2>Unsere Angebote</h2>
      <div className="projects__cards">
        {latestProjects.map(project => (
          <ProjectCard
            key={project.id}
            img={project.img}
            title={project.title}
            content={project.content}
            link={project.link}
          />
        ))}
      </div>
      <div className="projects__link">
        <Link to="/projects" className='projects__link-btn'>
          <span>+</span>
          <span className='projects__link-btn__hover-text'>Alle Projekte ansehen</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
