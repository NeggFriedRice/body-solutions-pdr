import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import HeroBanner from './components/HeroBanner'
import Map from './components/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-[80vw]">
    <Heading />
    <Navbar />
      <p>Hello</p>
    <HeroBanner />
    <Map />
    </div>
    </>
  )
}

export default App
