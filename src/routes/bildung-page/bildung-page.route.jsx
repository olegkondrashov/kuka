import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import img from '../../assets/motto-hintergrund.webp';
import img1 from '../../assets/concept/concept-img.webp';
import img2 from '../../assets/concept/concept-img2.webp';
import img3 from '../../assets/concept/concept-img3.webp';
import { useLayoutEffect, useState } from "react";

import './bildung-page.styles.scss'
import Projects from "../../components/projects/projects.component";
import AnmeldungPopup from "../../components/anmeldungPopUp/anmeldung-pop-up.component";

const BildungPage = () => {

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

    return(
        <main className="bildung">
            <Header/>
            <section className="main-section bildung__content">
                <h1 className="main-section__title bildung__title">Gemeinsam wachsen – Bildung & Integration</h1>
                <img className="main-section__bg bildung__content__bg" src={img} alt="pic" />
                <div className="bildung__content__text">
                    <p>
                        Bildung und Integration sind zwei zentrale Bausteine für den gesellschaftlichen Zusammenhalt und die individuelle Entfaltung. In einer Welt, die durch Vielfalt und kulturelle Unterschiede geprägt ist, bilden sie das Fundament für ein respektvolles Miteinander und nachhaltige Entwicklung. Schulen, Hochschulen und Weiterbildungseinrichtungen tragen maßgeblich dazu bei, Menschen unterschiedlicher Herkunft und Lebenswege zusammenzuführen und ihre Potenziale zu fördern.
                    </p>
                    <p>
                        Unser Ziel ist es, eine inklusive Umgebung zu schaffen, in der sich alle Menschen als Teil eines Ganzen fühlen und gemeinsam an einer positiven Zukunft arbeiten können. Lassen Sie uns diesen Weg gemeinsam gehen und mit offenen Armen jeden willkommen heißen – denn in der Vielfalt liegt unsere größte Stärke.
                    </p>
                </div>
            </section>
            <section className="bildung__content">
                <h2 className="main-section__title">Nachhilfe</h2>
                <p>
                    Unsere engagierte Nachhilfe unterstützt Schülerinnen und Schüler individuell, um Lerninhalte verständlich zu vermitteln. Durch gezielten Einzel- oder Gruppenunterricht helfen wir, Wissenslücken zu schließen und die Lernmotivation zu stärken. Unsere erfahrenen Lehrkräfte begleiten die Kinder kompetent und empathisch, sodass sie selbstbewusst den Schulalltag meistern können. Gemeinsam legen wir den Grundstein für nachhaltigen schulischen Erfolg.
                </p>
                <div className='bildung__photos'>
                    <img src={img1} alt="learning photo1" />
                    <img src={img2} alt="learning photo2" />
                    <img src={img3} alt="learning photo3" />
                </div>
                <h2 className="main-section__title">Deutschkurse</h2>
                <p>
                    Unsere Deutschkurse für Anfänger bieten einen praxisnahen Einstieg in die deutsche Sprache. Mit interaktiven Unterrichtseinheiten und abwechslungsreichen Übungen lernen Sie die Grundlagen der Grammatik, des Wortschatzes und der Aussprache. Unsere erfahrenen Lehrkräfte unterstützen Sie individuell, um Sprachbarrieren abzubauen und Selbstvertrauen aufzubauen. Starten Sie jetzt Ihren Weg zu mehr Sprachkompetenz und öffnen Sie Türen zu neuen Möglichkeiten.
                </p>
            </section>
            <section className='bildung__photos'>
                <img src={img1} alt="learning photo1" />
                <img src={img2} alt="learning photo2" />
                <img src={img3} alt="learning photo3" />
            </section>
            <button onClick={handleOpenPopup} className='kurs-submit'>Anmelden</button>
            { showPopup && <AnmeldungPopup onClose={handleClosePopup} />}
            <Projects/>
            <Footer/>
        </main>
    )
}

export default BildungPage;