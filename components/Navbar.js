"use client"
import React from 'react'
import Image from 'next/image'
import localFont from "next/font/local";
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
const dosis = localFont({
  src: "../app/fonts/Dosis-Bold.ttf",
  variable: "--font-dosis",
  weight: "100 900",
});

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className='pt-12 sticky top-0 z-10  px-20'>
      <div className='h-20   rounded-full flex justify-between pr-3 pl-10 items-center  bg-white ' >
        <div className='flex gap-14 items-center'>
          <Link href="/">
            <div className={`font-bold text-3xl flex ${dosis.className} cursor-pointer`}>Linktree<Image src="/linktreeBlack.png" alt="tree" width="30" height="20"></Image></div></Link>
          <ul className='flex gap-2 text-textcolor font-semibold'>
            <Link href="" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 hover:!rounded-lg'>Templates</li></Link>
            <Link href="" className='text-gray-500 no-underline'><li className='hover:cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Marketplace</li></Link>
            <div className='relative group'>
              <Link href="/Instagram" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg '>Discover</li></Link>
              <div className='absolute top-10 rounded-2xl  opacity-0 pointer-events-none group-hover:!opacity-100 group-hover:pointer-events-auto '>
                <div className='bg-white text-textcolor rounded-2xl w-[18vw] p-2 py-3 mt-7 '>
                  <Link href="/Instagram"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for Instagram</div></Link>
                  <Link href="/Tiktok"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for TikTok</div></Link>
                  <Link href="/Twitter"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for  X</div></Link>
                  <Link href="/Linkedln"><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 hover:cursor-pointer'>Linktree for Linkedln</div></Link>
                </div>
              </div>

            </div>
            <Link href="" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Pricing</li></Link>
            <div className='relative group '>
              <Link href="" className='text-gray-500 no-underline'><li className='cursor-pointer hover:bg-customLight px-3 py-2 hover:rounded-lg'>Learn</li></Link>
              <div className={`w-[18vw] absolute top-10 rounded-2xl opacity-0  pointer-events-none group-hover:pointer-events-auto group-hover:!opacity-100 `}>
                <div className='bg-white text-textcolor rounded-2xl p-2 mt-7 cursor-default group-hover:cursor-pointer'>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>The 2023 Creator Report</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>All Articles</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16 '>Creators</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16'>Trends</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16'>Best Practices</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16'>Company</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16'>Product News</div></Link>
                  <Link href=""><div className='rounded-lg  pl-3 py-2 hover:bg-customLight pr-16'>Help</div></Link>
                </div>
              </div>
            </div>
          </ul>
        </div>
        {session ?
          (<div className='flex gap-2 justify-center items-center'>
            <Link href="/Login"><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3'>Admin</button></Link>
            <button className='bg-customDark text-lg text-white font-semibold rounded-full px-7 py-3 hover:cursor-pointer' onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button></div>
          ) :
          (<div className='flex gap-2 justify-center items-center'>
            <Link href="/Login"><button className='bg-customLight rounded-lg px-7 font-semibold text-lg hover:cursor-pointer py-3'>Log in</button></Link>
            <Link href="/Signup"><button className='bg-customDark text-lg text-white font-semibold rounded-full px-7 py-3 hover:cursor-pointer' >Sign up free</button></Link></div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
