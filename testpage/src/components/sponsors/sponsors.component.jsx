
import './sponsors.scss';

const Sponsors = ({sponsors}) => {

    const logosExtended = [...sponsors, ...sponsors];


    return(
        <section className='sponsors'>
            <h2>Partner</h2>
            <div className="sponsors__logos">
                <div className="sponsors__logos__item animate-scroll animate-scrollSm">
                    {logosExtended.map((logo, index) => (
                        <img
                        key={index}
                        src={logo.image}
                        alt={logo.alt}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sponsors;