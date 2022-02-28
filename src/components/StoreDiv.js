import React from 'react'
import BigData from '../data/storeData.json'

export default function StoreDiv() {
  return (
    <div className='md:font-poppins md:flex md:text-center md:bg-white md:w-full md:h-fit md:columns-3  md:rounded-md md:drop-shadow-2xl md:text-black'>
        {BigData.columnOne.map(elements => {
            return (
                <div className='md:w-full md:text-left md:p-5 md:space-y-2.5'>
                    <div className='md:text-xl md:w-full md:font-semibold'>{elements.title}</div>
                    <div className='md:columns-2'>
                        <ul className=' md:space-y-5'>
                            {elements.data.map(items => (
                                <li><a href='/'>{items.item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        })}
        {BigData.columnTwo.map(elements => {
            return (
                <div className='md:w-full md:text-left md:p-5 md:space-y-2.5'>
                    <div className='md:text-xl md:w-full md:font-semibold'>{elements.title}</div>
                    <div className='md:columns-2'>
                        <ul className=' md:space-y-5'>
                            {elements.data.map(items => (
                                <li><a href='/'>{items.item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        })}
        {BigData.columnThree.map(elements => {
            return (
                <div className='md:w-full md:text-left md:p-5 md:space-y-2.5'>
                    <div className='md:text-xl md:w-full md:font-semibold'>{elements.title}</div>
                    <div className='md:columns-2'>
                        <ul className=' md:space-y-5'>
                            {elements.data.map(items => (
                                <li><a href='/'>{items.item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        })}
        
        
    </div>
  )
}
