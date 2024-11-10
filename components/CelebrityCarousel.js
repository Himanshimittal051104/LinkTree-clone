import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import { Navigation, Autoplay,FreeMode,Pagination } from 'swiper/modules';
import Link from 'next/link'
const CelebrityCarousel = () => {
    return (
        <div className='h-[50vh]'>
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
                modules={[Navigation,FreeMode,Autoplay]}
            >
                <SwiperSlide className='w-[300px] ml-28 -mr-16'>
                    <div className='w-[300px] rounded-full hover:bg-bg12 relative group flex items-center justify-center h-[55vh]'>
                        <Image src="/funkyn.webp" alt="funkynutmeg" fill className="object-cover rounded-full group-hover:opacity-0"></Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/funkynutmeg</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] -mr-16'>
                    <div className='w-[300px] rounded-xl hover:bg-bg12 bg-customBlack group relative flex items-center justify-center h-[55vh]'>
                        <Image src="/hbo.avif" alt="hbo" width="300" height="300" className="rounded-xl group-hover:opacity-0">
                        </Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/hbo</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] rounded-3xl h-[55vh] perspective-1000 group roundedP'>
                        <div className='w-full h-full relative transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500 bg-pink-50 roundedP'>
                            <div className='absolute w-full h-full backface-hidden bg-black flex justify-center items-center rounded-3xl roundedP'>
                                <Image src="/comedyCentral.png" alt="comedycentral" fill className="rounded-3xl roundedP"></Image>

                            </div>
                            {/* <div className='backface-hidden absolute h-full w-full rotate-y-180 bg-customNeon flex justify-center items-center rounded-3xl'>
                        <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/comedycentral</span></button>
                    </div>*/}
                        </div>
                    </div>
                </SwiperSlide>
                 <SwiperSlide className='w-[300px] -mr-16 ml-1'>
                    <div className='w-[300px]  rounded-full hover:bg-bg3 relative hover:flex hover:justify-center hover:items-center group h-[55vh]'>
                        <Image src="/pharell.jpg" alt="pharrell" fill className=" object-top rounded-full group-hover:opacity-0"></Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/pharrell</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px] mr-28 '>
                    <div className='w-[480px] rounded-3xl hover:bg-customSapphire relative hover:flex hover:justify-center roundedP hover:items-center group h-[55vh]'>
                        <Image src="/tonyHawk.jpg" alt="tonyhawk" fill className="object-cover rounded-3xl roundedP group-hover:opacity-0"></Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/tonyhawk</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[300px] ml-1 mr-12'>
                    <div className='w-[300px] rounded-xl hover:bg-bg1 relative hover:flex hover:justify-center hover:items-center group h-[55vh]'>
                        <Image src="/laclippers.png" alt="laclippers" fill className="object-cover rounded-xl group-hover:opacity-0"></Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/laclippers</span></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-[480px]  -ml-28 mr-1'>
                    <div className='w-[480px] rounded-3xl roundedP hover:bg-customMustardYellow relative hover:flex hover:justify-center hover:items-center group h-[55vh]'>
                        <Image src="/selena.webp" alt="selenagomez" fill className="object-cover roundedP rounded-3xl group-hover:opacity-0"></Image>
                        <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/selenagomez</span></button>
                    </div>
                </SwiperSlide> 
            </Swiper>
        </div>
    )
}

export default CelebrityCarousel
