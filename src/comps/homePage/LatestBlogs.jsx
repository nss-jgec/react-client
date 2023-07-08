import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Manipulation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LatestBlogs = () => {
  return (
    <main className='w-full flex justify-center text-left'>
        <div className='w-5/6'>
            <div>
                <div className='flex flex-col w-fit my-3'>
                    <h2 className='text-4xl text-black text-justify'>Latest Blogs</h2>
                    <div className='h-[0.20rem] bg-yellow-300 w-[49%]'></div>
                </div>
                <p className='px-2 md:px-5 text-justify md:text-center my-8 text-lg'>
                    With a vision to spread social harmony across & evolve student youth as accomplished social leaders & administrators.
                </p>
                <Swiper className=" overflow-hidden mb-20"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50
                }
              }}
                >
                <SwiperSlide>
                    <div className="w-[18.8rem] md:w-96 border border-black rounded-lg">
                    <img className="rounded-lg" src='./jgec-gate.jpg' alt="image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[18.8rem] md:w-96 border border-black rounded-lg">
                    <img className="rounded-lg" src='./jgec-gate.jpg' alt="image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[18.8rem] md:w-96  border border-black rounded-lg">
                    <img className="rounded-lg" src='./jgec-gate.jpg' alt="image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[18.8rem] md:w-96  border border-black rounded-lg">
                    <img className="rounded-lg" src='./jgec-gate.jpg' alt="image" />
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </main>
  )
}

export default LatestBlogs