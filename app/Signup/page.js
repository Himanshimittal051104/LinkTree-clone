"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'
const Page = () => {
  const { data: session } = useSession();
  return (
    <div className='grid grid-cols-2 max-h-screen '>
      <div className='bg-white  h-full px-12 py-12 pb-8'>
        <div className='flex justify-start items-center gap-1'>
          <span className='font-semibold text-2xl'>Linktree</span>
          <Image src="/linktree.png" alt="tree" width={20} height={20}></Image>
        </div>
        <div className='w-full text-center mt-24 mb-14'>
          <p className='font-extrabold text-6xl'>Join Linktree</p>
          <p className='text-gray-600 mt-6'>Sign up for free!</p>
        </div>
        <div className='w-full'>
          <input type="text" placeholder='Email' className='w-full bg-customLight rounded-md px-4 py-2.5'></input>
          <div className='text-gray-500 text-center rounded-full p-2 bg-customLight font-semibold text-lg mt-3'>Continue</div>
        </div>
        <div className='text-gray-600 text-center mt-4'>{`By clicking Create account, you agree to Linktree's privacy notice, T&Cs and to receive offers, news and updates.`}</div>
        <div className='mt-4 mb-2 text-center text-gray-600'>OR</div>
        <div className=''>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg border  border-gray-400 flex justify-center items-center gap-1 cursor-pointer' onClick={() => signIn("google", { callbackUrl: "/"})}><Image src="/google.png" alt="google" width={30} height={30}></Image>Continue with Google</div>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg mt-2 border  border-gray-400 flex justify-center items-center gap-1 cursor-pointer'><Image src="/apple.png" alt="apple" width={20} height={20}></Image>Continue with Apple</div>
        </div>

        <div className='text-gray-600 text-center mt-8 mb-20'>
          <span>{`Already have an account?`}</span>
          <Link href="/Login">
            <span className='underline text-purple-700 ml-1'>Log in.</span>
          </Link>
        </div>
        <span className='text-gray-700 text-xs '>Cookie preferences</span>
      </div>
      <div className='bg-customMustardYellow  h-full flex items-center justify-center'>
        <Image src="/LinkTwitter.avif" alt="Signup" width={1000} height={1000} className='-mt-20'></Image>
      </div>
    </div>
  )
}

export default Page
