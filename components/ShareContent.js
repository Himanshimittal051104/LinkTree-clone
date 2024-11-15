import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
const ShareContent = () => {
    const [rotation1, setRotation1] = useState(0);
    const [rotation2, setRotation2] = useState(0);
    const [rotation3, setRotation3] = useState(0);
    const [activeCardIndex, setActiveCardIndex] = useState(-1);
    const [isAutoFlipping, setIsAutoFlipping] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoFlipping) {
            interval = setInterval(() => {
                setActiveCardIndex((prevIndex) => (prevIndex + 1) % 3);
                if (activeCardIndex === 0) {
                    setRotation1((prev) => prev + 180);
                } else if (activeCardIndex === 1) {
                    setRotation3((prev) => prev + 180);
                } else {
                    setRotation2((prev) => prev + 180);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [activeCardIndex, isAutoFlipping]);

    const handleClick = (cardIndex) => {
        if (activeCardIndex != cardIndex) {
            setIsAutoFlipping(false);
            if (cardIndex === 1) {
                setRotation1((prev) => prev + 180);
            } else if (cardIndex === 2) {
                setRotation3((prev) => prev + 180);
            } else {
                setRotation2((prev) => prev + 180);
            }
            setTimeout(() => {
                setActiveCardIndex((activeCardIndex +1)%3);
                setIsAutoFlipping(true);
            }, 1000);
        }
    };

    return (
        <div className='w-full h-full flex items-center justify-center gap-2 '>
            <div className={`rounded-2xl w-[10vw] h-[20vh]  flip-card2 `} onClick={() => handleClick(1)}>
                <div className='flip-card-inner2' style={{
                    transform: `rotateY(${rotation1}deg)`
                }} >
                    <div className={`${rotation1 % 720 == 0 || rotation1 % 720 == 180 ? "opacity-100" : "opacity-0"} flip-card-face flip-card-face1`}>
                        <div className=' rounded-2xl p-2 py-1 relative w-full h-full' >
                            <Image src="/bubblegum.jpg" alt="bubblegum" fill className='rounded-2xl'></Image>
                            <div className='bg-white h-8 w-8 rounded-full absolute bottom-3 flex items-center justify-center'><Image src="/shopPlay.svg" alt="play" width="30" height="30"></Image></div>
                        </div>
                    </div>
                    <div className={`rounded-2xl flip-card-face flip-card-face2  p-2 py-1  ${rotation1 % 720 == 0 || (rotation1 + 180) % 720 == 0 ? "opacity-0" : "opacity-100"}`} style={{ backgroundImage: `url('/beauty.jpg')`, backgroundPosition: 'center' }}>
                        <Image src="/instagram.png" alt="instagram" width="30" height="30">
                        </Image>
                    </div>
                    <div className={`flip-card-face flip-card-face3  ${rotation1 % 720 == 0 || rotation1 % 720 == 180 ? "opacity-0" : "opacity-100"}`}>
                        <div className={`rounded-2xl w-full h-full p-2 py-1 right-36`} style={{ backgroundImage: `url('/tv.jpg')`, backgroundPosition: 'top' }}>
                            <Image src="/twitchApp.svg" alt="twitch" width={30} height={30} className='rounded-full mt-2'></Image>
                        </div>
                    </div>
                    <div className={`flip-card-face flip-card-face4  ${rotation1 % 720 == 0 || (rotation1 + 180) % 720 == 0 ? "opacity-100" : "opacity-0"}`}>
                        <div className=' relative p-2 py-1 w-full h-full' >
                            <Image src="/butterfly.jpg" alt="butterfly" fill className='rounded-2xl'></Image>
                            <div className='absolute bg-white h-8 w-8 rounded-full bottom-3 flex items-center justify-center'><Image src="/shopPlay.svg" alt="play" width="30" height="30"></Image></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl w-[8vw] h-[20vh] flip-card2' onClick={() => handleClick(0)}>
                <div className='flip-card-inner2 ' style={{
                    transform: `rotateY(${rotation2}deg)`
                }}>
                    <div className={`rounded-2xl bg-sky-500  p-3 cursor-pointer flip-card-face flip-card-face1 ${rotation2 % 720 == 0 || rotation2 % 720 == 180 ? "opacity-100" : "opacity-0"}`}>
                        <div className='mb-3'><Image src="/twitter.png" alt="twitter" width="30" height="30"></Image>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='rounded-full h-2.5 w-full bg-sky-300'></div>
                            <div className='rounded-full h-2.5 w-full bg-sky-300'></div>
                            <div className='rounded-full h-2.5 w-[50%] bg-sky-300'></div>
                        </div>
                    </div>
                    <div className={`rounded-2xl bg-sky-700 flip-card-face flip-card-face2 p-3 cursor-pointer ${rotation2 % 720 == 0 || (rotation2 + 180) % 720 == 0 ? "opacity-0" : "opacity-100"}`}>
                        <div className='flex flex-col gap-1 mt-5'>
                            <div className='rounded-full h-2.5 w-full bg-sky-400'></div>
                            <div className='rounded-full h-2.5 w-full bg-sky-400'></div>
                            <div className='rounded-full h-2.5 w-[50%] bg-sky-400'></div>
                        </div>
                    </div>
                    <div className={`rounded-2xl  bg-pink-500 flip-card-face flip-card-face3 p-3 cursor-pointer ${rotation2 % 720 == 0 || rotation2 % 720 == 180 ? "opacity-0" : "opacity-100"}`}>
                        <div className='flex flex-col gap-1 mt-5'>
                            <div className='rounded-full h-2.5 w-full bg-pink-300'></div>
                            <div className='rounded-full h-2.5 w-full bg-pink-300'></div>
                            <div className='rounded-full h-2.5 w-[50%] bg-pink-300'></div>
                        </div>
                    </div>
                    <div className={`rounded-2xl flip-card-face flip-card-face4 bg-gray-700 p-3 cursor-pointer  ${rotation2 % 720 == 0 || (rotation2 + 180) % 720 == 0 ? "opacity-100" : "opacity-0"}`}>
                        <div className='flex flex-col gap-1 mt-5'>
                            <div className='rounded-full h-2.5 w-full bg-gray-500'></div>
                            <div className='rounded-full h-2.5 w-full bg-gray-500'></div>
                            <div className='rounded-full h-2.5 w-[50%] bg-gray-500'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-2xl w-[13vw] h-[20vh] flip-card2 ' onClick={() => handleClick(2)}>
                <div className='flip-card-inner2' style={{
                    transform: `rotateY(${rotation3}deg)`
                }}>
                    <div className={`relative rounded-2xl ${rotation3 % 720 == 0 || rotation3 % 720 == 180 ? "opacity-100" : "opacity-0"} px-2 py-1 flip-card-face flip-card-face1`} style={{ backgroundImage: `url('/party.jpg')`, backgroundPosition: 'center 30%' }}>
                        <div className='absolute bottom-1 flex gap-2 h-12 items-center justify-center '>
                            <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center p-1'><Image src="/resume.svg" alt="resume" width="30" height="30"></Image></div>
                            <div className='w-36 h-3 bg-gray-400 rounded-full'>
                                <div className='w-[50%] rounded-full h-full bg-white'></div></div>
                        </div>
                    </div>
                    <div className={`rounded-2xl flip-card-face flip-card-face2  p-3 bg-white grid grid-rows-3 ${rotation3 % 720 == 0 || (rotation3 + 180) % 720 == 0 ? "opacity-0" : "opacity-100"}`}>
                        <p className='text-center '>Support us</p>
                        <div className='flex justify-center items-center gap-1 -mt-3'>
                            <div className='rounded-md border border-gray-700 px-2 py-1'>$10</div>
                            <div className='rounded-md border border-gray-700 px-2 py-1'>$25</div>
                            <div className='rounded-md border border-gray-700 px-2 py-1'>$50</div>
                        </div>
                        <div className={`rounded-full bg-customDark text-white flex items-center justify-center gap-1 p-2`}>
                            <Image src="/lock.svg" alt="lock" width={20} height={20}></Image>
                            <span className='font-semibold'>Donate</span>
                        </div>
                    </div>
                    <div className={` rounded-2xl flip-card-face flip-card-face3  p-3 ${rotation3 % 720 == 0 || rotation3 % 720 == 180 ? "opacity-0" : "opacity-100"}`} style={{ backgroundImage: `url('/surfing.jpg')`, backgroundPosition: 'top' }}>
                        <div>

                        </div>
                    </div>
                    <div className={`flip-card-face flip-card-face4 ${rotation3 % 720 == 0 || (rotation3 + 180) % 720 == 0 ? "opacity-100" : "opacity-0"}`}>
                        <div className={` rounded-2xl w-full h-full  p-3 relative`} >
                            <Image src="/onlineSports.webp" alt="onlineSports" fill className='rounded-2xl object-cover'></Image>
                            <Image src="/instagram.png" alt="instagram" width="30" height="30" className='absolute top-3 left-3'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShareContent
