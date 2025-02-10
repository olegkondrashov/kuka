import Footer from "../../components/footer/footer.component"
import Header from "../../components/header/header.component"

import './datenschutz.styles.scss'


const Datenschutz = () => {
    return (
        <>
            <Header />
            <section className="privacy-policy">
                <h1 className="privacy-policy__title">Datenschutzerklärung</h1>
                <p className="privacy-policy__intro">
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                    Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen
                    (DSGVO, TMG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten
                    Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>

                <h2 className="privacy-policy__subtitle">1. Verantwortliche Stelle</h2>
                <p>
                    Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:
                </p>
                <address>
                    <strong>Ihr Unternehmen</strong><br />
                    Musterstraße 1, 12345 Musterstadt<br />
                    E-Mail: kontakt@unternehmen.de<br />
                </address>

                <h2 className="privacy-policy__subtitle">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
                <p>
                    Wir erfassen personenbezogene Daten nur, wenn Sie diese freiwillig im Rahmen einer Anfrage
                    oder Registrierung angeben. Dazu gehören z. B. Name, E-Mail-Adresse und Telefonnummer.
                </p>

                <h2 className="privacy-policy__subtitle">3. Zweck der Datenverarbeitung</h2>
                <ul className="privacy-policy__list">
                    <li>Zur Beantwortung von Anfragen</li>
                    <li>Zur Vertragserfüllung und Kundenbetreuung</li>
                    <li>Zur Verbesserung unseres Angebots</li>
                </ul>

                <h2 className="privacy-policy__subtitle">4. Speicherdauer</h2>
                <p>
                    Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies für die Erfüllung der
                    genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                </p>

                <h2 className="privacy-policy__subtitle">5. Ihre Rechte</h2>
                <p>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
                    Ihrer Daten. Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren.
                </p>

                <h2 className="privacy-policy__subtitle">6. Kontakt</h2>
                <p>
                    Wenn Sie Fragen zur Verarbeitung Ihrer Daten haben, wenden Sie sich bitte an:
                </p>
                <p>Email: <a href="mailto:datenschutz@unternehmen.de">datenschutz@unternehmen.de</a></p>

                <p className="privacy-policy__note">
                    Diese Datenschutzerklärung kann sich aufgrund gesetzlicher oder technischer Änderungen
                    jederzeit ändern. Bitte informieren Sie sich regelmäßig über Aktualisierungen.
                </p>
            </section>

            <Footer />
        </>
    )
}

export default Datenschutz;