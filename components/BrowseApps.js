import React, { useState,useContext } from 'react'
import Image from 'next/image'
import Add from './Add'
import { ComponentContext } from '@/context/Component'
const BrowseApps = () => {
    const [clicked, setClicked] = useState(false)
    const [inputURL, setInputURL] = useState('')
    const [clickedLink, setClickedLink] = useState(false)
    const [searchedLink, setSearchedLink] = useState(false)
    const [inputLink, setInputLink] = useState('')
    const {component,setComponent}= useContext(ComponentContext);
    return (
        <>
        <div className='bg-white rounded-3xl w-[75%] mx-auto p-4' onClick={() => { setClicked(inputURL !== "" ? true : false); setClickedLink(inputLink !== "" ? true : false) }}>
            <div className=''>
                <div className='font-bold text-xl'>Enter URL or Browse Apps</div>
                <div className='flex gap-4 mt-3'>
                    <div className={`w-[80%]  hover:border-2 hover:border-customDarkGray rounded-md px-1 bg-customLight ${clicked ? "border-2 border-black" : ""} flex gap-1`} onClick={(e) => e.stopPropagation()}>
                        <Image src="/search.svg" alt="search" width={20} height={20} className=""></Image>
                        <div>
                            {clicked &&
                                <div className='text-gray-500 text-sm px-2'>URL or App</div>}
                            <input type="text" placeholder={clicked ? "" : "URL or App"} className={`w-full bg-customLight   focus:outline-none ${clicked ? "px-2" : "rounded-md p-2"}`} onClick={() => { setClicked(true) }} value={inputURL}
                                onChange={(e) => setInputURL(e.target.value)}></input>
                        </div>
                    </div>
                    <button className='bg-customLight rounded-full px-2 w-28 '>Add</button>
                </div>
            </div>
            <hr className=' h-[2px] my-4'></hr>
            {searchedLink ?
                <div className={`w-full hover:border-2 hover:border-customDarkGray rounded-md bg-customLight border-2 px-1 ${clickedLink ? "border-2 border-black" : ""}  flex gap-1`} onClick={(e) => e.stopPropagation()}>
                    <Image src="/search.svg" alt="search" width={20} height={20} className=""></Image>
                    <div>
                        {clickedLink &&
                            <div className='text-gray-500 text-sm px-2'>Search Link Apps</div>}
                        <input type="text" placeholder={clickedLink ? "" : "Search Link Apps"} className={`w-full bg-customLight   focus:outline-none ${clickedLink ? "px-2" : "rounded-md p-2"}`} onClick={() => { setClickedLink(true) }} value={inputLink}
                            onChange={(e) => setInputLink(e.target.value)}></input>
                    </div>
                </div>
                : <div className=' flex justify-between items-center'>
                    <div className='text-gray-700 font-semibold'>Inspired by your interests</div>
                    <div className='w-10 h-10 rounded-full border-2 border-gray-500 relative' onClick={() => setSearchedLink(true)}>
                        <Image src="/search.svg" alt="search" fill className="p-2"></Image>
                    </div>
                </div>}
            <div className='flex my-4 gap-2'>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center  relative'>
                        <Image src="/instagramM.svg" alt="instagram" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>Instagram</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center relative'>
                        <Image src="/TiktokM.png" alt="tiktok" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>Tiktok</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center relative'>
                        <Image src="/YoutubeM.png" alt="youtube" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>Youtube</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center relative'>
                        <Image src="/spotifyM.png" alt="spotify" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>Spotify</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center relative'>
                        <Image src="/appleMusic.jpg" alt="applemusic" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>Apple Music</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <div className='bg-customLight w-20 h-20 rounded-3xl flex items-center justify-center relative '>
                        <Image src="/XM.png" alt="x" fill className="p-3 rounded-3xl"></Image>
                    </div>
                    <span className='text-sm font-semibold '>X</span>
                </div>
            </div>
            <div className='mt-12'>
                <div className='text-gray-700 font-semibold'>New to try</div>
                <div className='flex gap-2 mt-4'>
                    <div className='rounded-3xl w-full '>
                        <div className='relative w-full h-[80%] rounded-t-3xl '>
                            <Image src="/instagram1.webp" alt="instagram" fill className='rounded-t-3xl object-cover'></Image>
                        </div>
                        <div className='flex bg-customLight rounded-b-3xl py-3 px-3 gap-2'>
                            <Image src="/instagramM.svg" alt="instagram" width={40} height={40} className='rounded-lg'></Image>
                            <div>
                                <div className='font-semibold'>Instagram</div>
                                <div className='text-sm text-gray-500'>Display your posts and reels</div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-3xl w-full '>
                        <div className='relative w-full h-[80%] rounded-t-3xl'>
                            <Image src="/discountCode.webp" alt="discount" fill className='rounded-t-3xl object-cover'></Image>
                        </div>
                        <div className='flex  bg-customLight rounded-b-3xl py-3 px-3 '>
                            <Image src="/discount.svg" alt="discountcode" width={40} height={40} className='rounded-lg'></Image>
                            <div>
                                <div className='font-semibold'>Discount Code</div>
                                <div className='text-sm text-gray-500'>Display a discount code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='rounded-full hover:bg-customLight p-2 px-3 text-purple-600 cursor-pointer flex gap-1 items-center font-semibold text-sm mt-24' onClick={()=>setComponent(0)}>
                View all Apps
                <Image src="/arrowPurple.svg" alt="arrow" width={18} height={18}></Image>
            </button>
        </div>
        </>
    )
}

export default BrowseApps
