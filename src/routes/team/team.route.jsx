import { useLayoutEffect } from 'react'
import bg from '../../assets/begegnung-bild.webp'
import img from '../../assets/mensch.jpg'
import Footer from '../../components/footer/footer.component'
import Header from '../../components/header/header.component'
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
            </section>
            <section className='team'>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Britta Achtel</h3>
                    <p>Vorstandsvorsitzende</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Thomas Pries</h3>
                    <p>Geschäftsführer</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Tom Knackstedt</h3>
                    <p>Stv. Vorsitzender</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Hosam Sabha</h3>
                    <p>Koordinator für Lernförderung</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Jacky Eckel</h3>
                    <p>Bereichsleitung Tanz</p>
                </div>
                <div className="team__card">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <h3>Ulrike H.</h3>
                    <p>Design und Layout</p>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Team