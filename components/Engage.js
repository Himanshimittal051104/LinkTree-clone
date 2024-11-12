import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Engage = () => {
    const [flipped, setFlipped] = useState(false)
    

    return (
        <div className='w-full h-full flex justify-center relative rounded-3xl cursor-pointer ' onClick={()=>setFlipped(!flipped)}>
            <div className='rounded-3xl h-[80%] w-[16vw] px-4 relative' >
                <Image src="/beach.jpg" alt="beach" fill className='rounded-3xl '></Image>
                <div className='absolute rounded-full h-24 w-24 top-12 left-1/2 -ml-10'>
                    <Image src="/hijab.jpg" alt="hijab" fill className='rounded-full'></Image>
                </div>
                <div className='rounded-full w-[90%] h-9 bg-customLight  absolute top-44  -ml-3'></div>
                <div className='rounded-full w-[90%] h-9 bg-customLight  absolute top-56 -ml-3 -mt-1'></div>
                <div className='rounded-full w-[90%] h-9 bg-customLight absolute top-72 -ml-3 -mt-6'></div>
            </div>
            <div className='flip-card w-[10vw] h-[25vh] absolute left-20 top-36'>
                <div className={`flip-card-inner ${flipped ? '' : 'flippedEngage'}`}>
                    <div className='w-full h-full bg-cyan-500 rounded-3xl flex flex-col text-white text-center gap-2 items-center justify-center cursor-pointer flip-card-front'>
                        <div><Image src="/message.svg" alt="message" width="40" height="40"></Image></div>
                        <div className='text-3xl'>5,678</div>
                        <div className='font-semibold'>Email Subscribers</div>
                    </div>
                    <div className='w-full h-full bg-bg11 rounded-3xl flex flex-col text-bg3 text-center gap-2 items-center justify-center cursor-pointer flip-card-back'>
                        <div><Image src="/sms.svg" alt="sms" width="40" height="40"></Image></div>
                        <div className='text-3xl'>2,456</div>
                        <div className='font-semibold'>SMS Subscribers</div>
                    </div>
                </div>
            </div>
            <div className='absolute rounded-full h-20 w-20  top-24 right-40 flip-card '>
                <div className={`flip-card-inner ${flipped ? '' : 'flippedEngage'}`}>
                    <div className='flip-card-front flex items-center justify-center rounded-full bg-yellow-300'>
                        <Image src="/mailchimp.png" alt='mailchimp' width="50" height="50" className='absolute'></Image>
                    </div>
                    <div className='flip-card-back flex items-center justify-center bg-customOrange rounded-full'>
                        <Image src="/zapier.png" alt="zapier" width="50" height="50" className='absolute'></Image>
                    </div>
                </div>
            </div>
            <div className='w-[14vw] h-[35vh] absolute bottom-14 right-20 '>
                <div className={`flip-card-inner ${flipped ? '' : 'flippedEngage'}`}>
                    <div className='flip-card-front rounded-3xl bg-white  w-full h-full px-2'>
                        <div className=' rounded-full h-12 w-12 bg-fuchsia-600 absolute right-14 top-3 flex items-center justify-center z-10'>
                            <Image src="/bell.svg" alt="bell" width="18" height="18" className='rounded-full'></Image>
                        </div>
                        <div className=' rounded-full h-16 w-16 relative mt-6 ml-16 mb-2'>
                            <Image src="/hijab.jpg" alt="hijab" fill className='rounded-full'></Image>
                        </div>
                        <div className='font-semibold text-sm text-center'>Get email updates</div>
                        <div className='rounded-lg bg-customLight p-2 my-2 text-sm'>Email</div>
                        <div className='flex justify-start items-center gap-2 mt-2'>
                            <div className='bg-customLight p-1 rounded-md'><Image src="/tick.svg" alt="right" width="10" height="10"></Image></div>
                            <div className='text-xs font-semibold '>Agree to terms and conditions</div>
                        </div>
                        <div className='text-white rounded-full text-center p-2 w-full h-10 bg-fuchsia-500 font-semibold text-sm mt-3'>Subscriber</div>
                    </div>
                    <div className='flip-card-back w-full h-full px-2 bg-white rounded-3xl'>
                        <div className=' rounded-full h-12 w-12 bg-fuchsia-600 absolute right-14 top-3 flex items-center justify-center z-10'>
                            <Image src="/bell.svg" alt="bell" width="18" height="18" className='rounded-full'></Image>
                        </div>
                        <div className=' rounded-full h-16 w-16 relative mt-6 ml-16 mb-2'>
                            <Image src="/hijab.jpg" alt="hijab" fill className='rounded-full'></Image>
                        </div>
                        <div className='font-semibold text-sm text-center'>Get SMS updates</div>
                        <div className='flex gap-2 my-2'>
                            <div className='rounded-lg bg-customLight p-2 w-[30%] flex items-center justify-center gap-1'>
                                <Image src="/plus.svg" alt="plus" width="12" height="12"></Image>
                                <span className='text-sm'>61</span></div>
                            <div className='rounded-lg bg-customLight p-2 w-[80%] pr-5 text-sm'>123456789</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-1'>
                            <div className='bg-customLight p-1 rounded-md'><Image src="/tick.svg" alt="right" width="10" height="10"></Image></div>
                            <div className='text-xs font-semibold'>Agree to terms and conditions</div>
                        </div>
                        <div className='text-white rounded-full text-center p-2 w-full h-10 bg-fuchsia-500 font-semibold text-sm mt-3'>Subscriber</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Engage
