

import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './motion.styles.scss'

const Motion = () => {
    return(
        <main>
            <Header/>

            <section className='main-section motion'>
                <h1>Bewegung</h1>
            </section>

            <Footer/>
        </main>
    )
}

export default Motion;