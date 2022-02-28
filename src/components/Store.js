import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import BigAddTwo from './BigAddTwo';
import StoreSeller from './StoreSeller';

export default function Store() {

  function valuetext(value) {
    return `${value}`;
  }  

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='md:flex flex font-poppins text-[#33A0FF] md:bg-[#F6F7F8] bg-[#F6F7F8] md:p-3 p-3 md:justify-center justify-center md:space-x-4 space-x-2 md:text-lg text-lg md:font-semibold font-semibold'>
      <p className='cursor-pointer'>Store</p><p className='text-[#C1C8CE]'>/</p><p className='cursor-pointer'>Accessories</p>
    </div>
    <div class="md:flex md:p-10 font-poppins md:space-x-10">
        <div class="md:w-1/4 md:space-y-7 md:block hidden">
            <div className='md:bg-[#F6F7F8] md:space-y-4 md:p-3 md:rounded-md md:drop-shadow-lg'>
                <p className='md:font-semibold md:text-lg'>ACCESORIES</p>
                <ul className='md:space-y-4'>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Apple Car<p>2</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Air port & wireless<p>48</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Cables & Docks<p>14</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Cases & Films<p>15</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Charging Devices<p>23</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Connected home<p>1</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Headphones<p>95</p></li>
                </ul>
            </div>
            <div className='md:bg-[#F6F7F8] md:space-y-4 md:p-3 md:rounded-md md:drop-shadow-lg'>
              <p className='md:font-semibold md:text-lg'>PRICES</p>
              <div className='md:flex md:justify-between'><p>Ranger:</p><p className='md:pr-3'>$ {value[0]} - $ {value[1]}</p></div>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </div>
            <div className='md:bg-[#F6F7F8] md:space-y-4 md:p-3 md:rounded-md md:drop-shadow-lg md:pb-5'>
              <p className='md:font-semibold md:text-lg'>COLOR</p>
              <div className='md:flex md:justify-between'>
                <div className='md:h-5 md:w-5 md:bg-[#006CFF] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
                <div className='md:h-5 md:w-5 md:bg-[#FC3E39] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
                <div className='md:h-5 md:w-5 md:bg-[#171717] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
                <div className='md:h-5 md:w-5 md:bg-[#FFF600] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
                <div className='md:h-5 md:w-5 md:bg-[#FF00B4] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
                <div className='md:h-5 md:w-5 md:bg-[#EFDFDF] md:rounded-full hover:cursor-pointer hover:scale-150 ease-linear duration-150' />
              </div>
            </div>
            <div className='md:bg-[#F6F7F8] md:space-y-4 md:p-3 md:rounded-md md:drop-shadow-lg'>
                <p className='md:font-semibold md:text-lg'>BRAND</p>
                <ul className='md:space-y-4'>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Apple<p>2</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>LG<p>48</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Samsung<p>14</p></li>
                    <li className='md:flex md:justify-between hover:text-[#33A0FF] hover:cursor-pointer ease-linear duration-200'>Siemens<p>15</p></li>
                </ul>
            </div>
            <div className='md:bg-[#F6F7F8] md:p-3 md:rounded-md md:drop-shadow-lg md:text-center md:py-5 hover:scale-110 hover:cursor-pointer ease-linear duration-200'>
              MORE
            </div>
        </div>
        <div class="w-3/4 md:space-y-7 space-y-7">
          <div>
            <BigAddTwo />
          </div>
          <div>
            <StoreSeller />
          </div>
          <div className='md:flex flex font-poppins text-black md:bg-[#F6F7F8] bg-[#F6F7F8] md:justify-center justify-center md:space-x-4 space-x-4 md:text-lg text-2xl md:font-semibold font-semibold w-full md:ml-0 ml-12'>
            <div className='md:px-5 px-1 md:py-2 text-black md:bg-transparent hover:bg-black hover:text-white ease-linear duration-150 cursor-pointer'>1</div>
            <div className='md:px-5 px-1 md:py-2 text-black md:bg-transparent hover:bg-black hover:text-white ease-linear duration-150 cursor-pointer'>2</div>
            <div className='md:px-5 px-1 md:py-2 text-black md:bg-transparent hover:bg-black hover:text-white ease-linear duration-150 cursor-pointer'>3</div>
            <div className='md:px-5 px-1 md:py-2 text-black md:bg-transparent hover:bg-black hover:text-white ease-linear duration-150 cursor-pointer'>4</div>
            <div className='md:px-5 px-1 md:py-2 text-black md:bg-transparent hover:bg-black hover:text-white ease-linear duration-150 cursor-pointer'>5</div>
          </div>
        </div>
    </div>
    </>
  )
}
// check for material ui range slider