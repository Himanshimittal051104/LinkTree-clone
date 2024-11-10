import React from 'react'
import Image from 'next/image'
const SellProducts = () => {
    return (
        <div className='h-full w-[60%] rounded-3xl grid grid-cols-5 justify-center items-center'>
            <div className='w-[7vw] h-[23vh] bg-bg13 rounded-2xl rotate  cursor-default'>
                <div className='h-[70%] mb-2 flex items-center justify-center'>
                    <Image src="/lipstick.png" alt="lipstick" width="80" height="80" className='rounded-2xl '></Image>
                </div>
                <div className='text-center text-white'>$10</div>
            </div>

            <div className='w-[7vw] h-[23vh] bg-yellow-500 rounded-2xl rotate cursor-default'>
                <div className='h-[70%] mb-2 flex items-center justify-center'>
                    <Image src="/cap.png" alt="cap" width="100" height="80"></Image>
                </div>
                <div className='text-center text-bg13'>$20</div>
            </div>

            <div className='w-[7vw] h-[23vh] bg-bg3 rounded-2xl rotate cursor-default '>
                <div className='h-[70%] mb-2 flex items-center justify-center'>
                    <Image src="/tshirt.png" alt="tshirt" width="100" height="80"></Image>
                </div>
                <div className='text-center text-white'>$40</div>
            </div>
            <div className='w-[7vw] h-[23vh] bg-customCyan rounded-2xl rotate cursor-default '>
                <div className='flex mb-2 h-[70%] items-center justify-center'>
                    <Image src="/disc.png" alt="disc" width="80" height="80"></Image>
                </div>
                <div className='text-center text-bg13'>$30</div>
            </div>
            <div className='w-[7vw] h-[23vh] bg-bg1 rounded-2xl flex flex-col text-bg11 text-center gap-2 items-center justify-center rotate  cursor-default'>
                <div><Image src="/dollar.svg" alt="dollar" width="50" height="50"></Image></div>
                <div className='text-2xl'>$4,560</div>
                <div>Revenue</div>
            </div>
        </div >
    )
}

export default SellProducts
