import React from 'react'

export default function Contact() {
  return (
    <div className="bg-setOrange" id="contact">
        <div className="flex justify-center py-4">
            <div>
                <div className="text-center">
                    <p className="text-[1.5rem]">Don't hesitate to call for a quote</p>
                    <p className="text-[2.5rem] font-[SatoshiBlack]">0417 319 885</p>
                </div>
                <div className="flex justify-center text-[1.25rem]">
                    <ul className="list-disc w-[75vw]">
                        <li className="py-2">Free inspection and quote via email/phone</li>
                        <li className="py-2">We will be upfront and honest with you and will not surprise you with any additional costs without consulting you first</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
