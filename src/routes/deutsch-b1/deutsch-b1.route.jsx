
import bg from '../../assets/deutsch-bg.jpg';

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './deutsch-b1.styles.scss'
import { useLayoutEffect } from 'react';
import Projects from '../../components/projects/projects.component';

const DeutschkursB1 = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <main className='deutschkurs-b1'>
            <Header/>
            <section className='main-section deutschkurs-b1__content'>
                <img className='deutschkurs-b1__content__bg' src={bg} alt="bg von deutschkurs-b1 page" />
                <h1>Deutsch als Fremdsprache B1 </h1>
                <div>
                    <table className='deutschkurs-b1__content__table'>
                        <tbody>
                            <tr>
                                <td>Wann?</td>
                                <td>Dienstags, Mittwochs, Donnerstags, 9:00 - 14:00</td>
                            </tr>
                            <tr>
                                <td>Dauer</td>
                                <td>4 Monate</td>
                            </tr>
                            <tr>
                                <td>Kursgebühr</td>
                                <td>Kostenfrei</td>
                            </tr>
                            <tr>
                                <td>Anmeldung</td>
                                <td>bis 14.04.2024</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='deutschkurs-b1__content__info'>
                        <p>Dieser Intensivkurs (18 Wochenstunden) ist für Teilnehmende mit guten Sprachkenntnissen, die ihr Wissen in der Grammatik, im Lesen, Sprechen und Hörverstehen vertiefen möchten. Bitte weisen Sie die vorhandenen Sprachkenntnisse bei der Anmeldung nach.
                            <br />
                            <br />
                            Am ersten Kurstag wird ein kleiner Einstufungstest durchgeführt.
                            Wir möchten Sie darauf hinweisen, dass ein Kursbesuch nur erfolgreich sein kann, wenn Sie regelmäßig Hausarbeiten machen und auch den Unterrichtsstoff zu Hause nochmal durchgehen.
                            <br />
                            <br />
                            Als Lehrwerk verwenden wir "Einfach gut! Deutsch für die Integration B1.1" (telc) und
                        </p>
                        <p>
                            "Einfach gut! Deutsch für die Integration B1.2" (telc) - für beide Lehrwerke zusammen müssen Sie mit Kosten von 25,80 Euro rechnen. 
                            <br />
                            <br /> Bitte schaffen Sie sich das Lehrwerk noch NICHT vor Kursbeginn an! Sprechen Sie uns gern an, wenn Sie die Summe nicht gleich komplett bezahlen können (innerhalb von drei Wochen nach Kursbeginn nötig), sondern lieber eine Ratenzahlung (monatsweise) wünschen!
                            <br />
                            <br />
                            Nach dem Kurs können Sie optional eine telc Deutsch A2-B1-Prüfung absolvieren (Extra-Anmeldung ist erforderlich, Kosten von 150,00 Euro), z. B. am 15.06.24 (Kurs-Nr. Z44Y34). Beachten Sie auch die Möglichkeit der Prüfungsvorbereitung (Kurs-Nr. Z44Y99).
                        </p>
                    </div>
                </div>
                <button className='kurs-submit'>Anmelden</button>
            </section>

            <Projects/>
            <Footer/>
        </main>
    )
}

export default DeutschkursB1;