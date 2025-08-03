import Guitar from '../assets/guitar.png'
import Butterfly from '../assets/Butterfly.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-text'>
                <h1 className="hero-text__heading">Browse top quality <span className='guitars'>Guitars</span> online</h1>
                <p className="hero-text__paragraph">Explore 50k+ latest collections of branded guitars online with VibeStrings.</p>
            </div>
            <div className='hero-images'>
                <img className='hero-images__guitar' src={Guitar} alt="An ocean-blue electric guitar leaning against a Vox speaker with another Vox speaker further back, all on the grass, on the shore of what looks like an ocean." />
                <div className="hero-images__logo__container">
                    <img className="hero-images__logo" src={Butterfly} />
                </div>
            </div>
        </section>
    )
}

export default Hero