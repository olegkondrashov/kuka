import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import partnership from '../../assets/partnership.jpg';
import './donate.styles.scss';
import { useLayoutEffect } from 'react';

const Donate = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return(
        <main className='donate'>
            <Header/>

            <section className='donate__content'>
                <div className='donate__content__details main-section'>
                    <img src={partnership} alt="donate bg" />
                    <h1>Spenden, engagieren und Mitglied werden</h1>
                    <p>Um weiterhin besondere Projekte realisieren zu können, sind wir auf Mitgliedsbeiträge und Spenden angewiesen. Viele Menschen engagieren sich bereits ehrenamtlich bei uns und leisten somit einen gesellschaftlichen Beitrag von unschätzbarem Wert. </p>
                    <p>Wir danken an dieser Stelle herzlich allen ehrenamtlichen und angestellten Mitarbeiter*innen, Mitgliedern und Förder*innen für ihr Engagement und ihre tatkräftige, nachhaltige Unterstützung.</p>
                    <p>Der stetige weitere Ausbau unserer Angebote stellt uns vor große Herausforderungen. Wir bitten Sie deshalb, uns mit einer Spende zu unterstützen. Für Spenden ab 50,- € erhalten Sie umgehend eine Spendenquittung.</p>
                    <p>
                        Unser Spendenkonto bei der Deutschen Skatbank: <br />

                        <strong>Kunstkarussell e.V.</strong> 
                        <br />
                        <strong>IBAN: DE79 8306 5408 0005 3407 05</strong>
                    </p>
                    <p>Für eine Mitgliedschaft können Sie den Aufnahmeantrag hier herunterladen. Alternativ steht Ihnen unser Onlineantrag auf dieser Seite zur Verfügung.</p>
                    <div>
                        <p>Sie können sich gerne als Mitglied und durch aktive Mitarbeit einbringen. 
                            <br />Jede Hilfe ist willkommen!
                        </p>
                        <a className='donate__btn' href="../../assets/basteln.jpg" download='image.jpg'>Aufnahmeantrag </a>
                    </div>
                </div>
                <div className='donate__content__subscription'>
                    <h2>Onlineantrag</h2>
                    <form id='donate' action="">
                        <input id='vorname' className='donate__input' type="text" placeholder='Vorname'/>
                        <input id='nachname' className='donate__input' type="text" placeholder='Nachname'/>
                        <input id='adresse' className='donate__input' type="text" placeholder='Straße & Hausnummer'/>
                        <input id='stadt' className='donate__input' type="text" placeholder='Postleitzahl & Stadt'/>
                        <input id='donate-email' className='donate__input' type="email" placeholder='E-Mail Adresse'/>
                        <input id='telefonnummer' className='donate__input' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Telefonnummer'/>
                        <fieldset className='donate__input'>
                            <div className='donate__input__set'>
                                <div>
                                    <input id='subscription1' name='subscription' value='Einzelmitgliedschaft' type="radio" defaultChecked/>
                                    <label htmlFor="subscription1">Einzelmitgliedschaft (48,00 EUR / Jahr)</label>
                                </div>
                                <div>
                                    <input id='subscription2' name='subscription' value='Familienmitgliedschaft' type="radio" />
                                    <label htmlFor="subscription2">Familienmitgliedschaft (60,00 EUR / Jahr)</label>
                                </div>
                            </div>
                        </fieldset>
                        <input id='kontoinhaber' className='donate__input' type="text" placeholder='Kontoinhaber'/>
                        <input id='dotate-iban' className='donate__input' type="text" placeholder='IBAN'/>
                        <input id='bic' className='donate__input' type="text" placeholder='BIC'/>
                        <input id='kreditinstitut' className='donate__input' type="text" placeholder='Kreditinstitut'/>
                        <div className='donate__checkbox'>
                            <input id='accept' name='accept' type="checkbox" />
                            <label htmlFor="accept">
                                Mit der Speicherung und der Weitergabe meiner hier angegebenen Daten an andere Vereinsmitglieder zu ausschließlich satzungsgemäßen Aufgaben bin ich einverstanden. Von der Satzung habe ich Kenntnis genommen und erkenne sie bei Aufnahme verbindlich an.  Ich  ermächtige  hiermit  den  Verein  Kunstkarussell  e.V.,  Zahlungen  von  meinem  Konto  mittels  Lastschrift einzuziehen. Zugleich weise ich meinem Kreditinstitut an, die vom Kunstkarussell e.V. auf mein Konto gezogenen Lastschriften einzulösen.
                            </label>
                        </div>
                        <button className='donate__btn' type='submit'>Abschicken</button>
                    </form>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Donate;