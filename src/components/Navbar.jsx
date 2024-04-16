import { Link } from 'react-router-dom'

export default function Navbar() {

    const navbarStyle = "bg-setBlue hover:bg-setBlueLight transition-all duration-500 delay-100 px-2 lg:px-8 py-1 my-1"

    return (
        <>
    <div className="flex justify-center bg-setBlue sticky top-0">
        <ul className="flex gap-1 lg:gap-4 font-[SatoshiMedium] text-[0.75rem] lg:text-[1.25rem]">
            <Link to="/">
                <button className={navbarStyle}>Home</button>
            </Link>
            <Link to="/howitworks">
                <button className={navbarStyle}>How PDR works</button>
            </Link>
            <a href="#ourServices">
                <button className={navbarStyle}>Gallery</button>
            </a>
            <Link to="/#contact">
                <button className={navbarStyle}>Get a Quote</button>
            </Link>
        </ul>
    </div>
</>
    )
}
