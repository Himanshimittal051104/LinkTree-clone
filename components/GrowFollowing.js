import React,{useContext} from 'react'
import Image from 'next/image'
import { ComponentContext } from '@/context/Component'
const GrowFollowing = () => {
    const {component,setComponent}=useContext(ComponentContext);
    return (
        <div className='w-[65%] mx-auto rounded-3xl py-4 h-[95vh] bg-white'>
            <div className='font-semibold text-center pb-2 px-6 text-md-lg flex items-center justify-between'>
                <div className='rounded-md p-1 hover:bg-customLight' onClick={()=>setComponent(0)}>
                    <Image src="/arrowLeft.svg" alt="arrow" width={24} height={24} ></Image></div>
                <span>Add to Linktree</span>
                <div className='rounded-md p-1 hover:bg-customLight' onClick={()=>setComponent(-1)}>
                    <Image src="/crossB.svg" alt="cross" width={20} height={20} ></Image>
                </div>
            </div>
            <hr></hr>
            <div className=' flex flex-col py-4 px-12'>
                <span className='text-black font-semibold text-md-lg'>Grow your following</span>
                <span className=' text-gray-500 text-base'>Grow, manage, and connect with your audience</span>
            </div>
            <div className='grid grid-cols-2 px-12 gap-x-4'>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Calendly.png" alt="calendly" fill className='rounded-xl border p-1'></Image>
                            </div>
                            <div>
                                <div className='text-base font-semibold'>Calendly</div>
                                <div className='text-sm text-gray-500'>Schedule bookings, right on your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Cameo.png" alt="cameo" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Cameo</div>
                                <div className='text-sm text-gray-500'>Make impossible fan connections possible</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 ml-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between hover:bg-customLight items-center p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-fuchsia-700 rounded-xl w-10 h-10 relative'>
                                <Image src="/Details.svg" alt="details" fill className='p-1'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Contact Details</div>
                                <div className='text-sm text-gray-500'>Easily share downloadable contact details</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='bg-customSapphire rounded-xl w-10 h-10 relative'>
                                <Image src="/Form.svg" alt="form" fill className='p-1'></Image>
                            </div>
                            <div>
                                <div className='font-semibold'>Contact Form</div>
                                <div className='text-sm text-gray-500'>Collect visitor contact info and messages</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10 border border-gray-300'>
                                <Image src="/Gleam.png" alt="gleam" fill className='rounded-xl p-2'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Gleam</div>
                                <div className='text-sm text-gray-500'>Run campaingns to grow your audience</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/InstagramM.svg" alt="cameo" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Instagram</div>
                                <div className='text-sm text-gray-500'>dispaly your posts and reels</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex items-center hover:bg-customLight p-3 rounded-lg justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='relative rounded-xl w-10 h-10'>
                                <Image src="/Reddit.jpg" alt="reddit" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='  font-semibold'>Reddit</div>
                                <div className='text-sm text-gray-500'>Showcase your Reddit profile</div>
                            </div>
                        </div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10'>
                                <Image src="/Snapchat.png" alt="snapchat" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Snapchat</div>
                                <div className='text-sm text-gray-500'>Promote your public profile</div>
                            </div>
                        </div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/threads.svg" alt="threads" fill className='rounded-xl bg-black p-1'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Threads</div>
                                <div className='text-sm text-gray-500'>Display your latest Threads posts</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex  justify-between hover:bg-customLight p-3 rounded-lg items-center'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/TiktokM.png" alt="tiktok" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>TikTok</div>
                                <div className='text-sm text-gray-500'>Share your TikToks on your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex  justify-between hover:bg-customLight p-3 rounded-lg items-center '>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/tiktok.png" alt="tiktok" fill className='rounded-xl border p-2'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>TikTok Profile</div>
                                <div className='text-sm text-gray-500'>Get more TikTok followers</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight px-3 py-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/umg.png" alt="umg" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-md-lg font-semibold'>UMG Signup</div>
                                <div className='text-sm text-gray-500'>UMG artist signup link</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                </div>

            </div>
            <hr className='mx-12'></hr>
            <div className='text-sm px-12 my-4'>
                <span className='text-gray-500'>Not finding what you are looking for?</span>
                <span className='text-purple-700 underline'>Suggest a link app</span>
            </div>
        </div>
    )
}

export default GrowFollowing
