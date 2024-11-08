import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';
const dosis = localFont({
  src: "../app/fonts/Dosis-Bold.ttf",
  variable: "--font-dosis",
  weight: "100 900",
});
const Navbar = () => {
 
  return (
    <nav className='h-20 mt-12 mx-20 rounded-full flex justify-between pr-4 pl-10 items-center navbar sticky bg-white top-12'>
        <div className='flex gap-14 items-center'>
            <div className={`font-bold text-3xl flex ${dosis.className} hover:cursor-pointer`}>Linktree<Image src="tree.svg" alt="tree" width="30" height="30"></Image></div>
            <ul className='flex gap-2 text-textcolor font-semibold'>
                <Link href=""><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Templates</li></Link>
                <Link href=""><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Marketplace</li></Link>
                <div className='relative'>
                <Link href=""><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg '>Discover</li></Link>
                <div className='bg-white text-textcolor absolute rounded-2xl w-[18vw] p-2 py-3 top-16 mt-1 opacity-0 '>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for Instagram</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for TikTok</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for Twitter</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for Linkedln</div>
                </div></div>
                <Link href=""><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Pricing</li></Link>
                <div className='relative group'>
                <Link href=""><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Learn</li></Link>
                <div className='bg-white text-textcolor absolute rounded-2xl w-[18vw] p-2 top-16 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 hover:opacity-100 group-hover:pointer-events-auto'>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>The 2023 Creator Report</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>All Articles</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Creators</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Trends</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Best Practices</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Company</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Product News</div>
                  <div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Help</div>
                </div></div>
            </ul>
        </div>
        <div className='flex gap-2 justify-center items-center'>
            <Link href=""><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-4'>Log in</button></Link>
            <Link href=""><button className='bg-customDark text-lg text-white font-semibold rounded-full px-7 py-4 hover:cursor-pointer'>Sign up free</button></Link>
        </div>
    </nav>
  )
}

export default Navbar
