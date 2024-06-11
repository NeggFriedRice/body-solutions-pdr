import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Home from "./pages/Home"
import HowItWorks from './pages/HowItWorks'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ScrollToHashElement from './utils/ScrollToHashElement'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation()

  return (
    <>
      <Heading />
      <Navbar />
      <ScrollToHashElement />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname} >
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
