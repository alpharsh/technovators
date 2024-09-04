import './App.css'
import AboutSection from './components/About'
import Coordinators from './components/Coordinators'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Sponsors from './components/Sponsers'
import UpcomingEvents from './components/UpcomingEvents'

function App() {

  return (
    <>
    <Hero />
    <AboutSection />
    <Gallery />
    <UpcomingEvents />
    <Coordinators />
    <Sponsors />
    <Faq />
    <Footer />
    </>
  )
}

export default App
