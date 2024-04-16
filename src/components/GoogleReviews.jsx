import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GoogleReviews() {

    const gReviewStyle = "font-[SatoshiBold]"

    const sliderTextStyle = "text-[1rem] max-xs:text-[0.7rem]"

    return (

    <div className="flex w-[100%] justify-center flex-wrap">
        <div className="mx-2 px-4 my-2 pb-6 w-[90vw] lg:w-[1020px] bg-amber-50 text-neutral-500 rounded-xl">
            <h1 className="text-[1.5rem] py-2">Our reviews</h1>
            <div className="h-[1px] w-[80%] bg-slate-200"></div>
            <a href="https://www.google.com/search?q=Body+Solutions+Paintless+Dent+Repair&rlz=1C1VDKB_enAU1089AU1089&oq=body+so&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5Mg0IAhAAGIMBGLEDGIAEMg0IAxAAGIMBGLEDGIAEMg0IBBAAGIMBGLEDGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPNIBBzk0M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x6ad639e6a2a34ed1:0x3a21893b3cbe90a,1,,,," target="_blank">
            <img src="/google-review.png" className="h-[35px] my-2"></img>
            </a>
            <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 3500 }}
            pagination={{
                clickable: true,
                }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
                "--swiper-pagination-color": "#FF9800",
                "--swiper-navigation-color": "#FF9800",
                }}
            >
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Jasmine Kinsey</p>
                    <p className={sliderTextStyle}>Matt did an amazing job fixing a tricky dent. He was open and honest about the process including risk of paint damage. I'm very happy with the results and the mark is virtually invisible now. Hopefully I won't need his services again but I wouldn't hesitate to do so or recommend him. Very friendly, professional and great result!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Ida Siu</p>
                    <p className={sliderTextStyle}>Matt did an amazing job to fix some dents in our car. He is very patient with his work and very professional and charge a very reasonable pricing. Not only that, Matt was so kind to swap around his work to suit our timing. Highly recommended for anyone looking to get the paint-less dent repair for the car. Thank you so much for the great help Matt! Glad to find u!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Mark Erle</p>
                    <p className={sliderTextStyle}>Matt is an awesome bloke as well as a magician when it comes to paintless dent removal. I had about 15 annoying little dents on my aluminium bodied car and none of them were easily accessible spots to get to. Initially I was hoping to have some of them improved but he managed to make them all disappear. His experience shows and his pricing seems cheap for what he can do.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Ciri Law</p>
                    <p className={sliderTextStyle}>I am very grateful with Matt. Matt is willing to try and help me with my door panel damage that no other dent repairer wanted to do. Patience, friendly, passion and the end result is just top notch. Highly recommended. Will be passing Matt details to all my friends that seeking dent repair professional. Thanks again Matt.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>James Sgardelis</p>
                    <p className={sliderTextStyle}>Matt was absolutely awesome and worked some real magic. Perfectly explained what he was doing and how its done. Matt was even good enough to spot a few small dents around the main ones that I hadn't noticed and gave them some attention too. An all round great bloke producing high end results at a very reasonable price.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Daniel Vella</p>
                    <p className={sliderTextStyle}>Matthew was fantastic. Sent me messages to keep me updated on when he will arrive. His work is brilliant. Quoted for a door. Then saw another little dent on rear tray of the ute. Fixed that at no extra charged and touched up the paint. Would highly recommend.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Dillon Reynolds</p>
                    <p className={sliderTextStyle}>Can't recommend Matt enough - great repair work on my 350Z (photos attached of before and after) with a friendly attitude. Amazing that he comes to your house as well! Is my #1 recommendation for paintless dent removal.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Prashanth Mathew</p>
                    <p className={sliderTextStyle}>Matt came home today did show off his skills 😊... he had initially come to fix one car... but I ended up giving the second all at a reasonable cost! very professional down to earth. He took his time,  no hurry and no anger,  but did a wonderful job using (TLC) Tender loving care ! He has my  ✅ and I am happy to recommend Matthew.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Riley Harris</p>
                    <p className={sliderTextStyle}>Exceptional service and very affordable - Matt did a fantastic job! Multiple other businesses said the job was too difficult or didn't reply back to me. Thanks again Matt for the quality work provided..</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Noel Roberts</p>
                    <p className={sliderTextStyle}>Matt is amazing, he fixed a tricky dent on the tailgate of my Classic Holden HJ Premier Wagon, was punctual, helped remove tailgate window and mechanism to give access to dent, and did an excellent repair of the dent, and was very cost effective, Highly recommend Matt and will get him again if needed and will recommend to friends and family</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <p className={gReviewStyle}>Lee Hew</p>
                    <p className={sliderTextStyle}>Exceptional service and outcome! Matthew was detailed in describing the process and what to expect. The finished product was beyond my expectations. Highly recommended.</p>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
    }
