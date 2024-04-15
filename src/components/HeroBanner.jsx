import React from 'react'

export default function HeroBanner() {

    const numberStyle = "bg-setOrange px-3 py-1.5 rounded-[50%] ml-2 mr-4 text-white"

    return (
    <div className="flex w-[100%] justify-center flex-wrap">
        <div className="mx-2 px-4 my-2 w-[90vw] bg-amber-50 text-neutral-500 rounded-xl">
            <h1 className="text-[1.5rem] py-2">Three easy steps</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <p className="text-[1rem] my-6"><span className={numberStyle}>1</span>Send us photos for a quote</p>
            <p className="text-[1rem] my-6"><span className={numberStyle}>2</span> Find a time that suits you</p>
            <p className="text-[1rem] my-6"><span className={numberStyle}>3</span> We come to you!</p>
        </div>
        <div className="mx-2 px-4 my-2 w-[90vw] bg-blue-700 rounded-xl">
            <h1 className="text-[1.5rem] py-2">Why choose us?</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <div className="flex place-items-center mt-4">
                <img src="/icons/calendar.png" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1rem]">7 days a week availability</p>
            </div>
            <div className="flex place-items-center mt-3">
                <img src="/icons/clock.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1rem]">Same day turnaround<span className="text-setOrange">*</span></p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/truck.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1rem]">We come to you!</p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/money.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1rem]">Up to 80% cheaper than going to a bodyshop</p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/rocket.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1rem]">40+ years experience in panel beating</p>
            </div>
            <p className="my-2 text-[0.75rem]"><span className="text-setOrange">*</span> In most cases, for minor fixes</p>
        </div>
    </div>
  )
}
