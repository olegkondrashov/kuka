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
                    <Link to='/projects'>Projekte</Link>
                </li>
                <li className='navigation__menu__item'>
                    <Link to="/concept-page">Unser Konzept</Link>
                </li>
                <li className='navigation__menu__item'>
                    <Link to="/team">Team</Link>
                </li>
                <Outlet/>
            </ul>
        </nav>
    )
}

export default Navigation;