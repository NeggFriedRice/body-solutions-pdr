import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GoogleReviews() {
  return (

    <div className="flex w-[100%] justify-center flex-wrap">
        <div className="mx-2 px-4 my-2 pb-6 w-[90vw] bg-amber-50 text-neutral-500 rounded-xl">
            <h1 className="text-[1.5rem] py-2">Our reviews</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <img src="/google-review.png" className="h-[35px] my-2"></img>
            <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 3500 }}
            pagination={{
                clickable: true,
              }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
            <SwiperSlide>
                <div>
                    <p>Stephen Warren</p>
                    <p className="text-[0.75rem]">Car was covered in severe hail damage, some dents so deep it would make you wince. The car came out looking brand new, not a single problem, I was actually lost for words when I saw it. Bill is a magician and not to mention the affordability and speed of his work, all done in a single day. Could not recommend his services and professionalism enough!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>M Pearce Warren</p>
                    <p className="text-[0.75rem]">Got a scratch or dent - do yourself a favour and see Bill. He is the best! If you’re not near the city, make the trip. Totes worth it.Honest, reliable, fast service and so lovely to deal with, without the BS that you might get from somewhere else. He really takes the time and care to get the job done right, in the time he quotes.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>Andre</p>
                    <p className="text-[0.75rem]">I took my Alfa for Bill to have a look at the dent. Previous quotes I received ranged from $350 -$ 900. Bill fixed the dent seamlessly for the price of $200. Furthermore, I dropped the car off in the morning and it was completed by 4:30 pm the same day. All other places wanted me to leave the car over two days. I would recommend Bill's service to everyone.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>Lance Stuart</p>
                    <p className="text-[0.75rem]">I went to Bill in Dentfix and gave me a good quote (huge difference compared to the others) and since it has good reviews I gave it a try. I dropped the car Thursday and it was ready the next day. It came out perfect, clean and smooth (Bill also fixed some minor dents without charge).</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>Grant Steel</p>
                    <p className="text-[0.75rem]">Bill repaired my VW Golf with great care and precision. He was easy to deal with and attended within 24hr. Brilliant service, thanks Bill!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>James McColl</p>
                    <p className="text-[0.75rem]">I don't normally leave reviews but Bill did a really good job fixing dents and scratched paint, he did it on the same day and cheaper than other places I was quoted.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>Wokka J</p>
                    <p className="text-[0.75rem]">Bill did a great job. Easy to deal with, came to my place to do it. worked a dint out of my passenger door. Excellent!! really happy with his work. Highly recommend him to anybody to use. Thanks!!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p>Neil Z</p>
                    <p className="text-[0.75rem]">I got big dent on my Range Rover Sport at the front door Body Line, to repair the door by body shop will cost $1,000 plus, went to see Bill and got the dent fixed for $150, perfect job!</p>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
