import React from 'react'

export default function HowItWorks() {

    const imageStyles = " h-[120px] lg:h-[220px] hover:scale-105 transition-all duration-500 delay-100 rounded-lg"

    return (
    <div id="ourServices" className="w-[100vw] px-2 flex justify-center">
    <div className="w-[90vw] lg:w-[1000px] mt-2 mb-8">
        <h1 className="text-[1.5rem] lg:text-[2rem] py-2">How Paintless Dent Repair works</h1>
        <div className="h-[1px] w-[80%] bg-slate-200"></div>
        <p className="py-2 lg:text-[1.25rem]">Paintless Dent repair (PDR) is a technique used to remove dents and dings from the body of a vehicle without the need for traditional bodywork methods like filling, sanding, and painting; which can be quite costly (time and money-wise) depending on the size and location of the repair.</p>
        <p className="py-2 lg:text-[1.25rem]">We use a range of tools including dent removal rods, knockdown tools and light reflector boards to assess and massage the metal back into its original shape from behind the dent.</p>
        <p className="py-2 lg:text-[1.25rem]">For some dents that may not be easily accessible from behind, we also make use of a glue pulling tool which involves glueing a tab to the dent and gently applying force to carefully pull the dent until it pops back into place.</p>
        <div className="flex gap-3 flex-wrap justify-center">
            <img src="/howitworks/howitworks2.jpg" className={imageStyles}/>
            <img src="/howitworks/howitworks1.jpg" className={imageStyles}/>
            <img src="/howitworks/howitworks3.jpg" className={imageStyles}/>
        </div>
        <p className="py-2 lg:text-[1.25rem]">Paintless dent repair is a cost-effective, time-saving and environmentally-friendly alternative to traditional bodywork methods, and best of all, Body Solutions can come to you!</p>
    </div>
    </div>
  )
}
