import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './bfd.styles.scss'

const Bfd = () => {
    return(
        <main>
            <Header/>

            <section className='main-section bfd'>
                <h1>Bundesfreiwilligendienst</h1>
            </section>

            <Footer/>
        </main>
    )
}

export default Bfd;