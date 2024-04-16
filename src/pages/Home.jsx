import HeroBanner from '../components/HeroBanner'
import Map from '../components/Map'
import HeroImage from '../components/HeroImage'
import GoogleReviews from '../components/GoogleReviews'
import Contact from '../components/Contact'
import OurServices from '../components/OurServices'
import Quote from '../components/Quote'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0, y: 75, transition: { delay: 0, duration: 0.5 }}}>
        <HeroImage />
        <HeroBanner />
        <GoogleReviews />
        <Map />
        <Contact />
    </motion.div>
  )
}
