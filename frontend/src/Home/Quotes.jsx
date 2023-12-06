import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './quotes.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

const Quotes = () => {
  return (
    <>
    <div className='bg-green-50 mt-5 md:mt-0 p-4 z-10'>
    <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className='p-4 font-medium text-green-800'>“Not all readers are leaders, but all leaders are readers.” ― Harry Truman</SwiperSlide>
        <SwiperSlide className='p-4 font-medium text-green-800'>“A book is a gift you can open again and again.” ― Garrison Keillor</SwiperSlide>
        <SwiperSlide className='p-4 font-medium text-green-800'>“A room without books is like a body without a soul.” ― Cicero</SwiperSlide>
        <SwiperSlide className='p-4 font-medium text-green-800'>“There is no friend as loyal as a book.”― Ernest Hemingway</SwiperSlide>
        <SwiperSlide className='p-4 font-medium text-green-800'>“You will learn most things by looking, but reading gives understanding. Reading will make you free.” ― Paul Rand</SwiperSlide>
        
      </Swiper>
      </div>
        
    </>
  )
}

export default Quotes