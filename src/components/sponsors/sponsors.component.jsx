
import './sponsors.scss';

const Sponsors = ({sponsors}) => {


    return(
        <section className='sponsors'>
            <h2>Danke an unsere Sponsoren:</h2>
            <div className='sponsors__logos'>
                {
                    sponsors.map((item, index) => (
                        <div key={index} className='sponsors__logos__item'>
                            <a rel="noreferrer" target='_blank' href={item.link}>
                                <img src={item.image} alt={`sponsor-${index}`} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Sponsors;