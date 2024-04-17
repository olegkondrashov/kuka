
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './education.styles.scss'

const Education = () => {
    return(
        <main>
            <Header/>

            <section className='main-section education'>
                <h1>Bildung</h1>
                <a href="https://www.wbstraining.de/weiterbildungen/sprachkurse/deutsch/#c127667">Beispiel</a>
            </section>

            <Footer/>
        </main>
    )
}

export default Education;