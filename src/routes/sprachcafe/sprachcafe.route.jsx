import Footer from "../../components/footer/footer.component"
import Header from "../../components/header/header.component"
import Projects from "../../components/projects/projects.component"

import bg from '../../assets/sprachcafe-bg.webp'

import './sprachcafe.styles.scss'
import { useLayoutEffect } from "react"

const Sprachcafe = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <main>
            <Header/>

            <section className="main-section sprachcafe">
                <img className="main-section__bg sprachcafe__bg" src={bg} alt="sprachcafe" />
                <h1 className="main-section__title">Was ist das Sprachcafè?</h1>
                <h4 className="sprachcafe__description">Das Sprachcafé ist ein Treffpunkt, bei dem Sie an verschiedenen Sprachtischen jede Woche Ihre Fremdsprachenkenntnisse vertiefen und üben. Es werden Spiele gespielt oder Sie können sich mit Ihren Kommiliton*innen über verschiedene Themen austauschen. Sie haben die Möglichkeit an den Sprachtischen hin und her zu wechseln - so kommt gewiss keine Langeweile auf!</h4>
            </section>
            <section className="sprachcafe-content">
                <h2>Was ist der Zweck von Sprachcafè?</h2>
                <div className="sprachcafe-content__points">
                    <div>
                        Sprachcafès sind lockere Treffen von Menschen, die gerne offen und unkompliziert Sprachen sprechen und andere Kulturen kennenlernen möchten. Im Mittelpunkt steht der Austausch und das Kennenlernen von Menschen aus der Region.
                    </div>
                    <div>Die Teilnahme an den Treffen ist kostenlos und ohne, dass jemand damit Geld verdienen möchte. Betreiberinnen von Sprachcafés machen dies, um Menschen aus aller Welt in unserer Stadt zusammenzubringen und dass diese Ihre Sprachfähigkeiten verbessern können. Insbesondere die Kommunikation und der Mut zu sprechen, soll sich verbessern.</div>
                    <div>Egal wie gut Dein Sprachstand, wie jung, oder wie alt Du bist. Komme vorbei, sei Du selbst und schaue Dir an, ob Dir die Treffen zusagen oder auch nicht. Ich denke, jeder hat eine Geschichte, die es sich lohnt zu erzählen.</div>
                    <div>ETWAS ÜBER HILFE BEIM AUSFÜHLLEN DER UNTERLAGEN</div>
                </div>
            </section>
            <section className="sprachcafe-content">
                <h2>
                    Wann und wo findet das Sprachcafè statt?
                </h2>
                <div className="sprachcafe-content__meet">
                    <p>Die Treffen findet jede Woche <strong>donnerstags von 15 bis 17 Uhr</strong> statt.</p>
                    <p>Treffpunkt: <strong>01234 Berlin, Musterstraße 1</strong></p>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603778018!2d13.259927460871106!3d52.506938616198475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1739202678446!5m2!1sde!2sde"  style={{border: 0, width: '80vw', height: '600px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default Sprachcafe;