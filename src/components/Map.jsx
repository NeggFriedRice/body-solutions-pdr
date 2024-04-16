export default function Map() {
  return (
    <div className="w-[100vw] px-2 flex justify-center">
        <div className="w-[90vw] lg:w-[1000px] mt-2 mb-8">
            <h1 className="text-[1.5rem] lg:text-[2rem] py-2">Our coverage</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <div className="flex justify-center py-2">
                <img src="/maps-mobile.png" className="w-[90vw] lg:w-[500px] transition-all duration-300 rounded-[50px] py-2"/>
            </div>
            <p className="lg:text-[1.25rem]">Body Solutions covers the north eastern suburbs of Melbourne including Templestowe, Doncaster, Rosanna, Eaglemont, Heidelberg, Eltham, Greensborough, Bundoora, Ivanhoe and Bulleen.</p>
        </div>
    </div>
  )
}
