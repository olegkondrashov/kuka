import './contacts.styles.scss'

const Contacts = () => {
    return(
        <div className='contacts'>
            <h2>Kontakt</h2>
            <div>
                <h4>Postanschrift:</h4>

                <p>
                    Kunstkarussell e.V. <br />
                    Herzog-Wilhelm-Straße 12A <br />
                    38667 Bad Harzburg <br />
                </p>

                <h4>E-Mail:</h4> 
                <a href="mailto:info@kunstkarussell.de">info@kunstkarussell.de</a>

                <h4>Telefon:</h4>
                <a href="tel:053225533277">0 53 22 / 55 33 277</a>
            </div>
        </div>
    )
}

export default Contacts;