import './App.css'
import AboutSection from './components/About'
import Coordinators from './components/Coordinators'
import Faq from './components/Faq'
import Footer from './components/Footer'
import GridGallery from './components/GridGallery'
import Hero from './components/Hero'
import Sponsors from './components/Sponsers'

function App() {

  return (
    <>
    <Hero />
    <AboutSection />
    <GridGallery />
    <Coordinators />
    <Sponsors />
    <Faq />
    <Footer />
    </>
  )
}

export default App
