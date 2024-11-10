import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
const Tools = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        centeredSlides={true}
        freeMode={true}
        speed={1500}
        navigation={false}
        modules={[Navigation, FreeMode, Autoplay]}
      >
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full gap-2 '>
            <div className='bg-customLight text-customOlive text-2xl font-semibold rounded-full py-4 px-7'>{`linktr.ee/me`}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full gap-2'>
            <div className='w-28 h-28 rounded-2xl bg-yellow-300 relative'>
              <Image src="/mailchimp.png" alt="mailchimp" fill className='p-4'></Image>
            </div>
            <div className='w-28 h-28 rounded-full bg-customOrange relative'>
              <Image src="/zapier.png" alt="zapier" fill className='p-4'></Image>
            </div>
            <div className='w-28 h-28 rounded-2xl bg-blue-900 relative'>
              <Image src="/paypal.png" alt="paypal" fill className='p-4'></Image>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className='w-28 h-28 rounded-full bg-customLight relative'>
        <Image src="/Sheets.png" alt="googlesheets" fill className='p-4'></Image>
      </div>
      <div className='w-28 h-28 rounded-2xl bg-customGreen relative'>
         <Image src="/shopify.png" alt="shopify" fill className='p-4'></Image>
      </div>
      <div className='w-28 h-28 rounded-full bg-black relative'>
         <Image src="/square.png" alt="square" fill className='p-3'></Image>
      </div> */}

    </div>
  )
}

export default Tools
