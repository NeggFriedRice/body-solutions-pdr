import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import HeroBanner from './components/HeroBanner'
import Map from './components/Map'
import HeroImage from './components/HeroImage'

function App() {

  return (
    <>
    <div className="w-[90vw]">
    <Heading />
    <Navbar />
    <HeroImage />
    <HeroBanner />
    <Map />
    </div>
    </>
  )
}

export default App
