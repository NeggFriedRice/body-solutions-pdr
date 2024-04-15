import React from 'react'

export default function Navbar() {

    const navbarStyle = "bg-setOrange px-2 rounded-full"

    return (
    <div className="flex justify-center">
        <ul className="flex gap-4 font-[Swansea] text-[1rem]">
            <li className={navbarStyle}>Our Work</li>
            <li className={navbarStyle}>Contact Us</li>
            <li className={navbarStyle}>Get a Quote</li>
        </ul>
    </div>
    )
}
