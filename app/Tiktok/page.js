"use client"
import React from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import About from '@/components/About';
import Field from '@/components/Field';
import TiktokCarousel from '@/components/TiktokCarousel';
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
const page = () => {

    return (
        <div>
            <div className="bg-customSapphire grid grid-cols-2 gap-8 px-24 pt-60 pb-24 ">
                <div className="flex flex-col gap-8 justify-center ">
                    <p className={`text-white text-6xl font-bold ${graphik.className}`}>Get more TikTok followers</p>
                    <p className="text-white font-semibold text-md-lg">Showcase your TikTok profile and the videos you love most and give your Linktree visitors an easy way to follow you for more.</p>
                    <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free</button>
                </div>
                <div className='flex  justify-center h-[90vh] relative '>
                    <Image src="/LinkedTiktok.avif" alt="LinkedBrandt" fill className=''></Image>
                </div>
            </div>
            <div className="bg-bg3 grid grid-cols-2 px-24 pt-96 ">
                <div className='flex  justify-center h-[90vh] relative'>
                    <Image src="/LinkLinkedlin.avif" alt="twitterPage" fill className='-mt-40'></Image>
                </div>
                <div className="flex flex-col gap-8">
                    <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>Put your best content forward</p>
                    <p className="text-bg12 font-semibold text-lg">Curate a blend of six videos that will turn your Linktree visitors into TikTok followers. All it takes is a few clicks.</p>
                    <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[40%] font-semibold">Add a Tiktok Profile Link</button>
                </div>
            </div>
            <div className='bg-customLight  px-24 pt-28 '>
                <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[60%] mx-auto'>
                    <p className={` text-6xl text-center font-bold ${graphik.className}`}>So many ways to grow</p>
                    <p className={` text-md-lg text-center font-semibold ${graphikMedium.className}`}>More clicks on your content. More subscriptions to your email list. More traffic to your online store. Start growing your numbers with the TikTok Profile link today.</p>
                </div>
                <div className='pb-40'>
                    <div className={`mt-20 grid grid-cols-3 gap-4 `}>
                        <div className='rounded-3xl bg-customSapphire text-white p-12 pb-16'>
                            <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/UnlimitedLinks.avif" alt="UnlimitedLinks " fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Get more views</div>
                            <p className={`${graphikMedium.className} text-md-lg `}>Expand your TikTok audience by sharing videos on Linktree for all your visitors to see.</p>
                        </div>
                        <div className='rounded-3xl bg-customOlive text-white p-12 pb-16 pr-10'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Video.avif" alt="video" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Keep your fans up to date</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Automatically update your Linktree with your latest TikToks to keep your audience growing.</p>
                        </div>
                        <div className='rounded-3xl bg-customMustardYellow text-customDark p-12 pr-10 pb-16'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Contact.avif" alt="moreMoney" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Attract collaborations</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Get your content out to as many eyes as possible and bring in the right partners for your brand.</p>
                        </div>
                        <div className='rounded-3xl bg-bg12 text-bg13 p-12 pb-16'>
                            <div className='w-full h-72 flex items-center justify-center relative -mt-8'><Image src="/GetFunding.avif" alt="moreEngagement" fill className=''></Image></div>
                            <div className={`text-3xl mt-3 font-semibold ${graphikSemiBold.className}`}>Sell your products</div>
                            <p className={`text-md-lg mt-8 ${graphikMedium.className}`}>Sell digital and physical products in a simple to-set-up storefront and watch your sales grow.</p>
                        </div>
                        <div className='rounded-3xl bg-bg3 text-bg12 p-12 pr-10 pb-12'>
                            <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/Podcasts.avif" alt="moreclicks" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Earn affiliate revenue</div>
                            <p className={`${graphikMedium.className} text-md-lg `}>Connect your Amazon and Apple Music affiliate links and earn revenue for your visitors’ purchases.</p>
                        </div>
                        <div className='rounded-3xl bg-bg13 text-bg12 p-12 pb-16'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/3comp.webp" alt="moreMoney" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Collect Email & SMS Subscribers</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Build an audience you reach anywhere, any time, by collecting email and SMS details.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-customLight px-24 '>
                <div className='pb-24'>
                    <p className={` text-6xl text-center w-[70%] mx-auto font-bold ${graphik.className}`}>How it works</p>
                    <p className={` text-md-ld text-center mt-3 font-bold ${graphikMedium.className}`}>Set up your ‘Link in Bio’ for TikTok in 3 easy steps:</p>
                    <div className={`mt-20 grid grid-cols-3 gap-4 ${graphikSemiBold.className}`}>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>1</div>
                            <div className='text-3xl my-8 font-semibold'>Create and customize</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Create your account in seconds. Then, customize your background and photos and add unlimited links and link apps.</p>
                        </div>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>2</div>
                            <div className='text-3xl my-8 font-semibold'>Update your bio link</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Put your Linktree URL in your bio and never update the link in your bio again. All your content, everything you are, in one bio link.</p>
                        </div>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>3</div>
                            <div className='text-3xl my-8 font-semibold'>Watch your followers grow</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Connect your followers to everything you do automatically, so they can engage and connect with all of your content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 bg-customLight text-center px-24">
                <p className="text-6xl font-bold text-customDark">Trusted by 50M+</p>
                <div className="text-6xl font-bold text-blue-600 mt-3 w-[100%] h-[70px]"><Field /></div>
            </div>
            <div className="pt-28 bg-customLight">
                <TiktokCarousel />
            </div>
            <div className=' bg-customLight px-24 pt-40 pb-40'>
                <div className={`w-full rounded-full h-[60vh] bg-customSapphire text-white flex items-center justify-center text-5xl font-bold`}>Sign up for free now</div>
            </div>
            <div className="bg-bg12 grid grid-cols-2 px-24 pt-48 pb-32">
                <div className='flex  justify-center h-[100vh] relative'>
                    <Image src="/NotChange.avif" alt="goodCompany" fill className='-mt-5'></Image>
                </div>
                <div className="flex flex-col gap-8 justify-center ml-10">
                    <p className={`text-bg13 text-7xl font-bold ${graphik.className}`}>Never Change Your Bio Link Again</p>
                    <p className="text-bg13 font-semibold text-lg">Keep your bio link up to date and manage the content you share with your followers through your Linktree account, including your latest blogs, TikToks and YouTube videos. You can even showcase your newest product, music, podcast, events, promos and more.</p>
                    <button className="bg-bg13 text-white rounded-full p-3 py-3 text-lg w-[35%] font-semibold">Sign up for free now</button>
                </div>
            </div>
            <About />
        </div >
    )
}

export default page
