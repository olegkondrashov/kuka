import { Outlet } from 'react-router-dom';
import img1 from '../../assets/concept/concept-img.webp';
import img2 from '../../assets/concept/concept-img2.webp';
import img3 from '../../assets/concept/concept-img3.webp';

import './learning.styles.scss'
import MainBtn from '../main-btn/main-btn.component';

const Learning = () => {
    return(
        <section className="learning">
            <h2 className='learning__title'>Gemeinsam wachsen – Bildung & Integration</h2>
            <div className='learning__content'>
                <p>
                    Unser <strong>Verein</strong> setzt sich für die individuelle Förderung von Kindern, Jugendlichen und Erwachsenen ein. Der Verein unterstützt Lernende durch gezielte Bildungsangebote, Nachhilfe und Mentoring-Programme, um schulische und persönliche Erfolge zu ermöglichen. Dabei wird eng mit Schulen, Bildungseinrichtungen und anderen gemeinnützigen Organisationen zusammengearbeitet.
                </p>

                <p>
                    Als engagierter Bildungsträger ist der <strong>Verein</strong> in verschiedenen Bildungsnetzwerken aktiv und bietet Unterstützung für Menschen mit unterschiedlichen Lernbedürfnissen. Ziel ist es, Bildung für alle zugänglich zu machen und individuelle Potenziale bestmöglich zu entfalten.
                </p>
            </div>


            <div className='learning__photos'>
                <img src={img1} alt="learning photo1" />
                <img src={img2} alt="learning photo2" />
                <img src={img3} alt="learning photo3" />
            </div>
            <MainBtn link='/bildung' name={'Lesen weiter'} className='learning__btn'/>
            <Outlet />
        </section>
    )
}

export default Learning;