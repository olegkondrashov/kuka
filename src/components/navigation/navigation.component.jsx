import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss'

const Navigation = ({className}) => {
    return (
        <nav className={`navigation ${className}`}>
            <ul className='navigation__menu'>
                <li className='navigation__menu__item'>
                    <Link to="/aktuelles">Aktuelles</Link>
                </li>
                <li className='navigation__menu__item'>
                    <Link to='/learning-page'>Lernförderung</Link>
                </li>
                <li className='navigation__menu__item'>
                    {/* <Link to="/sprachcafe">Sprachcafé</Link> */}
                    <a href="/integrationsarbeit">Integrationsarbeit</a>
                    <span className="material-symbols-outlined">expand_more</span>
                    <ul className='dropdown-menu'>
                        <li className='dropdown-menu__item'><Link to="/sprachcafe">Sprachcafé</Link></li>
                    </ul>
                </li>
                {/* <li className='navigation__menu__item'>
                    <a href="/soziokulturelle_angebote">Soziokulturelle Angebote</a>
                    <span className="material-symbols-outlined">expand_more</span>
                    <ul className='dropdown-menu'>
                        <li className='dropdown-menu__item'><a href="/dance_academy">Dance Academy</a></li>
                        <li className='dropdown-menu__item'><a href="/bastelwerkstatt">Bastelwerkstatt</a></li>
                        <li className='dropdown-menu__item'><a href="/lesungen_und_konzerte">Lesungen und Konzerte</a></li>
                        <li className='dropdown-menu__item'><a href="/musik_und_jamsessions">Musik und Jamsessions</a></li>
                        <li className='dropdown-menu__item'><a href="/yoga">Yoga</a></li>
                        <li className='dropdown-menu__item'><a href="/zeichnen_und_malen">Zeichnen und Malen</a></li>
                    </ul>
                </li> */}
                <li className='navigation__menu__item'>
                    <Link to="/deutschkurse">Deutschkurse</Link>
                </li>
                <li className='navigation__menu__item'>
                    <Link to="/team">Unser Team</Link>
                </li>
                <li className='navigation__menu__item'>
                    <a href="/jobs">Join Us</a>
                </li>
                <Outlet/>
            </ul>
        </nav>
    )
}

export default Navigation;