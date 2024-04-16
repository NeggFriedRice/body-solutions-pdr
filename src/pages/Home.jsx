import HeroBanner from '../components/HeroBanner'
import Map from '../components/Map'
import HeroImage from '../components/HeroImage'
import GoogleReviews from '../components/GoogleReviews'
import Contact from '../components/Contact'
import OurServices from '../components/OurServices'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <>
        <HeroImage />
        <HeroBanner />
        <GoogleReviews />
        <Map />
        <Contact />
        <Quote />
    </>
  )
}
