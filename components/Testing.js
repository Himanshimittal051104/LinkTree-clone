import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
const Celebrities = () => {
    
    return (
        <div className='flex h-[55vh] overflow-x-hidden gap-5 max-w-[100vw] ' >
            <div className='min-w-[480px] rounded-3xl h-[80%] flip-card'>
                <div className='bg-pink-50 flip-card-inner rounded-3xl'>
                    <div className='flip-card-front bg-black flex justify-center items-center rounded-3xl'>
                        front
                    </div>
                    <div className='flip-card-back bg-customNeon flex justify-center items-center rounded-3xl'>
                      back
                    </div>
                </div>
            </div>
            <div className='min-w-[480px] rounded-3xl h-[80%] flip-card'>
                <div className='bg-pink-50 flip-card-inner rounded-3xl'>
                    <div className='flip-card-front bg-black flex justify-center items-center rounded-3xl'>
                        front
                    </div>
                    <div className='flip-card-back bg-customNeon flex justify-center items-center rounded-3xl'>
                      back
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Celebrities
