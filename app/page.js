"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Analyze from "@/components/Analyze";
import Link from "next/link";
import Questions from "@/components/Questions";
import About from "@/components/About";
import Shopavery from "@/components/Shopavery";
import PersonalityCarousel from "@/components/PersonalityCarousel";
import CelebrityCarousel from "@/components/CelebrityCarousel";
import Tools from "@/components/Tools";
import ScheduleContent from "@/components/ScheduleContent";
import Brand from "@/components/Brand";
import Field from "@/components/Field";
import SellProducts from "@/components/SellProducts";
import ShareContent from "@/components/ShareContent";
import Engage from "@/components/Engage";
import Add from "@/components/Add";
import Monetize from "@/components/Monetize";
import Content from "@/components/Content";
import GrowFollowing from "@/components/GrowFollowing";
const graphik = localFont({
  src: "./fonts/GraphikBold.otf",
  variable: "--font-graphik",
  weight: "100 900",
});
const montserrat = localFont({
  src: "./fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});
const poppins = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
const ptserif = localFont({
  src: "./fonts/PTSerif-Bold.ttf",
  variable: "--font-ptserif",
  weight: "100 900",
});
const oswald = localFont({
  src: "./fonts/Oswald-Bold.ttf",
  variable: "--font-oswald",
  weight: "100 900",
});
export default function Home() {

  return (
    <>
      <div className="bg-bg1 grid grid-cols-2 px-24">
        <div className="flex flex-col gap-8 justify-center">
          <p className={`text-bg11 text-6xl font-bold ${graphik.className}`}>Everything you are. In one, simple link in bio.</p>
          <p className="text-bg11 font-semibold">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="mt-4 flex gap-2.5">
            <div className="relative font-semibold flex items-center text-gray-500">
              <span className=" cursor-default absolute left-4">linktr.ee/</span>
              <input
                type="text" placeholder="yourname" className="placeholder-gray-500 outline-none py-3 rounded-lg pl-20 focus:outline-2 focus:outline-white focus:outline-offset-4"
              />
            </div>
            <button className="bg-bg12 rounded-full px-4 py-3 text-lg ">Claim your Linktree</button>
          </div>
        </div>
        <div>
          <Image src="/engagetwit.avif" alt="homePage" width={800} height={800} className=""></Image>
        </div>
      </div>
      <div className="bg-bg12 grid grid-cols-2 px-24 py-20">
        <div>
          <Image src="/goodCompany.webp" alt="homePage" width={800} height={800} className=""></Image>
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <p className={`text-bg13 text-6xl font-bold ${graphik.className}`}>Create and customize your Linktree in minutes</p>
          <p className="text-bg13 font-semibold">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
          <Link href="/Signup"><button className="bg-bg13 rounded-full w-[30%] py-3 text-lg text-white">Get started for free</button></Link>
        </div>
      </div>
      <div className="bg-bg3 grid grid-cols-2 py-40 px-24">
        <div className="flex flex-col gap-8 justify-start ">
          <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>Share your Linktree from your Instagram, TikTok, Twitter and other bios</p>
          <p className="text-bg12 font-semibold">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
          <Link href="/Signup">
            <button className="bg-bg12 rounded-full w-[30%] py-3 text-lg text-customDark font-semibold">Get started for free</button></Link>
        </div>
        <div><Shopavery /></div>
      </div>
      <div className="bg-customLight  py-28">
        <div className="grid grid-cols-2 px-24">
          <div className=" flex items-center justify-center">
            <div className="w-[100%] h-[60vh] flex items-center justify-center">
              <Analyze />
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-start">
            <p className={` text-6xl font-bold ${graphik.className} text-customDark`}>Analyze your audience and keep your followers engaged</p>
            <p className=" font-semibold">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
            <Link href="/Signup">
              <button className="bg-bg12 rounded-full w-[30%] py-3 text-lg">Get started for free</button></Link>
          </div>
        </div>
        <div className="pt-28  text-center px-24">
          <p className="text-6xl font-bold text-customDark">The only link in bio trusted by 50M+</p>
          <div className="text-6xl font-bold text-blue-600 mt-3 w-[100%] h-[70px]"><Field /></div>
        </div>
        <div className="pt-28 pb-44">
          <CelebrityCarousel />
        </div>
        <div className="grid grid-cols-2 h-[130vh] gap-4 px-24">
          <div className="flex flex-col gap-4">
            <div className="bg-bg12 rounded-3xl h-[50%] pb-20">
              <div className="h-[90%] rounded-3xl flex items-center justify-center"><ShareContent /></div>
              <div className="pl-12 w-[80%]"><a href='' className="underline text-bg13 font-bold text-3xl">Share your content in limitless ways on your linktree.</a></div>
            </div>
            <div className="bg-bg11 rounded-3xl h-[50%] pb-20">
              <div className="h-[80%] rounded-3xl flex items-center justify-center"><SellProducts /></div>
              <div className="pl-12 w-[70%]">
                <a href='' className="text-customDark font-bold text-3xl underline">{`Sell products and collect payments.It's monetization made simple.`}</a></div>
            </div>
          </div>
          <div className="bg-red-900 rounded-3xl pb-20">
            <div className="h-[90%] rounded-3xl flex items-center justify-center py-24"><Engage /></div>
            <div className="pl-12 w-[70%]">
              <a href='' className="text-bg12 font-bold text-3xl underline">Grow,own and engage your audience by unifying them in one place.</a></div>
          </div>
        </div>
        <div className="pt-28 pb-24 w-[90%] mx-auto text-center px-24">
          <p className="text-6xl font-bold  ">The fast, friendly and powerful link in bio tool.</p>
          <p className=" text-customDark bg-bg12 rounded-full mt-12 font-medium py-3 w-[15%] mx-auto cursor-pointer">Explore all plans</p>
        </div>
        <div className="grid grid-cols-3 pb-28 px-24 gap-6">
          <div className="bg-white rounded-2xl h-[60vh]">
            <div className="h-[48vh] w-full"><Tools /></div>
            <p className="px-8 text-md-lg font-semibold text-center">Seamlessly connect your Linktree with the tools you already use.</p>
          </div>
          <div className="bg-white rounded-2xl h-[60vh]">
            <div className="h-[80%] flex items-center justify-center"><Brand /></div>
            <p className="px-8 text-md-lg font-semibold text-center">Customize your Linktree to match your brand. Make it feel like you.</p>
          </div>
          <div className="bg-white rounded-2xl h-[60vh]">
            <div className="h-[80%]"><ScheduleContent /></div>
            <p className="px-8 text-md-lg font-semibold text-center">Manage, update and schedule content with our quick, easy editor.</p>
          </div>
        </div>
        <div className="px-24">
          <div className=" font-bold text-6xl text-center">As featured in...</div>
          <div className=" mx-auto mt-12 grid grid-cols-4 gap-4 cursor-default">
            <div className="bg-white rounded-3xl py-7 flex items-center justify-center"><Image src="/tc.png" alt="tc" width="130" height="130" ></Image></div>
            <div className={`bg-white rounded-3xl py-7 text-center text-gray-600 font-bold text-lg ${montserrat.className} large-spacing`}>INSIDER</div>
            <div className={`bg-white rounded-3xl py-7 text-center text-gray-600 font-bold text-lg ${poppins.className} small-spacing`}>Mashable</div>
            <div className={`bg-white rounded-3xl py-7 text-center text-gray-600 font-bold text-lg ${oswald.className}`}>FORTUNE</div>
          </div>
          <div className={`bg-white rounded-3xl py-7 text-center mt-4 w-[25%] mx-auto text-gray-600 font-bold text-xl ${ptserif.className} small-spacing`}>Forbes</div>
        </div>
        <PersonalityCarousel />
      </div>
      <Questions />
      <About />
    </>
  );
}
