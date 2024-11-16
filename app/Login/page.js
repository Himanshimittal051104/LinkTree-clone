"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession, signOut } from 'next-auth/react'
const Page = () => {
  return (
    <div className='grid grid-cols-2 max-h-screen '>
      <div className='bg-white  h-full px-12 py-12 pb-8'>
        <div className='flex justify-start items-center gap-1'>
          <span className='font-semibold text-2xl'>Linktree</span>
          <Image src="/linktree.png" alt="tree" width={20} height={20}></Image>
        </div>
        <div className='w-full text-center mt-24 mb-14'>
          <p className='font-extrabold text-6xl'>Welcome back!</p>
          <p className='text-gray-600 mt-2'>Log in to your Linktree</p>
        </div>
        <div className='w-full'>
          <input type="text" placeholder='Email or username' className='w-full bg-customLight rounded-md px-4 py-2.5'></input>
          <div className='text-white text-center rounded-full p-2 bg-purple-700 font-semibold text-lg mt-3'>Continue</div>
        </div>
        <div className='mt-4 mb-4 text-center text-gray-600'>OR</div>
        <div className=''>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg border  border-gray-400 flex justify-center items-center gap-1 cursor-pointer' onClick={() => signIn("google", { callbackUrl: "/"})}><Image src="/google.png" alt="google" width={30} height={30}></Image>Continue with Google</div>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg mt-2 border  border-gray-400 gap-1 flex justify-center items-center'><Image src="/apple.png" alt="apple" width={20} height={20}></Image>Continue with Apple</div>
          <div className='text-black rounded-full p-2  font-semibold text-md-lg mt-2 border  border-gray-400 flex justify-center items-center gap-1'><Image src="/phone.svg" alt="phone" width={20} height={20}></Image>Continue with phone number</div>
        </div>
        <div className='flex items-center justify-center gap-2 my-8'>
          <span className='underline text-purple-700'>Forgot password?</span>
          <div className='bg-black rounded-full h-1 w-1'></div>
          <span className='underline text-purple-700'>Forgot username?</span>
        </div>
        <div className='text-gray-600 text-center mb-28'>
          <span>{`Dont't have an account?`}</span>
          <Link href="/Signup">
            <span className='underline text-purple-700 ml-1'>Sign up.</span>
          </Link>
        </div>
        <span className='text-gray-700 text-xs '>Cookie preferences</span>
      </div>
      <div className='bg-bg12  h-full flex justify-center items-center '>
        <Image src="/linkInsta.webp" alt="Login" width={900} height={700} className='-mt-10'></Image>
      </div>
    </div>
  )
}

export default Page
