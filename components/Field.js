import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,FreeMode,Mousewheel } from 'swiper/modules';
const Field = () => {
    return (
        <div className='overflow-y-hidden' style={{maxHeight:"70px"}}>
            <Swiper direction={'vertical'}
                spaceBetween={10}
                slidesPerView={1}
                rewind={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={false}
                centeredSlides={true}
                freeMode={true}
                speed={300}
                mousewheel={false}
                style={{ transitionDelay: '1500ms',maxHeight:"70px" }} 
                modules={[Autoplay,FreeMode,Mousewheel]}
            >
                <SwiperSlide style={{maxHeight:"70px"}}><span>influencers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>small buisness</span ></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>athletes</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>models</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>monetizers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>health educators</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>streamers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>vloggers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>fitness coaches</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>ecommerce sellers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>retailers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>products</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>wellness leaders</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>musicians</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>bands</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>DJs</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>podcasters</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>fashion designer</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>merch sellers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>writers</span></SwiperSlide>
                <SwiperSlide style={{maxHeight:"70px"}}><span>creators</span></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Field
