import img1 from '../../assets/concept/concept-img.webp';
import img2 from '../../assets/concept/concept-img2.webp';
import img3 from '../../assets/concept/concept-img3.webp';
import MainBtn from '../main-btn/main-btn.component';

import './concept.styles.scss'

const Concept = () => {
    return(
        <section className='concept'>
            <h2 className='title concept__title'>Das Konzept Kunstkarussell</h2>
            <div className='concept__content'>
                <p>
                    Das <strong>Kunstkarussell</strong> (KuKa) fördert die kulturelle und künstlerische Bildung von Kindern und Jugendlichen sowie den Austausch zwischen Generationen und Kulturen. In der Tätigkeit des Vereins entstand in den vergangenen Jahren ein dichtes Netzwerk aus Schulen, Vereinen und insbesondere Institutionen der Jugendpflege in Stadt und Landkreis.
                </p>
                <div>
                    <p>
                        Das <strong>KuKa</strong> ist als soziokultureller Bildungsträger unter anderem im Landesverband Soziokultur Niedersachsen, dem <strong>Landesverband Theaterpädagogik Niedersachsen</strong> ( <strong>LaT</strong> ) und im <strong>Verein Niedersächsischer Bildungsinitiativen</strong> ( <strong>VNB</strong> ) organisiert und als Träger der freien Jugendhilfe aktiv.
                    </p>
                    <p>
                        In den Räumlichkeiten des KuKa-Hauses finden neben soziokulturellen Angeboten auch <strong>Sprachkurse für Geflüchtete</strong> statt. Vor allem Sprachkurse für geflüchtete Mütter mit Kindern unter drei Jahren. Der Schwerpunkt liegt dabei auf Kursformaten, die neben dem eigentlichen Sprachunterricht auch soziokulturelle Inhalte als Sozialraum- oder Berufsorientierung beinhalten.
                    </p>
                </div>
            </div>
            <div className='concept__photos'>
                <img src={img1} alt="concept photo1" />
                <img src={img2} alt="concept photo2" />
                <img src={img3} alt="concept photo3" />
            </div>
            <MainBtn link='/concept' name={'Lesen weiter'} />
        </section>
    )
}

export default Concept;