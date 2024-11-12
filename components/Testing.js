// import React, { useEffect, useRef, useState } from 'react'
// import Image from 'next/image'
// const Testing = () => {
// const [face, setFace] = useState(1);
// const handleFlip = () => setFace((face % 4) + 1);
//     return (
//         <div className='flex h-[100vh] gap-5 max-w-[100vw] ' >
//             <div className='flip-card w-[13vw] h-[20vh]'>
//                 <div className={`flip-card-inner face${face}`}>

//                     <div className={`w-full h-full flip-card-face1 `} onClick={handleFlip}>
//                         <div className='relative rounded-2xl w-full h-full px-2 py-1 ' style={{ backgroundImage: `url('/party.jpg')`, backgroundPosition: 'center 30%' }} >
//                             <div className='absolute bottom-1 flex gap-2 h-12 items-center justify-center '>
//                                 <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center p-1'><Image src="/resume.svg" alt="resume" width="30" height="30"></Image></div>
//                                 <div className='w-36 h-3 bg-gray-400 rounded-full'>
//                                     <div className='w-[50%] rounded-full h-full bg-white'></div></div>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={`w-full h-full flip-card-face2 `}  onClick={handleFlip}>
//                         <div className=' rounded-2xl w-full h-full  p-3 relative ' >
//                             <Image src="/onlineSports.webp" alt="onlineSports" fill className='rounded-2xl object-cover'></Image>
//                             <Image src="/instagram.svg" alt="instagram" width="30" height="30" className='absolute top-3 left-3'></Image>
//                         </div>
//                     </div>


//                     <div className={`rounded-2xl w-full h-full  p-3 flip-card-face3 `}  style={{ backgroundImage: `url('/surfing.jpg')`, backgroundPosition: 'top' }} onClick={handleFlip}>
//                         <div>

//                         </div>
//                     </div>


//                     <div className={`rounded-2xl w-full h-full  p-3 bg-white grid grid-rows-3 flip-card-face4 `} onClick={handleFlip}>
//                         <p className='text-center '>Support us</p>
//                         <div className='flex justify-center items-center gap-1 -mt-3'>
//                             <div className='rounded-md border border-gray-700 px-2 py-1'>$10</div>
//                             <div className='rounded-md border border-gray-700 px-2 py-1'>$25</div>
//                             <div className='rounded-md border border-gray-700 px-2 py-1'>$50</div>
//                         </div>
//                         <div className='rounded-full bg-customDark text-white flex items-center justify-center gap-1 p-2'>
//                             <Image src="/lock.svg" alt="lock" width={20} height={20}></Image>
//                             <span className='font-semibold'>Donate</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div >
//     )
// }

// export default Testing



import React, { useState } from 'react'
import Image from 'next/image'

const Testing = () => {
  const [face, setFace] = useState(1);
  const handleFlip = () => setFace((prevFace) => (prevFace % 2) + 1); 

  return (
    <div className='flex h-[100vh] gap-5 max-w-[100vw] justify-center items-center'>
      <div className='flip-card2 group' >
        <div className={`flip-card-inner2 `}>

          {/* Face 1 */}
          <div className='flip-card-face flip-card-face1 ' onClick={handleFlip}>
            <div
              className='relative rounded-2xl w-full h-full px-2 py-1 flip-card-face1'
              style={{ backgroundImage: `url('/party.jpg')`, backgroundPosition: 'center 30%' }}>
              <div className='absolute bottom-1 flex gap-2 h-12 items-center justify-center'>
                <div className='bg-white h-8 w-8 rounded-full flex items-center justify-center p-1'>
                  <Image src="/resume.svg" alt="resume" width="30" height="30" />
                </div>
                <div className='w-36 h-3 bg-gray-400 rounded-full'>
                  <div className='w-[50%] rounded-full h-full bg-white'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Face 2 */}
          <div className='flip-card-face flip-card-face2  ' onClick={handleFlip}>
            <div className='rounded-2xl w-full h-full p-3 relative'>
              <Image src="/onlineSports.webp" alt="onlineSports" fill className='rounded-2xl object-cover' />
              <Image src="/instagram.svg" alt="instagram" width="30" height="30" className='absolute top-3 left-3' />
            </div>
          </div>

          {/* Face 3 */}
          {/* <div className='flip-card-face w-full h-full rounded-2xl flip-card-face3' style={{ backgroundImage: `url('/surfing.jpg')`, backgroundPosition: 'top' }} onClick={handleFlip}>
            <div className="rounded-2xl w-full h-full p-3">
             
            </div>
          </div> */}

          {/* Face 4 */}
          {/* <div className='flip-card-face w-full h-full bg-white grid grid-rows-3 p-3 rounded-2xl flip-card-face4' onClick={handleFlip}>
            <p className='text-center'>Support us</p>
            <div className='flex justify-center items-center gap-1 -mt-3'>
              <div className='rounded-md border border-gray-700 px-2 py-1'>$10</div>
              <div className='rounded-md border border-gray-700 px-2 py-1'>$25</div>
              <div className='rounded-md border border-gray-700 px-2 py-1'>$50</div>
            </div>
            <div className='rounded-full bg-customDark text-white flex items-center justify-center gap-1 p-2'>
              <Image src="/lock.svg" alt="lock" width={20} height={20} />
              <span className='font-semibold '>Donate</span>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Testing;
