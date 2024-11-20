"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'
const Page = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [step1, setStep1] = useState(false);
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  }
  const handleKeyDownEmail = (e) => {
    if (e.key === 'Enter') {
      if (!isValidEmail(email)) {
        setError('Please enter a valid email!');
      } else {
        setError('');
        setValidEmail(true);
      }
    }
  };
  const handleKeyDownPassword = (e) => {
    if (e.key === 'Enter') {
      if (!isValidPassword(password)) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
        setValidPassword(true);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/saveAccounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log("Account saved successfully");
        setEmail("");
        setPassword("");
        setValidEmail(false);
        setValidPassword(false);
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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
          <div>
            <div className={`${error ? "border-2 border-red-700" : "border-2 border-black"}  flex rounded-md w-[100%]  pl-4 pr-2  bg-customLight`}>
              <input type="text" placeholder='Email' value={email} className={`bg-customLight w-full  py-2.5 focus:outline-none`} onChange={(e) => { setEmail(e.target.value); setError(""); setValidEmail(false) }} onKeyDown={handleKeyDownEmail}></input>
              {error && <div className='flex items-center justify-center bg-customLight'>
                <Image src="info.svg" alt="info" width={30} height={30}></Image>
              </div>}{validEmail &&
                <div className='flex items-center justify-center bg-customLight'>
                  <Image src="correct.svg" alt="info" width={30} height={30}></Image>
                </div>
              }
            </div>
            {error && <p className={`text-red-700`}>{error}</p>}
          </div>
          {
            !step1 ? <div className={` text-center rounded-full p-2  font-semibold text-lg mt-3 cursor-pointer ${validEmail ? "bg-purple-700 text-white" : "pointer-events-none bg-customLight text-gray-500"}`} onClick={() => setStep1(true)}>Continue</div>
              : <>
                <div className='mt-2'>
                  <div className={`${errorPassword ? "border-2 border-red-700" : "border-2 border-black"} flex w-full pl-4 pr-2 bg-customLight rounded-md`}>
                    <input type="password" placeholder='Password' value={password} className={`w-full bg-customLight  py-2.5 focus:outline-none`} onChange={(e) => { setPassword(e.target.value); setErrorPassword(false); setValidPassword(false) }} onKeyDown={handleKeyDownPassword}></input>
                    {errorPassword && <div className='flex items-center justify-center bg-customLight'>
                      <Image src="info.svg" alt="info" width={30} height={30}></Image>
                    </div>}{validPassword &&
                      <div className='flex items-center justify-center bg-customLight'>
                        <Image src="correct.svg" alt="info" width={30} height={30}></Image>
                      </div>
                    }
                  </div>
                  {errorPassword &&
                    <p className='text-red-700'>Password must have at least 8 characters,include an uppercase letter,a lowercase letter & a special character!</p>}
                </div>
                <div className={` text-center rounded-full p-2  font-semibold text-lg mt-3 cursor-pointer ${validEmail && validPassword ? "bg-purple-700 text-white" : "pointer-events-none bg-customLight text-gray-500"}`} onClick={handleSubmit}>Create account</div></>
          }
        </div>
        <div className='text-gray-600 text-center mt-4'>{`By clicking Create account, you agree to Linktree's privacy notice, T&Cs and to receive offers, news and updates.`}</div>
        <div className='mt-4 mb-2 text-center text-gray-600'>OR</div>
        <div className=''>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg border  border-gray-400 flex justify-center items-center gap-1 cursor-pointer' onClick={() => signIn("google", { callbackUrl: "/" })}><Image src="/google.png" alt="google" width={30} height={30}></Image>Sign up with Google</div>
          <div className='text-black rounded-full p-2 font-semibold text-md-lg mt-2 border  border-gray-400 flex justify-center items-center gap-1 cursor-pointer'><Image src="/facebook.png" alt="facebook" width={20} height={20}></Image>Sign up with Facebook</div>
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
