import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { Navigation, Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link'
const CelebrityCarousel = () => {
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
                <SwiperSlide className='w-[300px] ml-28 -mr-16'>
                    <div className='w-[300px] rounded-full flex items-center justify-center h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/funkyn.webp" alt="funkynutmeg" fill className="object-cover rounded-full "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-bg12 rounded-full low'>
                                <Link href=""> <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/funkynutmeg</span></button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] -mr-16'>
                    <div className='w-[300px] rounded-xl flip-card flex items-center justify-center h-[55vh] group'>
                        <div className='flip-card-inner '>
                            <div className='flip-card-front flex items-center justify-center bg-customBlack rounded-xl'>
                                <Image src="/hbo.avif" alt="hbo" width="300" height="300" className="rounded-xl ">
                                </Image>
                            </div>
                            <div className='flip-card-back low bg-bg12 flex items-center justify-center rounded-xl'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/hbo</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] rounded-3xl h-[55vh] roundedP flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front bg-black roundedP flex items-center justify-center'>
                                <Image src="/comedyCentral.png" alt="comedycentral" width={300} height={300} className=" roundedP"></Image>
                            </div>
                            <div className='flip-card-back flex justify-center items-center roundedP bg-customNeon low'>
                                <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/comedycentral</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] -mr-16 ml-1'>
                    <div className='w-[300px]  rounded-full  group h-[55vh] flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front rounded-full'>
                                <Image src="/pharell.jpg" alt="pharrell" fill className=" object-top rounded-full "></Image>
                            </div>
                            <div className='flip-card-back bg-bg3 flex items-center justify-center rounded-full low'>
                                <button className='mid absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/pharrell</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] rounded-3xl h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/tonyHawk.jpg" alt="tonyhawk" fill className="object-cover roundedP "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-customSapphire roundedP low'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/tonyhawk</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] ml-1 mr-12'>
                    <div className='w-[300px] rounded-xl flip-card h-[55vh] group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/laclippers.png" alt="laclippers" fill className="object-cover rounded-xl "></Image>
                            </div>
                            <div className='flip-card-back flex items-center justify-center bg-bg1 rounded-xl low' >
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/laclippers</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px]  -ml-28 mr-1'>
                    <div className='w-[480px] roundedP h-[55vh] flip-card group'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <Image src="/selena.webp" alt="selenagomez" fill className="object-cover roundedP roundedP"></Image>
                            </div>
                            <div className='flip-card-back items-center justify-center flex low bg-customMustardYellow roundedP'>
                                <button className='bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/selenagomez</span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CelebrityCarousel
