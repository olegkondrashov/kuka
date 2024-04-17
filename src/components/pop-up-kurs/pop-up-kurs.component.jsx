import { useState } from 'react';
import './pop-up-kurs.styles.scss'

const PopUpKurs = () => {

    const [isClicked, setIsClicked] = useState(true)

    const toggleIsClicked = () => {
        setIsClicked(false)
    }

    return(
        <div style={!isClicked ? {display: 'none'} : null} className='pop-up-kurs'>
            <span onClick={toggleIsClicked}>x</span>
            <div className='pop-up-kurs__content'>
            <form id='kurs-subscribe' action="">
                        <input id='kurs' className='donate__input' type="text" placeholder='Welcher Kurs? z.B. Deutschkurs B1, Nachhilfe für mein Kind'/>
                        <input id='vorname' className='donate__input' type="text" placeholder='Vorname'/>
                        <input id='nachname' className='donate__input' type="text" placeholder='Nachname'/>
                        <input id='donate-email' className='donate__input' type="email" placeholder='E-Mail Adresse'/>
                        <input id='telefonnummer' className='donate__input' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Telefonnummer'/>
                        
                        <button className='donate__btn' type='submit'>Abschicken</button>
                    </form>
            </div>
        </div>
    )
}

export default PopUpKurs;