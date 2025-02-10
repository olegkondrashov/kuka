import sponsor1 from './assets/sponsors/new/Bundesamt-fuer-Familie.png';
import sponsor2 from './assets/sponsors/new/Harzwerk.png';
import sponsor3 from './assets/sponsors/new/Kultur-macht-stark.png';
import sponsor4 from './assets/sponsors/new/Bundesverband-Soziokultur.png';
import sponsor5 from './assets/sponsors/new/kreis-jugend-pflege.png';
import sponsor6 from './assets/sponsors/new/Soziokultur-Niedersachsen.png';
import sponsor7 from './assets/sponsors/new/vhs.png';
import sponsor8 from './assets/sponsors/new/VNB.png';

import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import Motto from './components/motto/motto.component';
import Sponsors from './components/sponsors/sponsors.component';
import Concept from './components/concept/concept.component';
import Learning from './components/learning/learning.component';
import Projects from './components/projects/projects.component';
import WorkWithUs from './components/work-with-us/work-with-us.component';

const App = () => {

    const sponsors = [
        {
            image: sponsor1,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor2,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor3,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor4,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor5,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor6,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor7,
            alt: 'Unser Sponsor'
        },
        {
            image: sponsor8,
            alt: 'Unser Sponsor'
        }
    ]

    return (
        <main className="App">
            <Header/>

            <Motto/>
            <Learning/>
            <Projects/>
            <Concept/>
            <WorkWithUs/>
            <Sponsors sponsors={sponsors}/>

            <Footer/>
        </main>
    );
}

export default App;
