"use client"
import React from 'react'
import Image from "next/image";
import localFont from "next/font/local";
import About from '@/components/About';
import Link from 'next/link';
import QuestionsLinkedln from '@/components/QuestionsLinkedln';
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
      <div className="bg-bg13 grid grid-cols-2 px-24 pt-40 ">
        <div className="flex flex-col gap-8">
          <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>Grow your LinkedIn community, and connect them to everything you do</p>
          <p className="text-bg12 font-semibold text-lg">Discover how 50M+ Creators, Entrepreneurs, Small Businesses, Brands and Candidates help their network, connections and followers discover everything they do with one simple link.</p>
          <Link href="/Signup">
          <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
        </div>
        <div className='flex  justify-center h-[90vh] relative'>
          <Image src="/LinkLinkedlin.avif" alt="twitterPage" fill className='-mt-40'></Image>
        </div>
      </div>
      <div className='bg-customLight  px-24 pt-28 '>
      <div className=" grid grid-cols-2 gap-12  pb-48 text-black ">
        <div className=' h-[100vh] relative '>
          <Image src="/Linked.avif" alt="LinkedBrandt" fill className=''></Image>
        </div>
        <div className="flex flex-col justify-center ">
          <p className={` text-6xl font-bold ${graphik.className} text-customDark`}>Show your LinkedIn network everything you do</p>
          <p className=" font-semibold text-md-lg mt-8">Now you can add unlimited links to your LinkedIn by using Linktree and LinkedIn’s share links tool! LinkedIn’s new free Creator Mode allows you to add a single, visible link in your LinkedIn profile.</p>
          <p className=" font-semibold text-md-lg mb-12">When potential employers, clients, or connections find your profile or trending post, they can access your work, portfolio, resume, website, socials, or content within seconds.</p>
          <Link href="/Signup">
          <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[35%] font-semibold ">Sign up for free now</button></Link>
        </div>
      </div>
        <div className='flex flex-col justify-center items-center pb-6 gap-4 w-[60%] mx-auto'>
          <p className={` text-6xl text-center font-bold ${graphik.className}`}>Showcase your important content</p>
          <p className={` text-lg text-center font-semibold`}>Introduce your network to all your important content, with just one link. Put forward your best YouTube videos, your top blog posts, all your podcast episode links, your latest Tweets, your calendar link, contact forms, and more…. All in one place with just one link!</p>
        </div>
        <div className='pb-60'>
          <div className={`mt-20 grid grid-cols-3 gap-4 `}>
            <div className='rounded-3xl bg-bg12 text-bg13 p-12'>
              <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/UnlimitedLinks.avif" alt="UnlimitedLinks " fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Unlimited Links</div>
              <p className={`${graphikMedium.className} text-md-lg `}>You have a lot to share, that’s why we don’t put a limit on the number of links you can add to your Linktree.</p>
              <div className={`flex gap-2  mt-10 text-bg13 font-bold text-sm ${graphikMedium.className}`}>
                <div className='border border-black rounded-full p-2 px-3'>Free</div>
                <div className='border border-black rounded-full p-2'>Premium</div>
                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                <div className='border border-black rounded-full p-2'>Smarter</div>
              </div>
            </div>
            <div className='rounded-3xl bg-bg11 text-customDark p-12 pr-10'>
              <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Video.avif" alt="video" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Video</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Engage your visitors with video. Connect Twitch, TikTok, Facebook & YouTube and control how they display on your Linktree.</p>
              <div className={`flex gap-2  mt-10 text-black ${graphikMedium.className} font-bold text-sm`}>
                <div className='border border-black rounded-full p-2 px-3'>Free</div>
                <div className='border border-black rounded-full p-2'>Premium</div>
                <div className='border border-black rounded-full p-2 px-3'>Pro</div>
                <div className='border border-black rounded-full p-2'>Smarter</div>
              </div>
            </div>
            <div className='rounded-3xl bg-customSapphire text-white p-12 pr-10'>
              <div className='w-full h-60 flex items-center justify-center relative'><Image src="/Contact.avif" alt="moreMoney" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Contact Form Link App</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Create a contact form to collect visitor names, emails, mobile numbers, countries, and let them leave you messages.</p>
              <div className={`flex gap-2  mt-3 text-white font-bold text-sm ${graphikMedium.className}`}>
                <div className='border border-white rounded-full p-2 px-3'>Free</div>
                <div className='border border-white rounded-full p-2'>Premium</div>
                <div className='border border-white rounded-full p-2 px-3'>Pro</div>
                <div className='border border-white rounded-full p-2'>Smarter</div>
              </div>
            </div>
            <div className='rounded-3xl bg-bg11 text-customDark p-12'>
              <div className='w-full h-72 flex items-center justify-center relative -mt-8'><Image src="/GetFunding.avif" alt="moreEngagement" fill className=''></Image></div>
              <div className={`text-3xl mt-3 font-semibold ${graphikSemiBold.className}`}>Get funding support</div>
              <p className={`text-md-lg mt-8 ${graphikMedium.className}`}>Fundraise, receive donations and collect tips from your visitors directly on your Linktree.</p>
              <div className={`flex gap-2  mt-10 text-black font-bold text-sm ${graphikMedium.className}`}>
                <div className='border border-black rounded-full p-2 px-3'>Free</div>
              </div>
            </div>
            <div className='rounded-3xl bg-customSapphire text-white p-12 pr-10'>
              <div className=' w-full h-60 flex items-center justify-center relative'><Image src="/Podcasts.avif" alt="moreclicks" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Podcasts</div>
              <p className={`${graphikMedium.className} text-md-lg `}>Get more plays on your podcast. Connect your show or individual episodes and turn traffic into listeners and subscribers.</p>
              <div className={`flex gap-2  mt-10 text-white font-bold text-sm ${graphikMedium.className}`}>
                <div className='border border-white rounded-full p-2 px-3'>Free</div>
              </div>
            </div>
            <div className='rounded-3xl bg-bg3 text-bg12 p-12'>
              <div className='w-full h-60 flex items-center justify-center relative'><Image src="/3comp.webp" alt="moreMoney" fill className=''></Image></div>
              <div className={`text-3xl my-8 font-semibold ${graphikSemiBold.className}`}>Sell your products</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Sell digital and physical products in a simple to-set-up storefront and watch your sales stack up.</p>
              <div className={`flex gap-2  mt-10 text-white font-bold text-sm ${graphikMedium.className}`}>
                <div className='border border-white rounded-full p-2 px-3'>Free</div>
                <div className='border border-white rounded-full p-2'>Premium</div>
                <div className='border border-white rounded-full p-2 px-3'>Pro</div>
                <div className='border border-white rounded-full p-2'>Smarter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg11 grid grid-cols-2 px-24 pt-48 pb-12">
        <div className="flex flex-col gap-8 justify-center ml-10">
          <p className={`text-customDark text-7xl font-bold ${graphik.className}`}>Establish yourself as an expert</p>
          <p className="text-customDark font-semibold text-lg">Show your connections what makes you an expert in your field. Linktree makes it easier to connect future employers or clients with your most impressive content with just one click.or even showcase your newest product, music, podcast, events and promos.</p>
          <Link href="/Signup">
          <button className="bg-customDark text-white rounded-full p-3 py-3 text-lg w-[35%] font-semibold">Sign up for free now</button></Link>
        </div>
        <div className='flex  justify-center h-[100vh] relative'>
          <Image src="/LinkedExpert.avif" alt="goodCompany" fill className='-mt-5'></Image>
        </div>
      </div>
      <div className="bg-customSapphire grid grid-cols-2 gap-8 px-24 pt-60 pb-24 ">
        <div className='flex  justify-center h-[100vh] relative '>
          <Image src="/LinkedBrand.avif" alt="LinkedBrandt" fill className=''></Image>
        </div>
        <div className="flex flex-col gap-8 justify-center ">
          <p className={`text-white text-6xl font-bold ${graphik.className}`}>Build your professional brand</p>
          <p className="text-white font-semibold text-md-lg">LinkedIn is fast becoming more than just “a work thing.” It’s a place where you can establish and strengthen your professional personality and brand. Whether it’s InMail, the comments section or on your profile, increase your visibility as a knowledgeable professional and stand out with your LinkedIn ‘Link In Profile’ from Linktree.</p>
          <Link href="/Signup">
          <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
        </div>
      </div>
      <div className='bg-customLight px-24 pt-60 '>
        <div className=" grid grid-cols-2 ">
          <div className='flex  justify-center h-[85vh] relative w-[90%]'>
            <Image src="/4compo.webp" alt="insta4compo" fill className='-mt-20'></Image>
          </div>
          <div className="flex flex-col gap-8">
            <p className={` text-7xl font-bold ${graphik.className}`}>Use data to grow your network and sales</p>
            <p className=" font-semibold text-lg">Get accurate insights and know exactly which content your connections are consuming. Linktree’s easy-to-use analytics dashboard tracks your clicks, measures click-through rates and analyzes conversions, so you can make data-driven decisions to get more connections and grow your network.</p>
            <Link href="/Signup">
            <button className="bg-bg12 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
          </div>
        </div>
        <div className='pb-24'>
          <p className={` text-6xl text-center w-[70%] mx-auto font-bold ${graphik.className}`}>3 simple steps to power up your linkedin</p>
          <p className={` text-md-ld text-center mt-3 font-bold ${graphikMedium.className}`}>Set up your ‘Link in Bio’ for LinkedIn in 3 easy steps</p>
          <div className={`mt-20 grid grid-cols-3 gap-4 ${graphikSemiBold.className}`}>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>1</div>
              <div className='text-3xl my-8 font-semibold'>Step 1. Create and customize your free (forever) Linktree</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Simply click the button below and create your free Linktree account – it takes less than 1 minute. Make it yours with custom backgrounds, profile pictures, unlimited links and link apps.</p>
            </div>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>2</div>
              <div className='text-3xl my-8 font-semibold'>Step 2. Update your profile link on LinkedIn</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Set your LinkedIn to creator mode (a free option) by scrolling down your LinkedIn profile to resources, and toggling creator mode ‘on. Put your Linktree URL in the ‘website section’ to display your link in your profile.</p>
            </div>
            <div className='rounded-3xl bg-white p-12'>
              <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center text-lg'>3</div>
              <div className='text-3xl my-8 font-semibold'>Step 3. Link your connections to everything you do</div>
              <p className={`text-md-lg ${graphikMedium.className}`}>Start using your Linktree link on your profile, in DMs when you connect with new people or in post comments. Now people can connect with everything you do! Let your network read more, donate, shop, contact you via your Linktree.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg13 grid grid-cols-2 px-24 pt-96 ">
        <div className="flex flex-col gap-8">
          <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>See what’s popular with your connections</p>
          <p className="text-bg12 font-semibold text-lg">Take the guesswork out of what your network finds interesting and wants to learn about from you. Linktree has razor-sharp analytics with an intuitive dashboard to keep on top of your professional identity and easily identify what your network loves the most.</p>
          <Link href="/Signup">
          <button className="bg-bg11 rounded-full p-2 py-3 text-lg w-[30%] font-semibold">Sign up for free now</button></Link>
        </div>
        <div className='flex  justify-center h-[110vh] relative'>
          <Image src="/LinkedConnections.avif" alt="linkedPage" fill className='-mt-40'></Image>
        </div>
      </div>
      <div className=' bg-customLight px-24 pt-40 pb-40'>
        <p className={`text-black text-center text-6xl font-bold ${graphik.className} w-[60%] mx-auto text-customDark`}>How Linktree helps you get the most out of LinkedIn</p>
        <div className={`pt-20 pb-28 grid grid-cols-2 gap-4 ${graphikSemiBold.className}`}>
          <div className='rounded-3xl bg-white p-12'>
            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackDollar.svg" alt="coin" width={20} height={20}></Image></div>
            <div className='text-3xl mt-8 font-semibold'>Establish yourself as an expert by linking connections to your most impressive content</div>
          </div>
          <div className='rounded-3xl bg-white p-12 text-customDark'>
            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackmagic.svg" alt="magic" width={20} height={20}></Image></div>
            <div className='text-3xl mt-8 font-semibold'>Quickly show new connections who you are and what you do and have achieved with a custom mini website</div>
          </div>
          <div className='rounded-3xl bg-white p-12'>
            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/phone.svg" alt="phone" width={20} height={20}></Image></div>
            <div className='text-3xl mt-8 font-semibold'>Build your professional brand by showing your expertise to your network</div>
          </div>
          <div className='rounded-3xl bg-white p-12'>
            <div className='rounded-full bg-bg11 w-16 h-16 flex items-center justify-center'><Image src="/blackTiktok.svg" alt="tiktok" width={20} height={20}></Image></div>
            <div className='text-3xl mt-8 '>Easily showcase your highlight reel to potential employers or clients</div>
          </div>
        </div>
        <Link href="/Signup">
        <div className={`w-full rounded-full h-[60vh] bg-bg11 text-customDark flex items-center justify-center text-5xl font-bold`}>Sign up for free now</div>
        </Link>
      </div>
      <QuestionsLinkedln />
      <About />
    </div >
  )
}

export default page
