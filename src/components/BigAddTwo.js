import React from 'react'
import iPhone from '../assets/iphoneEight.svg'

export default function BigAddTwo() {
  return (
    <div>
        <div className='bg-[#2E90E5] md:flex md:bg-[#2E90E5] md:h-96 md:items-center md:justify-evenly h-[450px] md:rounded-sm md:w-full w-fit md:pr-0 pr-2.5'>
          <div className='font-poppins text-white md:w-80 md:space-y-5 md:text-left md:p-0 text-left p-5 w-96 space-y-5'>
            <p className='text-5xl font-extralight md:text-5xl md:font-thin'>iPhone 8</p>
            <p className='font-light text-xl md:text-xl md:font-extralight'>Performance and design. Taken right to the edge.</p>
            <p><span className='md:underline md:underline-offset-4 md:decoration-2 md:text-sm hover:cursor-pointer'>SHOP NOW</span></p>
          </div>
          <div className='md:mb-[0px]'>
            <img className='md:h-[384px] h-[300px] md:float-none md:bg-transparent bg-transparent mt-[-57px] md:mt-0 mr-[-25px] md:mr-0' src={iPhone} alt="" />
          </div>
        </div>
    </div>
  )
}
