import React from 'react'
import { Carousel } from 'flowbite-react'
const OurJourney = () => {
  return (
    <main className='w-full text-left flex justify-center'>
        
        <div className='w-5/6 '>
                <div className='flex flex-col w-fit my-7'>
                    <h2 className='text-4xl text-black text-justify'>Our Journey</h2>
                    <div className='h-[0.20rem] bg-yellow-300 w-[55%]'></div>
                </div>
            <div className='flex flex-col md:flex-row'>
                <div className='w-full my-5 md:my-0 md:w-1/3 px-5 text-lg text-justify'>
                    With a vision to spread social harmony across & evolve student youth as accomplished social leaders & administrators, NSS JGEC is an organization of over ___ active & dedicated members having a common goal of ‘Striving for the betterment of our motherland by fully indulging ourselves in the service of mankind’. 
                </div>
                <div className='w-full my-5 md:my-0 md:w-2/3'>
                    <div className="w-11/12 m-auto h-56 rounded-none">
                        <Carousel indicators={false}>
                        <div className="bg-orange-700 h-96">World Mental Health Day</div>
                        <div className="bg-green-500 h-96">New Year Celebration</div>
                        <div className="bg-blue-500 h-96">World Braille Day</div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className='my-5 md:h-screen flex justify-center items-center'>
                <div className='w-4/5 grid grid-cols-2 lg:grid-cols-6 gap-10'>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./WHO.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./fpai_logo.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./icmr.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./Cddep.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./makeroom.png" alt="makeroom" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./devfolio.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./IndiaDonates.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./aasra.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./niti-aayog.jpg" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./UK-govt.svg.png" alt="UK-govt" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./namaste_life.png" alt="who" />
                    </div>
                    <div className='shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5
                     rounded-sm'>
                        <img className='w-24 md:w-28 h-16 md:h-24 object-fit my-6 ' src="./EduLakes_Logo.png" alt="who" />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default OurJourney