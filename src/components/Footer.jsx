import Butterfly from '../assets/butterfly.svg'
import Email from '../assets/email.svg'
import Location from '../assets/location.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <a href='/' className='header-logo'> {/* Check a.header-logo in the index.css file for the styles */}
                    <img className='company-logo' src={Butterfly} alt='website logo' />
                    <p className='company-name__footer'>VibeStrings</p>
                </a>
                <div className='email'>
                    <img src={Email} alt="Email icon" />
                    <p className='email-paragraph'>Enquiry"VibeStrings.com</p>
                </div>
                <div className='location'>
                    <img src={Location} alt="Location icon" />
                    <p className='location-paragraph'>San Francisko</p>
                </div>
            </div>

            {/* Footer Links (Nav) */}
            <div className="footer-links">
                <div className='footer-links__pages'>
                    <h3 className="footer-pages__heading">Pages</h3>
                    <p>Pages</p>
                    <p>Collections</p>
                    <p>Support</p>
                </div>
                <div className='footer-links__product'>
                    <h3 className="footer-products__heading">Product</h3>
                    <p>Terms</p>
                    <p>Privacy Policy</p>
                    <p>Copyright</p>
                </div>
                <div className='footer-links__socials'>
                    <h3 className="footer-socials__heading">Follow Us</h3>
                    <div className='footer-socials__container'>
                        <div><img src={Facebook} alt="Facebook logo icon" /></div>
                        <div><img src={Twitter} alt="Twitter logo icon" /></div>
                        <div><img src={Instagram} alt="Instagram logo icon" /></div>
                    </div>
                </div>
            </div>
            <p className='footer-copyright'>© 2025 Copyright. VibeStrings (Berat Sakipi - justberatt)</p>
        </footer>
    )
}

export default Footer