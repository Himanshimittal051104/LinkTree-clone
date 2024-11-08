"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Analyze from "@/components/Analyze";
import Celebrities from "@/components/Celebrities";
import Link from "next/link";
import Questions from "@/components/Questions";
import About from "@/components/About";
const graphik = localFont({
  src: "./fonts/GraphikBold.otf",
  variable: "--font-graphik",
  weight: "100 900",
});
export default function Home() {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const field = ["influencers", "small buisness", "athletes", "models", "monetizers", "health educators", "streamers", "vloggers", "fitness coaches", "ecommerce sellers", "retailers", "products", "wellness leaders", "musicians", "bands", "DJs", "podcasters", "fashion designer", "merch sellers", "writers", "creators"];
  useEffect(() => {
    if (currentFieldIndex < field.length - 1) {
      const timer = setInterval(() => {
        setCurrentFieldIndex((prevIndex) => prevIndex + 1);
      }, 3000);

      return () => clearInterval(timer);
    } else {
      const timer = setInterval(() => {
        setCurrentFieldIndex(0);
      }, 3000);

      return () => clearInterval(timer);
    }
  },);

  return (
    <>
      <div className="bg-bg1 grid grid-cols-2 px-24 py-40">
        <div className="flex flex-col gap-8">
          <p className={`text-bg11 text-6xl font-bold ${graphik.className}`}>Everything you are. In one, simple link in bio.</p>
          <p className="text-bg11 font-semibold">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="mt-4 flex gap-2.5">
            <div className="relative font-semibold flex items-center text-gray-500">
              <span className=" cursor-default absolute left-4">linktr.ee/</span>
              <input
                type="text" placeholder="yourname" className="placeholder-gray-500 outline-none py-4 rounded-lg pl-20 focus:outline-2 focus:outline-white focus:outline-offset-4"
              />
            </div>
            <button className="bg-bg12 rounded-full px-5 py-4 text-lg ">Claim your Linktree</button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-bg12 grid grid-cols-2 px-24 py-56">
        <div></div>
        <div className="flex flex-col gap-8 justify-start">
          <p className={`text-bg13 text-6xl font-bold ${graphik.className}`}>Create and customize your Linktree in minutes</p>
          <p className="text-bg13 font-semibold">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
          <button className="bg-bg13 rounded-full w-[30%] py-4 text-lg text-white">Get started for free</button>
        </div>
      </div>
      <div className="bg-bg3 grid grid-cols-2 px-24 py-40">
        <div className="flex flex-col gap-8 justify-start">
          <p className={`text-bg12 text-6xl font-bold ${graphik.className}`}>Share your Linktree from your Instagram, TikTok, Twitter and other bios</p>
          <p className="text-bg12 font-semibold">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
          <button className="bg-bg12 rounded-full w-[30%] py-4 text-lg text-customDark font-semibold">Get started for free</button>
        </div>
        <div ></div>
      </div>
      <div className="bg-customLight  py-40">
        <div className="grid grid-cols-2 px-24">
          <div className=" flex items-center justify-center">
            <div className="w-[60%] h-[40vh]">
              <Analyze />
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-start">
            <p className={` text-6xl font-bold ${graphik.className} text-customDark`}>Analyze your audience and keep your followers engaged</p>
            <p className=" font-semibold">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
            <button className="bg-bg12 rounded-full w-[30%] py-4 text-lg">Get started for free</button>
          </div>
        </div>
        <div className="pt-40  text-center px-24">
          <p className="text-6xl font-bold text-customDark">The only link in bio trusted by 50M+</p>
          <p className="text-6xl font-bold text-blue-600 mt-3">{field[currentFieldIndex]}</p>
        </div>
        {/* <div className="py-40 overflow-x-hidden w-[100vw]">
          <Celebrities />
        </div> */}
        <div className="grid grid-cols-2 h-[130vh] gap-4 px-24">
          <div className="flex flex-col gap-4">
            <div className="bg-bg12 rounded-3xl h-[50%] pt-28 pb-12">
              <div className="h-[60%]"></div>
              <div className="pl-12 w-[70%]"><a href='' className="underline text-bg13 font-bold text-3xl">Share your content in limitless ways on your linktree.</a></div>
            </div>
            <div className="bg-bg11 rounded-3xl h-[50%] pt-28 pb-12">
              <div className="h-[60%]"></div>
              <div className="pl-12 w-[70%]">
                <a href='' className="text-customDark font-bold text-3xl underline">{`Sell products and collect payments.It's monetization made simple.`}</a></div>
            </div>
          </div>
          <div className="bg-red-900 rounded-3xl pt-28 pb-12">
            <div className="h-[85%]"></div>
            <div className="pl-12 w-[70%]">
              <a href='' className="text-bg12 font-bold text-3xl underline">Grow,own and engage your audience by unifying them in one place.</a></div>
          </div>
        </div>
        <div className="py-40 w-[90%] mx-auto text-center px-24">
          <p className="text-6xl font-bold  ">The fast, friendly and powerful link in bio tool.</p>
          <p className=" text-customDark bg-bg12 rounded-full mt-12 font-medium py-4 w-[15%] mx-auto ">Explore all plans</p>
        </div>
        <div className="px-24">
          <div className=" font-bold text-6xl text-center">As featured in...</div>
          <div className=" mx-auto mt-12 grid grid-cols-4 gap-4">
            <div className="bg-white rounded-3xl py-7 text-center">INSIDER</div>
            <div className="bg-white rounded-3xl py-7 text-center">INSIDER</div>
            <div className="bg-white rounded-3xl py-7 text-center">INSIDER</div>
            <div className="bg-white rounded-3xl py-7 text-center">INSIDER</div>
          </div>
          <div className="bg-white rounded-3xl py-7 text-center mt-4 w-[25%] mx-auto">INSIDER</div>
        </div>
        <div className="rounded-full mt-28 px-24 h-[50vh] w-[60%] mx-auto bg-black relative">
          {/* <Image src='' alt='' fill className="object-cover rounded-full"></Image> */}
          <div>
            <p></p>
            <p></p>
            <div></div>
          </div>
        </div>
      </div>
      
      {/* <div className="bg-black w-full h-[80vh] flex items-center justify-center group " >
        <div className="bg-pink-200 w-[40%] h-[40%] relative group-hover:rotate-y-180 duration-500 transition-transform " style={{ transformStyle: "preserve-3d" ,perspective:"1000px"}}>
          <div className="bg-red-400 w-full h-full absolute " style={{ backfaceVisibility: 'hidden',transform:"rotateY(0deg)" }}>hello</div>
          <div className="bg-yellow-900 w-full h-full absolute " style={{ backfaceVisibility: 'hidden',transform: 'rotateY(180deg)' }}>yello</div>
        </div>
      </div> */}
      <Questions/>
      <About/>
    </>
  );
}
