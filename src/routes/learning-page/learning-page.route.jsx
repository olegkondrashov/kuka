import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import img from '../../assets/motto-hintergrund.jpg';
import img1 from '../../assets/concept/concept-img.webp';
import img2 from '../../assets/concept/concept-img2.webp';
import img3 from '../../assets/concept/concept-img3.webp';
import { useLayoutEffect, useState } from "react";

import './learning-page.styles.scss'
import PopUpKurs from "../../components/pop-up-kurs/pop-up-kurs.component";
import Projects from "../../components/projects/projects.component";

const LearningPage = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [isClicked, setIsClicked] = useState(false)

    const toggleIsClicked = () => {
        setIsClicked(!isClicked)
    }

    return(
        <main className="learning-page">
            {isClicked ? <PopUpKurs/> : null}
            <Header/>
            <section className="main-section learning-page__content">
                <h1 className="main-section__title learning-page__title">Lernen leichter machen</h1>
                <img className="main-section__bg learning-page__content__bg" src={img} alt="pic" />
                <div className="learning-page__content__text">
                    <p>
                        Das Kunstkarussell (KuKa) fördert die kulturelle und künstlerische Bildung von Kindern und Jugendlichen sowie den Austausch zwischen Generationen und Kulturen. In der Tätigkeit des Vereins entstand in den vergangenen Jahren ein dichtes Netzwerk aus Schulen, Vereinen und insbesondere Institutionen der Jugendpflege in Stadt und Landkreis.
                    </p>
                    <p>
                        Das KuKa ist als soziokultureller Bildungsträger unter anderem im Landesverband Soziokultur Niedersachsen, dem Landesverband Theaterpädagogik Niedersachsen (LaT) und im Verein Niedersächsischer Bildungsinitiativen (VNB) organisiert und als Träger der freien Jugendhilfe aktiv.
                    </p>
                    <p>
                        Uns geht es weniger um künstlerische Perfektion als darum, durch musische Impulse wesentlich zu einer ganzheitlichen Persönlichkeitsentfaltung beizutragen. Wenn wir mit allen Sinnen lernen, wenn alle Begabungen gleichermaßen angeregt und gefördert werden, können wir uns ausgewogen entfalten. In diesem Sinne verstehen wir unsere Angebote wie Tanzen und Trommeln, Singen und Musizieren, Theaterspielen und Jonglieren nicht als Einüben künstlerischer Fähigkeiten, sondern als ein notwendiges Gegengewicht zu den intellektuellen Anforderungen in Schulunterricht, Uni, Ausbildung, Beruf und Alltag. Die in diesem Zusammenhang entdeckten und entwickelten Talente der Einzelnen können daraufhin in Sportverein, Musikschule oder Kunstakademie tiefer gehend verfeinert und gefördert werden.
                    </p>
                </div>
            </section>
            <section className="learning-page__content">
                <h2 className="main-section__title">Some title</h2>
                <p>
                    Der Verein hat eine sehr heterogene Altersstruktur. Zur Zeit sind etwa 40 Mitglieder aktiv tätig und bringen sich in der Arbeit in unterschiedlichen Bereichen ein. Viele arbeiten als Dozent*innen für Angebote an Schulen, in externer Projektarbeit mit verschiedenen Partnerorganisationen und an unterschiedlichen Orten im Landkreis Goslar und Umgebung, einige helfen bei dem Betrieb des Begegnungshauses mit handwerklichen und administrativen Kenntnissen sowie auch in der Kinderbetreuung bei Sprachkursen für geflüchtete Mütter mit Kindern unter drei Jahren. Dieses weit gefächerte ehrenamtliche Engagement ist unabdingbar für die erfolgreiche Tätigkeit des KuKa.
                </p>
                <div className='learning-page__photos'>
                    <img src={img1} alt="learning photo1" />
                    <img src={img2} alt="learning photo2" />
                    <img src={img3} alt="learning photo3" />
                </div>
                <p>
                    In den Räumlichkeiten des KuKa-Hauses finden neben soziokulturellen Angeboten auch Sprachkurse für Geflüchtete statt. Vor allem Sprachkurse für geflüchtete Mütter mit Kindern unter drei Jahren. Der Schwerpunkt liegt dabei auf Kursformaten, die neben dem eigentlichen Sprachunterricht auch soziokulturelle Inhalte als Sozialraum- oder Berufsorientierung beinhalten.
                </p>
                <p>
                    Weltoffenheit und interkulturelle Toleranz sind die Grundpfeiler unserer Pädagogik. Im Dozent*innenteam begegnen sich Menschen verschiedenster Nationen und unterrichten mit großem Engagement die unterschiedlichsten Fächer.  Das Kunstkarussell sorgt durch Seminare und Fortbildungen für das nötige pädagogische Rüstzeug und sichert eine stetige Qualitätsentwicklung. 
                </p>
            </section>
            <section className='learning-page__photos'>
                <img src={img1} alt="learning photo1" />
                <img src={img2} alt="learning photo2" />
                <img src={img3} alt="learning photo3" />
            </section>
            <button onClick={toggleIsClicked} className='kurs-submit'>Anmelden</button>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default LearningPage;