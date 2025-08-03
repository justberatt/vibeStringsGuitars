import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import WhyUs from './components/WhyUs.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'
import Models from './components/Models.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('brands')
  const [selectedBrand, setSelectedBrand] = useState(null)
  // const [selectedModel, setSelectedModel] = useState(null)

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage('models');
  }

  // const handleModelClick = (model) => {
  //   setSelectedModel(model);
  //   setCurrentPage('details');
  // }

  const handleBackClick = () => {
    if (currentPage === 'details') {
      setCurrentPage('models');
    } else if (currentPage === 'models') {
      setSelectedBrand(null)
      setCurrentPage('brands');
    }
  }

  return (
    <>
      <Header />
      {selectedBrand ?
        (
          <Models
            brand={selectedBrand}
            onBack={handleBackClick} 
          />
        )
        :
        (
          <>
            <Hero />
            <Brands onSelect={handleBrandClick} />
            <WhyUs />
            <CallToAction />
          </>
        )
      }
      <Footer />
    </>
  )
}

export default App
