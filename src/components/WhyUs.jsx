import Browsing from '../assets/browsing.svg'
import Delivery from '../assets/delivery.svg'
import Payments from '../assets/payments.svg'

const WhyUs = () => {
    return (
        <section className="whyUs-section">
            <h2 className="whyUs-section__heading">Why try <span className="vibeStrings">VibeStrings</span></h2>
            <div className="whyUs-section__cards">
                <div className="whyUs-card">
                    <div className="whyUs-card__icon">
                        <img src={Browsing} alt="browsing icon" />
                    </div>
                    <div className='whyUs-card__text'>
                        <h3 className='whyUs-card__heading'>Smooth Browsing</h3>
                        <p className='whyUs-card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="whyUs-card">
                    <div className="whyUs-card__icon">
                        <img src={Delivery} alt="browsing icon" />
                    </div>
                    <div className='whyUs-card__text'>
                        <h3 className='whyUs-card__heading'>Easy Delivery</h3>
                        <p className='whyUs-card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="whyUs-card">
                    <div className="whyUs-card__icon">
                        <img src={Payments} alt="browsing icon" />
                    </div>
                    <div className='whyUs-card__text'>
                        <h3 className='whyUs-card__heading'>Swift Payments</h3>
                        <p className='whyUs-card__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs