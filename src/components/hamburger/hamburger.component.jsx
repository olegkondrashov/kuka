
import { useState } from 'react';
import './hamburger.styles.scss'

const Hamburger = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive)
    }
    
    return(
        <button onClick={toggleActive} className={`hamburger ${isActive ? 'active' : ''}`}>
            <span></span>
        </button>
    )
}

export default Hamburger;