import mottoBg from '../../assets/motto-hintergrund.webp'
import '../../assets/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.css'

import './motto.styles.scss'

const Motto = () => {
    return (
        <section className='main-section motto'>
            <img className='motto__bg' src={mottoBg} alt="motto hintergrund" />
            <div className='motto__title' >
                <h1>Lernen. Integrieren. Wachsen.</h1>
                <h4>Individuelle Lernförderung und Unterstützung für Menschen aus dem Ausland</h4>
            </div>
        </section>
    )
}

export default Motto;