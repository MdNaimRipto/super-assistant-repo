"use-client";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

function CompanySlider() {
    return (
        <div className='container mx-auto my-20'>
            <div className='px-4 py-16'>
                <div>
                    <h2 className='text-xl md:text-3xl font-semibold mb-2 text-center'>
                        BoloForms Is Used By
                    </h2>
                </div>
                {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className='mySwiper'>
                    <SwiperSlide className="border rounded-xl mr-6 p-4 min-w-[250px] h-[250px]">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/1.890362c3.svg" width="500" height="500" className="h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="border rounded-xl mr-6 p-4 min-w-[250px] h-[250px]">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/2.0b0df285.svg" width="500" height="500" className="h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="border rounded-xl mr-6 p-4 min-w-[250px] h-[250px]">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/3.8cf4b5f3.svg" width="500" height="500" className="h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="border rounded-xl mr-6 p-4 min-w-[250px] h-[250px]">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/4.b84353dc.svg" width="500" height="500" className="h-full w-full" />
                    </SwiperSlide>
                    <SwiperSlide className="border rounded-xl mr-6 p-4 min-w-[250px] h-[250px]">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/5.9b049047.svg" width="500" height="500" className="h-full w-full" />
                    </SwiperSlide>
                </Swiper>
                {/* </div> */}
            </div>
        </div>
    );
}

export default CompanySlider;