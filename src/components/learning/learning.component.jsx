import { Outlet, Link } from 'react-router-dom';
import img1 from '../../assets/concept/concept-img.webp';
import img2 from '../../assets/concept/concept-img2.webp';
import img3 from '../../assets/concept/concept-img3.webp';

import './learning.styles.scss'
import MainBtn from '../main-btn/main-btn.component';

const Learning = () => {
    return(
        <section className="learning">
            <h1 className='learning__title'>Lernen leichter machen</h1>
            <div className='learning__content'>
                <p>
                    Das<strong> Kunstkarussell</strong>  ( KuKa) fördert die kulturelle und künstlerische Bildung von Kindern und Jugendlichen sowie den Austausch zwischen Generationen und Kulturen. In der Tätigkeit des Vereins entstand in den vergangenen Jahren ein dichtes Netzwerk aus Schulen, Vereinen und insbesondere Institutionen der Jugendpflege in Stadt und Landkreis.
                </p>

                <p>
                    Das <strong>KuKa</strong> ist als soziokultureller Bildungsträger unter anderem im Landesverband Soziokultur Niedersachsen, dem Landesverband Theaterpädagogik Niedersachsen (LaT) und im Verein Niedersächsischer Bildungsinitiativen (VNB) organisiert und als Träger der freien Jugendhilfe aktiv.
                </p>
            </div>
            <div className='learning__photos'>
                <img src={img1} alt="learning photo1" />
                <img src={img2} alt="learning photo2" />
                <img src={img3} alt="learning photo3" />
            </div>
            <MainBtn link='/learning-page' name={'Lesen weiter'} className='learning__btn'/>
            <Outlet />
        </section>
    )
}

export default Learning;