import React from 'react';
import bg from '../../assets/projects-bg.jpg';
import projects from '../../projects.js';
import ProjectCard from '../../components/project-card/project-card.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import './projects-page.styles.scss';

const ProjectsPage = () => {
  return (
    <>
        <Header/>
        <section className='main-section projects-page'>
            <img className='main-section__bg' src={bg} alt="" />
            <h1 className='main-section__title projects-page__title'>Vielfältige Projekte – Räume für Bildung, Kreativität und interkulturellen Austausch</h1>
            <p>
                Unser breites Projektspektrum richtet sich an Menschen aller Altersklassen, Nationalitäten und Interessen. Wir bieten ein vielfältiges Angebot, das Räume für Bildung, kreative Entfaltung und interkulturellen Austausch schafft. In einem offenen und integrativen Umfeld ermöglichen unsere Initiativen den Zugang zu neuen Technologien, kulturellem Lernen und innovativen Bildungsformaten. Dabei steht die Förderung von Selbstvertrauen, Teamgeist und individueller Entwicklung im Mittelpunkt.
            </p>

            <p>
                Unsere Projekte sind so konzipiert, dass sie Menschen mit ganz unterschiedlichen Hintergründen zusammenbringen – ob jung oder alt, ob Anfänger oder Fortgeschrittene. Wir setzen auf moderne Lehrmethoden und eine praxisnahe Vermittlung von Kompetenzen, um jedem Teilnehmer die Chance zu geben, sein Potenzial zu entfalten. Der Austausch von Ideen und Erfahrungen wird aktiv gefördert, sodass Barrieren abgebaut und Talente entdeckt werden.
            </p>

            <p>
                Erleben Sie, wie vielfältig und bereichernd unser Angebot ist und wie wir gemeinsam eine Zukunft gestalten, in der jeder – unabhängig von Herkunft oder Alter – seinen Platz findet und sich weiterentwickeln kann.
            </p>
        </section>
        <section className="projects projects-page ">
            <h2>Alle Projekte</h2>
            <div className="projects__cards projects-page__cards ">
                {projects.map(project => (
                    <ProjectCard
                    key={project.id}
                    img={project.img}
                    title={project.title}
                    content={project.content}
                    link={project.link}
                    />
                ))}
            </div>
        </section>
        <Footer/>
    </>
  );
};

export default ProjectsPage;
