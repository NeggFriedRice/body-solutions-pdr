import { useState } from 'react'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import HeroBanner from './components/HeroBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading />
    <Navbar />
      <p>Hello</p>
    <HeroBanner />
    </>
  )
}

export default App
