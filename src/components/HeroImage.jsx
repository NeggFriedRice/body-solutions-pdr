export default function HeroImage() {

    const imageStyles = "h-[100px] lg:h-[150px] max-xs:h-[80px] hover:scale-105 transition-all duration-300 delay-100 my-1 rounded-lg"

    return (
        <div className="flex justify-center">
            <div className="py-2">
                <img src="/gallery/car-1.png" className={imageStyles}/>
                <img src="/gallery/car-2.png" className={imageStyles}/>
                <img src="/gallery/car-3.png" className={imageStyles}/>
            </div>
        </div>
    )
}
