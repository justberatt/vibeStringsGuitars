import Butterfly from '../assets/Butterfly.svg'

const Header = () => {
    return (
        <header>
            <a href='/' className='header-logo'>
                <img className='company-logo' src={Butterfly} alt='website logo' />
                <p className='company-name'>VibeStrings</p>
            </a>
        </header>
    )
}

export default Header