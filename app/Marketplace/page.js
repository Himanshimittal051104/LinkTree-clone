"use client"
import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
const dosis = localFont({
    src: "../fonts/Dosis-Bold.ttf",
    variable: "--font-dosis",
    weight: "100 900",
});
const graphik = localFont({
    src: "../fonts/GraphikBold.otf",
    variable: "--font-graphik",
    weight: "100 900",
});
const graphikLight = localFont({
    src: "../fonts/Graphiklight.otf",
    variable: "--font-graphikLight",
    weight: "100 900",
});
const graphikMedium = localFont({
    src: "../fonts/GraphikMedium.otf",
    variable: "--font-graphikMedium",
    weight: "100 900",
});
const graphikSemiBold = localFont({
    src: "../fonts/GraphikSemibold.otf",
    variable: "--font-graphiksemibold",
    weight: "100 900",
});
const Page = () => {
    const { data: session } = useSession();
    return (
        <>
            <div className='pt-12  px-20 bg-bg3'>
                <div className='h-20   rounded-full flex justify-between pr-3 pl-10 items-center  bg-white ' >
                    <div className='flex gap-14 items-center'>
                        <Link href="/">
                            <div className={`font-bold text-3xl flex ${dosis.className} cursor-pointer`}>Linktree<Image src="/linktreeBlack.png" alt="tree" width="30" height="20"></Image>
                            </div>
                        </Link>
                        <hr className='bg-customDark w-[1px] h-7 -mx-10'></hr>
                        <Link href="/Marketplace" className='text-gray-500 no-underline'><span className='text-xl text-customDark font-semibold'>Marketplace</span></Link>
                        <ul className='flex gap-2 text-textcolor font-semibold'>
                            <div className='relative group'>
                                <Link href="/" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 text-lg hover:rounded-lg '>Browse</li></Link>
                                <div className='absolute top-10 rounded-2xl  opacity-0 pointer-events-none group-hover:!opacity-100 group-hover:pointer-events-auto z-10'>
                                    <div className='bg-white text-textcolor rounded-2xl w-[18vw] p-2 py-3 mt-7 '>
                                        <Link href="/"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Link apps</div></Link>
                                        <Link href="/"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Integrations</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='relative group'>
                                <Link href="/Marketpalce" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg text-lg text-customDark font-bold'>Marketplace</li></Link>
                                <div className={`w-[18vw] absolute top-10 rounded-2xl opacity-0  pointer-events-none z-10 group-hover:pointer-events-auto group-hover:!opacity-100 `}>
                                    <div className='bg-white text-textcolor rounded-2xl p-2 mt-7 cursor-default group-hover:cursor-pointer'>
                                        <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>Developer program</div></Link>
                                        <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>Get support</div></Link>
                                        <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>Linktree home</div></Link>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    {
                        session ?
                            (<div className='flex gap-2 justify-center items-center'>
                                <Link href="/Login"><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3'>Admin</button></Link>
                                <button className='bg-customDark text-lg text-white font-semibold rounded-full px-7 py-3 hover:cursor-pointer' onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button></div>
                            ) :
                            (<div className='flex gap-2 justify-center items-center'>
                                <Link href="/Login"><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3'>Log in</button></Link>
                                <Link href="/Signup"><button className='bg-customDark text-lg text-white font-semibold rounded-full px-7 py-3 hover:cursor-pointer' >Sign up free</button></Link></div>
                            )
                    }
                </div >
            </div >
            <div className="bg-bg3 grid grid-cols-2 px-24 items-center">
                <div className="flex flex-col gap-8">
                    <p className={`text-bg12 text-8xl font-bold ${graphik.className}`}>Connect more of you</p>
                    <p className="text-bg12 font-semibold text-xl">Bring the best experiences across the internet to one place: your Linktree</p>
                    <div className="relative font-semibold flex items-center text-gray-500 w-full">
                        <Image src="/search.svg" alt="search" width={20} height={20} className='absolute left-3'></Image>
                        <input
                            type="text" placeholder="Search Link apps and integrations..." className="placeholder-gray-500 outline-none py-3 rounded-lg  pl-10 w-[70%]"
                        />
                    </div>
                </div>
                <div className='flex  justify-center h-[100vh] w-full relative'>
                    <Image src="/MarketplaceBg.webp" alt="Marketplace" fill className=''></Image>
                </div>
            </div>
            <div className='bg-white px-24 pt-20 pb-40'>
                <div className='mb-28'>
                    <div className='text-3xl font-bold'>Featured</div>
                    <div className='roundedP h-[40vh] w-[50%] mt-10 mb-4 relative'>
                        <Image src="/Featured.jpg" alt="featured" fill className='roundedP '></Image>
                    </div>
                    <div className='flex gap-2'>
                        <div className='relative rounded-xl w-14 h-14'>
                            <Image src="/Snapchat.png" alt="snapchat" fill className='rounded-xl'></Image>
                        </div>
                        <div>
                            <div className='text-xl font-bold'>Snapchat</div>
                            <div className='text-md-lg'>Promote your public profile</div>
                        </div>
                    </div>
                </div>
                <div className='mb-28'>
                    <div className='flex justify-between'>
                        <div className='text-3xl font-bold'>Share your content</div>
                        <div className='underline text-blue-600 text-lg'>See All</div>
                    </div>
                    <div className='grid grid-cols-3 gap-10 mt-5'>
                        <div className='flex gap-2'>
                            <div className='bg-white rounded-xl w-14 h-14 relative border border-gray-300'>
                                <Image src="/Audiomack.png" alt="audiomack" fill className='p-2'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Audiomack</div>
                                <div className='text-md-lg'>Add an Audiomack player to your Linktree</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative'>
                                <Image src="/Soundcloud.jpg" alt="soundcloud" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Soundcloud</div>
                                <div className='text-md-lg'>Get your music heard on soundcloud</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative'>
                                <Image src="/TiktokM.png" alt="tiktok" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Tiktok</div>
                                <div className='text-md-lg'>Share your TikToks on your Linktree</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14'>
                                <Image src="/XM.png" alt="x" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>X</div>
                                <div className='text-md-lg'>Showcase your posts and X feed</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14 border border-gray-500'>
                                <Image src="/YoutubeM.png" alt="youtube" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Youtube</div>
                                <div className='text-md-lg'>Share youtube videos on your Linktree</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative'>
                                <Image src="/Cameo.png" alt="cameo" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Cameo</div>
                                <div className='text-md-lg'>Make impossible fan connections possible</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-28'>
                    <div className='flex justify-between'>
                        <div className='text-3xl font-bold'>Make and collect money  </div>
                        <div className='underline text-blue-600 text-lg'>See All</div>
                    </div>
                    <div className='grid grid-cols-3 gap-10 mt-5'>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14'>
                                <Image src="/Gofundme.jpg" alt="gofundme" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>GoFundme</div>
                                <div className='text-md-lg'>Promote the cases you care about most</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14'>
                                <Image src="/Spring.jpg" alt="spring" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Spring</div>
                                <div className='text-md-lg'>Display your products to boost sales</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14 border border-gray-300'>
                                <Image src="/ShopifyM.png" alt="shopify" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Shopify</div>
                                <div className='text-md-lg'>Display your products to boost sales</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-28 flex h-[45vh]  rounded-3xl mx-20 justify-between items-center pl-12 bg-customMarketPlace'>
                <div className='flex flex-col gap-3 '>
                    <div className='text-6xl font-bold text-customDark'>Join our developer program</div>
                    <p className='text-2xl'>{`We're expanding access to our APIs and SDKs.`}</p>
                    <button className='bg-customDark rounded-full text-white text-lg p-3 w-[30%]'>Register Now</button>
                </div>
                <div className='h-full relative w-[62%] flex items-center justify-center'>
                    <Image src="/BackgroundImageM.svg" alt="bg" fill className='rounded-3xl'></Image>
                </div>
                </div >
                <div className='mb-28'>
                    <div className='flex justify-between'>
                        <div className='text-3xl font-bold'>Grow your following</div>
                        <div className='underline text-blue-600 text-lg'>See All</div>
                    </div>
                    <div className='grid grid-cols-3 gap-10 mt-5'>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14'>
                                <Image src="/Snapchat.png" alt="snapchat" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Snapchat</div>
                                <div className='text-md-lg'>Promote your public profile</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14'>
                                <Image src="/Reddit.jpg" alt="reddit" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Reddit</div>
                                <div className='text-md-lg'>Showcase your Reddit profile</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='bg-fuchsia-700 rounded-xl w-14 h-14 relative'>
                                <Image src="/Details.svg" alt="details" fill className='p-3'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Contact Details</div>
                                <div className='text-md-lg'>Easily share downloadable contact details</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative'>
                                <Image src="/Community.png" alt="community" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Community</div>
                                <div className='text-md-lg'>Build an SMS subscriber list</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='relative rounded-xl w-14 h-14 border border-gray-300'>
                                <Image src="/Gleam.png" alt="gleam" fill className='rounded-xl p-2'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Gleam</div>
                                <div className='text-md-lg'>Run campaingns to grow your audience</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='bg-customSapphire rounded-xl w-14 h-14 relative'>
                                <Image src="/Form.svg" alt="form" fill className='p-3'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Contact Form</div>
                                <div className='text-md-lg'>Collect visitor contact info and messages</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <div className='text-3xl font-bold'>All link apps and integrations</div>
                        <div className='underline text-blue-600 text-lg'>See All</div>
                    </div>
                    <div className='grid grid-cols-3 gap-10 mt-5'>
                        <div className='flex gap-2'>
                            <div className='bg-black rounded-xl w-14 h-14 relative'>
                                <Image src="/Opensea.png" alt="opensea" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>OpenSea</div>
                                <div className='text-md-lg'>Showcase NFTs on your Linktree</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative'>
                                <Image src="/SpotifyM.png" alt="spotify" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Spotify</div>
                                <div className='text-md-lg'>Share your latest or favourite music</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className=' rounded-xl w-14 h-14 relative border border-gray-300'>
                                <Image src="/FacebookM.jpg" alt="facebook" fill className='rounded-xl p-2'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Facebook</div>
                                <div className='text-md-lg'>Add facebook videos to your Linktree</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='rounded-xl w-14 h-14 relative'>
                                <Image src="/Pinterest.png" alt="Pinterest" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Pinterest</div>
                                <div className='text-md-lg'>Showcase Pins , boards and more</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='rounded-xl w-14 h-14 relative'>
                                <Image src="/Podcasts.svg" alt="Podcasts" fill className='rounded-xl'></Image>
                            </div>
                            <div>
                                <div className='text-xl font-bold'>Podcasts</div>
                                <div className='text-md-lg'>Get more podcasts listeners and subscribers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-customLight pb-14 pt-20'>
                <div className="bg-white rounded-xl w-[80%] p-16 mx-auto">
                    <div className="flex gap-32">
                        <div>
                            <div className='flex gap-2 justify-center items-center'>
                                <button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3 text-black'>Log in</button>
                                <button className='bg-fuchsia-600 text-lg text-white font-semibold rounded-full px-7 py-3 hover:cursor-pointer'>Sign up free</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3  font-semibold text-sm">
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>About Linktree</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Blog</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Press</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Social good</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Contact</span></Link>
                        </div>
                        <div className="flex flex-col gap-3 font-semibold text-sm">
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Carrers</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Getting Started</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Featurs and how-Tos</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm no-underline font-semibold'>FAQs</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Report a Violation</span></Link>
                        </div>
                        <div className="flex flex-col gap-3 font-semibold text-sm">
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Terms and conditions</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Privacy Notice</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Cookie Notice</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold '>Trust Center</span></Link>
                            <Link href="" className='no-underline'><span className='cursor-pointer text-sm font-semibold'>Cookie Preferences</span></Link>
                        </div>
                    </div>
                    <div className="flex mt-20 justify-between items-center gap-16">
                        <p className='text-black text-sm font-semibold'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging.</p>
                        <div className="flex gap-2 justify-center items-center">
                            <Link href=""><div className=' rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/X.png" alt="twitter" fill className="p-3"></Image></div></Link>
                            <Link href=""><div className=' rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/InstagramB.jpg" alt="instagram" fill className="p-3"></Image></div></Link>
                            <Link href=""><div className=' rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/youtubeB.jpg" alt="youtube" fill className='p-2'></Image></div></Link>
                            <Link href=""><div className=' rounded-full  hover:cursor-pointer relative w-14 h-14'><Image src="/tiktok.png" alt="tiktok" fill className="p-3"></Image></div></Link>
                            <Link href=""><div className=' rounded-full  hover:cursor-pointer relative w-14 h-14'><Image src="/LinktreeBlack.png" alt="tree" fill className="p-3"></Image></div></Link>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] mt-4 roundedP h-[55vh] bg-yellow-500 mx-auto flex justify-center items-center  font-bold gap-2 text-9xl text-black">
                    <p>Linktree</p>
                    <Image src="/LinktreeBlack.png" alt="tree" width={200} height='200'></Image>
                </div>
            </div>
        </>
    )
}

export default Page
