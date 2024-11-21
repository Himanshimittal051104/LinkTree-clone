"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import BrowseApps from '@/components/BrowseApps'
const Page = () => {
    return (
        <div className='flex w-[100vw] h-screen bg-customLight'>
            <div className=' w-[15%] '>
                <div className=' font-semibold text-gray-700 p-4'>
                    <Image src="/linktreeBlack.png" alt="linktree" width={20} height={20}></Image>
                    <ul className='mt-4 flex flex-col gap-3'>
                        <li className='flex gap-2 text-purple-700'>
                            <Image src="/links.svg" alt="links" width={20} height={20}></Image>
                            <span>Links</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/shop.svg" alt="shop" width={20} height={20}></Image>
                            <span>Shop</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/appearance.svg" alt="appearance" width={20} height={20}></Image>
                            <span>Appearance</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/planner.svg" alt="planner" width={20} height={20}></Image>
                            <span>Social Planner</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/analytics.svg" alt="analytics" width={20} height={20}></Image>
                            <span>Analytics</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/settings.svg" alt="setting" width={20} height={20}></Image>
                            <span>Settings</span>
                        </li>
                        <li className='flex gap-2'>
                            <Image src="/mediakit.svg" alt="mediakit" width={20} height={20}></Image>
                            <span>Media Kit</span>
                            <div className='rounded-lg p-1 bg-green-300 text-sm text-green-800'>Beta</div>
                        </li>
                    </ul>
                </div>
                <div className='bg-white rounded-2xl flex flex-col gap-2 p-3 mt-32 w-[90%] mx-auto'>
                    <div className='text-md-lg font-semibold'>
                        Try Pro for free 😍
                    </div>
                    <p className='text-sm text-gray-700'>{`It's the most popular plan for content creators and businesses.`}</p>
                    <div className='rounded-full bg-purple-700 text-white flex items-center justify-center p-1 font-semibold'>Upgrade now</div>
                </div>
            </div>
            <hr className=' w-[1px] bg-gray-500 h-[100%]'></hr>
            <div className='overflow-y-scroll w-[55%] no-scrollbar'>
                <div className='mx-4 rounded-3xl bg-purple-100 border border-gray-500 p-2 py-2 flex items-center justify-between my-2'>
                    <div className='font-semibold'>🔥Your Linktree is live:</div>
                    <div className='bg-white border border-gray-500 rounded-full p-3 font-semibold'>Copy your Linktree URL</div>
                </div>
                <div></div>
                <div className='w-[75%] mx-auto rounded-full bg-purple-700 text-white flex justify-center items-center p-2.5 text-md-lg font-semibold mt-40'><Image src="/add.svg" alt="add" width={20} height={20} className='mr-1'></Image>Add Link</div>
                {/* <div className='bg-white rounded-3xl w-[75%] border-2 border-orange-300 h-40 mx-auto mt-3 px-3'>
                    <input type="text" placeholder="Title" className='block mt-3 focus:outline-none'></input>
                    <input type="text" placeholder="URL" className='block mt-3 focus:outline-none'></input>
                </div> */}
                <div className='my-4'><BrowseApps /></div>
            </div>
            <hr className='h-full w-[1px] bg-gray-500'></hr>
            <div className=' w-[30%]'></div>
        </div>
    )
}

export default Page