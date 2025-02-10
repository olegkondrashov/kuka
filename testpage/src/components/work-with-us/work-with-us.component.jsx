import ProjectCard from '../project-card/project-card.component';

import img1 from '../../assets/nachhilfe.webp';
import img2 from '../../assets/bfd.webp';


import './work-with-us.styles.scss'

const WorkWithUs = () => {
    return(
        <section className='work-with-us'>
            <h2>Join us</h2>
            <div className='work-with-us__content'>
                <ProjectCard 
                    img = {img1}
                    title = 'Unterrichten in der Lernförderung'
                    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?'
                    link = '/nachhilfe'
                /> 
                <ProjectCard 
                    img = {img2}
                    title = 'Bundesfreiwilligendienst'
                    content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?'
                    link = '/bundesfreiwilligendienst'
                /> 
            </div>
        </section>
    )
}

export default WorkWithUs;