import React from 'react'
import { motion } from 'framer-motion'

export default function HowItWorks() {

    const imageStyles = " h-[120px] lg:h-[220px] hover:scale-105 transition-all duration-500 delay-100 rounded-lg"

    return (
    <motion.div id="ourServices" className="w-[100vw] px-2 flex justify-center">
        <div className="w-[90vw] lg:w-[1000px] mt-2 mb-8">
            <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100}}
            exit={{ opacity: 0, y: 75, transition: { type: 'tween' } }}>
                <h1 className="text-[1.5rem] lg:text-[2rem] py-2">How Paintless Dent Repair works</h1>
                <div className="h-[1px] w-[80%] bg-slate-200"></div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100}}
            exit={{ opacity: 0, y: 75, transition: { type: 'tween' } }}>
            <p className="py-2 text-[1.25rem] lg:text-[1.5rem]">Our mobile service removes minor dents from the bodywork of your car (where your paintwork is not damaged) using specialist tools to 'turn back time'. On completion of repairs, it will be as if the dents never happened, even a body shop cannot do this.</p>
            <p className="py-2 text-[1.25rem] lg:text-[1.5rem]">We achieve this by massaging the dents out of the metalwork saving your paintwork and the inconvenience of an insurance claim or a potentially expensive and time consuming trip to a bodyshop. We cover the metropolitcan Melbourne area including north east, south east and eastern suburbs.</p>
            <p className="py-2 text-[1.25rem] lg:text-[1.5rem]">38 years experience as a trade qualified body technician and investment in the latest dent repair technology keeps us on the cutting edge, meaning we are able to repair a wider range of damage to materials such as aluminium which is now widely used in newer model cars and no longer limited to the European manufacturers.</p>
            <div className="flex gap-3 flex-wrap justify-center">
                <img src="/howitworks/howitworks2.jpg" className={imageStyles}/>
                <img src="/howitworks/howitworks1.jpg" className={imageStyles}/>
                <img src="/howitworks/howitworks3.jpg" className={imageStyles}/>
            </div>
            <p className="py-2 text-[1.25rem] lg:text-[1.55rem]">Paintless dent repair is a cost-effective, time-saving and environmentally-friendly alternative to traditional bodywork methods, and best of all, Body Solutions can come to you!</p>
            </motion.div>
        </div>
    </motion.div>
  )
}
