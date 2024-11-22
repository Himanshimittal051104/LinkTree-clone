import React,{useState,useContext} from 'react'
import Image from 'next/image'
import { ComponentContext } from '@/context/Component'
const Content = () => {
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
            <div className='overflow-y-scroll h-[86vh] no-scrollbar'>
            <div className=' flex flex-col py-4 px-12'>
                <span className='text-black font-semibold text-md-lg'>Share your content</span>
                <span className=' text-gray-500 text-base'>Share content directly on your Linktree</span>
            </div>
            <div className='grid grid-cols-2 px-12 gap-x-4'>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Audiomack.png" alt="audiomack" fill className='rounded-xl border p-1'></Image>
                            </div>
                            <div>
                                <div className='text-base font-semibold'>Audiomack</div>
                                <div className='text-sm text-gray-500'>Add an Audiomack player to your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/books.svg" alt="books" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Books</div>
                                <div className='text-sm text-gray-500'>Promote books on your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 ml-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between hover:bg-customLight items-center p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-xl w-10 h-10 relative'>
                                <Image src="/clubhouse.svg" alt="clubhouse" fill className=''></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Clubhouse</div>
                                <div className='text-sm text-gray-500'>Let your community in on the conversation</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/document.svg" alt="document" fill className=''></Image>
                            </div>
                            <div>
                                <div className='font-semibold'>Document</div>
                                <div className='text-sm text-gray-500'>upload a PDF to share with your visitors</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10 border border-gray-300'>
                                <Image src="/Facebook.png" alt="Facebook" fill className='rounded-xl p-2'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Facebook</div>
                                <div className='text-sm text-gray-500'>Add facebook videos to your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/faq.svg" alt="FAQs" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>FAQs</div>
                                <div className='text-sm text-gray-500'>Share your frequently asked questions</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/header.svg" alt="Header" fill className='rounded-xl p-2 bg-gray-300'></Image>
                            </div>
                            <div>
                                <div className='text-base font-semibold'>Header</div>
                                <div className='text-sm text-gray-500'>Organize your links and apps</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/app.svg" alt="Mobile App" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Mobile App</div>
                                <div className='text-sm text-gray-500'>Promote a mobile app & get more downloads</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 ml-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between hover:bg-customLight items-center p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/MusicC.svg" alt="Music" fill className=''></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Music</div>
                                <div className='text-sm text-gray-500'>Share music and get more streams</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-xl w-10 h-10 relative'>
                                <Image src="/Presave.svg" alt="Music Presave" fill className=''></Image>
                            </div>
                            <div>
                                <div className='font-semibold'>Music Presave</div>
                                <div className='text-sm text-gray-500'>Promote your upcoming music release</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10 '>
                                <Image src="/NFT.svg" alt="NFT" fill className='rounded-xl '></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>NFT</div>
                                <div className='text-sm text-gray-500'>Showcase NFTs on your own Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Opensea.png" alt="opensea" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Opensea</div>
                                <div className='text-sm text-gray-500'>Showcase NFTs on your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Pinterest.png" alt="Pinterest" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-base font-semibold'>Pinterest</div>
                                <div className='text-sm text-gray-500'>Showcase Pins , boards and more</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Podcasts.svg" alt="Podcasts" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Podcasts</div>
                                <div className='text-sm text-gray-500'>Get more podcasts listeners and subscribers</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 ml-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between hover:bg-customLight items-center p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' rounded-xl w-10 h-10 relative'>
                                <Image src="/Soundcloud.jpg" alt="Soundcloud" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Soundcloud</div>
                                <div className='text-sm text-gray-500'>Get your music heard on soundcloud</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2  px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
                <div>
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className=' w-10 h-10 relative'>
                                <Image src="/spotifyM.png" alt="spotify" fill className=' rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='font-semibold'>Spotify</div>
                                <div className='text-sm text-gray-500'>Share your latest or favourite music</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
                    </div>
                    <hr className='ml-14 mr-1'></hr>
                </div>
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
                    <div className='flex justify-between items-center hover:bg-customLight p-3 rounded-lg'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative rounded-xl w-10 h-10'>
                                <Image src="/video.svg" alt="video" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Video</div>
                                <div className='text-sm text-gray-500'>Add videos right to your Linktree</div>
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
                                <Image src="/vimeo.svg" alt="vimeo" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className=' font-semibold'>Vimeo</div>
                                <div className='text-sm text-gray-500'>Add vimeo videos to your Linktree</div>
                            </div></div>
                        <div className='text-purple-700 font-semibold rounded-full bg-white py-2 px-3'>Add</div>
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
            <hr className='mx-12'></hr>
            <div className='text-sm px-12 my-4'>
                <span className='text-gray-500'>Not finding what you are looking for?</span>
                <span className='text-purple-700 underline'>Suggest a link app</span>
            </div>
            </div>
        </div>
    )
}

export default Content
