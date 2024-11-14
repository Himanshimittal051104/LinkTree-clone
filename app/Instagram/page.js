"use client"
import React from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import About from '@/components/About';
import QuestionsInsta from '@/components/QuestionsInsta';
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
      <div className="bg-bg13 grid grid-cols-2 px-24 pt-60 ">
        <div className="flex flex-col gap-8 justify-center">
          <p className={`text-bg12 text-7xl font-bold ${graphik.className}`}>The best link in bio tool for Instagram</p>
          <p className="text-bg12 font-semibold text-lg">Join the 50M+ creators, musicians, influencers and brands using Linktree to share content and grow audiences with one simple link.</p>
          <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
        </div>
        <div className='flex  justify-center h-[130vh] relative'>
          <Image src="/linkInsta.webp" alt="instagramPage" fill className=''></Image>
        </div>
      </div>
      <div className='bg-customLight px-24 pt-60 '>
        <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[65%] mx-auto'>
          <p className={` text-6xl text-center font-bold ${graphik.className}`}>Get more with Linktree</p>
          <p className={` text-lg text-center font-semibold`}>Help your followers discover, enjoy and support everything you have to offer when you add Linktree’s ‘Link In Bio’ to your Instagram today.</p>
          <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[25%] font-semibold mt-2">Sign up for free now</button>
        </div>
        <div className='pb-60'>
          <div className={`mt-20 grid grid-cols-3 gap-4 `}>
            <div className='rounded-3xl bg-bg12 text-bg13 p-12'>
              <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/moreclicks.png" alt="moreclicks" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>More clicks</div>
              <p className={`${graphikMedium.className} text-md-lg `}>Get more clicks on your content—from blog posts to socials and everything in between.</p>
              <div className='flex gap-2  mt-10 text-bg13 font-bold text-sm'>
                <div className='border border-black rounded-full p-2 px-3'>Free</div>
                <div className='border border-black rounded-full p-2'>Premium</div>
                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                <div className='border border-black rounded-full p-2'>Smarter</div>
              </div>
            </div>
            <div className='rounded-3xl bg-bg11 text-customDark p-12'>
              <div className='w-full h-60 flex items-center justify-center relative'><Image src="/paranormal.webp" alt="moreEngagement" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>More engagement</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Let your followers enjoy all content and important links from one easy spot with just a few clicks.</p>
              <div className='flex gap-2  mt-10 text-black font-bold text-sm'>
                <div className='border border-black rounded-full p-2 px-3'>Free</div>
                <div className='border border-black rounded-full p-2'>Premium</div>
                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                <div className='border border-black rounded-full p-2'>Smarter</div>
              </div>
            </div>
            <div className='rounded-3xl bg-bg3 text-bg12 p-12'>
              <div className='w-full h-60 flex items-center justify-center relative'><Image src="/3comp.webp" alt="moreMoney" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>More money</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Sell your products, take service payments and add a “Tip Jar” to earn money with your content.</p>
              <div className='flex gap-2  mt-10 text-white font-bold text-sm'>
                <div className='border border-white rounded-full p-2 px-3'>Free</div>
                <div className='border border-white rounded-full p-2'>Premium</div>
                <div className='border border-white rounded-full p-2 px-3'>Pro</div>
                <div className='border border-white rounded-full p-2'>Smarter</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 ">
          <div className='flex  justify-center h-[85vh] relative w-[90%]'>
            <Image src="/4compo.webp" alt="insta4compo" fill className='-mt-40'></Image>
          </div>
          <div className="flex flex-col gap-8">
            <p className={` text-7xl font-bold ${graphik.className}`}>More data, more growth</p>
            <p className=" font-semibold text-lg">Track your clicks, measure click-through rates and analyze conversions to make data-driven decisions that increase engagement and sales.</p>
            <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
          </div>
        </div>
        <div className='pb-24'>
          <p className={` text-7xl text-center font-bold ${graphik.className}`}>Getting started is easy</p>
          <div className={`mt-20 grid grid-cols-3 gap-4 ${graphikSemiBold.className}`}>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
              <div className='text-3xl my-8 font-semibold'>Create and customize your free (forever) Linktree</div>
              <p className={`text-lg ${graphikMedium.className}`}>Add your personalized Linktree URL to your bio and give your followers easy access to all your content past, present and future.</p>
            </div>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
              <div className='text-3xl my-8 font-semibold'>Update your bio link on Instagram</div>
              <p className={`text-lg ${graphikMedium.className}`}>Add your personalized Linktree URL to your bio and give your followers easy access to all your content past, present and future.</p>
            </div>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/tick.svg" alt="right" width={20} height={20}></Image></div>
              <div className='text-3xl my-8 font-semibold'>Get more from your Instagram</div>
              <p className={`text-lg ${graphikMedium.className}`}>Start seeing the power of Linktree as your followers connect with all of your content and support everything you have to offer.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg1 grid grid-cols-2 px-24 pt-40 pb-8">
        <div className="flex flex-col gap-8">
          <p className={`text-bg11 text-7xl font-bold ${graphik.className}`}>Minimal time, no cost</p>
          <p className="text-bg11 font-semibold text-lg">Creating your Linktree—think of it as a one-page miniwebsite—takes seconds and costs nothing.</p>
          <ul className='text-bg11 text-lg font-semibold '>
            <li className='flex gap-2 '><Image src="/palette.png" alt="palette" width={30} height={30} ></Image>Choose your own theme & design.</li>
            <li className='flex gap-2 my-2'><Image src="/link.png" alt="link" width={30} height={30} ></Image>Add your (unlimited) links.</li>
            <li className='flex gap-2'><Image src="/camera.png" alt="camera" width={30} height={30} ></Image>Insert your Linktree link In your Instagram bio.</li>
            <li className='flex gap-2 my-2'><Image src="/Money_Emoji_Icon.avif" alt="moneyEmoji" width={30} height={30} ></Image>Start sharing and start getting paid!</li>
          </ul>
          <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
        </div>
        <div className='flex  justify-center h-[100vh] relative'>
          <Image src="/minimalTime.webp" alt="instagramPageMinimalTime" fill className='-mt-20'></Image>
        </div>
      </div>
      <div className="bg-bg12 grid grid-cols-2 px-24 pt-40 pb-8">
        <div className='flex  justify-center h-[100vh] relative'>
          <Image src="/goodCompany.webp" alt="goodCompany" fill className='-mt-10'></Image>
        </div>
        <div className="flex flex-col gap-8 justify-center ml-10">
          <p className={`text-bg13 text-7xl font-bold ${graphik.className}`}>Good company</p>
          <p className="text-bg13 font-semibold text-lg">Sign up for the same link in bio tool that 50M+ of your favorite creators, musicians, influencers and brands use to keep growing.</p>
          <button className="bg-bg13 text-white rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
        </div>
      </div>
      <div className="bg-bg13 grid grid-cols-2 px-24 pt-60 pb-24 ">
        <div className="flex flex-col gap-8 justify-center">
          <p className={`text-bg12 text-7xl font-bold ${graphik.className}`}>Performance insights</p>
          <p className="text-bg12 font-semibold text-lg">See razor-sharp analytics on an intuitive dashboard to easily identify what your followers love the most.</p>
          <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
        </div>
        <div className='flex  justify-center h-[100vh] relative'>
          <Image src="/performanceInsights.webp" alt="performanceInsights" fill className=''></Image>
        </div>
      </div>
      <div className="bg-customLight grid grid-cols-2 pl-24 pr-12 pt-40 pb-24 ">
        <div className='flex  justify-center h-[100vh] relative'>
          <Image src="/fastPay.webp" alt="fastPay" fill className=''></Image>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <p className={`text-black text-6xl font-bold ${graphik.className}`}>Fast, easy payments</p>
          <p className="text-black font-semibold text-lg">Connect your store to get paid directly on your Instagram via your Linktree. No tech set up or complicated systems needed!</p>
          <button className="bg-bg13 text-white rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button>
        </div>
      </div>
      <div className=' bg-customLight px-24'>
        <p className={`text-black text-center text-6xl font-bold ${graphik.className} w-[80%] mx-auto`}>How to start getting more out of your Instagram with Linktree</p>
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
      <QuestionsInsta />
      <About />
    </div>
  )
}

export default page
