
import bg from '../../assets/deutsch-bg.jpg';

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './deutschkurse.styles.scss'
import { useLayoutEffect } from 'react';
import Projects from '../../components/projects/projects.component';

const Deutschkurse = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <main className='deutschkurse'>
            <Header/>
            <section className='main-section deutschkurse__content'>
                <img className='main-section__bg deutschkurse__content__bg' src={bg} alt="bg von deutschkurse page" />
                <h1 className='main-section__title'>Deutsch lernen und einander verstehen.</h1>
                <div className='deutschkurse__content__info'>
                    <p>
                        Du möchtest in Deutschland lernen und arbeiten? Wir sind hier, um dich dabei zu unterstützen! Unsere Deutschkurse bieten eine Vielfalt an Möglichkeiten, um deine Sprachfähigkeiten zu verbessern und dich auf den deutschen Arbeitsmarkt vorzubereiten. Egal, ob du Anfänger:in bist oder fortgeschrittene Kenntnisse hast, wir haben den passenden Kurs für dich. Von Alphabetisierungskursen bis hin zur Vorbereitung auf Zertifizierungen - wir unterstützen dich auf deinem Weg zu einem erfolgreichen Start in Deutschland.
                    </p>
                </div>
                <table className='deutschkurse__content__table'>
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
            </section>
            <section>
                <h2 className='main-section__title'>Welche Kurse haben wir?</h2>
                <a className='beispiel' rel="noreferrer"  target='_blank'  href="https://www.wbstraining.de/weiterbildungen/sprachkurse/deutsch/#c127667">Beispiel</a>

                <button className='kurs-submit'>Anmelden</button>
            </section>

            <Projects/>
            <Footer/>
        </main>
    )
}

export default Deutschkurse;