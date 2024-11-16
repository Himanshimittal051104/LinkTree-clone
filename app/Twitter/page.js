"use client"
import React from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import About from '@/components/About';
import Link from 'next/link';
import QuestionsTwitter from '@/components/QuestionsTwitter';
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
            <div className="bg-bg13 grid grid-cols-2 px-24 pt-40">
                <div className="flex flex-col gap-8">
                    <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>Say more with your characters. Join the #1 link in bio tool for Twitter</p>
                    <p className="text-bg12 font-semibold text-lg">Discover how 50M+ creators, musicians, influencers, and brands use this new Twitter tool to show their audience everything they do with one simple link.</p>
                    <Link href="/Signup">
                    <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
                </div>
                <div className='flex  justify-center h-[90vh] relative'>
                    <Image src="/LinkTwitter.avif" alt="twitterPage" fill className='-mt-40'></Image>
                </div>
            </div>
            <div className='bg-customLight px-24 pt-60 '>
                <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[65%] mx-auto'>
                    <p className={` text-6xl text-center font-bold ${graphik.className}`}>Unlock the full power of your Twitter account</p>
                    <p className={` text-lg text-center font-semibold`}>With Linktree’s link in bio for Twitter you can power up your tweets and help your audience discover everything you have to offer beyond 280 characters.</p>
                    <Link href="/Signup">
                    <button className="bg-bg12 rounded-full p-3 py-3 text-lg w-[100%] font-semibold mt-2">Sign up for free now</button></Link>
                </div>
                <div className='pb-60'>
                    <div className={`mt-20 grid grid-cols-3 gap-4 `}>
                        <div className='rounded-3xl bg-bg12 text-bg13 p-12'>
                            <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/moreclicks.png" alt="moreclicks" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Connect followers beyond your 280 characters</div>
                            <p className={`${graphikMedium.className} text-md-lg `}>
                                Now you can continue ther conversation off twitter and drive more traffic and web visits to your blog posts,product pages,social platforms,albums,podcasts,streams and more.Connect your followers with everything in just one click.
                            </p>
                        </div>
                        <div className='rounded-3xl bg-bg11 text-customDark p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/3comp.webp" alt="moreEngagement" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Link to your products,deals and discounts</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>
                                Guide buyers to your promotions and deals or affiliates and showcase all your products beyond 280 characters. Take payments for services or bookings, and even include a Tip Jar link to let your followers support, tip or donate to you or your causes.
                            </p>
                        </div>
                        <div className='rounded-3xl bg-bg3 text-bg12 p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Data.avif" alt="moreMoney" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Use data to grow engagement and sales</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>
                                Get accurate insights and know exactly which content works best for you. Linktree’s easy-to-use analytics dashboard tracks your clicks, measures click-through rates and analyzes conversions, so you can make data-driven decisions to increase engagement and sales.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-cols-2 ">
                    <div className='flex  justify-center h-[85vh] relative w-[90%]'>
                        <Image src="/4compo.webp" alt="insta4compo" fill className='-mt-20'></Image>
                    </div>
                    <div className="flex flex-col gap-8">
                        <p className={` text-7xl font-bold ${graphik.className}`}>Use data to grow engagement and sales</p>
                        <p className=" font-semibold text-lg">Get accurate insights and know exactly which content works best for you. Linktree’s easy-to-use analytics dashboard tracks your clicks, measures click-through rates and analyzes conversions, so you can make data-driven decisions to increase engagement and sales.</p>
                        <Link href="/Signup">
                        <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
                    </div>
                </div>
                <div className='pb-24'>
                    <p className={` text-7xl text-center font-bold ${graphik.className}`}>How it works</p>
                    <p className={` text-xl text-center mt-3 font-bold ${graphikMedium.className}`}>Set up your link in bio for Instagram in three easy steps</p>
                    <div className={`mt-20 grid grid-cols-3 gap-4 ${graphikSemiBold.className}`}>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
                            <div className='text-3xl my-8 font-semibold'>Step 1. Create and customize your free (forever) Linktree</div>
                            <p className={`text-lg ${graphikMedium.className}`}>Simply click the button below and create your free Linktree account – it takes less than 1 minute. Make it yours with custom backgrounds, profile pictures, unlimited links and link apps.</p>
                        </div>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
                            <div className='text-3xl my-8 font-semibold'>Step 2. Update your bio link on Twitter</div>
                            <p className={`text-lg ${graphikMedium.className}`}>Put your Linktree URL in your bio and never update the link in your bio again! All your content, everything you are, in one bio link.</p>
                        </div>
                        <div className='rounded-3xl bg-white p-12'>
                            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
                            <div className='text-3xl my-8 font-semibold'>Step 3. Connect your followers to anything, and everything</div>
                            <p className={`text-lg ${graphikMedium.className}`}>Now your followers are automatically connected to everything you do, and can engage and connect with all of your content.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[65%] mx-auto'>
                    <p className={` text-6xl text-center font-bold ${graphik.className}`}>Turn your link in bio into your own mini website</p>
                    <p className={` text-xl text-center font-semibold text-gray-500 ${graphikMedium.className}`}>It takes seconds to turn your bio into a mini website, allowing your followers to engage with your content, discover you on other platforms or purchase and support you with one simple link.</p>
                    <Link href="/Signup">
                    <button className="bg-bg12 rounded-full p-3 py-3 text-lg w-[100%] font-semibold mt-2">Sign up for free now</button></Link>
                </div>
                <div className='pb-60'>
                    <div className={`mt-20 grid grid-cols-3 gap-4 `}>
                        <div className='rounded-3xl bg-bg12 text-bg13 p-12'>
                            <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/Video.avif" alt="moreclicks" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Embed Videos</div>
                            <p className={`${graphikMedium.className} text-md-lg `}>
                                Embed any YouTube, Twitch, TikTok, Facebook or Vimeo videos directly in your Linktree. Customize play options with mute or autoplay.
                            </p>
                        </div>
                        <div className='rounded-3xl bg-bg11 text-customDark p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/getPaid.avif" alt="moreEngagement" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Get Paid</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>
                                Add a Tip Jar,a Requests Link App or a Shopify or Spring store directly onto your Linktree.
                            </p>
                        </div>
                        <div className='rounded-3xl bg-bg3 text-bg12 p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/createForm.avif" alt="moreMoney" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Create Forms</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>
                                Create a contact from to collect a visitor names,emails,mobile numbers,countries and let them leave you messages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-bg12 grid grid-cols-2 px-24  pt-48 pb-32">
                <div className='flex  justify-center h-[100vh] relative'>
                    <Image src="/NotChangetwit.avif" alt="neverchange" fill className='-mt-5'></Image>
                </div>
                <div className="flex flex-col gap-8 justify-center ml-10">
                    <p className={`text-bg13 text-7xl font-bold ${graphik.className}`}>Never Change Your Bio Link Again</p>
                    <p className="text-bg13 font-semibold text-lg">Easily keep your Twitter profile link up to date and manage all of the content you want to share with your followers through your Linktree account. You can add and share your latest blogs, TikToks, YouTube videos, or even showcase your newest product, music, podcast, events and promos.</p>
                    <Link href="/Signup">
                    <button className="bg-bg13 text-white rounded-full p-3 py-3 text-lg w-[35%] font-semibold">Sign up for free now</button></Link>
                </div>
            </div>
            <div className="bg-customSapphire grid grid-cols-2 gap-8 px-24 pt-60 pb-24 ">
                <div className="flex flex-col gap-8 justify-center ">
                    <p className={`text-white text-6xl font-bold ${graphik.className}`}>See what your followers engage with</p>
                    <p className="text-white font-semibold text-lg">Take the guesswork out of what your followers find interesting, and want to learn about from you… Linktree has razor- sharp analytics and with an intuitive dashboard that allows you to stay on top of your most loved content, and easily identify what your followers love the most.</p>
                    <Link href="/Signup">
                    <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
                </div>
                <div className='flex  justify-center h-[100vh] relative '>
                    <Image src="/engagetwit.avif" alt="engagetwitt" fill className=''></Image>
                </div>
            </div>
            <div className="bg-customLight grid grid-cols-2 px-24 pt-40 pb-24 gap-12">
                <div className='flex  justify-center h-[100vh] relative'>
                    <Image src="/fastPay.webp" alt="fastPay" fill className=''></Image>
                </div>
                <div className="flex flex-col gap-8 justify-center">
                    <p className={`text-black text-6xl font-bold ${graphik.className}`}>Take fast payments with Commerce Links</p>
                    <p className="text-black font-semibold text-lg">Connect your store and start getting paid directly on Twitter via your Linktree. Make buying a seamless experience with just one link. No tech setup or complicated systems needed!</p>
                    <Link href="/Signup">
                    <button className="bg-bg12  text-bg13 rounded-full p-2 py-3 text-lg w-[35%] font-semibold">Sign up for free now</button>
                    </Link>
                </div>
            </div>
            <div className=' bg-customLight px-24'>
                <p className={`text-customDark text-center text-6xl font-bold ${graphik.className} w-[70%] mx-auto`}>How Linktree helps you get the most out of Twitter</p>
                <div className={`pt-20 pb-28 grid grid-cols-2 gap-4 ${graphikSemiBold.className}`}>
                    <div className='rounded-3xl bg-white p-12'>
                        <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackDollar.svg" alt="coin" width={20} height={20}></Image></div>
                        <div className='text-3xl mt-8 font-semibold'>Create your Linktree and connect it to your Instagram bio in minutes.</div>
                    </div>
                    <div className='rounded-3xl bg-white p-12'>
                        <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackmagic.svg" alt="magic" width={20} height={20}></Image></div>
                        <div className='text-3xl mt-8 font-semibold'>Add your Linktree to your Instagram bio once-no need to update it ever again.</div>
                    </div>
                    <div className='rounded-3xl bg-white p-12'>
                        <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/phone.svg" alt="phone" width={20} height={20}></Image></div>
                        <div className='text-3xl mt-8 font-semibold'>Start growing your followers across all your other social media profiles.</div>
                    </div>
                    <div className='rounded-3xl bg-white p-12'>
                        <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackTiktok.svg" alt="tiktok" width={20} height={20}></Image></div>
                        <div className='text-3xl mt-8 '>Sell products & monetize content with Commerce Links & partner integrations.</div>
                    </div>
                </div>
            </div>
            <QuestionsTwitter />
            <About />
        </div >
    )
}

export default page
