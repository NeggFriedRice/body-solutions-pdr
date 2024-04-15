export default function Navbar() {

    const navbarStyle = "bg-setOrange px-2 rounded-full"

    return (
    <div className="flex justify-center">
        <ul className="flex gap-4 font-[Swansea] text-[1rem]">
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
