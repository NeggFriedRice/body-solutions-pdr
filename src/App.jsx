import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Home from "./pages/Home"
import HowItWorks from './pages/HowItWorks'
import ScrollToHashElement from './utils/ScrollToHashElement'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Heading />
      <Navbar />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
