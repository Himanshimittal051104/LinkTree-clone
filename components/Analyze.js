import React from 'react'
import Image from 'next/image'
const Analyze = () => {
    return (
        <>
        {/* <div className=' h-[100%] w-[100%]'>
            <div className='flex h-[50%] gap-4'>
                <div className='bg-customBlue rounded-2xl w-[100%] grid grid-cols-2 justify-center items-center px-3'>
                    <div className='relative'>
                        <Image src="/globe.jpg" alt="globe" width="200" height="200" className='mx-auto mix-blend-multiply'></Image>
                        <div className='absolute w-3 h-3 bg-fuchsia-700 rounded-full border-2 border-white top-1/3 left-1/2'></div>
                    </div>
                    <div className='text-center text-bg11'>
                        <p>New York , USA</p>
                        <p className='text-2xl font-bold'>79</p>
                        <p className='font-bold'>Views</p>
                    </div>
                </div>
                <div className='bg-fuchsia-600 rounded-2xl w-[50%] flex justify-center items-center'>
                    <ul>
                        <li><Image src="house.svg" alt="house" width="30" height="30" className='mx-auto'></Image></li>
                        <li className='text-white font-semibold text-center text-2xl'>$1,627</li>
                        <li className='text-white font-semibold text-center'>Sales</li>
                    </ul>
                </div>
            </div>
            <div className='flex h-[50%] gap-4 mt-4'>
                <div className='bg-bg12 rounded-2xl w-[50%] flex justify-center items-center'>
                    <ul>
                        <li><Image src="play.svg" alt="play" width="30" height="30" className='mx-auto'></Image></li>
                        <li className='text-customBlue font-semibold text-center text-2xl'>345</li>
                        <li className='text-customBlue font-semibold'>Plays</li>
                    </ul>
                </div>
                <div className='bg-bg3 rounded-2xl w-full grid grid-cols-2 justify-center items-center px-3'>
                    <div ><Image src="/waves.png" alt="waves" width="100" height="100" className='mx-auto mix-blend-multiply'></Image></div>
                    <div>
                        <p className='text-white font-semibold text-center text-2xl'>432</p>
                        <p className='text-white font-semibold text-center'>New Subscribers</p>
                    </div>
                </div>
            </div>
        </div> */}
        <div className=' h-[100%] w-[100%]'>
        <div className='flex h-[50%] gap-4'>
            <div className='bg-bg13 rounded-2xl w-[100%] grid grid-cols-2 justify-center items-center px-3'>
                <div className=''>
                    <Image src="/graphC.png" alt="graphC" width="200" height="200" className='mx-auto '></Image>
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
            <div className='bg-customGrey rounded-2xl w-[50%] flex justify-center items-center'>
                <ul>
                    <li><Image src="coin.svg" alt="coin" width="30" height="30" className='mx-auto'></Image></li>
                    <li className=' font-semibold text-center text-2xl'>237</li>
                    <li className=' font-semibold text-center'>Donations</li>
                </ul>
            </div>
        </div>
        <div className='flex h-[50%] gap-4 mt-4'>
            <div className='bg-yellow-500 rounded-2xl w-[50%] flex justify-center items-center'>
                <ul>
                    <li><Image src="clock.svg" alt="clock" width="30" height="30" className='mx-auto'></Image></li>
                    <li className='text-customPurple font-semibold text-center text-2xl'>8.7s</li>
                    <li className='text-customPurple font-semibold'>Time to Click</li>
                </ul>
            </div>
            <div className='bg-customOlive rounded-2xl w-full grid grid-cols-2 justify-center items-center px-3'>
                <div ><Image src="/graph.svg" alt="graph" width="100" height="100" className='mx-auto mix-blend-multiply'></Image></div>
                <div>
                    <p className='text-yellow-500 font-semibold text-center text-2xl'>91%</p>
                    <p className='text-yellow-500 font-semibold text-center'>CTR</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Analyze
