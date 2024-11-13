import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { Navigation, Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link'
const TiktokCarousel = () => {
    return (
        <div className='h-[55vh]'>
            <Swiper
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                centeredSlides={true}
                freeMode={true}
                speed={2500}
                navigation={false}
                modules={[Navigation, FreeMode, Autoplay]}
            >
                <SwiperSlide className='w-[480px] mr-28'>
                    <div className='w-[480px] roundedP flex items-center justify-center h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front bg-red-600 roundedP'>
                                <Image src="/100thieves.png" alt="100thieves" fill className="object-cover roundedP p-16"></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-customSapphire roundedP low'>
                                <Link href=""> <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/100thieves</span></button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] ml-2 -mr-16'>
                    <div className='w-[300px] rounded-xl flip-card flex items-center justify-center h-[55vh] group'>
                        <div className='flip-card-inner '>
                            <div className='flip-card-front flex items-center justify-center bg-bg12 rounded-xl reltive'>
                                <Image src="/mattyMatheson.jpg" alt="mattyMatheson" fill className="rounded-xl ">
                                </Image>
                            </div>
                            <div className='flip-card-back low bg-bg12 flex items-center justify-center rounded-xl'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/mattymatheson</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] h-[55vh] roundedP flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front bg-black roundedP flex items-center justify-center relative'>
                                <Image src="/sommerray.jpeg" alt="sommerray" fill className=" roundedP"></Image>
                            </div>
                            <div className='flip-card-back flex justify-center items-center roundedP bg-bg11 low'>
                                <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/sommerray</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] -mr-16 ml-1'>
                    <div className='w-[300px]  rounded-full  group h-[55vh] flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front rounded-full bg-black'>
                                <Image src="/Babish.jpeg" alt="Babish" fill className=" object-top rounded-full "></Image>
                            </div>
                            <div className='flip-card-back bg-bg3 flex items-center justify-center rounded-full low'>
                                <button className='mid absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/babishculinaryuniverse</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] roundedP h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front bg-customDark roundedP  '>
                                <Image src="/kurzgesat.png" alt="kurzgesagt" fill className="object-cover roundedP p-3"></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-customSapphire roundedP low'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/kurzgesagt</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] ml-1 mr-12'>
                    <div className='w-[300px] rounded-xl flip-card h-[55vh] group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/kalhmerkis.jpg" alt="kalhmerkis" fill className="object-cover rounded-xl "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-bg1 rounded-xl low' >
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/kalhmerkis</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px]  -ml-28 mr-1'>
                    <div className='w-[480px] roundedP h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/danielMac.jpg" alt="danielMac" fill className="object-cover roundedP roundedP"></Image>
                            </div>
                            <div className='flip-card-back items-center justify-center flex low bg-customMustardYellow roundedP'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/itsdanielmac</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] ml-28  '>
                    <div className='w-[300px] rounded-full h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/noahBeck.jpg" alt="noahBeck" fill className="object-cover rounded-full "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-bg12 rounded-full low'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/noahbeck</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] -ml-16 mr-56'>
                    <div className='w-[480px] roundedP flip-card h-[55vh] group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/celina.jpg" alt="celina" fill className="object-cover roundedP "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-bg11 roundedP low' >
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/celinaspookyboo</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px]  -ml-28 -mr-16'>
                    <div className='w-[300px] rounded-xl h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/mythical.jpg" alt="mythical" fill className="object-cover roundedP rounded-xl"></Image>
                            </div>
                            <div className='flip-card-back items-center justify-center flex low bg-bg3 rounded-xl'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/mythical</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default TiktokCarousel
