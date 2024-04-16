import { motion } from 'framer-motion'

export default function Map() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 75 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.75, duration: 0.5, ease: 'eastOut', type: 'spring', stiffness: 150}}
    className="w-[100vw] px-2 flex justify-center">
        <div className="w-[90vw] lg:w-[1000px] mt-2 mb-8">
            <h1 className="text-[1.5rem] lg:text-[2rem] py-2">Our coverage</h1>
            <div className="h-[1px] w-[100%] bg-slate-200"></div>
            <div className="flex justify-center py-2">
                <img src="/maps.png" className="xs:w-[65vw] lg:w-[700px] rounded-[50px] py-2"/>
            </div>
            <p className="max-xs:text-[1rem] text-[1.25rem]">Body Solutions covers the metropolitcan Melbourne area including north east, south east and eastern suburbs.</p>
        </div>
    </motion.div>
  )
}
