
import { Link } from 'react-router-dom';
import './main-btn.styles.scss';

const MainBtn = ({link, name}) => {
    return (
        <Link className='main-button' to={link}>
            {name}
            <div></div>
        </Link>
    )
}

export default MainBtn;