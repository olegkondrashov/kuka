import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import partnership from '../../assets/partnership.jpg';
import './donate.styles.scss';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

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
                    <h1>Herzlich willkommen auf unserer Spenden-Seite.</h1>
                    <p>Ihre Unterstützung ist der Schlüssel, um nachhaltige Veränderungen in unserer Gemeinschaft zu bewirken. 
                        Wir setzen uns leidenschaftlich dafür ein, Menschen in Not zu helfen, Bildungsangebote zu erweitern und soziale Projekte zu fördern – 
                        denn jeder Mensch verdient die Chance auf ein besseres Leben.
                    </p>
                    <p>Mit Ihrer Spende ermöglichen Sie uns, konkrete Hilfe zu leisten und Projekte voranzutreiben, die direkt denjenigen zugutekommen, 
                        die es am dringendsten benötigen. Ob es um die Bereitstellung von Nahrung, medizinischer Versorgung oder die Förderung von Bildungsinitiativen 
                        geht – jeder Beitrag macht einen Unterschied. Wir arbeiten mit größter Transparenz und berichten regelmäßig über die Fortschritte unserer 
                        Maßnahmen, sodass Sie jederzeit nachvollziehen können, wie Ihre Unterstützung wirkt.
                    </p>
                    <p>Gerade in schwierigen Zeiten ist es wichtig, zusammenzustehen und füreinander da zu sein. Jeder noch so kleine Beitrag zählt und bringt uns 
                        unserem Ziel einer solidarischeren und gerechteren Gesellschaft ein Stück näher. Bitte unterstützen Sie uns mit einer Spende und helfen Sie 
                        dabei, Hoffnung und Perspektiven zu schenken.
                    </p>
                    <p>
                        Unser Spendenkonto bei der Bank: <br />

                        <strong>Verein e.V.</strong> 
                        <br />
                        <strong>IBAN: DE01 2345 6789 0123 4567 89</strong>
                    </p>
                    <p>Für eine Mitgliedschaft können Sie den Aufnahmeantrag hier herunterladen. Alternativ steht Ihnen unser Onlineantrag auf dieser Seite zur Verfügung.</p>
                    <div>
                        <p>Vielen Dank für Ihr Vertrauen und Ihre Großzügigkeit – gemeinsam können wir einen positiven Wandel bewirken!</p>
                        <a className='donate__btn' href="../../assets/basteln.jpg" download='basteln.jpg' >Aufnahmeantrag </a>
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
                                    <label htmlFor="subscription1">Einzelmitgliedschaft (55,00 EUR / Jahr)</label>
                                </div>
                                <div>
                                    <input id='subscription2' name='subscription' value='Familienmitgliedschaft' type="radio" />
                                    <label htmlFor="subscription2">Familienmitgliedschaft (70,00 EUR / Jahr)</label>
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
                                Ich habe die <Link to="/datenschutz" target="_blank">Datenschutzerklärung</Link> gelesen und akzeptiere sie. Ich bin damit einverstanden, dass meine angegebenen Daten gemäß den Datenschutzbestimmungen verarbeitet werden.
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