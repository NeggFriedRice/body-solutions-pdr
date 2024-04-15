import React from 'react'

export default function Navbar() {

    const navbarStyle = "bg-setOrange px-6 rounded-full"

    return (
    <div className="w-[80vw] flex justify-center">
        <ul className="flex gap-16 font-[Swansea] text-[1.5rem]">
            <li className={navbarStyle}>Our Work</li>
            <li className={navbarStyle}>Contact Us</li>
            <li className={navbarStyle}>Get a Quote</li>
        </ul>
    </div>
    )
}
