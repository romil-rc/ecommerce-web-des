import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollingProducts from '../data/scrollProducts.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ScrollProducts() {
  return (
    <div>
    <div className='text-center md:text-center md:font-semibold font-semibold md:text-xl text-xl md:my-5 my-5 font-poppins'>FEATURED PRODUCTS</div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {ScrollingProducts.scroll.map(elements => (
        <SwiperSlide key={elements.id}>
                <div className='md:flex md:flex-row md:w-72 md:border-2 rounded-md transform transition-all hover:scale-110 md:duration-300 md:shadow-lg hover:shadow-2xl md:p-4 md:space-x-3 font-poppins md:bg-white md:m-auto cursor-pointer'>
                    <div className='md:basis-1/2 md:border-2'>
                        <img src={elements.img} alt="" />
                    </div>
                    <div className='md:basis-1/2 space-y-2'>
                        <p className='md:font-semibold md:text-sm'>{elements.name}</p>
                        <ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon><ion-icon name="star-outline"></ion-icon>
                        <div className='space-x-3'>
                            <span className="font-semibold text-sm text-[#FF4858] text-center">{elements.newCost}</span><span className="font-semibold text-sm text-slate-400 text-center line-through">{elements.oldCost}</span>
                        </div>
                    </div>
                </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}
