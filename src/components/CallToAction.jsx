import GooglePlayStore from '../assets/googlePlayStore.svg'
import AppStore from '../assets/appStore.svg'
import FeedImage1 from '../assets/FeedImage1.png'
import FeedImage2 from '../assets/FeedImage2.png'

const CallToAction = () => {
    return (
        <section className="callToAction-section">
            <div className="callToAction-section__text">
                <h2 className="callToAction-section__heading">Browse and buy your <span className="favouriteGuitars">favorite guitars</span> with VibeStrings.</h2>
                <div className="callToAction-section__buttons"> 
                    {/* For now I exported them as SVGs */}
                    <div className='cta-btn'>
                        <img src={GooglePlayStore} alt="Google Play Store Badge" />
                    </div>
                    <div className='cta-btn'>
                        <img src={AppStore} alt="App Store Badge" />
                    </div>
                </div>
            </div>
            <div className="callToAction-section__images">
                <div className='cta-bg'></div>
                <div className='cta-imageHolder'>
                    <div className="cta-img1" >
                        <img src={FeedImage1} alt="Mobile View Feed Image" />
                    </div>
                    <div className="cta-img2" >
                        <img src={FeedImage2} alt="Mobile View Feed Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction