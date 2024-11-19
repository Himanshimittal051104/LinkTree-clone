import React, { useState,useEffect } from 'react'
import Image from 'next/image'
const Brand = () => {
  const [swapped, setSwapped] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSwapped((prev) => (prev + 1)%9);
    }, 3000);
    return () => clearInterval(interval);
  }, [swapped])
  
  return (
    <div className='w-[70%] flex flex-col gap-2 py-5 relative' onClick={() => setSwapped((swapped + 1) % 9)}>
      <div className={`${swapped > 2 ? "opacity-0" : "opacity-100"} flex flex-col gap-2 w-full absolute -top-10`}>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom1 h-14 ${swapped == 1 || swapped == 2 ? "down" : ""} `}>
          <Image src="/YoutubeBlack.svg" alt="youtube" width={30} height={30}></Image>
          <div className='bg-stone-300 h-3 w-[40%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom1 h-14 ${swapped == 1 ? "up" : ""} ${swapped == 2 ? "down" : ""}`}>
          <Image src="/SpotifyBlack.svg" alt="spotify" width={30} height={30}></Image>
          <div className='bg-stone-300 h-3 w-[60%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom1 h-14 ${swapped == 2 ? "up2" : ""} `}>
          <Image src="/TwitterBlack.svg" alt="twitter" width={30} height={30}></Image>
          <div className='bg-stone-300 h-3 w-[30%] rounded-full'></div>
        </div>
      </div>

      <div className={`${swapped <= 2 || swapped >4 ? "opacity-0" : "opacity-100"} flex flex-col gap-2 absolute -top-10 w-full`}>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom2 h-14 ${swapped == 4 ? "down" : ""}`}>
          <Image src="/YoutubePink.svg" alt="youtube" width={30} height={30}></Image>
          <div className='bg-fuchsia-200 h-3 w-[40%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom2 h-14 ${swapped == 3 ? "down" : ""} ${swapped == 4 ? "up" : ""}`}>
          <Image src="/SpotifyPink.svg" alt="spotify" width={30} height={30}></Image>
          <div className='bg-fuchsia-200 h-3 w-[60%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom2 h-14 ${swapped == 3 ? "up" : ""}`}>
          <Image src="/TwitterPink.svg" alt="twitter" width={30} height={30}></Image>
          <div className='bg-fuchsia-200 h-3 w-[30%] rounded-full'></div>
        </div>
      </div>


      <div className={`absolute -top-10 w-full flex flex-col gap-2 ${swapped <= 4 || swapped > 6 ? "opacity-0" : "opacity-100"}`}>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom3 h-14 ${swapped == 5 ? "down2" : ""} ${swapped == 6? "down" : ""}`}>
          <Image src="/YoutubeW.svg" alt="youtube" width={30} height={30}></Image>
          <div className='bg-cyan-100 h-3 w-[40%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom3 h-14 ${swapped == 6 ? "down" : ""}`}>
          <Image src="/SpotifyW.svg" alt="spotify" width={30} height={30}></Image>
          <div className='bg-cyan-100 h-3 w-[60%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom3 h-14 ${swapped == 5 || swapped==6 ? "up2" : ""} `}>
          <Image src="/Twitter.svg" alt="twitter" width={30} height={30}></Image>
          <div className='bg-cyan-100 h-3 w-[30%] rounded-full'></div>
        </div>
      </div>

      <div className={`absolute w-full flex flex-col gap-2 -top-10 ${swapped <7 ? "opacity-0" : "opacity-100"}`}>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom4 h-14 ${swapped == 7 || swapped == 8 ? "down" : ""}`}>
          <Image src="/YoutubeGreen.svg" alt="youtube" width={30} height={30}></Image>
          <div className='bg-yellow-100 h-3 w-[40%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom4 h-14 ${swapped == 7 ? "up" : ""} ${swapped == 8  ? "down" : ""}`}>
          <Image src="/SpotifyGreen.svg" alt="spotify" width={30} height={30} ></Image>
          <div className='bg-yellow-100 h-3 w-[60%] rounded-full'></div>
        </div>
        <div className={`flex justify-start px-4 items-center gap-3 rounded-full bg-custom4 h-14 ${swapped == 8 ? "up2" : ""}`}>
          <Image src="/TwitterGreen.svg" alt="twitter" width={30} height={30}></Image>
          <div className='bg-yellow-100 h-3 w-[30%] rounded-full'></div>
        </div>
      </div>

    </div>
  )
}

export default Brand
