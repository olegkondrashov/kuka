import { useLayoutEffect } from "react";
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

import img from '../../assets/kinder.webp'
import basteln from '../../assets/basteln.jpg'
import sprachcafe from '../../assets/sprachcafe-bg.webp'
import tanzen from '../../assets/bewegung-bild.webp'

import Projects from '../../components/projects/projects.component';
import EventSection from '../../components/event-section/event-section.component';

import './event.styles.scss'

const Event = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return(
        <main>
            <Header/>

            <section className='main-section event'>
                <img className='main-section__bg event__bg ' src={img} alt="event bg" />
                <h1 className='main-section__title'>Aktuelles</h1>
                <p>Jede Woche machen wir etwas...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magni accusamus tenetur sequi possimus a ab culpa molestiae odio est inventore ut expedita nobis nam ipsam, deleniti quo dignissimos neque.</p>
            </section>

            <EventSection 
                link='/tanzen'
                img={tanzen} 
                title='Tanzen'
                date='Montags 15:00 - 16:00'
                cost={'2€'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima, magni omnis labore sint magnam enim ullam? Necessitatibus incidunt tenetur tempore autem voluptatibus dolor, numquam, error ducimus explicabo nemo perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et amet, excepturi quae maiores delectus totam in harum esse placeat tenetur adipisci alias at obcaecati. Deserunt rerum odit quod ratione?'}
            />
            <EventSection 
                link='/bastelwerkstatt'
                img={basteln} 
                title='Bastelwerkstatt'
                date='Donnerstags 15:00 - 17:00'
                cost={'2€'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima, magni omnis labore sint magnam enim ullam? Necessitatibus incidunt tenetur tempore autem voluptatibus dolor, numquam, error ducimus explicabo nemo perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et amet, excepturi quae maiores delectus totam in harum esse placeat tenetur adipisci alias at obcaecati. Deserunt rerum odit quod ratione?'}
            />
            <EventSection 
                link='/sprachcafe'
                img={sprachcafe} 
                title='Sprachcafè'
                date='Montags 15:00 - 16:00'
                cost={'Kostenfrei'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima, magni omnis labore sint magnam enim ullam? Necessitatibus incidunt tenetur tempore autem voluptatibus dolor, numquam, error ducimus explicabo nemo perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et amet, excepturi quae maiores delectus totam in harum esse placeat tenetur adipisci alias at obcaecati. Deserunt rerum odit quod ratione?'}
            />
            <EventSection 
                link='/sommerferien'
                img={img} 
                title='Sommerferien'
                date='24.06.2024 - 03.08.2024 8:00 - 20:00'
                cost={'2€'}
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima, magni omnis labore sint magnam enim ullam? Necessitatibus incidunt tenetur tempore autem voluptatibus dolor, numquam, error ducimus explicabo nemo perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa et amet, excepturi quae maiores delectus totam in harum esse placeat tenetur adipisci alias at obcaecati. Deserunt rerum odit quod ratione?'}
            />
            <Projects/>
            <Footer/>
        </main>
    )
}

export default Event;