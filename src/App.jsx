import Navbar from './components/Navbar'
import Heading from './components/Heading'
import HeroBanner from './components/HeroBanner'
import Map from './components/Map'
import HeroImage from './components/HeroImage'
import GoogleReviews from './components/GoogleReviews'
import Contact from './components/Contact'
import OurServices from './components/OurServices'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Heading />
      <Navbar />
      <HeroImage />
      <HeroBanner />
      <GoogleReviews />
      <Map />
      <Contact />
      <OurServices />
      <Footer />
    </>
  )
}

export default App
