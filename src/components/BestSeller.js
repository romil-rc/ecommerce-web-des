import React from 'react'
import BestSellerData from '../data/bestSellerData.json'
import beats from '../assets/beats.png'

export default function BestSeller() {

    let Links = [
        {},
        {name: 'All', link:'/'},
        {name: 'Mac', link:'/'},
        {name: 'iPhone', link:'/'},
        {name: 'iPad', link:'/'},
        {name: 'iPod', link:'/'},
        {name: 'Accessories', link:'/'}
        ]

    return (
        <>
            <img className='md:hidden' src={beats} alt="" />
            <div className='text-center text-2xl font-semibold md:text-center md:text-xl md:font-semibold'>BEST SELLER</div>
            <div>
                <ul className="hidden text-center text-lg bg-blue-500 z-[1] absolute mt-16 md:mt-0 md:static w-full md:z-auto md:text-base md:flex md:items-center md:space-x-10 md:justify-center md:bg-white font-semibold transition-all ease-linear duration-200">
                  {Links.map(link => (
                    <li key={link.name} className='hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-[#33A0FF] ease-linear duration-200'><a href={link.link}>{link.name}</a></li>
                  ))}
                </ul>
            </div>
            <div className='px-5 mx-8 md:mx-0 space-y-4 md:grid md:grid-cols-4 md:place-items-center md:space-y-4'>
              {BestSellerData.cards.map(elements => (
                <div key={elements.id} className={`${elements.show} md:block md:w-60 md:p-2 md:bg-white text-center rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl space-y-2`}>
                  <div className='relative w-fit bg-[#FF4858] text-sm font-normal px-1 py-0.5 rounded-sm text-white'>{elements.status}</div>
                  <img className="md:h-40 rounded-sm inline-flex" src={elements.img} alt="" />
                  <div className="p-2">
                    <h2 className="font-semibold text-sm">{elements.title}</h2>
                    <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                    <div className='space-x-3'>
                      <span className="font-semibold text-sm text-[#FF4858] text-center">{elements.newCost}</span><span className="font-semibold text-sm text-slate-400 text-center line-through">{elements.oldCost}</span>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
            <div className='text-center text-lg font-semibold md:text-center md:font-semibold md:text-lg'><span className='hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-[#33A0FF] ease-linear duration-200 hover:cursor-pointer'>LOAD MORE</span></div>
        </>
    )
}
