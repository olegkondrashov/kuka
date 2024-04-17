import mottoBg from '../../assets/motto-hintergrund1.jpg'
import '../../assets/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.css'

import './motto.styles.scss'
import { Link, Outlet } from 'react-router-dom'

const Motto = () => {
    return (
        <section className='main-section motto'>
            <img className='motto__bg' src={mottoBg} alt="motto hintergrund" />
            <div className='motto__buttons' >
                <div className='motto-button'>
                    <Link to="/bildung">
                        <span>Bildung</span>
                        <i className="fas fa-user-graduate" title="Bildung"></i>
                    </Link>
                    <ul>
                        <li><Link to='/learning-page' >Lernförderung</Link></li>
                        <li><Link to="/deutschkurse">Deutschkurse</Link></li>
                        <Outlet/>
                    </ul>
                </div>
                <div className='motto-button'>
                    <Link to="/bewegung">
                        <span>Bewegung</span>
                        <i className="fas fa-walking" title="Bewegung"></i>
                    </Link>
                    <ul>
                        <li><Link to="/tanzen">Dance Academy</Link></li>
                        <li><Link to="/bastelwerkstatt">Basteln</Link></li>
                        <li><Link to="/ferienprogramm">Ferienprogramm</Link></li>
                    </ul>
                </div> 
                <div className='motto-button'>
                    <Link to="/begegnung">
                        <span>Begegnung</span>
                        <i className="fas fa-people-arrows" title="Begegnung"></i>
                    </Link>
                    <ul>
                        <li><Link to="/sprachcafe">Sprachcafé</Link></li>
                        <li><Link to="/ferienprogramm">Ferienprogramm</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Motto;