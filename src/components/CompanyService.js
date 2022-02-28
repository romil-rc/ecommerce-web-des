import React from 'react'
import shipping from '../assets/shipping.svg'
import refund from '../assets/refund.svg'
import support from '../assets/support.svg'

export default function CompanyService() {
  return (
    <div>
        <div className='md:px-5 px-10 space-y-8 md:grid md:grid-cols-3 md:place-items-center md:space-y-4'>
                <div className="md:w-full md:p-2 md:bg-white md:text-center md:space-y-5 space-y-5 text-center">
                  <img className="md:h-26 md:inline-flex h-10 inline-flex" src={shipping} alt="" />
                  <div className="md:px-9 md:space-y-5 space-y-5">
                    <h2 className="md:font-bold md:text-md font-bold text-lg">FREE SHIPPING</h2>
                    <div className='space-x-3'>
                      <span className="font-semibold text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-full md:p-2 md:bg-white md:text-center md:space-y-5 space-y-5 text-center">
                  <img className="md:h-26 md:inline-flex h-12 inline-flex" src={refund} alt="" />
                  <div className="md:px-9 md:space-y-5 space-y-5">
                    <h2 className="md:font-bold md:text-md font-bold text-lg">100% REFUND</h2>
                    <div className='space-x-3'>
                      <span className="font-semibold text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-full md:p-2 md:bg-white md:text-center md:space-y-5 space-y-5 text-center">
                  <img className="md:h-26 md:inline-flex h-12 inline-flex" src={support} alt="" />
                  <div className="md:px-9 md:space-y-5 space-y-5">
                    <h2 className="md:font-bold md:text-md font-bold text-lg">SUPPORT 24/7</h2>
                    <div className='space-x-3'>
                      <span className="font-semibold text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>
                    </div>
                  </div>
                </div>
            </div>
    </div>
  )
}
