import React from 'react'
import firstImage from '../assets/corousel_3.png'
import BestSeller from './BestSeller'
import BigAdd from './BigAdd'
import CompanyService from './CompanyService'
import ScrollProducts from './ScrollProducts'

export default function Home () {
  return (
    <div className='space-y-7'>
        <div className='hidden md:block'>
            <img src={firstImage} alt="" />
        </div>
        <BestSeller />
        <BigAdd />
        <CompanyService />
        <ScrollProducts />
    </div>
  )
}
