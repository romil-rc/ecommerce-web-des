import React from 'react'
import StoreSellerData from '../data/storeSellerData.json'

export default function StoreSeller() {
  return (
    <div>
        <div className='md:px-5 mx-8 md:mx-0 space-y-7 md:grid md:grid-cols-3 md:place-items-center md:space-y-4 md:mt-0 mt-10'>
              {StoreSellerData.cards.map(elements => (
                <div key={elements.id} className={`${elements.show} md:block md:w-60 w-80 md:p-2 md:bg-white text-center rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl space-y-2`}>
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
    </div>
  )
}
