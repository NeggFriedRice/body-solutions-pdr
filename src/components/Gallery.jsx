import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Gallery() {

    const imageStyles = "max-xs:h-[95px] h-[150px] lg:h-[275px] hover:scale-105 transition-all duration-500 delay-100 rounded-[30px] max-xs:rounded-[15px] py-2 m-auto"

    return (
        <div className="w-[100vw]">
        <div className="flex justify-center">
            <motion.div
            className="py-2">
                <motion.div
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100}}
                exit={{ opacity: 0, y: 75, transition: { type: 'tween' } }}>
                <h1 className="text-[1.5rem] lg:text-[2rem] py-2">Some of our latest work</h1>
                <div className="h-[1px] w-[80%] bg-slate-200 my-2"></div>
                    <div className="flex place-items-center">
                        <a href="https://www.instagram.com/bodysolutionspdr/" target="_blank">
                            <div className="flex place-items-center py-2">
                                <img src="/icons/instagram.png" className="h-[48px] hover:scale-110 transition-all duration-300 delay-100"/>
                                <p className="text-[1rem] lg:text-[1.5rem] hover:scale-105 transition-all duration-300 delay-100 px-2">Keep up to date with us on Instagram</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 75 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 100}}
                exit={{ opacity: 0, y: 75, transition: { type: 'tween' } }}>
                <img key="car5" src="/gallery/car5.png" className={imageStyles}/>
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
            </motion.div>
        </div>
        {/* Icons by Icons8 https://icons8.com/icons/set/instagram */}
        </div>
    )   
}
