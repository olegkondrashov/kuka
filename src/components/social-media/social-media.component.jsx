import './social-media.styles.scss'

const SocialMedia = () => {
    return(
        <ul className='social-media'>
                <li>
                    <a href="/facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a href="/instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                {/* <li>
                    <a href="/youtube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </li> */}
                <li>
                    <a href="mailto:info@kunstkarussell.de">
                        <i className="far fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="/whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
    )
}

export default SocialMedia;