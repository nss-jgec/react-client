import React from 'react'

const Conclave = () => {
  return (
    <main className='w-full text-left flex justify-center'>
        <div className='w-5/6'>
              <div className='flex flex-col w-fit my-3'>
                <h2 className='text-4xl text-black text-justify'>Sustainability Conclave</h2>
                <div className='h-[0.20rem] bg-yellow-300 w-[55%]'></div>
              </div>
            <div className='text-lg w-full flex flex-col items-center justify-center'>
                <div className='w-5/6 text-justify'>
                NSS JGEC is an organisation of over ___ active and dedicated members with a common goal of ‘striving to the betterment of our motherland by fully indulging ourselves in the service of mankind. It is a fraternity that aims to foster the feelings of social service among the youth and provide them with a platform where they can make a difference in society and develop one’s interpersonal and intrapersonal skills. As highlighted by the motto ' Not for me, but for the nation ', the organisation aims to produce socially responsible engineers and work for the nation's development.
                </div>
                <div className=' w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 my-16'>
                  <img className='w-full h-64 object-cover' src="./sky.jpg" alt="sky" />
                  <img className='w-full h-64 object-cover' src="./wind-mill.jpg" alt="wind" />
                  <img className='w-full h-64 object-cover' src="./water.jpg" alt="water" />
                  <img className='w-full h-64 object-cover' src="yoga.jpg" alt="yoga" />

                </div>
            </div>
        </div>
    </main>

  )
}

export default Conclave