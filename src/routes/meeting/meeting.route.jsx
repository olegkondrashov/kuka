
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import './meeting.styles.scss'

const Meeting = () => {
    return(
        <main>
            <Header/>

            <section className='main-section meeting'>
                <h1>Begegnung</h1>
            </section>

            <Footer/>
        </main>
    )
}

export default Meeting;