import React from 'react'
import Image from 'next/image'
const Analyze = () => {
    return (
        <div className=' h-[70%] w-[60%] grid grid-rows-2 gap-3'>
            <div className='gap-3 w-[100%] flex'>
                <div className='flip-card rounded-2xl w-[60%]'>
                    <div className='flip-card-inner flip-card-inner-auto'>
                        <div className='bg-bg13 rounded-2xl justify-center items-center px-3 grid grid-cols-2 py-3 w-full h-full flip-card-front '>
                            <div>
                                <Image src="/graphC.png" alt="graphC" width="350" height="350" className='mx-auto '></Image>
                            </div>
                            <div className='text-center text-bg12 flex items-center justify-center'>
                                <ul>
                                    <li className='flex gap-3'><div className='rounded-full h-6 w-6 mb-1 relative bg-fuchsia-700'><Image src="/instagram.svg" alt="instagram" fill className='object-cover p-1' ></Image></div><span>37%</span></li>
                                    <li className='flex gap-3'><div className='rounded-full h-6 w-6 mb-1 relative bg-pink-500'><Image src="/music.svg" alt="music" fill className='object-cover p-1' ></Image></div><span>29%</span></li>
                                    <li className='flex gap-3'><div className='rounded-full h-6 w-6 mb-1 relative bg-blue-600'><Image src="/facebook.svg" alt="facebook" fill className='object-cover p-1' ></Image></div><span>21%</span></li>
                                    <li className='flex gap-3'><div className='rounded-full h-6 w-6 mb-1 relative bg-cyan-600'><Image src="/twitter.svg" alt="twitter" fill className='object-cover p-1' ></Image></div><span>13%</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-customBlue rounded-2xl w-[100%] grid grid-cols-2 justify-center items-center px-4 py-3 flip-card-back'>
                            <div className='relative'>
                                <Image src="/globe.png" alt="globe" width="300" height="300" className='mx-auto '></Image>
                                <div className='absolute w-3 h-3 bg-fuchsia-700 rounded-full border-2 border-white top-1/3 left-1/2'></div>
                            </div>
                            <div className='text-center text-bg11'>
                                <p>New York , USA</p>
                                <p className='text-2xl font-bold'>79</p>
                                <p className='font-bold'>Views</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flip-card rounded-2xl w-[35%]'>
                    <div className='flip-card-inner flip-card-inner-auto'>
                        <div className='flip-card-front'>
                            <div className='bg-customGrey rounded-2xl flex justify-center items-center h-full'>
                                <ul>
                                    <li><Image src="coin.svg" alt="coin" width="30" height="30" className='mx-auto'></Image></li>
                                    <li className=' font-semibold text-center text-2xl'>237</li>
                                    <li className=' font-semibold text-center'>Donations</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flip-card-back'>
                            <div className='bg-fuchsia-600 rounded-2xl flex justify-center items-center h-full'>
                                <ul>
                                    <li><Image src="house.svg" alt="house" width="30" height="30" className='mx-auto'></Image></li>
                                    <li className='text-white font-semibold text-center text-2xl'>$1,627</li>
                                    <li className='text-white font-semibold text-center'>Sales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='flip-card w-[35%] h-full'>
                    <div className='flip-card-inner flip-card-inner-auto'>
                        <div className='flip-card-front'>
                            <div className='bg-yellow-500 rounded-2xl w-[100%] h-full flex justify-center items-center'>
                                <ul>
                                    <li><Image src="clock.svg" alt="clock" width="30" height="30" className='mx-auto'></Image></li>
                                    <li className='text-customPurple font-semibold text-center text-2xl'>8.7s</li>
                                    <li className='text-customPurple font-semibold'>Time to Click</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flip-card-back'>
                            <div className='bg-bg12 rounded-2xl w-[100%] h-full flex justify-center items-center'>
                                <ul>
                                    <li><Image src="play.svg" alt="play" width="30" height="30" className='mx-auto'></Image></li>
                                    <li className='text-customBlue font-semibold text-center text-2xl'>345</li>
                                    <li className='text-customBlue font-semibold'>Plays</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flip-card w-[60%]'>
                    <div className='flip-card-inner flip-card-inner-auto'>
                        <div className='bg-bg3 rounded-2xl w-full h-full grid grid-cols-2 justify-center items-center px-3 flip-card-front'>
                            <div className='flex gap-2 justify-center items-end'>
                                <div className='bg-white rounded-full h-10 w-2'></div>
                                <div className='bg-white rounded-full h-16 w-2'></div>
                                <div className='bg-white rounded-full h-20 w-2'></div>
                                <div className='bg-white rounded-full h-16 w-2'></div>
                                <div className='bg-white rounded-full h-20 w-2'></div>
                                <div className='bg-white rounded-full h-12 w-2'></div>
                            </div>
                            <div>
                                <p className='text-white font-semibold text-center text-2xl'>432</p>
                                <p className='text-white font-semibold text-center'>New Subscribers</p>
                            </div>
                        </div>
                        <div className='bg-customOlive rounded-2xl w-full h-full grid grid-cols-2 justify-center items-center px-3 flip-card-back'>
                            <div ><Image src="/graph.svg" alt="graph" width="100" height="100" className='mx-auto mix-blend-multiply'></Image></div>
                            <div>
                                <p className='text-yellow-500 font-semibold text-center text-2xl'>91%</p>
                                <p className='text-yellow-500 font-semibold text-center'>CTR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyze
