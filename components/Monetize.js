import React,{useContext} from 'react'
import Image from 'next/image'
import { ComponentContext } from '@/context/Component'
const Monetize = () => {
    const {component,setComponent}=useContext(ComponentContext);
    return (
        <div className='w-[65%] mx-auto rounded-3xl py-4 h-[95vh] bg-white'>
            <div className='font-semibold text-center pb-2 px-6 text-md-lg flex items-center justify-between'>
                <div className='rounded-md p-1 hover:bg-customLight'  onClick={()=>setComponent(0)}>
                    <Image src="/arrowLeft.svg" alt="arrow" width={24} height={24} ></Image></div>
                <span>Add to Linktree</span>
                <div className='rounded-md p-1 hover:bg-customLight' onClick={()=>setComponent(-1)}>
                    <Image src="/crossB.svg" alt="cross" width={20} height={20} ></Image>
                </div>
            </div>
            <hr></hr>
            <div className=' flex flex-col py-4 px-12'>
                <span className='text-black font-semibold text-md-lg'>Monetize</span>
                <span className=' text-gray-500 text-base'>Make money by selling products and services </span>
            </div>
            <div className='grid grid-cols-2 px-12 gap-x-4'>
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
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10 '>
                                <Image src="/gallery.svg" alt="productGallery" fill className=''></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Product Gallery</div>
                                <div className='text-sm text-gray-500'>Promote products or other listings</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10'>
                                <Image src="/Seated.png" alt="seated" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Seated</div>
                                <div className='text-sm text-gray-500'>Drive ticket sales by listing your events</div>
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
                                <Image src="/sendowl.jpg" alt="owl" fill className='rounded-xl '></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>SendOwl</div>
                                <div className='text-sm text-gray-500'>Sell digital products on your Linktree</div>
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
            <hr className='mx-12'></hr>
            <div className='text-sm px-12 mt-4'>
                <span className='text-gray-500'>Not finding what you are looking for?</span>
                <span className='text-purple-700 underline'>Suggest a link app</span>
            </div>
        </div>
    )
}

export default Monetize
