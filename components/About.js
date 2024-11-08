import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
  return (
    <div className="bg-bg13 pt-24">
        <div className="w-[60%] mx-auto pb-28">
          <div >
            <p className="font-bold text-5xl text-bg12 text-center">
              Jumpstart your corner of the internet today
            </p>
            <div className="mt-12 flex gap-2.5 mx-auto justify-center">
              <div className="relative font-semibold flex items-center text-gray-500">
                <span className=" cursor-default absolute left-4">linktr.ee/</span>
                <input
                  type="text" placeholder="yourname" className="placeholder-gray-500 outline-none py-4 rounded-lg pl-20 focus:outline-2 focus:outline-white focus:outline-offset-4"
                />
              </div>
              <button className="bg-bg11 rounded-full px-5 py-4 text-lg">Claim your Linktree</button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl w-[80%] p-16 mx-auto">
          <div className="grid grid-cols-4">
            <div className="flex flex-col gap-5 text-gray-500 font-semibold text-sm">
              <span className="text-black text-2xl font-bold mb-2 ">Company</span>
              <Link href=""><span className='cursor-pointer'>The Linktree Blog</span></Link>
              <Link href=""><span className='cursor-pointer'>Engineering Blog</span></Link>
              <Link href=""><span className='cursor-pointer'>Marketplace</span></Link>
              <Link href=""><span className='cursor-pointer'>{`What's New`}</span></Link>
              <Link href=""><span className='cursor-pointer'>About</span></Link>
              <Link href=""><span className='cursor-pointer'>Careers</span></Link>
              <Link href=""><span className='cursor-pointer'>Link in Bio</span></Link>
              <Link href=""><span className='cursor-pointer'>Social Good</span></Link>
              <Link href=""><span className='cursor-pointer'>Contact</span></Link>
            </div>
            <div className="flex flex-col gap-5 text-gray-500 font-semibold text-sm">
              <span className="text-black text-2xl font-bold mb-2">Community</span>
              <Link href=""><span className='cursor-pointer'>Linktree for Enterprise</span></Link>
              <Link href=""><span className='cursor-pointer'>2023 Creator Report</span></Link>
              <Link href=""><span className='cursor-pointer'>2022 Creator Report</span></Link>
              <Link href=""><span className='cursor-pointer'>Charities</span></Link>
              <Link href=""><span className='cursor-pointer'>{`What's Trending`}</span></Link>
              <Link href=""><span className='cursor-pointer'>Explore Tempelates</span></Link>
            </div>
            <div className="flex flex-col gap-5 text-gray-500 font-semibold text-sm">
              <span className="text-black text-2xl font-bold mb-2">Support</span>
              <Link href=""><span className='cursor-pointer'>Help Topics</span></Link>
              <Link href=""><span className='cursor-pointer'>Getting Started</span></Link>
              <Link href=""><span className='cursor-pointer'>Linktree Pro</span></Link>
              <Link href=""><span className='cursor-pointer'>Featurs and how-Tos</span></Link>
              <Link href=""><span className='cursor-pointer'>FAQs</span></Link>
              <Link href=""><span className='cursor-pointer'>Report a Violation</span></Link>
            </div>
            <div className="flex flex-col gap-5 text-gray-500 font-semibold text-sm">
              <span className=" text-black text-2xl font-bold mb-2">Trust & Legal</span>
              <Link href=""><span className='cursor-pointer'>Terms and conditions</span></Link>
              <Link href=""><span className='cursor-pointer'>Privacy Notice</span></Link>
              <Link href=""><span className='cursor-pointer'>Cookie Notice</span></Link>
              <Link href=""><span className='cursor-pointer'>Trust Center</span></Link>
              <Link href=""><span className='cursor-pointer'>Cookie Preferences</span></Link>
            </div>
          </div>
          <div className="flex mt-20 justify-between items-center">
            <div className='flex gap-2 justify-center items-center'>
              <Link href=""><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-4'>Log in</button></Link>
              <Link href=""><button className='bg-bg11 text-lg text-black font-semibold rounded-full px-7 py-4 hover:cursor-pointer'>Get started for free</button></Link>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Link href="">
                <div className='bg-customDark text-lg text-black font-semibold rounded-full px-4 py-2 hover:cursor-pointer flex gap-2'><Image src="/apple.svg" alt="apple" width="30" height='30'></Image>
                  <div className="text-white"><p className="text-xs">Download on the</p>
                    <p className="font-semibold text-lg">App store</p></div>
                </div></Link>
              <Link href="">
                <div className='bg-customDark text-lg text-black font-semibold rounded-full px-4 py-2 hover:cursor-pointer flex gap-2'>
                  <Image src="/googlePlay.png" alt="googlePlay" width="20" height='20' ></Image>
                  <div className="text-white"><p className="text-xs">Get it on</p>
                    <p className="font-semibold text-lg">Google Play</p></div>
                </div></Link>
              <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/treeW.svg" alt="tree" fill className="p-3"></Image></div></Link>
              <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/threads.svg" alt="threads" fill className="p-3"></Image></div></Link>
              <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/music.svg" alt="music" fill className="p-3"></Image></div></Link>
              <Link href=""><div className='bg-customDark rounded-full  hover:cursor-pointer relative w-14 h-14'><Image src="/instagram.svg" alt="instagram" fill className="p-3"></Image></div></Link>
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-4 rounded-3xl h-[55vh] bg-bg12 mx-auto flex justify-center items-center text-bg13 font-bold gap-2 text-9xl">
          <p>Linktree</p>
          <Image src="/treeP.svg" alt="tree" width={200} height='200'></Image>
        </div>
      <div className="pb-12 mt-24 w-[60%] mx-auto bg">
          <div className="flex justify-center gap-12 items-center">
            <Image src="/AusFlag.png" alt="AusFlag" width="100" height="50"></Image>
            <Image src="/torresFlag.png" alt="torresFlag" width="100" height="50"></Image>
          </div>
          <div className="text-bg12 font-semibold mt-12">We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</div>
      </div>
      
      </div>
  )
}

export default About
