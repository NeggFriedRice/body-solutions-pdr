import React from 'react'

export default function HeroImage() {

    const imageStyles = "h-[150px] hover:scale-105 transition-all duration-300 delay-100"

    return (
    <div className="flex flex-wrap justify-center py-2">
        <img src="/gallery/car1.png" className={imageStyles}/>
        <img src="/gallery/bill.jpg" className={imageStyles}/>
        <img src="/gallery/car2.png" className={imageStyles}/>
        <img src="/gallery/car3.png" className={imageStyles}/>
    </div>
    )
}
