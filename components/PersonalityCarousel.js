import React from 'react'
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import { useRef } from 'react';
const PersonalitiesCarousel = () => {
    const carouselRef = useRef(null);
    return (
        <div>
            <Carousel indicators={false} ref={carouselRef} controls={false} interval={null}>
                <Carousel.Item>
                    <div className='min-w-[100%]' >
                        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                            <Image src='/Riley.jpg' alt='riley' fill className="object-cover rounded-full"></Image>
                        </div>
                        <div className='w-[70%] mx-auto'>
                            <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link.”`}</p>
                            <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Riley Lemon,</p>
                            <p className='text-lg text-gray-500 font-semibold text-center'>Youtuber,Content Creator</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='min-w-[100%]' >
                        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                            <Image src='/Patti.jpg' alt='Patti' fill className="object-cover rounded-full"></Image>
                        </div>
                        <div className='w-[70%] mx-auto'>
                            <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“Linktree helps my customers get where they need to go. It’s so fast and easy.”`}</p>
                            <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Patti Chimkire,</p>
                            <p className='text-lg text-gray-500 font-semibold text-center'>Founder and Pastry Chef, Mali Bakes</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='min-w-[100%]' >
                        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                            <Image src='/Luke.jpg' alt='luke' fill className="object-cover rounded-full"></Image>
                        </div>
                        <div className='w-[70%] mx-auto'>
                            <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“I use Linktree's analytics to better undersatnd my audience and what converts them.”`}</p>
                            <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Luke Kidgell,</p>
                            <p className='text-lg text-gray-500 font-semibold text-center'>Comedian</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='min-w-[100%]' >
                        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                            <Image src='/Risa.jpg' alt='risa' fill className="object-cover rounded-full"></Image>
                        </div>
                        <div className='w-[70%] mx-auto'>
                            <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“My Linktree resume stood out from the rest,securing me my first full-time job as a TV reporter!”`}</p>
                            <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Risa Utama,</p>
                            <p className='text-lg text-gray-500 font-semibold text-center'>TV Reporter and Producer</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='min-w-[100%]' >
                        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                            <Image src='/Connor.avif' alt='connor' fill className="object-cover rounded-full"></Image>
                        </div>
                        <div className='w-[70%] mx-auto'>
                            <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“Linktree has allowed me to generate new member signups without me needing a website.”`}</p>
                            <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Connor Toki,</p>
                            <p className='text-lg text-gray-500 font-semibold text-center'>Founder,Connor Toki Health & Performance </p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='flex gap-2 mt-12 justify-center'>
                <div className='rounded-lg w-12 h-12 border border-black flex items-center justify-center hover:bg-customDark relative group' onClick={() => carouselRef.current.prev()}>
                    <Image src='/arrow-left.svg' alt='left-arrow' width="30" height={30} className='absolute opacity-100 group-hover:opacity-0'></Image>
                    <Image src='/arrow-leftW.svg' alt='left-arrow' width="30" height={30} className='absolute opacity-0 group-hover:opacity-100'></Image>
                </div>
                <div className='rounded-lg w-12 h-12 border border-black flex items-center justify-center hover:bg-customDark group relative' onClick={() => carouselRef.current.next()}>
                    <Image src='/arrow-right.svg' alt='right-arrow' width="30" height={30} className='absolute opacity-100 group-hover:opacity-0 '></Image>
                    <Image src='/arrow-rightW.svg' alt='right-arrow' width="30" height={30} className='absolute opacity-0 group-hover:opacity-100'></Image>
                </div>
            </div>
        </div>
    )
}

export default PersonalitiesCarousel
