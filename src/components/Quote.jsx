export default function Quote() {

    const formRow = "flex justify-center"
    const labels = "max-xs:w-[85vw] lg:w-[100%] bg-white px-2 border-[1px] rounded-md border-neutral-300 py-2 my-2"

    return (
        <div className="flex justify-center py-4">
            <div className="bg-amber-50 text-neutral-500 p-4 rounded-xl w-[90vw] shadow-xl">
            <h1 className="text-[1.5rem] font-[SatoshiBlack]">Get a quick and easy online quote</h1>
            <p>We generally reply within the same day!</p>
            <form target="_blank" action="https://formsubmit.co/tomloo222@gmail.com" method="POST" encType="multipart/form-data">
                <div className="flex justify-center">
                    <div className="xs:w-[90vw] lg:w-[500px]">
                        <div className={formRow}>
                            <input type="text" name="name" className={labels} placeholder="Name" required />
                        </div>
                        <div className={formRow}>
                            <input type="email" name="email" className={labels} placeholder="Email Address" required />
                        </div>
                        <div className={formRow}>
                            <input type="mobile" name="mobile" className={labels} placeholder="Mobile number" />
                        </div>
                        <div className={formRow}>
                            <input type="suburb" name="suburb" className={labels} placeholder="Suburb" />
                        </div>
                        <div className={formRow}>
                        <textarea placeholder="Your Message" className={labels} name="message" rows="5" required></textarea>
                        </div>
                        <div className="w-[250px] max-xs:mx-2">
                            <p>Attach a photo:</p>
                            <div>
                               <input type="file" name="attachment" accept="image/png, image/jpeg" className="w-[250px]"/>
                            </div>
                        </div>
                        <div className={formRow}>
                        <button type="submit" className="my-4 px-4 lg:mt-8 bg-setOrange hover:bg-setOrangeLight transition-all duration-300 delay-100 text-white text-[1.10rem] text-[SatoshiBold]">Get my quote!</button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
      )
    }
