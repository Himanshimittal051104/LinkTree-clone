import React from 'react'
import Image from 'next/image'
const Shopavery = () => {
    return (
        <div className=' relative w-full h-full'>
            <div className='absolute left-1/3 top-0 rounded-2xl w-[13vw] h-[15vh] p-3 ' style={{ backgroundImage: `url('/shopReading.jpg')`, backgroundPosition: 'center 30%' }}>
                <div className='flex'>
                    <div className='bg-white rounded-full h-3 w-3'></div>
                    <div className='bg-white rounded-full h-3 w-3' ></div>
                    <div className='bg-white rounded-full h-3 w-3'></div>
                </div>
            </div>
            <div className='absolute right-16 top-28 mt-3 '> <div className='relative rounded-2xl w-[13vw] h-[15vh] px-2 py-1' style={{ backgroundImage: `url('/BeachMusic.jpg')`, backgroundPosition: 'center 30%' }}>
                <div className='absolute bottom-1 flex gap-2 h-12 items-center justify-center '>
                    <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center p-1'><Image src="/resume.svg" alt="resume" width="30" height="30"></Image></div>
                    <div className='w-36 h-3 bg-gray-400 rounded-full'>
                        <div className='w-[50%] rounded-full h-full bg-white'></div></div>
                </div>
            </div></div>
           
            <div className=' rounded-2xl w-[9vw] h-[17vh] bg-customMustardYellow py-2 px-3 absolute top-14 left-16 ml-2'>
                <div className='flex justify-center items-center'><Image src="/cap.jpg" alt="hat" width={80} height={80} className='mix-blend-multiply'></Image></div>
                <div className='text-center text-customSapphire font-semibold mt-2'>$ 20</div>
            </div>
            <div className=' rounded-2xl w-[9vw] h-[17vh]  p-3 absolute top-48 left-24' style={{ backgroundImage: `url('/shopInsta.jpg')`, backgroundPosition: 'center' }}><div><Image src="/instagram.svg" alt="instagram" width="30" height="30"></Image></div></div>
            <div className=' rounded-2xl w-[8vw] bg-sky-500 h-[20vh] p-3 absolute bottom-5 left-60 ml-1'>
                <div className='mb-5'><Image src="/twitter.svg" alt="twitter" width="30" height="30"></Image></div>
                <div className='flex flex-col gap-1'>
                    <div className='rounded-full h-2.5 w-full bg-sky-300'></div>
                    <div className='rounded-full h-2.5 w-full bg-sky-300'></div>
                    <div className='rounded-full h-2.5 w-[50%] bg-sky-300'></div>
                </div>
            </div>
            <div className=' rounded-2xl w-[9vw] h-[17vh]  p-2 py-1 absolute bottom-20 right-36' style={{ backgroundImage: `url('/book.jpg')`, backgroundPosition: 'center' }}><div className='bg-white h-8 w-8 rounded-full mt-20 flex items-center justify-center'><Image src="/shopPlay.svg" alt="play" width="30" height="30"></Image></div></div>
        </div>
    )
}

export default Shopavery
