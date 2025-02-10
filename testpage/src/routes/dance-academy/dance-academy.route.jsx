import { useLayoutEffect } from 'react';
import bg from '../../assets/dance.jpg';

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './dance-academy.styles.scss';
import Projects from '../../components/projects/projects.component';

const DanceAcademy = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <main>
            <Header/>
            <section className='main-section dance-academy'>
                <img className='main-section__bg' src={bg} alt="dance-academy" />
                <h1 className='main-section__title'>
                    Dance Academy
                </h1>
                <p>
                    Unsere Dance Academy ist der perfekte Ort für alle tanzbegeisterten Kinder und Jugendlichen im Alter von 3 bis 16 Jahren! In einem motivierenden und freundlichen Vereinsumfeld lernen die Teilnehmer verschiedene Tanzstile – von Hip-Hop über Modern Dance bis zu kreativen Choreografien.

                    Unsere professionellen Trainer fördern Rhythmusgefühl, Körperbewusstsein und Teamgeist, während die Kinder spielerisch ihre tänzerischen Fähigkeiten entwickeln. Egal ob Anfänger oder Fortgeschrittene – jeder ist willkommen!

                    Melde dein Kind jetzt an und lass es die Freude am Tanzen entdecken! Bewegung, Spaß und Gemeinschaft stehen bei uns an erster Stelle.
                </p>
            </section>
            <section className='dance-academy'>
                <h2 className='main-section__title'>Tanzspaß für Kinder und Jugendliche!</h2>
                <div className='dance-academy__info'>
                    <p>Jeden Montag von 15:15 - 16:00 (außer in den Schulferien)</p>
                    <p>
                        Für alle Kinder die ihr drittes Lebensjahr vollendet haben. Pro Kind, pro Tanztag <strong>2 Euro</strong> Kostenbeitrag
                    </p>
                    <p className='mt-50'>Die Kinder müssen von einer erwachsenen Person begleitet werden.</p>
                    <p>
                        Für Fragen und Anmeldung kontaktieren Sie uns unter <a href="tel:0123456789">01234/ 5678901</a> oder <a href="mailto:">info@mustermail.de</a>
                    </p>
                </div>
            </section>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default DanceAcademy;