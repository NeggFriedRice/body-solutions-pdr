import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Home from "./pages/Home"
import HowItWorks from './pages/HowItWorks'
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
      <AnimatePresence location={location} key={location.key}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
