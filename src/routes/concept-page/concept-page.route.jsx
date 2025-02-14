import bg from '../../assets/deutsch-bg.jpg';
import team from "../../assets/bfd.webp";
import angebote from "../../assets/nachhilfe.webp";
import dance from "../../assets/dance.jpg";

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './concept-page.styles.scss'
import { useLayoutEffect, useState } from 'react';
import Projects from '../../components/projects/projects.component';
import AnmeldungPopup from '../../components/anmeldungPopUp/anmeldung-pop-up.component';
import ProjectCard from '../../components/project-card/project-card.component';

const ConceptPage = () => {

    useLayoutEffect(() => {
            window.scrollTo(0, 0)
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <main className='deutschkurse'>
            <Header />
            <section className='main-section deutschkurse__content'>
                <img className='main-section__bg deutschkurse__content__bg' src={bg} alt="Hintergrundbild von der Konzeptseite" />
                <h1 className='main-section__title'>Unser Konzept</h1>
                <div className='deutschkurse__content__info'>
                    <p>
                        Unser Konzept steht für integrative Bildung und persönliche Weiterentwicklung. Durch maßgeschneiderte Angebote fördern wir individuell die Potenziale jedes Einzelnen und schaffen so eine inklusive Lernumgebung. Mit innovativen Methoden und einem engagierten Team bieten wir nachhaltige Unterstützung – sei es in der schulischen Förderung oder im Spracherwerb. Unsere Vision ist es, gemeinsam zu wachsen und Barrieren abzubauen, um jedem den Zugang zu hochwertiger Bildung zu ermöglichen.
                    </p>
                </div>
            </section>
            <section className='deutschkurse-section'>
                <div className='concept-details'>
                    <ProjectCard 
                        img={team}
                        title={"Über uns & Mission"} 
                        content={"Wir sind ein engagiertes Team, das Bildung als Schlüssel zur persönlichen Entfaltung sieht. Unsere Mission ist es, jedem den Zugang zu hochwertigen Lernmöglichkeiten zu ermöglichen."}
                    />
                    <ProjectCard
                        img={angebote}
                        title={"Angebote & Methoden"}
                        content={"Mit interaktiven Lernformaten und praxisnahen Ansätzen gestalten wir individuelle Bildungsangebote, die den Lernprozess nachhaltig unterstützen."}
                    />
                    
                    <ProjectCard
                        img={dance}
                        title={"Erfolgsgeschichten"}
                        content={"Zahlreiche Erfolgsgeschichten belegen den nachhaltigen Effekt unseres Konzepts. Lassen Sie sich von realen Beispielen inspirieren und entdecken Sie, wie wir gemeinsam wachsen."}
                    />

                </div>
                <button onClick={handleOpenPopup}  className='kurs-submit'>Anmelden</button>
                { showPopup && <AnmeldungPopup onClose={handleClosePopup} />}
            </section>
            <Projects />
            <Footer />
        </main>
    )
}

export default ConceptPage;
