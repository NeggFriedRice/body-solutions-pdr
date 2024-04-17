import { motion } from 'framer-motion'

export default function HeroImage() {

    const imageStyles = "xs:h-[110px] lg:h-[180px] max-xs:h-[80px] hover:scale-105 transition-all duration-300 delay-100 my-1 rounded-lg"
    const initial = { opacity: 0, y: 75 }
    const animate = { opacity: 1, y: 0 }

    return (
        <>
            <div className="flex justify-center">
                <motion.div
                key="images"
                initial={initial}
                animate={animate}
                transition={{ delay: 1, duration: 0.5, ease: "easeOut", type: 'spring', stiffness: 150}}
                className="py-2">
                    <img key="car1" src="/gallery/car-1.png" className={imageStyles}/>
                    <img key="car2" src="/gallery/car-2.png" className={imageStyles}/>
                    <img key="car3" src="/gallery/car-3.png" className={imageStyles}/>
                </motion.div>
            </div>
            <div className="flex justify-center place-items-center py-2">
                <img src="/icons/instagram.png" className="h-[48px] hover:scale-110 transition-all duration-300 delay-100"/>
                <p className="text-[1rem] lg:text-[1.5rem] hover:scale-105 transition-all duration-300 delay-100 px-2">Keep up to date with us on Instagram</p>
            </div>
        </>
    )
}
