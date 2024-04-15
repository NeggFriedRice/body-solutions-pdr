import ReactCompareImage from 'react-compare-image'

export default function OurServices() {
    return (
        <div id="ourServices" className="w-[100vw] px-2 flex justify-center">
            <div className="w-[90vw] mt-2 mb-8">
                <h1 className="text-[1.5rem] py-2">Our Services</h1>
                <div className="h-[1px] w-[80%] bg-slate-200"></div>
                <p className="py-2">With 40+ years of panel beating and 20+ years of paintless dent removal we utilise the latest in dent removal tools to tackle any hail damage repairs you require.</p>
                <ul className="list-disc px-4 py-4">
                    <li>Paintless dent removal</li>
                    <li>Hail damage repair</li>
                    <li>Paint correction, cut & polish</li>
                    <li>Mobile repair; we come to you!</li>
                </ul>
                <div className="flex justify-center">
                    <div>
                        <div className="py-4 w-[250px]">
                        <ReactCompareImage leftImage="/compare-imgs/car1-b.jpg" rightImage="/compare-imgs/car1-a.jpg"/>
                        </div>
                        <div className="py-4 w-[250px]">
                        <ReactCompareImage leftImage="/compare-imgs/car2-b.jpg" rightImage="/compare-imgs/car2-a.jpg"/>
                        </div>
                        <div className="py-4">
                        <ReactCompareImage leftImage="/compare-imgs/mercbonnet-b.png" rightImage="/compare-imgs/mercbonnet-a.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
