import { useLayoutEffect } from 'react'
import bg from '../../assets/begegnung-bild.webp'
import Footer from '../../components/footer/footer.component'
import Header from '../../components/header/header.component'

import person1 from '../../assets/team/person1.jpg'
import person2 from '../../assets/team/person2.jpg'
import person3 from '../../assets/team/person3.jpg'
import person4 from '../../assets/team/person4.jpg'
import person5 from '../../assets/team/person5.jpg'





import './team.styles.scss'

const Team = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return(
        <main>
            <Header/>
            <section className='main-section'>
                <img className='main-section__bg' src={bg} alt="" />
                <h1 className='main-section__title'>Unser Team</h1>
                <p>
                    Unser Team ist das Herzstück unserer Organisation. Wir setzen uns aus engagierten Fachleuten zusammen, die in ihren jeweiligen Bereichen fundierte Erfahrungen und vielfältige Kompetenzen mitbringen. Durch unsere interdisziplinäre Zusammenarbeit vereinen wir unterschiedliche Perspektiven und entwickeln innovative Ansätze, um den Herausforderungen unserer Zeit wirkungsvoll zu begegnen.
                </p>
                <p>
                    Jeder Einzelne in unserem Team zeichnet sich durch Kreativität, Zuverlässigkeit und ein starkes Verantwortungsbewusstsein aus. Uns verbindet die gemeinsame Vision, positive Veränderungen in der Gesellschaft zu bewirken und dabei stets den Menschen in den Mittelpunkt zu stellen. Offene Kommunikation und gegenseitige Unterstützung sind für uns nicht nur Schlagworte, sondern gelebte Praxis, die den Zusammenhalt stärkt und den kreativen Austausch fördert.
                </p>
                <p>
                    Unabhängig von Alter, Herkunft oder Fachgebiet glauben wir daran, dass Vielfalt der Schlüssel zum Erfolg ist. Unsere dynamische Mischung aus jungen Talenten und erfahrenen Experten ermöglicht es uns, flexibel auf neue Herausforderungen zu reagieren und innovative Projekte voranzubringen. Mit Engagement, Leidenschaft und Teamgeist setzen wir uns Tag für Tag dafür ein, ein Umfeld zu schaffen, in dem jeder sein volles Potenzial entfalten kann. Gemeinsam gestalten wir eine Zukunft, in der alle die Chance haben, erfolgreich zu sein.
                </p>
            </section>
            <section className='team'>
                <div className="team__card">
                    <div>
                        <img src={person1} alt="" />
                    </div>
                    <h3>Anna Becker</h3>
                    <p>Vorstandsvorsitzende</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={person2} alt="" />
                    </div>
                    <h3>Maximilian Fischer</h3>
                    <p>Geschäftsführer</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={person3} alt="" />
                    </div>
                    <h3>Laura Schmitt</h3>
                    <p>Stv. Vorsitzende</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={person4} alt="" />
                    </div>
                    <h3>Lukas Weber</h3>
                    <p>Koordinator für Lernförderung</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={person5} alt="" />
                    </div>
                    <h3>Sophie Müller</h3>
                    <p>Bereichsleitung Tanz</p>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Team