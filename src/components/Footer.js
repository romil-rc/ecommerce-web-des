import React from 'react'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import FooterData from '../data/footerData.json'
import masterCard from '../assets/masterCard.svg'
import paypal from '../assets/paypal.svg'
import visa from '../assets/visa.svg'
import westernUnion from '../assets/westernUnion.svg'

export default function Footer() {

    let Links = [
        {},
        {name: 'About Us', link:'/'},
        {name: 'Infomation', link:'/'},
        {name: 'Privacy Policy', link:'/'},
        {name: 'Terms & Conditions', link:'/'}
        ]


  return (
    <div className='md:flex md:flex-col font-poppins md:p-5 md:space-y-7 p-5'>
        <div className='md:flex md:flex-row md:justify-evenly md:px-16 md:space-x-20 md:text-left text-center md:space-y-7 space-y-7'>
            <div className='md:space-y-5 space-y-5'>
                <p className='md:text-3xl md:text-slate-400 md:font-semibold text-3xl text-slate-400 font-semibold'>iSHOP</p>
                <p className='md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>
            <div className='md:space-y-5'>
                <p className='md:font-semibold md:text-lg font-semibold text-lg'>Follow Us</p>
                <p className='md:text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <div className='md:space-x-14 space-x-14 md:flex-none flex md:justify-start justify-center md:pt-0 pt-4'><img className='md:absolute' src={facebook} alt="" /><img className='md:absolute' src={twitter} alt="" /></div>
            </div>
            <div className='md:space-y-5 hidden md:block'>
                <p className='md:font-semibold md:text-lg font-semibold text-lg'>Contact Us</p>
                <p className='md:text-sm'>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
            </div>
        </div>
        <div className='md:flex md:flex-row md:px-5 md:text-left md:justify-evenly text-center md:mt-0 mt-5'>
            {FooterData.titles.map(title => (
                <div className='md:space-y-3 space-y-3'>
                        <>
                            <p className='md:font-semibold md:text-lg font-semibold text-lg'>{title.name}</p>
                            <ul>
                                {Links.map(elements => (
                                    <li key={elements.name} className='hover:text-[#33A0FF] ease-linear duration-200 hidden md:block'><a href={elements.link}>{elements.name}</a></li>
                                ))}
                            </ul>
                        </>
                </div>
            ))}
        </div>
        <div className='md:hidden space-y-5 text-center p-8'>
                <p className='md:font-semibold md:text-lg font-semibold text-lg'>Contact Us</p>
                <p className='md:text-sm'>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
        </div>
        <div className='md:flex md:flex-row md:justify-end md:space-x-5 md:pr-16 flex justify-center space-x-5'>
            <img className='hover:scale-150 hover:cursor-pointer ease-linear duration-200' src={westernUnion} alt="" />                       
            <img className='hover:scale-150 hover:cursor-pointer ease-linear duration-200' src={masterCard} alt="" />                       
            <img className='hover:scale-150 hover:cursor-pointer ease-linear duration-200' src={paypal} alt="" />                       
            <img className='hover:scale-150 hover:cursor-pointer ease-linear duration-200' src={visa} alt="" />                       
        </div>
    </div>
  )
}
