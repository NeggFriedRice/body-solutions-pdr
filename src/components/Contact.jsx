import Quote from "./Quote";
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 75 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.5, ease: 'eastOut', type: 'spring', stiffness: 150}}
    className="bg-setBlue" id="contact">
        <div className="flex justify-center py-8">
            <div className="lg:w-[600px]">
                <div className="text-center">
                    <p className="text-[1.5rem] lg:text-[2rem]">Don't hesitate to call us for a quote</p>
                    <a href="tel:0450002826" className="text-[2.5rem] lg:text-[3.5rem] font-[SatoshiBlack]">0450 002 826
                    </a>
                </div>
                <div className="flex justify-center">
                <a href="tel:0450002826" className="text-[1rem] lg:text-[1.5rem] font-[SatoshiBlack]">
                    <button className="bg-setBlack hover:bg-setBlackLight transition-all duration-300 delay-100">Click to call us!</button>
                </a>
                </div>
                <Quote />
                <div className="flex justify-center text-[1.25rem] lg:text-[1.5rem]">
                    <ul className="list-disc w-[75vw]">
                        <li className="py-2">Get an inspection and quote via email/phone</li>
                        <li className="py-2">We'll let you know what your options are before we arrange a time to come visit you</li>
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
