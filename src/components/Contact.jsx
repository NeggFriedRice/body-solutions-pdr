export default function Contact() {
  return (
    <div className="bg-setOrange" id="contact">
        <div className="flex justify-center py-4">
            <div className="lg:w-[600px]">
                <div className="text-center">
                    <p className="text-[1.5rem] lg:text-[2rem]">Don't hesitate to call us for a quote</p>
                    <a href="tel:0417319885" className="text-[2.5rem] lg:text-[3.5rem] font-[SatoshiBlack]">0417 319 885
                    </a>
                </div>
                <div className="flex justify-center">
                <a href="tel:0417319885" className="text-[1rem] lg:text-[1.5rem] font-[SatoshiBlack]">
                    <button className="bg-setBlack hover:bg-setBlackLight transition-all duration-300 delay-100">Click to call us!</button>
                </a>
                </div>
                <div className="flex justify-center text-[1.25rem] lg:text-[2rem]">
                    <ul className="list-disc w-[75vw]">
                        <li className="py-2">Free inspection and quote via email/phone</li>
                        <li className="py-2">We will be upfront and honest with you and will not surprise you with any additional costs without consulting you first</li>
                        <li className="py-2">Obligation-free -- No fix no charge</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
