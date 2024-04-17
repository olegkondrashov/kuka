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
                    Dance-Academy
                </h1>
                <p>
                    Die Dance Academy wird von einer ADTV- und IHK-geprüften Tanzpädagogin geleitet. Mit mehr als 10 Jahren Berufserfahrung ist sie bestrebt, den Teilnehmenden mehr als ein gutes Tanzerlebnis zu bieten. Die hauptsächliche Zielgruppe sind Kinder, Jugendliche und junge Erwachsene. Es werden nicht nur Tanztechniken vermitteln, sondern auch die ganzheitliche Entwicklung in anderen Bereichen gefördert. Wir freuen uns darauf, alle Interessierte in der Dance-Academy willkommen zu heißen und dabei zu helfen, die tänzerischen Fähigkeiten und Ausdrucksformen zu entfalten. Kontaktieren Sie uns gerne für weitere Informationen oder vereinbaren Sie eine Probestunde.
                </p>
            </section>
            <section>
                <h2 className='main-section__title'>KuKa Kindertanzen</h2>
                <div className='dance-academy__info'>
                    <p>Jeden Montag von 15:15 - 16:00 (außer in den niedersachsischen Schulferien)</p>
                    <p>
                        Für alle Kinder die ihr drittes Lebensjahr vollendet haben. Pro Kind, pro Tanztag <strong>2 Euro</strong> Kostenbeitrag
                    </p>
                    <p className='mt-50'>Die Kinder müssen von einer erwachsenen Person begleitet werden.</p>
                    <p>
                        Für Fragen und Anmeldung kontaktieren Sie uns unter <a href="tel:053225533277">05322/5533277</a> oder <a href="mailto:info@kunstkarussell.de">info@kunstkarussell.de</a>
                    </p>
                </div>
            </section>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default DanceAcademy;