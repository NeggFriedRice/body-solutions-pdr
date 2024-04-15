import React from 'react'

export default function Heading() {
  return (
    <div className="py-4 flex justify-center">
        <div className="w-[90vw] lg:w-[1000px] relative">
            <h1 className="font-[SatoshiBlack] text-[2rem] lg:text-[2.5rem] max-xs:text-[1.25rem]">dentfix automotive<span className="text-setOrange">.</span></h1><img src="/icons/hail-car.svg" className="h-[100px] absolute top-[-18px] right-[5px] max-xs:top-[-32px]"/>
            <div className="flex justify-between">
                <div className="">
                    <p className="text-[1rem] lg:text-[1.5rem] max-xs:text-[0.75rem] mt-[-5px]">Mobile Paintless Dent Removal</p>
                    <p className="text-[1rem] lg:text-[1.5rem] max-xs:text-[0.75rem]">Hail Repair Specialist</p>
                </div>
                <div>
                <a href="tel:0417319885">
                    <p className="text-[1rem] lg:text-[2rem] mt-[-5px] text-right">0417 319 885</p>
                </a>
                <p className="text-[1rem] lg:text-[2rem] mt-[-5px] text-right">velko@iimetro.com.au</p>
                </div>
            </div>
        </div>
    </div>
  )
}
