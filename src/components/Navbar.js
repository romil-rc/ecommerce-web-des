import React from 'react'
import { useState } from 'react'
import StoreDiv from './StoreDiv';

export default function Navbar() {

  let Links = [
    {},
    {name: 'HOME', links:''},
    {name: 'STORE', links:'store'},
    {name: 'IPHONE', links:'iphone'},
    {name: 'IPAD', links:'ipad'},
    {name: 'MACBOOK', links:'macbook'},
    {name: 'ACCESSORIES', links:'accessories'}
  ]

  
  
  const show = (e) => {
    let storeDiv = document.getElementById('hidden');
    storeDiv.classList.remove('hidden');
    storeDiv.classList.add('block');
    e.preventDefault();
  }
  const hide =(e) => {
    let storeDiv = document.getElementById('hidden');
    setTimeout(() => {
      storeDiv.classList.remove('block');
      storeDiv.classList.add('hidden');
    }, 15000);
    e.preventDefault();
  }
  const showthis = (e) => {
    let storeDiv = document.getElementById('hidden');
    setTimeout(() => {
      storeDiv.classList.remove('hidden');
      storeDiv.classList.add('block');
    }, );
    e.preventDefault();
  }
  const [open, setOpen] = useState(false);

  
  
    return (
        <>
            
            <div className='flex flex-col'>
              <div className='hidden md:flex md:justify-around font-poppins'>
                <div className='flex space-x-7'>
                  <div>EN<ion-icon name="caret-down-outline"></ion-icon></div>
                  <div>$<ion-icon name="caret-down-outline"></ion-icon></div>
                </div>
                <div className='flex space-x-7'>
                  <div className='font-medium hover:cursor-pointer'><ion-icon name="person-outline"></ion-icon>My Profile</div>
                  <div className='font-medium hover:cursor-pointer'><ion-icon name="bag-handle-outline"></ion-icon>2 Items</div>
                  <div className='hover:cursor-pointer'><ion-icon name="search-outline"></ion-icon></div>
                </div>
              </div>
              <div className='flex items-center justify-between text-center font-poppins text-3xl font-medium text-[#FF4252] p-4 md:justify-center'>
                  <p><a href="/">iSHOP</a></p>
                  <div onClick={()=>setOpen(!open)} className='md:hidden text-black'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>                
                  </div>
              </div>
              <ul className={`text-center space-y-7 text-lg bg-white bg-opacity-90 z-[1] absolute mt-16 md:mt-0 md:static w-full md:z-auto md:text-base md:flex md:items-center md:space-x-10 md:justify-center md:bg-white font-semibold transition-all ease-linear duration-200 ${open ? 'top-0' : 'top-[-500px]'}`}>
                {Links.map(link => (
                    <li key={link.name} onMouseOver={show} onMouseLeave={hide} className='hover:text-[#33A0FF] ease-linear duration-200'><a href={link.links}>{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className='hidden md:block'>
              <div id='hidden' className='hidden' onMouseOver={showthis}>
                <StoreDiv />
              </div>
            </div>
        </>
    )
}
