

import { Link } from 'react-router-dom';
import './event-section.styles.scss'

const EventSection = ({img, title, date, cost, text, link}) => {
    return(
        <section>
            <section className='event-section'>
                <Link to={link}>
                    <img className='event-section__img' src={img} alt={title} />
                    <h2 className='event-section__title'>{title}</h2>
                    <h4> {date} </h4>
                    <h4>Eintritt: {cost}</h4>
                    <p> {text} </p>
                </Link>
            </section>
        </section>
    )
}

export default EventSection;