export default function Navbar() {

    const navbarStyle = "bg-setOrange hover:bg-setOrangeLight transition-all duration-300 delay-100 px-2 lg:px-8 rounded-full shadow-xl"

    return (
    <div className="flex justify-center">
        <ul className="flex gap-4 lg:gap-[150px] font-[Swansea] text-[1rem] lg:text-[1.5rem]">
            <a href="#ourServices">
                <button className={navbarStyle}>Our services</button>
            </a>
            <a href="#contact">
                <button className={navbarStyle}>Get a Quote</button>
            </a>
        </ul>
    </div>
    )
}
