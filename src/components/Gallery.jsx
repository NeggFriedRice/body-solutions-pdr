import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {

    const imageStyles = "max-xs:h-[95px] h-[150px] lg:h-[275px] hover:scale-105 transition-all duration-500 delay-100 rounded-[30px] max-xs:rounded-[15px] py-2 m-auto"

    return (
        <div className="w-[100vw]">
        <div className="flex justify-center">
            <motion.div
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 150}}
            exit={{ opacity: 0, y: 75, transition: { type: 'tween' } }}
            className="py-2">
                <h1 className="text-[1.5rem] lg:text-[2rem] py-2">Some of our latest work</h1>
                <div className="h-[1px] w-[80%] bg-slate-200"></div>
                <img key="car5" loading="lazy" src="/gallery/car5.png" className={imageStyles}/>
                <img key="car6" loading="lazy" src="/gallery/car6.png" className={imageStyles}/>
                <img key="car7" loading="lazy" src="/gallery/car7.png" className={imageStyles}/>
                <img key="car8" loading="lazy" src="/gallery/car8.png" className={imageStyles}/>
                <img key="car9" loading="lazy" src="/gallery/car9.png" className={imageStyles}/>
                <img key="car10" loading="lazy" src="/gallery/car10.png" className={imageStyles}/>
                <img key="car11" loading="lazy" src="/gallery/car11.png" className={imageStyles}/>
                <img key="car12" loading="lazy" src="/gallery/car12.png" className={imageStyles}/>
                <img key="car13" loading="lazy" src="/gallery/car13.png" className={imageStyles}/>
                <img key="car14" loading="lazy" src="/gallery/car14.png" className={imageStyles}/>
            </motion.div>
        </div>
        </div>
    )   
}
