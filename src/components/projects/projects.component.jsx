import img1 from '../../assets/nachhilfe.webp';
import img2 from '../../assets/basteln.jpg';
import img3 from '../../assets/dance.jpg';
import img4 from '../../assets/sprachcafe-bg.webp';
import img5 from '../../assets/computer.jpg';
import img6 from '../../assets/deutsch/deutsch3.jpg';

import './projects.styles.scss';
import ProjectCard from '../project-card/project-card.component';

const Projects = () => {
    const cards = 
        [
            {
                id: 1,
                img: img4,
                title: 'Sprachcafe',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/sprachcafe'
            },
            {
                id: 2,
                img: img5,
                title: 'Computer für Alle',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/computer-fuer-alle'
            },
            {
                id: 3,
                img: img6,
                title: 'Deutschkurse',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/deutschkurse'
            },
            {
                id: 4,
                img: img1,
                title: 'Lernförderung',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/learning-page'
            },
            {
                id: 5,
                img: img2,
                title: 'Bastelwerkstatt',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/bastelwerkstatt'
            },
            {
                id: 6,
                img: img3,
                title: 'Dance-Academy',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ullam maxime. Suscipit aliquid, velit quae exercitationem, assumenda sequi voluptatem animi iure necessitatibus nam deserunt cum rerum repellendus? Reprehenderit, non doloribus?',
                link: '/dance-academy'
            },
            
        ]

    return(
        <section className='projects'>
                <h2>Unsere Angebote</h2>
                <div className="projects__cards">
                    {
                        cards.map(item => (
                            <ProjectCard
                                key={item.id}
                                img={item.img} 
                                title={item.title}
                                content={item.content}
                                link={item.link}
                            />
                        ))
                    }
                </div>
            </section>
    )
}

export default Projects;