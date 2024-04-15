import React from 'react'

export default function Map() {
  return (
    <div className="w-[90vw] px-2">
            <h1 className="text-[1.5rem] py-2">Our coverage</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <div className="flex justify-center py-2">
                <img src="/maps-mobile.png" className="w-[90vw] transition-all duration-300 rounded-xl py-2"/>
            </div>
            <p>We service the north eastern suburbs of Melbourne including Templestowe, Doncaster, Rosanna, Eaglemont, Heidelberg, Eltham, Greensborough, Bundoora, Ivanhoe and Bulleen.</p>
    </div>
  )
}
