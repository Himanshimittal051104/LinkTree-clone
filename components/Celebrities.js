import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
const Celebrities = () => {
    const scrollRef = useRef(null);

    return (
        <div className='flex h-[55vh] overflow-x-hidden gap-5 max-w-[100vw]' ref={scrollRef}>
            <div className='min-w-[300px] rounded-full hover:bg-bg12 relative group flex items-center justify-center low'><Image src="/funkyn.webp" alt="funkynutmeg" fill className="object-cover rounded-full group-hover:opacity-0"></Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center mid'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/funkynutmeg</span></button>
            </div>
            <div className='min-w-[300px] rounded-xl hover:bg-bg12 bg-black group relative flex items-center justify-center'>
                <Image src="/hbo.png" alt="hbo" width="300" height="300" className="rounded-xl group-hover:opacity-0">
                </Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/hbo</span></button>
            </div>
            <div className='min-w-[480px] rounded-3xl h-full perspective-1000 group'>
                <div className='w-full h-full relative transform-style-preserve-3d group-hover:rotate-y-180 transition-transform duration-500 bg-pink-50'>
                    <div className='absolute w-full h-full backface-hidden bg-black flex justify-center items-center rounded-3xl'>
                        <Image src="/comedyCentral.png" alt="comedycentral" fill className="rounded-3xl"></Image>

                    </div>
                    {/* <div className='backface-hidden absolute h-full w-full rotate-y-180 bg-customNeon flex justify-center items-center rounded-3xl'>
                        <button className=' bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/comedycentral</span></button>
                    </div> */}
                </div>
            </div>

            <div className='min-w-[300px] rounded-full hover:bg-bg3 relative hover:flex hover:justify-center hover:items-center group'>
                <Image src="/pharell.jpg" alt="pharrell" fill className=" object-top rounded-full group-hover:opacity-0"></Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/pharrell</span></button>
            </div>
            <div className='min-w-[480px] rounded-3xl hover:bg-customSapphire relative hover:flex hover:justify-center hover:items-center group'>
                <Image src="/tonyHawk.jpg" alt="tonyhawk" fill className="object-cover rounded-3xl group-hover:opacity-0"></Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/tonyhawk</span></button>
            </div>
            <div className='min-w-[300px] rounded-xl hover:bg-bg1 relative hover:flex hover:justify-center hover:items-center group'>
                <Image src="/laclippers.png" alt="laclippers" fill className="object-cover rounded-xl group-hover:opacity-0"></Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/laclippers</span></button>
            </div>
            <div className='min-w-[480px] rounded-3xl hover:bg-customMustardYellow relative hover:flex hover:justify-center hover:items-center group'>
                <Image src="/selena.webp" alt="selenagomez" fill className="object-cover  rounded-3xl group-hover:opacity-0"></Image>
                <button className='opacity-0 group-hover:opacity-100 absolute bg-white rounded-full px-4 py-2 flex justify-center items-center'><Image src="/tree.svg" alt="tree" width="30" height="30" ></Image><span className='font-semibold text-lg'>/selenagomez</span></button>
            </div>
        </div >
    )
}

export default Celebrities
