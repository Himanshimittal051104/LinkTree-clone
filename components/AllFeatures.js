"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const AllFeatures = () => {
  const [li1, setLi1] = useState(0)
  const [li2, setLi2] = useState(0)
  const [li3, setLi3] = useState(0)
  const [li4, setLi4] = useState(0)
  const [li5, setLi5] = useState(0)
  return (
    <div className='max-h-screen overflow-y-scroll '>
      <div className='flex items-center w-[70%] mx-auto justify-start pr-12 sticky top-0  z-100 bg-customLight'>
        <div className='w-[36%]'></div>
        <div className=' w-[17%] flex flex-col items-center '>
          <p className='text-3xl  text-customDark '>Free</p>
          <p className='text-3xl  text-customDark  '>Rs.0</p>
          <p className='font-semibold text-sm  text-gray-500' >Forever</p>
          <div className='rounded-full border-2 border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg mt-3'>
            Join for free
          </div>
        </div>
        <div className=' w-[17%] flex flex-col items-center '>
        <p className='text-3xl  text-customDark  '>Starter</p>
          <p className='text-3xl  text-customDark '>Rs.250</p>
          <p className='font-semibold text-sm text-gray-500' >Rs/month</p>
          <div className='rounded-full border-2 border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg mt-3'>
           Get Starter
          </div>
        </div>
        <div className=' w-[17%] flex flex-col items-center bg-bg13 text-white py-3 rounded-t-2xl'>
          <div className='bg-bg11 text-black rounded-lg p-1'>30-day free Trial</div>
        <p className='text-3xl  '>Pro</p>
          <p className='text-3xl '>Rs.450</p>
          <p className='font-semibold text-sm ' >Rs/month</p>
          <div className='rounded-full bg-orange-500 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg mt-3'>
           Try Pro for free
          </div>
        </div>
        <div className=' w-[17%] flex flex-col items-center '>
        <p className='text-3xl  text-customDark '>Premium</p>
          <p className='text-3xl  text-customDark '>Rs.1000</p>
          <p className='font-semibold text-sm  text-gray-500' >Rs/month</p>
          <div className='rounded-full border-2 border-fuchsia-800 text-bg13 w-[90%]  flex gap-2 py-3 items-center justify-center font-semibold text-md-lg mt-3'>
            Get Premium
          </div>
        </div>
      </div>
      <div>
        <div className='bg-white w-[70%]  mx-auto rounded-3xl'>
          <ul>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 1 ? 0 : 1)}>
              {li1 === 1 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 1 ? <div className='w-[30%]'>
                <p className='text-lg'>Email collection</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Collect email addresses and phone numbers directly from your Linktree to build and own your visitor list.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Email collection</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center '>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 2 ? 0 : 2)}>
              {li1 === 2 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 2 ? <div className='w-[30%]'>
                <p className='text-lg'>Phone Number Collection</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'> Collect phone numbers directly from your Linktree to build and own your visitor list.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Phone Number Collection</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 3 ? 0 : 3)}>
              {li1 === 3 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 3 ? <div className='w-[30%]'>
                <p className='text-lg'>RSS (Really Simple Syndication) feed link</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Showcase your most recent blog or news content on your Linktree via an RSS (Really Simple Syndication) feed link.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>RSS (Really Simple Syndication) feed link</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 4 ? 0 : 4)}>
              {li1 === 4 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 4 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Mobile App Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Promote a mobile app &amp; get more downloads
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Mobile App link App</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 5 ? 0 : 5)}>
              {li1 === 5 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 5 ? <div className='w-[30%]'>
                <p className='text-lg'>Animation</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Draw attention to your most important link with animated styling, and give visitors the bump they need.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Animation</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 6 ? 0 : 6)}>
              {li1 === 6 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 6 ? <div className='w-[30%]'>
                <p className='text-lg'>Redirect</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Sometimes, you don’t need your whole tree. We get it. With Redirects, send traffic straight to a website – but still capture click analytics with Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Redirect</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 7 ? 0 : 7)}>
              {li1 === 7 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 7 ? <div className='w-[30%]'>
                <p className='text-lg'>spotLight</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Have an important link? Spotlight a link so that the content is already on display when a vistor lands on your Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>spotLight</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 8 ? 0 : 8)}>
              {li1 === 8 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 8 ? <div className='w-[30%]'>
                <p className='text-lg'>Schedule</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Schedule a link to go live and disappear at specific dates and times in the future.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Schedule</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 9 ? 0 : 9)}>
              {li1 === 9 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 9 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  NFT Lock
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Build your Web3 community easily. Lock any link using a contract address and reward owners of NFTs from that collection with exclusive access.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  NFT Lock
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 10 ? 0 : 10)}>
              {li1 === 10 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 10 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Music Pre-save
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Let your fans pre-save your next release on Spotify to help you get more streams on launch day.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Music Pre-save
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 11 ? 0 : 11)}>
              {li1 === 11 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 11 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Bandsintown Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Sell more tickets with Bandsintown: Automatically share upcoming tour dates and events to fuel ticket sales, and make sure your fans never miss a show.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Bandsintown Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 12 ? 0 : 12)}>
              {li1 === 12 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 12 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Community Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Grow your Community faster: The new Community.com Link helps you convert more of your Linktree visitors into members of your community.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Community Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 13 ? 0 : 13)}>
              {li1 === 13 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 13 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Contact Details Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Make it easier to contact you: Add a Contact Details link so visitors can quickly see your name, phone, email, office hours and more. Add code gate to control who can access this information (Paid Plan).
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Contact Details Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 14 ? 0 : 14)}>
              {li1 === 14 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 14 ? <div className='w-[30%]'>
                <p className='text-lg'>Contact Form Link App</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Create a contact form to collect visitor names, emails, mobile numbers, countries, and let them leave you messages.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Contact Form Link App</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 15 ? 0 : 15)}>
              {li1 === 15 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 15 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Link Lock
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Lock your links with a special code, date of birth or sensitive content flags</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Link Lock
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 16 ? 0 : 16)}>
              {li1 === 16 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 16 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Pinterest Link Embeds
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Embed your Pinterest pins and boards directly in your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Pinterest Link Embeds
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 17 ? 0 : 17)}>
              {li1 === 17 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 17 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Clubhouse Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Embed your Clubhouse event, club, room and profile to grow your engagement and following on Clubhouse.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Clubhouse Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 18 ? 0 : 18)}>
              {li1 === 18 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 18 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Soundcloud Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Get your music heard on SoundCloud. Share songs, albums and playlists.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Soundcloud Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 19 ? 0 : 19)}>
              {li1 === 19 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 19 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Audiomack Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Display a preview of an Audiomack song, album, artist or playlist on your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Audiomack Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 20 ? 0 : 20)}>
              {li1 === 20 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 20 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Spotify Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Share your latest or favorite songs, albums or playlists and let people listen right on your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Spotify Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 21 ? 0 : 21)}>
              {li1 === 21 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 21 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Podcast Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Get more podcast listeners and subscribers with Linktree’s Podcast Link. Add a link to a podcast on a supported platform (Spotify, Stitcher, Apple or Google Podcasts) and Linktree will find and show your visitors everywhere it’s available to stream as well as recent episodes.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Podcast Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 22 ? 0 : 22)}>
              {li1 === 22 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 22 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  X (formerly Twitter) embed
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Embed your best Tweets on your Linktree
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  X (formerly Twitter) embed
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 23 ? 0 : 23)}>
              {li1 === 23 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 23 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Music Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Connect more fans with your music by giving them one place to see everywhere it’s available. Add Spotify, SoundCloud, and Audiomack players to let fans listen right on your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Music Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 24 ? 0 : 24)}>
              {li1 === 24 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 24 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Embed Videos from Twitch, TikTok, Instagram, Vimeo, Facebook &amp; YouTube
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Embed any YouTube, Twitch or Vimeo videos, as well as Facebook videos or streams, directly in your Linktree. Customize play options with mute or autoplay.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Embed Videos from Twitch, TikTok, Instagram, Vimeo, Facebook &amp; YouTube
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 25 ? 0 : 25)}>
              {li1 === 25 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 25 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  QR Code
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Drive offline traffic online with your unique Linktree QR code. Print it on packaging, products, mugs, menus, ads and more.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  QR Code
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 26 ? 0 : 26)}>
              {li1 === 26 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 26 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  TikTok Profile Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Showcase your profile along with the six TikToks you love most and give your visitors an easy way to follow you for more. Or automatically keep your Linktree updated with your latest TikToks to save time and keep your audience growing.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  TikTok Profile Link App
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li1 == 27 ? 0 : 27)}>
              {li1 === 27 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 27 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Unlimited Links
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  You have a lot to share, that’s why we don’t put a limit on the number of links you can add to your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Unlimited Links
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
          </ul>
        </div>
        <div className='bg-white w-[70%] mx-auto rounded-3xl my-20'>
          <ul>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li2 == 1 ? 0 : 1)}>
              {li2 === 1 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li2 === 1 ? <div className='w-[30%]'>
                <p className='text-lg'>Amazon Associates Program</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Easily auto-generate affiliate links from eligible Amazon product links by providing your Associates Store ID.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Amazon Associates Program</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li2 == 2 ? 0 : 2)}>
              {li1 === 2 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 2 ? <div className='w-[30%]'>
                <p className='text-lg'>Apple Performance Partner Program</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Add your Apple Affiliate Token to earn commissions on qualifying Apple subscriptions and purchases made by your visitors.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Apple Performance Partner Program</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li2 == 3 ? 0 : 3)}>
              {li1 === 3 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 3 ? <div className='w-[30%]'>
                <p className='text-lg'>Commission Junction Affiliate Program</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Easily auto-generate affiliate links from select Commission Junction partners by providing your Promotional Property ID and Ad ID.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Commission Junction Affiliate Program</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li2 == 4 ? 0 : 4)}>
              {li1 === 4 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 4 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  SendOwl Link App
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Display your digital products using SendOwl.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>SendOwl link App</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi1(li2 == 5 ? 0 : 5)}>
              {li1 === 5 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li1 === 5 ? <div className='w-[30%]'>
                <p className='text-lg'>Stores powered by Spring,Shopify,& Bonfire</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Your visitors can shop your Shopify, Spring and Bonfire store products, collections and holiday promotions, right in your Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Stores powered by Spring,Shopify,& Bonfire</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
          </ul>
        </div>
        <div className='bg-white w-[70%] mx-auto rounded-3xl'>
          <ul>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 1 ? 0 : 1)}>
              {li3 === 1 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 1 ? <div className='w-[30%]'>
                <p className='text-lg'>Hide Linktree Logo</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Let your brand shine. We don’t mind. Use this feature to hide our logo at the bottom of your Linktree or in your QR code.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Hide Linktree Logo</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 2 ? 0 : 2)}>
              {li3 === 2 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 2 ? <div className='w-[30%]'>
                <p className='text-lg'>Button & Font Styles</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Customize your button colours and shapes, and choose the font that aligns with your brand/style/vibe.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Button & Font Styles</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 3 ? 0 : 3)}>
              {li3 === 3 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 3 ? <div className='w-[30%]'>
                <p className='text-lg'>Extended Themes</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Access an elevated, extended selection of themes, fonts and buttons and fully customise the look and feel of your Linktree profile.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Extended Themes</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 4 ? 0 : 4)}>
              {li3 === 4 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 4 ? <div className='w-[30%]'>
                <p className='text-lg'>Free Themes
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Select free themes, and make a selection of colour, font and button tweaks to your Linktree profile.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Free Themes</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 5 ? 0 : 5)}>
              {li3 === 5 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 5 ? <div className='w-[30%]'>
                <p className='text-lg'>NFT Background</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Build your Web3 brand. Use an NFT you own as your background image. We’ll verify it for you and add a verification badge on your Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>NFT Background</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 6 ? 0 : 6)}>
              {li3 === 6 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 6 ? <div className='w-[30%]'>
                <p className='text-lg'>Custom or Stock Background Images & Videos</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Upload custom video and image backgrounds or choose from thousands of stock options from Unsplash and Cover.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Custom or Stock Background Images & Videos</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 7 ? 0 : 7)}>
              {li3 === 7 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 7 ? <div className='w-[30%]'>
                <p className='text-lg'></p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Select the color of your Linktree’s background</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Custom Background Colors</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 8 ? 0 : 8)}>
              {li3 === 8 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 8 ? <div className='w-[30%]'>
                <p className='text-lg'>Support Banner</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Show your support for an important cause with a banner on your profile.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Support Banner</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 9 ? 0 : 9)}>
              {li3 === 9 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 9 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Link Thumbnails & Icons
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Add an image or icon to each of your links to make content discovery easier.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Link Thumbnails & Icons
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 10 ? 0 : 10)}>
              {li3 === 10 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 10 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Social Icons
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Make your socials simple to discover and utilize analytics to learn which is driving the most activity and engagement.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Social Icons
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 11 ? 0 : 11)}>
              {li3 === 11 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 11 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Headers
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Make it easier for your visitors to find the content they’re looking for. With Linktree, you can group your links under custom headers to keep them organised.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Headers
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 12 ? 0 : 12)}>
              {li3 === 12 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 12 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  NFT Profile Image
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Elevate your Linktree with Web3. Use an NFT you own as your profile image. We’ll verify it for you and display it in a hexagonal frame.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  NFT Profile Image
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi3(li3 == 13 ? 0 : 13)}>
              {li3 === 13 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li3 === 13 ? <div className='w-[30%]'>
                <p className='text-lg'>
                  Custom Profile Picture,Title & Bio Description
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Upload a custom profile image (or design your own with Canva). Create your own profile title, and help people understand more about you with a custom bio/description for your Linktree.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>
                  Custom Profile Picture,Title & Bio Description
                </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
          </ul>
        </div>
        <div className='bg-white w-[70%] mx-auto rounded-3xl my-20'>
          <ul>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi4(li4 == 1 ? 0 : 1)}>
              {li4 === 1 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li4 === 1 ? <div className='w-[30%]'>
                <p className='text-lg'>Global UTM Parameters</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  Add UTM parameters to any of your links to track your campaigns in your analytics software under the category “social”.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Global UTM Parameters</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
          </ul>
        </div>
        <div className='bg-white w-[70%] mx-auto rounded-3xl'>
          <ul>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 1 ? 0 : 1)}>
              {li5 === 1 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 1 ? <div className='w-[30%]'>
                <p className='text-lg'>Support Response Times</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Access live chat to find answers fast, with a dedicated around-the-clock support team and prioritised response times.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Support Response Times</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 2 ? 0 : 2)}>
              {li5 === 2 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 2 ? <div className='w-[30%]'>
                <p className='text-lg'>Customer Success Manager</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Get access to a customer success manager.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Customer Success Manager</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 3 ? 0 : 3)}>
              {li5 === 3 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 3 ? <div className='w-[30%]'>
                <p className='text-lg'>Onboarding Call</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>
                  30 minute onboarding meeting to help you setup and optimise your Linktree from Day 1
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Onboarding Call</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 4 ? 0 : 4)}>
              {li5 === 4 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 4 ? <div className='w-[30%]'>
                <p className='text-lg'>Custom T&Cs
                </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>DIY your fine print: Create custom terms and conditions for your email and SMS links.
                </p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Custom T&Cs</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 5 ? 0 : 5)}>
              {li5 === 5 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 5 ? <div className='w-[30%]'>
                <p className='text-lg'>Add Admins</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Allow multiple admins to manage one Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Add Admins</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 6 ? 0 : 6)}>
              {li5 === 6 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 6 ? <div className='w-[30%]'>
                <p className='text-lg'>Multi-factor Authentication</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>An additional layer of security for your Linktree.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Multi-factor Authentication</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 7 ? 0 : 7)}>
              {li5 === 7 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 7 ? <div className='w-[30%]'>
                <p className='text-lg'>Linktree Mobile App</p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Link everything you are, anywhere you are, with the Linktree App for iOS and Android</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Linktree Mobile App</span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
            <hr className='w-full h-1'></hr>
            <li className='flex items-start  px-12 group py-3' onClick={() => setLi5(li5 == 8 ? 0 : 8)}>
              {li5 === 8 ? <div className='mr-5'><Image src="/arrowUpG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full border-2 border-customDark`} ></Image> </div > : <Image src="/arrowDownG.svg" alt="open" width={30} height={30} className={` group-hover:bg-customLight rounded-full p-1 mr-5`}></Image>}
              {li5 === 8 ? <div className='w-[30%]'>
                <p className='text-lg'>Support </p>
                <p className='text-sm text-gray-500 font-semibold mt-2'>Help is always on hand with our dedicated support team on email, backed up by an extensive help center.</p>
              </div> : <div className='w-[30%]'>
                <span className='text-lg'>Support </span></div>}
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/cross.svg" alt="cross" width={20} height={20} className=''></Image>
              </div>
              <div className=' w-[20%] flex justify-center '>
                <Image src="/tickP.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
              <div className='w-[20%] flex items-center justify-center'>
                <Image src="/tick.svg" alt="tick" width={24} height={24} className=''></Image>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllFeatures
