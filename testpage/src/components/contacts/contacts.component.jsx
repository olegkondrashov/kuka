import './contacts.styles.scss'

const Contacts = () => {
    return(
        <div className='contacts'>
            <h2>Kontakt</h2>
            <div>
                <h4>Postanschrift:</h4>

                <p>
                    Verein e.V. <br />
                    Musterstraße 7 <br />
                    12345 Musterstadt <br />
                </p>

                <h4>E-Mail:</h4> 
                <a href="mailto:">info@mustermail.de</a>

                <h4>Telefon:</h4>
                <a href="tel:012345678901">0 12 34 / 56 78 901 </a>
            </div>
        </div>
    )
}

export default Contacts;