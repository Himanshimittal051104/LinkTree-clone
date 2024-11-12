import React from 'react'
import Image from 'next/image'
const Brand = () => {
  return (
    <div className='w-[70%]  py-5'>
        <div className='rounded-full w-full bg-gray-500 h-14 my-2 flex justify-start gap-3 items-center px-3'>
          {/* <Image src="" alt="" width={30} height={30} ></Image> */}
          <div className='h-3 rounded-full  bg-gray-300 w-[40%]'></div>
        </div>
        <div className='rounded-full w-full bg-gray-500 h-14 flex justify-start gap-3 items-center px-3'>
          {/* <Image src="" alt="" width={30} height={30} ></Image> */}
          <div className='h-3 rounded-full bg-gray-300 w-[60%]'></div>
        </div>
        <div className='rounded-full w-full bg-gray-500 h-14 my-2 flex justify-start gap-3 items-center  px-3'>
          {/* <Image src="" alt="" width={30} height={30} ></Image> */}
          <div className='h-3 rounded-full bg-gray-300 w-[30%]'></div>
        </div>
    </div>
  )
}

export default Brand
