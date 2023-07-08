import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <main className='w-full flex justify-center text-left'>
        <div className="w-5/6">
            <div className='flex flex-col w-fit my-7'>
                <h2 className='text-4xl text-black text-justify'>Testimonials</h2>
                <div className='h-[0.20rem] bg-yellow-300 w-[55%]'></div>
            </div>
            <Swiper className=" overflow-hidden px-12 mb-20"
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
                <div className="w-[18.8rem] md:w-96 p-11 border border-black rounded-lg text-justify">
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam laborum quaerat deserunt, voluptatum tempora.
                    </div>
                    <div className="flex mt-3 w-full gap-5">
                    <div className=" w-12 h-12 bg-slate-500 rounded-full"></div>
                    <div>
                        <p className="text-purple-600">Lorem ipsum</p>
                        <p>Designation</p>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[18.8rem] md:w-96 p-11 border border-black rounded-lg text-justify">
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam laborum quaerat deserunt, voluptatum tempora.
                    </div>
                    <div className="flex mt-3 w-full gap-5">
                    <div className=" w-12 h-12 bg-slate-500 rounded-full"></div>
                    <div>
                        <p className="text-purple-600">Lorem ipsum</p>
                        <p>Designation</p>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[18.8rem] md:w-96 p-11 border border-black rounded-lg text-justify">
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam laborum quaerat deserunt, voluptatum tempora.
                    </div>
                    <div className="flex mt-3 w-full gap-5">
                    <div className=" w-12 h-12 bg-slate-500 rounded-full"></div>
                    <div>
                        <p className="text-purple-600">Lorem ipsum</p>
                        <p>Designation</p>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-[18.8rem] md:w-96 p-11 border border-black rounded-lg text-justify">
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam laborum quaerat deserunt, voluptatum tempora.
                    </div>
                    <div className="flex mt-3 w-full gap-5">
                    <div className=" w-12 h-12 bg-slate-500 rounded-full"></div>
                    <div>
                        <p className="text-purple-600">Lorem ipsum</p>
                        <p>Designation</p>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </main>
  )
}

export default Testimonials