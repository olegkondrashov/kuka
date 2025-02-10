
import { useState } from 'react';
// import logo from '../../logo/logo.png';
import Hamburger from '../hamburger/hamburger.component';
import MainBtn from '../main-btn/main-btn.component';
import Navigation from '../navigation/navigation.component';

import './header.styles.scss'

const Header = () => {
    
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    return (
        <header className='header'>
            <a className='header__logo' href="/">
                {/* <img className='logo' src={logo} alt="logo" /> */}
                <h2>Logo</h2>
                <div className="infinity4">
                    <div className="circle one"></div>
                    <div className="circle two"></div>
                    <div className="circle three"></div>
                </div>
            </a>
            <Navigation className={`${isActive ? 'navigation-mobile' : ''}`}/>
            <div className='donate'>
                <MainBtn name={'Spenden'} link={'/donate'} />
            </div>
            <div className='header__menu' onClick={toggleActive}>
                <Hamburger  />
            </div>
        </header>
    )
}

export default Header;