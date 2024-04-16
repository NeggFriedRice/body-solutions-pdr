import ReactCompareImage from 'react-compare-image'

export default function OurServices() {
    return (
        <div id="ourServices" className="w-[100vw] px-2 flex justify-center">
            <div className="w-[90vw] lg:w-[1000px] mt-2 mb-8">
                <h1 className="text-[1.5rem] lg:text-[2rem] py-2">Our Services</h1>
                <div className="h-[1px] w-[80%] bg-slate-200"></div>
                <p className="py-2 lg:text-[1.25rem]">With 40+ years of panel beating and 20+ years of paintless dent removal we at Body Solutions utilise the latest in dent removal tools to tackle any hail damage repairs you require.</p>
                <ul className="list-disc px-4 py-4 lg:text-[1.25rem]">
                    <li>Paintless dent removal</li>
                    <li>Hail damage repair</li>
                    <li>Paint correction, cut & polish</li>
                    <li>Mobile repair; we come to you!</li>
                </ul>
                <div className="flex justify-center">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        <div className="py-4 w-[250px] lg:grid-start-2">
                        <ReactCompareImage leftImage="/compare-imgs/car1-b.jpg" rightImage="/compare-imgs/car1-a.jpg"/>
                        </div>
                        <div className="py-4 w-[250px]">
                        <ReactCompareImage leftImage="/compare-imgs/car2-b.jpg" rightImage="/compare-imgs/car2-a.jpg"/>
                        </div>
                        <div className="py-4">
                            <div className="mb-4">
                                <ReactCompareImage leftImage="/compare-imgs/mercbonnet-b.png" rightImage="/compare-imgs/mercbonnet-a.png"/>
                            </div>
                            <div className="mt-4">
                                <ReactCompareImage leftImage="/compare-imgs/mercbumper-b.png" rightImage="/compare-imgs/mercbumper-a.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}
