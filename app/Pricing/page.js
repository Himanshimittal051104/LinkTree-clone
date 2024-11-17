"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import localFont from "next/font/local";
import Image from 'next/image'
import Questions from '@/components/Questions'
import About from '@/components/About'
import Field from '@/components/Field';
import PricingCarousel from '@/components/PricingCarousel';
import AllFeatures from '@/components/AllFeatures';
const graphik = localFont({
    src: "../fonts/GraphikBold.otf",
    variable: "--font-graphik",
    weight: "100 900",
});
const graphikSemiBold = localFont({
    src: "../fonts/GraphikSemibold.otf",
    variable: "--font-graphiksemibold",
    weight: "100 900",
});
const graphikMedium = localFont({
    src: "../fonts/GraphikMedium.otf",
    variable: "--font-graphikMedium",
    weight: "100 900",
});
const Page = () => {
    const [select, setSelect] = useState(1)
    return (
        <div>
            <div className='bg-customLight pt-20 pb-40'>
                <div className='flex flex-col justify-center items-center gap-4 mb-14'>
                    <p className='text-6xl font-bold text-customDark'>Pricing</p>
                    <p className='font-semibold text-lg' >Save up to 30% on annual plans</p>
                    <div className='rounded-full bg-white flex gap-2 p-1'>
                        <span className={`cursor-pointer p-3 py-2.5 ${select == 1 ? "text-white  bg-customDark rounded-full" : "text-customDark"}`} onClick={() => setSelect(1)}>Monthly</span>
                        <span className={`cursor-pointer p-3 py-2.5 ${select == 2 ? "text-white bg-customDark rounded-full" : "text-customDark"}`} onClick={() => setSelect(2)}>Annually</span>
                    </div>
                </div>
                <div className='grid grid-cols-4 w-[86%] mx-auto '>
                    <div className='bg-white rounded-3xl w-[20vw] '>
                        <div className='bg-customDarkGray  text-3xl font-bold pt-5 pb-4 rounded-t-3xl px-4 '>Free
                        </div>
                        <div className='flex flex-col gap-2 font-semibold px-3 text-base py-3'>
                            <p>For your personal Linktree</p>
                            <p>Boost your digital presence and monetize your socials</p>
                            <p>Key features:</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={24} height={24}></Image>
                            <p className='font-bold'>Unlimited links</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Drive your offline traffic online with <b>QR codes</b></p>
                        </div> <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Grow your <b>cross-channel following</b> and connect all of your social profiles with one easy link</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Sell your merchandise and affiliate products with our <b>Shop</b> tab</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex flex-col justify-start items-center gap-4 mb-4 mt-60'>
                            <p className='text-3xl font-bold text-customDark pl-8 w-full'>Rs.0</p>
                            <p className='font-semibold text-sm pl-8 w-full' >Free, forever</p>
                            <div className='rounded-full border border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg'>
                                Join for free
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl w-[20vw] '>
                        <div className='bg-customDarkGray  text-3xl font-bold pt-5 pb-4 rounded-t-3xl px-4 '>Starter
                        </div>
                        <div className='flex flex-col gap-2 font-semibold px-3 text-base py-3'>
                            <p>For growing influencers</p>
                            <p>Capture attention and engage visitors effortlessly</p>
                            <p>Everything in Free, plus:</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p ><b>Schedule </b>a link to go live and disappear at specific dates and times</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p >Add <b>animations</b> {`to your most important links to highlight what's important`}</p>
                        </div> <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p ><b>Customize</b> your button colors and shapes, and choose the font that aligns with your brand or style</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p><b>Spotlight</b> a link so that the content is already on display when a visitor lands on your Linktree</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>View the <b>performance</b> of a specific link or social icon and track your commerce value</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex flex-col justify-start items-center gap-4 mb-4 mt-14'>
                            <p className='text-3xl font-bold text-customDark pl-8 w-full'>Rs.250</p>
                            <p className='font-semibold text-sm pl-8 w-full' >RS/month, billed monthly</p>
                            <div className='rounded-full border border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg'>
                                Get Starter
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl w-[20vw] '>
                        <div className='bg-bg13 text-white  font-bold pt-5 pb-4 rounded-t-3xl px-4 flex justify-between'>
                            <span className='text-3xl'>Pro</span>
                            <span className='bg-bg11 text-sm text-customDark font-medium flex justify-center items-center rounded-md px-2'>Most Popular</span>
                        </div>
                        <div className='flex flex-col gap-2 font-semibold px-3 text-base py-3'>
                            <p>For content creators and businesses</p>
                            <p>Elevate your brand, unlock insights and supercharge growth</p>
                            <p>Everything in Starter, plus:</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p >Create a <b>bespoke</b> Linktree that matches your branding or style. Add text, images, thumbnails, and animated backgrounds</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p >Gain deeper<b> insights </b> with comprehensive location/referrer based analytics and conversion tracking</p>
                        </div> <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p >Collect <b>email addresses and phone numbers </b>directly from your Linktree to build your own visitor list</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p ><b>Marketing tech</b> capabilities including SEO settings, Google Analytics, Zapier, and Mailchimp integrations</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/steps.svg" alt="steps" width={20} height={20}></Image>
                            <p className='text-customGrey font-semibold'>Pro users get more engagement</p>
                        </div>
                        <div className='flex flex-col justify-start items-center gap-4 mb-4 mt-1'>
                            <p className='text-3xl font-bold text-customDark text-start w-full ml-8'>Free for 30 days</p>
                            <p className='font-semibold text-sm' >Rs.450 RS per month after, billed monthly</p>
                            <div className='rounded-full bg-bg12 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg'>
                                Try Pro for free
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl w-[20vw] '>
                        <div className='bg-customDarkGray  text-3xl font-bold pt-5 pb-4 rounded-t-3xl px-4 '>Premium
                        </div>
                        <div className='flex flex-col gap-2 font-semibold px-3 text-base py-3'>
                            <p>For brands and businesses</p>
                            <p>Gain personalized, high touch support to build your best Linktree</p>
                            <p>Everything in Pro, plus:</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Get <b>tailored onboarding</b> to help you get setup and optimise your Linktree from day one</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Priority <b>customer support</b> from one of our experts via email or video call</p>
                        </div> <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex items-center justify-center gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={30} height={30}></Image>
                            <p>Access to <b>unlimited historical insights</b> from the lifetime of your Linktree</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>

                        <div className='flex items-center justify-start gap-1 px-3 py-2'>
                            <Image src="/tickP.svg" alt="tick" width={24} height={24}></Image>
                            <p><b>Export</b> your analytics data</p>
                        </div>
                        <div className='h-[1px] mx-3 bg-customMarketPlace'></div>
                        <div className='flex flex-col justify-start items-center gap-4 mb-4 mt-48'>
                            <p className='text-3xl font-bold text-customDark pl-8 w-full'>Rs.1000</p>
                            <p className='font-semibold text-sm pl-8 w-full' >RS/month, billed monthly</p>
                            <div className='rounded-full border border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg'>
                                Get Premium
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-4 gap-1'>
                    <p className='underline text-lg font-semibold' >Explore all features</p>
                    <Image src="/DownArrowB.svg" alt="downArrow" width={20} height={20}></Image>
                </div>
                <div className="pt-28 bg-customLight text-center px-24">
                    <p className="text-6xl font-bold text-customDark">Trusted by 50M+</p>
                    <div className="text-6xl font-bold text-blue-600 mt-3 w-[100%] h-[70px]"><Field /></div>
                </div>
                <div className='mt-16'><PricingCarousel/></div>
                <div className={`text-6xl my-32 px-24 ${graphik.className} text-customDark`}>All Features</div>
                <div><AllFeatures/></div>
                <div className=' flex items-center justify-center rounded-full  h-[60vh] bg-bg12 w-[85%] mt-52 mx-auto text-bg13 font-bold text-5xl px-24 text-center'>Learn more about centralised login,single-invoice enterprise plans</div>
                <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[60%] mx-auto mt-40'>
                    <p className={` text-6xl text-center font-bold w-[90%] ${graphik.className}`}>Everything you need, and then some.</p>
                    <button className="bg-bg12 rounded-full p-2 py-3 text-lg font-semibold mt-2 w-[18%]">Join the pros</button>
                </div>
                <div className='px-24'>
                    <div className={`mt-20 grid grid-cols-3 gap-4 `}>
                        <div className='rounded-3xl bg-bg12 text-bg13 p-12'>
                            <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/Customization.avif" alt="moreclicks" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Enhanced Customization</div>
                            <p className={`${graphikMedium.className} text-md-lg `}>From video backgrounds to removing the Linktree logo: get even more power to make your page pop.</p>
                            <div className='flex gap-2  mt-10 text-bg13 font-bold text-sm'>
                                <div className='border border-black rounded-full p-2'>Premium</div>
                                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                                <div className='border border-black rounded-full p-2'>Smarter</div>
                            </div>
                        </div>
                        <div className='rounded-3xl bg-bg11 text-customDark p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Data.avif" alt="moreEngagement" fill className=''></Image></div>
                            <div className={`text-3xl my-8  font-semibold ${graphikSemiBold.className}`}>Extended Analytics</div>
                            <p className={`text-md-lg mt-16 ${graphikMedium.className}`}>See what’s performing and download extensive analytics to shape your Linktree for success.</p>
                            <div className='flex gap-2  mt-10 text-black font-bold text-sm'>
                                <div className='border border-black rounded-full p-2'>Premium</div>
                                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                                <div className='border border-black rounded-full p-2'>Smarter</div>
                            </div>
                        </div>
                        <div className='rounded-3xl bg-bg3 text-bg12 p-12'>
                            <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Email.avif" alt="moreMoney" fill className=''></Image></div>
                            <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Email & SMS Integrations</div>
                            <p className={`text-md-lg ${graphikMedium.className}`}>Build an audience you reach anywhere, any time by collecting email and SMS details on your Linktree.</p>
                            <div className='flex gap-2  mt-10 text-white font-bold text-sm'>
                                <div className='border border-white rounded-full p-2'>Premium</div>
                                <div className='border border-white rounded-full p-2 px-3'>Pro</div>
                                <div className='border border-white rounded-full p-2'>Smarter</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-w-[100%]' >
                    <div className="rounded-full mt-40 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
                        <Image src='/Catie.avif' alt='luke' fill className="object-cover rounded-full"></Image>
                    </div>
                    <div className='w-[75%] mx-auto'>
                        <p className='text-6xl font-extrabold text-center text-customDark mt-16'>{`“I’d recommend Linktree to other creators! It’s very powerful for getting more eyes on your content.”`}</p>
                        <p className='text-lg text-gray-500 font-semibold text-center mt-8 mb-1'>Catie T (Millennial Money Honey),</p>
                        <p className='text-lg text-gray-500 font-semibold text-center'>Designer, Art Director and Financial Independence Educator</p>
                    </div>
                </div>
            </div>
            <Questions />
            <About />
        </div >
    )
}

export default Page
