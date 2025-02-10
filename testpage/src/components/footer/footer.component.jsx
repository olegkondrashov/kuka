import Contacts from '../contacts/contacts.component';
import Schedule from '../schedule/schedule.component';
import SocialMedia from '../social-media/social-media.component';
import Subscribe from '../subscribe/subscribe.component';

import './footer.styles.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <SocialMedia/>
            <Contacts/>
            <Schedule/>
            <Subscribe/>
        </footer>
    )
}

export default Footer;