
import { Link } from 'react-router-dom';
import './project-card.styles.scss';

const ProjectCard = ({img, title, content, link}) => {
    return(
        <div className="offer-card">
            <div className='offer-card__top'>
                <img src={img} alt="learning" />
                <h3>{title}</h3>
            </div>
            <div className='offer-card__bottom'>
                <p>{content}</p>
                {link && <Link to={link}>weiterlesen</Link>}
            </div>
        </div>
    )
}

export default ProjectCard;