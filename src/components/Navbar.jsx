import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {

    const navbarStyle = "bg-setBlue hover:bg-setBlueLight transition-all duration-500 delay-100 px-2 lg:px-8 py-1 my-1"

    return (
        <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="flex justify-center bg-setBlue sticky top-0">
        <ul className="flex justify-between w-[90vw] lg:w-[800px] lg:gap-4 font-[SatoshiMedium] max-xs:text-[0.8rem] xs:text-[1rem] md:text-[1.25rem] lg:text-[1.55rem]">
            <Link to="/">
                <button className={navbarStyle}>Home</button>
            </Link>
            <Link to="/howitworks">
                <button className={navbarStyle}>How PDR works</button>
            </Link>
            <Link to="/gallery">
                <button className={navbarStyle}>Gallery</button>
            </Link>
            <Link to="/#contact">
                <button className={navbarStyle}>Get a Quote</button>
            </Link>
        </ul>
    </motion.div>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.75 }}
    className="flex justify-center bg-setGreen py-1">
        <p className="max-xs:text-[1.25rem] xs:text-[1.5rem] lg:text-[2rem] text-center">Melbourne's leading mobile paintless dent repair specialist</p>
    </motion.div>
    </>
    )
}
