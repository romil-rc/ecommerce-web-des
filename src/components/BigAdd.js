import React from 'react'
import secondImage from '../assets/corousel_2.png'


export default function BigAdd() {
  return (
    <div>
        <div className='bg-[#2E90E5] md:flex md:bg-[#2E90E5] md:h-96 md:items-center md:justify-evenly h-[450px]'>
          <div className='font-poppins text-white md:w-80 md:space-y-5 md:text-left md:p-0 text-left p-5 w-96 space-y-5'>
            <p className='text-5xl font-extralight md:text-5xl md:font-thin'>iPhone 6 Plus</p>
            <p className='font-light text-xl md:text-xl md:font-extralight'>Performance and design. Taken right to the edge.</p>
            <p><span className='md:underline md:underline-offset-4 md:decoration-2 md:text-sm hover:cursor-pointer'>SHOP NOW</span></p>
          </div>
          <div className='md:mb-[45px]'>
            <img className='md:h-[430px] h-[300px] float-right md:float-none md:bg-transparent bg-transparent mt-[-57px] md:mt-0 mr-[-25px] md:mr-0' src={secondImage} alt="" />
          </div>
        </div>
    </div>
  )
}
