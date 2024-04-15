import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import HeroBanner from './components/HeroBanner'
import Map from './components/Map'
import HeroImage from './components/HeroImage'
import GoogleReviews from './components/GoogleReviews'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <div className="">
      <Heading />
      <Navbar />
      <HeroImage />
      <HeroBanner />
      <GoogleReviews />
      <Map />
      <Contact />
    </div>
    </>
  )
}

export default App
