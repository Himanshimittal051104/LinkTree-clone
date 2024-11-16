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
                type="text" placeholder="yourname" className="placeholder-gray-500 outline-none py-3 rounded-lg pl-20 focus:outline-2 focus:outline-white focus:outline-offset-4"
              />
            </div>
            <button className="bg-bg11 rounded-full px-5 py-3 text-lg">Claim your Linktree</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl w-[80%] p-16 mx-auto">
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-4 text-gray-500 font-semibold text-sm">
            <span className="text-black text-2xl font-bold mb-2 ">Company</span>
            <Link href="" ><span className='cursor-pointer text-sm text-gray-500  font-semibold'>The Linktree Blog</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Engineering Blog</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Marketplace</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>{`What's New`}</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>About</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Careers</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Link in Bio</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Social Good</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Contact</span></Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-500 font-semibold text-sm">
            <span className="text-black text-2xl font-bold mb-2">Community</span>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Linktree for Enterprise</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>2023 Creator Report</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>2022 Creator Report</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Charities</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>{`What's Trending`}</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Explore Templates</span></Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-500 font-semibold text-sm">
            <span className="text-black text-2xl font-bold mb-2">Support</span>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Help Topics</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Getting Started</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Linktree Pro</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Featurs and how-Tos</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 no-underline font-semibold'>FAQs</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Report a Violation</span></Link>
          </div>
          <div className="flex flex-col gap-4 text-gray-500 font-semibold text-sm">
            <span className=" text-black text-2xl font-bold mb-2">Trust & Legal</span>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Terms and conditions</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Privacy Notice</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Cookie Notice</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold '>Trust Center</span></Link>
            <Link href="" className='no-underline'><span className='cursor-pointer text-sm text-gray-500 font-semibold'>Cookie Preferences</span></Link>
          </div>
        </div>
        <div className="flex mt-20 justify-between items-center">
          <div className='flex gap-2 justify-center items-center'>
            <button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3 text-black'>Log in</button>
            <button className='bg-bg11 text-lg text-black font-semibold rounded-full px-7 py-3 hover:cursor-pointer'>Get started for free</button>
          </div>
          <div className="flex gap-2 justify-center items-center">
              <div className='bg-customDark text-lg text-black font-semibold rounded-full px-4 py-2 hover:cursor-pointer flex gap-2'><Image src="/apple.svg" alt="apple" width="30" height='30'></Image>
                <div className="text-white">
                  <span className="text-xs block">Download on the</span>
                  <span className="font-semibold text-lg block">App store</span></div>
              </div>
              <div className='bg-customDark text-lg text-black font-semibold rounded-full px-4 py-2 hover:cursor-pointer flex gap-2'>
                <Image src="/googlePlay.png" alt="googlePlay" width="20" height='20'></Image>
                <div className="text-white"><p className="text-xs  font-semibold block">Get it on</p>
                  <p className=" text-lg font-semibold block">Google Play</p></div>
              </div>
            <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/treeW.svg" alt="tree" fill className="p-3"></Image></div></Link>
            <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/threads.svg" alt="threads" fill className="p-3"></Image></div></Link>
            <Link href=""><div className='bg-customDark rounded-full hover:cursor-pointer relative w-14 h-14'><Image src="/music.svg" alt="music" fill className="p-3"></Image></div></Link>
            <Link href=""><div className='bg-customDark rounded-full  hover:cursor-pointer relative w-14 h-14'><Image src="/instagram.svg" alt="instagram" fill className="p-3"></Image></div></Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-4 roundedP h-[55vh] bg-bg12 mx-auto flex justify-center items-center text-bg13 font-bold gap-2 text-9xl">
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
