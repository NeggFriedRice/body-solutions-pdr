import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Heading() {
  return (
    <header className="py-4 flex justify-center">
      <div className="relative">
      <Link to="/">
      <img src="/animated-logo.svg" className="absolute max-xs:w-[144px] w-[163px] top-[0.5px] lg:w-[480px] lg:top-[1px] lg:left-[1px]"/>
      </Link>
        <motion.div 
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 1, delay: 2.2, type: 'spring', ease: 'easeInOut'}}
        className="w-[90vw] lg:w-[1000px] flex justify-between">

            <Link to="/">
            <img src="/bs-logo.png" className="w-[170px] max-xs:w-[150px] lg:w-[500px]"/>
            </Link>
                <div>
                <a href="tel:0450002826">
                    <p className="text-[1rem] lg:text-[1.5rem] max-xs:text-[0.75rem] text-right">0450 002 826</p>
                </a>
                <p className="text-[1rem] lg:text-[1.5rem] max-xs:text-[0.75rem] text-right">bodysolutionspdr@gmail.com</p>
                </div>
        </motion.div>
        </div>
    </header>
  )
}
