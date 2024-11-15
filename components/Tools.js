import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
const Tools = () => {
  const [scale, setScale] = useState(1);
  const scaleDownTimeout=useRef(null);

  const handleSlideChange = (swiper) => {
    clearTimeout(scaleDownTimeout.current); 

    if (swiper.realIndex === 0) {
      scaleDownTimeout.current = setTimeout(() => {
        setScale(0.8);
      }, 3700);
    } else {
      setScale(1); 
    }
  };

  useEffect(() => {
    return () => clearTimeout(scaleDownTimeout.current);
  }, []);

  return (
    <div className="w-full h-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        centeredSlides={true}
        freeMode={true}
        speed={1500}
        navigation={false}
        modules={[Navigation, FreeMode, Autoplay]}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-[48vh] gap-2'>
            <div className={`bg-customLight text-customOlive text-3xl font-semibold  rounded-full py-5 px-14`} style={{transform: `scale(${scale})`}}>{`linktr.ee/me`}
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-[48vh] gap-2'>
            <div className='flip-card w-28 h-28'>
              <div className='flip-card-inner flip-card-inner-auto'>
                <div className='w-full h-full rounded-2xl bg-yellow-300 relative flip-card-front'>
                  <Image src="/mailchimp.png" alt="mailchimp" fill className='p-4'></Image>
                </div>
                <div className='w-full h-full rounded-full bg-customLight relative flip-card-back'>
                  <Image src="/Sheets.png" alt="googlesheets" fill className='p-8'></Image>
                </div>
              </div>
            </div>
            <div className='flip-card w-28 h-28'>
              <div className='flip-card-inner flip-card-inner-auto'>
                <div className='w-full h-full rounded-full bg-customOrange relative flip-card-front'>
                  <Image src="/zapier.png" alt="zapier" fill className='p-4'></Image>
                </div>
                <div className='w-full h-full rounded-2xl bg-customGreen relative flip-card-back'>
                  <Image src="/shopify.png" alt="shopify" fill className='p-8'></Image>
                </div>
              </div>
            </div>
            <div className='flip-card w-28 h-28'>
              <div className='flip-card-inner flip-card-inner-auto'>
                <div className='w-full h-full rounded-2xl bg-blue-900 relative flip-card-front'>
                  <Image src="/paypal.png" alt="paypal" fill className='p-4'></Image>
                </div>
                <div className='w-full h-full rounded-full bg-black relative flip-card-back'>
                  <Image src="/square.png" alt="square" fill className='p-4'></Image>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Tools
