
import MainBtn from '../main-btn/main-btn.component';

import './concept.styles.scss'

const Concept = () => {
    return(
        <section className='concept'>
            <h2 className='title concept__title'>Das Konzept unseres Vereins</h2>
            <div className='concept__content'>
                <p>
                    Unser Verein setzt sich für Chancengleichheit in der Bildung ein. Wir unterstützen Kinder, Jugendliche und Erwachsene dabei, ihre schulischen und persönlichen Ziele zu erreichen. Durch individuelle Förderung, Nachhilfe und Mentoring schaffen wir eine Lernumgebung, die motiviert und stärkt. Unser Ziel ist es, Bildung für alle zugänglich zu machen und nachhaltige Lernprozesse zu fördern.
                </p>
                <div>
                    <p>
                        Wir bieten gezielte Unterstützung für Lernende aller Altersgruppen. Dazu gehören Hausaufgabenhilfe, Nachhilfe in verschiedenen Fächern, Prüfungsvorbereitungen und individuelle Lernbegleitung. Unser Netzwerk aus qualifizierten Fachkräften und Ehrenamtlichen ermöglicht eine persönliche Betreuung. Mit flexiblen Programmen helfen wir, Lernbarrieren zu überwinden und den schulischen Erfolg zu sichern.
                    </p>
                    <p>
                        Wir glauben, dass Bildung mehr ist als Schulwissen. Unser Ansatz kombiniert fachliche Unterstützung mit Motivation, Selbstbewusstsein und Lernstrategien. In kleinen Gruppen oder Einzelcoachings gehen wir auf individuelle Bedürfnisse ein und stärken eigenständiges Lernen. Durch eine vertrauensvolle Umgebung möchten wir Freude am Lernen vermitteln und langfristige Erfolge ermöglichen.
                    </p>
                </div>
            </div>
            <MainBtn link='/concept-page' name={'Lesen weiter'} />
        </section>
    )
}

export default Concept;