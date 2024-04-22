import sponsor1 from './assets/sponsors/new/Bundesamt-fuer-Familie.png';
import sponsor2 from './assets/sponsors/new/Harzwerk.png';
import sponsor3 from './assets/sponsors/new/Kultur-macht-stark.png';
import sponsor4 from './assets/sponsors/new/Bundesverband-Soziokultur.png';
import sponsor5 from './assets/sponsors/new/kreis-jugend-pflege.png';
import sponsor6 from './assets/sponsors/new/Soziokultur-Niedersachsen.png';
import sponsor7 from './assets/sponsors/new/vhs.png';
import sponsor8 from './assets/sponsors/new/VNB.png';
import sponsor9 from './assets/sponsors/new/UH.png';

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
            link: 'https://www.bafza.de/'
        },
        {
            image: sponsor2,
            link: 'https://harzwerk.de/'
        },
        {
            image: sponsor3,
            link: 'https://www.buendnisse-fuer-bildung.de/buendnissefuerbildung/de/home/home_node.html'
        },
        {
            image: sponsor4,
            link: 'https://soziokultur.de/'
        },
        {
            image: sponsor5,
            link: 'https://www.landkreis-goslar.de/Wir-f%FCr-Sie/Verwaltung/Interaktive-Verwaltung/index.php?object=tx,3601.24993.1#OG-3601.24993-Aufklapper-04'
        },
        {
            image: sponsor6,
            link: '/'
        },
        {
            image: sponsor7,
            link: 'https://www.vhs-goslar.de/'
        },
        {
            image: sponsor8,
            link: 'https://www.vnb.de/'
        },
        {
            image: sponsor9,
            link: 'https://www.ulrikehorstmann.de'
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
