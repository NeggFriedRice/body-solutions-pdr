export default function HeroBanner() {

    return (
    <div className="flex w-[100%] justify-center flex-wrap">
        <div className="mx-2 px-4 my-2 w-[90vw] xs:w-[450px] lg:w-[500px] bg-amber-50 text-neutral-500 rounded-xl">
            <h1 className="text-[1.5rem] py-2">Three easy steps</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <p className="text-[1.25rem] max-xs:text-[1rem] my-6 flex place-items-center">
                <span className="bg-setGreen text-white h-[30px] w-[30px] text-center items-center justify-center flex rounded-[50%] ml-2 mr-2">1</span>
                Send us photos for a quote
            </p>
            <p className="text-[1.25rem] max-xs:text-[1rem] my-6 flex place-items-center">
                <span className="bg-setGreen text-white h-[30px] w-[30px] text-center items-center justify-center flex rounded-[50%] ml-2 mr-2">2</span>
                Find a time that suits you
            </p>
            <p className="text-[1.25rem] max-xs:text-[1rem] flex place-items-center">
                <span className="bg-setGreen text-white h-[30px] w-[30px] text-center items-center justify-center flex rounded-[50%] ml-2 mr-2">3</span>
                We come to you!
            </p>
            <div className="flex justify-center">
                <a href="#contact">
                <button className="mt-4 lg:mt-8 mb-4 bg-setGreen hover:bg-setGreenLight transition-all duration-300 delay-100 text-white text-[1.10rem] text-[SatoshiBold]">Get a quote!</button>
                </a>
            </div>
        </div>
        <div className="mx-2 px-4 my-2 w-[90vw] xs:w-[450px] lg:w-[500px] bg-setGreen rounded-xl">
            <h1 className="text-[1.5rem] py-2">Why choose us?</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <div className="flex place-items-center mt-4">
                <img src="/icons/calendar.png" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1.25rem] max-xs:text-[1rem]">Available 6 days a week</p>
            </div>
            <div className="flex place-items-center mt-3">
                <img src="/icons/clock.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1.25rem] max-xs:text-[1rem]">Same day turnaround<span className="text-blue-700">*</span></p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/truck.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1.25rem] max-xs:text-[1rem]">We come to you!</p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/money.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1.25rem] max-xs:text-[1rem]">Save time and money over going to a traditional bodyshop</p>
            </div>
            <div className="flex place-items-center  mt-3">
                <img src="/icons/rocket.svg" className="h-[35px] ml-2 mr-4" />
                <p className="text-[1.25rem] max-xs:text-[1rem]">38 years experience in the auto industry</p>
            </div>
            <p className="my-2 text-[0.75rem]"><span className="text-blue-700">*</span> We'll let you know if we need to come back</p>
        </div>
    </div>
  )
}
