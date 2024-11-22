import React, { useState,useContext } from 'react'
import Image from 'next/image'
import { ComponentContext } from '@/context/Component'
const Add = () => {
    const [clickedLink, setClickedLink] = useState(false)
    const [searchedLink, setSearchedLink] = useState(false)
    const [inputLink, setInputLink] = useState('')
    const {component,setComponent}=useContext(ComponentContext);
    return (
        
        <div className='w-[65%] mx-auto rounded-3xl py-4  bg-white h-[95vh]' onClick={() => setClickedLink(inputLink !== "" ? true : false)}>
            <div>
                <div className='font-semibold text-center pb-2 px-6 text-md-lg flex items-center justify-between '>
                    <div></div>
                    <span>Add to Linktree</span>
                    <div className='rounded-md p-1 hover:bg-customLight' onClick={()=>setComponent(-1)}>
                        <Image src="/crossB.svg" alt="cross" width={20} height={20} ></Image>
                    </div>
                </div>
                <hr></hr>
                <div className='py-2 '>
                    <div className={` hover:border-2 hover:border-customDarkGray rounded-md bg-customLight border-2 px-2 mx-12 ${clickedLink ? "border-2 border-black" : ""}  flex gap-1 `} onClick={(e) => e.stopPropagation()}>
                        <Image src="/search.svg" alt="search" width={20} height={20} className=""></Image>
                        <div>
                            {clickedLink &&
                                <div className='text-gray-500 text-sm px-2'>Search Link Apps</div>}
                            <input type="text" placeholder={clickedLink ? "" : "Search Link Apps"} className={`w-full bg-customLight   focus:outline-none ${clickedLink ? "px-2" : "rounded-md p-2"} placeholder-gray-500`} onClick={() => { setClickedLink(true) }} value={inputLink}
                                onChange={(e) => setInputLink(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overflow-y-scroll h-[78vh] no-scrollbar'>
                <div className='px-12 mb-6 pt-2'>
                    <div className=' flex flex-col py-4'>
                        <span className='text-black font-semibold text-md-lg'>New to try</span>
                    </div>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                            <div className='flex gap-2 items-center'>
                                <div className=' rounded-xl w-10 h-10 relative'>
                                    <Image src="/InstagramM.svg" alt="cameo" fill className='rounded-xl'></Image>
                                </div>
                                <div>
                                    <div className=' font-semibold'>Instagram</div>
                                    <div className='text-sm text-gray-500'>display your posts and reels</div>
                                </div></div>
                            <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                        </div>
                        <div className='flex justify-between hover:bg-customLight items-center p-3 rounded-lg'>
                            <div className='flex gap-2 items-center'>
                                <div className=' rounded-xl w-10 h-10 relative'>
                                    <Image src="/discount.svg" alt="discount" fill className='rounded-xl'></Image>
                                </div>
                                <div>
                                    <div className=' font-semibold'>Discount code</div>
                                    <div className='text-sm text-gray-500'>Display a discount code</div>
                                </div></div>
                            <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                        </div>
                    </div>
                    <hr className='ml-12'></hr>
                </div>
                <div className='px-12'>
                    <div className=' flex flex-col py-4'>
                        <span className='text-black font-semibold text-md-lg'>Share your content</span>
                        <span className=' text-gray-500 text-base'>Share content directly on your Linktree</span>
                    </div>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className='relative rounded-xl w-10 h-10'>
                                        <Image src="/text.svg" alt="text" fill className='rounded-xl p-2 bg-green-800'></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>Text</div>
                                        <div className='text-sm text-gray-500'>Display text and an optional button</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
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
                                        <div className='text-sm text-gray-500'>Share a TikTok video on your Linktree</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/twitch.svg" alt="twitch" fill className='rounded-xl'></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>Twitch</div>
                                        <div className='text-sm text-gray-500'>Get more stream viewers and engagement</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex items-center hover:bg-customLight p-3 rounded-lg justify-between'>
                                <div className='flex items-center gap-2'>
                                    <div className='relative rounded-xl w-10 h-10'>
                                        <Image src="/typeform.svg" alt="Typeform" fill className='rounded-xl'></Image>
                                    </div>
                                    <div>
                                        <div className='  font-semibold'>Typeform</div>
                                        <div className='text-sm text-gray-500'>Get answers with surveys, forms and more</div>
                                    </div>
                                </div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex  justify-between hover:bg-customLight p-3 rounded-lg items-center '>
                                <div className='flex items-center gap-2'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/XM.png" alt="x" fill className='rounded-xl'></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>X</div>
                                        <div className='text-sm text-gray-500'>Showcase your posts and X feed</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight px-3 py-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/YoutubeM.png" alt="Youtube" fill className='rounded-xl border'></Image>
                                    </div>
                                    <div>
                                        <div className='text-md-lg font-semibold'>Youtube</div>
                                        <div className='text-sm text-gray-500'>Share youtube videos on your Linktree</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                            </div>
                        </div>
                    </div>
                    <hr className='ml-12'></hr>
                    <div className='text-purple-700 justify-end gap-1 font-semibold mt-2 flex items-center cursor-pointer' onClick={()=>setComponent(1)}>View All
                        <Image src="/arrowPurple.svg" alt="arrow" width={20} height={20}></Image>
                    </div>
                </div>
                <div className='px-12'>
                    <div className=' flex flex-col py-4 '>
                        <span className='text-black font-semibold text-md-lg'>Monetize</span>
                        <span className=' text-gray-500 text-base'>Make money by selling products and services </span>
                    </div>
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/bandsintown.jpg" alt="bandsintown" fill className='rounded-xl border p-1'></Image>
                                    </div>
                                    <div>
                                        <div className='text-base font-semibold'>Bandsintown</div>
                                        <div className='text-sm text-gray-500'>Drive ticket sales by listening your events</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/bonfire.png" alt="bonfire" fill className='rounded-xl'></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>Bonfire</div>
                                        <div className='text-sm text-gray-500'>Display and sell your custom merch</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 ml-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/Gofundme.jpg" alt="gofundme" fill className='rounded-xl'></Image>
                                    </div>
                                    <div>
                                        <div className='font-semibold'>GoFundMe</div>
                                        <div className='text-sm text-gray-500'>Promote the causes you care about most</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex  justify-between hover:bg-customLight p-3 rounded-lg items-center'>
                                <div className='flex items-center gap-2'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/ShopifyM.png" alt="shopify" fill className='rounded-xl border'></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>Shopify</div>
                                        <div className='text-sm text-gray-500'>Display your product to boost sales</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                            <hr className='ml-14 mr-1'></hr>
                        </div>
                        <div>
                            <div className='flex  justify-between hover:bg-customLight p-3 rounded-lg items-center '>
                                <div className='flex items-center gap-2'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/Spring.jpg" alt="spring" fill className='rounded-xl '></Image>
                                    </div>
                                    <div>
                                        <div className=' font-semibold'>Spring</div>
                                        <div className='text-sm text-gray-500'>Display your product to boost sales</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center hover:bg-customLight px-3 py-3 rounded-lg'>
                                <div className='flex gap-2 items-center'>
                                    <div className=' rounded-xl w-10 h-10 relative'>
                                        <Image src="/tour.svg" alt="tour" fill className='rounded-xl '></Image>
                                    </div>
                                    <div>
                                        <div className='text-md-lg font-semibold'>Tour and Events</div>
                                        <div className='text-sm text-gray-500'>Drive ticket sales by listening your events</div>
                                    </div></div>
                                <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                            </div>
                        </div>
                    </div>
                    <hr className='ml-12'></hr>
                    <div className='text-purple-700 justify-end gap-1 font-semibold mt-2 flex items-center cursor-pointer' onClick={()=>setComponent(2)}>View All
                        <Image src="/arrowPurple.svg" alt="arrow" width={20} height={20}></Image>
                    </div>
                </div>
                <div className='px-12'>
                    <div className=' flex flex-col py-4'>
                        <span className='text-black font-semibold text-md-lg'>Grow your following</span>
                        <span className=' text-gray-500 text-base'>Grow, manage, and connect with your audience</span>
                    </div>
                    <div className='grid grid-cols-2 gap-x-4'>
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
                    <hr className='ml-12'></hr>
                    <div className='text-purple-700 justify-end gap-1 font-semibold mt-2 flex items-center cursor-pointer' onClick={()=>setComponent(3)}>View All
                        <Image src="/arrowPurple.svg" alt="arrow" width={20} height={20}></Image>
                    </div>
                </div>
                <div className='text-sm px-12 my-4'>
                    <span className='text-gray-500'>Not finding what you are looking for?</span>
                    <span className='text-purple-700 underline ml-2'>Suggest a link app</span>
                </div>
            </div>
        </div>
    )
}

export default Add
