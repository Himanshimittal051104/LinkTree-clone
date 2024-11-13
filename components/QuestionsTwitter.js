import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Questions = () => {
    const [openQuestion1, setOpenQuestion1] = useState(false);
    const [openQuestion2, setOpenQuestion2] = useState(false);
    const [openQuestion3, setOpenQuestion3] = useState(false);
    const [openQuestion4, setOpenQuestion4] = useState(false);
    const [openQuestion5, setOpenQuestion5] = useState(false);
    const [openQuestion6, setOpenQuestion6] = useState(false);
    const [openQuestion7, setOpenQuestion7] = useState(false);
    const [openQuestion8, setOpenQuestion8] = useState(false);
    return (
        <div className="bg-bg2 flex flex-col justify-center items-center px-24 py-40 text-bg12 gap-12">
            <div className="font-bold text-5xl">Got questions?</div>
            <div className="flex flex-col gap-4 justify-center w-[70%] relative">
                <div className="bg-red-950 px-12 py-12 rounded-3xl cursor-pointer  hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion1 ? (<div>
                        <span className="text-2xl font-bold">What is a Linktree?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`Linktree is a single link that you can use to reveal everything you’re sharing, everywhere you’re sharing it – all in one place. You can add this personalized URL to your bio on any social media platform, in your email signatures, on business cards, and anywhere your followers, visitors and customers might discover or interact with you.`}</p>
                            <p className='mt-8'>“Linktree solves the most obvious problem a majority of creators have had by allowing them to promote ALL of their platforms, products, services, etc in the same link.” – <a className='underline text-bg11'>@rileydoingthings</a></p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">What is a Linktree?
                    </span >)}
                    <Image src={openQuestion1 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion1(!openQuestion1)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion2 ? (<div>
                        <span className="text-2xl font-bold"> What is Linktree used for on Twitter?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`Linktree is a platform that enables you to share more than one link from your Twitter profile. People use Linktree on social media, email signatures, video descriptions, show notes, live streams, webinars and even offline, using QR codes to connect people to your online identity.`}</p>
                            <p className='mt-8'>{`“It’s a wonderful way to direct traffic to what matters.” – Grem`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold"> What is Linktree used for on Twitter?
                    </span >)}
                    <Image src={openQuestion2 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion2(!openQuestion2)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion3 ? (<div>
                        <span className="text-2xl font-bold">Can I use my Linktree on Twitter?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`Absolutely! You can use your Linktree bio link on your Twitter bio, TikTok profile, Facebook page, YouTube channel, etc. There is no limit on how many times you can share your unique link. You can use your link in bio link everywhere you want to connect and engage with your followers. You can even add your Linktree URL to your Tweets!`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Can I use my Linktree on Twitter?
                    </span >)}
                    <Image src={openQuestion3 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion3(!openQuestion3)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion4 ? (<div>
                        <span className="text-2xl font-bold">Why do I need a Linktree?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`Linktree is a single link that you can use to connect audiences to everything you are, everything you do, and everything you care about. It enables you to share many links in one, so your followers, visitors and customers can find everything they’re looking for in one place.`}</p>
                            <p className='mt-8'>{`You can add it to your bio link on social media platforms like Tiktok and Instagram, include it in your email signatures, and even display it as a QR code to get your offline audiences connected with you online. Linktree is for everyone – that’s why 50M+ creators already swear by it!`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Why do I need a Linktree?
                    </span >)}
                    <Image src={openQuestion4 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion4(!openQuestion4)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion5 ? (<div>
                        <span className="text-2xl font-bold">Is Linktree safe to use on all of my social media profiles?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Is Linktree safe to use on all of my social media profiles?
                    </span >)}
                    <Image src={openQuestion5 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion5(!openQuestion5)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion6 ? (<div>
                        <span className="text-2xl font-bold">Can you get paid and sell things from a Linktree?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.`}</p>
                            <p className='my-8'>{`A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!`}</p>
                            <p className=' font-bold'>{`“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Can you get paid and sell things from a Linktree?
                    </span >)}
                    <Image src={openQuestion6 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion6(!openQuestion6)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion7 ? (<div>
                        <span className="text-2xl font-bold">Do I need a website to use Linktree?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.`}</p>
                            <p className='my-8'>“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” –<a className='underline text-bg11'> @ashleyhopeperez</a></p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Do I need a website to use Linktree?
                    </span >)}
                    <Image src={openQuestion7 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion7(!openQuestion7)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative hover:outline hover:outline-red-950 hover:outline-offset-2">
                    {openQuestion8 ? (<div>
                        <span className="text-2xl font-bold">What makes Linktree better than the other link in bio options?
                        </span >
                        <div className='mt-12 text-lg font-semibold'>
                            <p>{`We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:`}</p>
                            <p className='my-8 font-bold'>{`“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman”`}</p>
                            <p className='mb-8 font-bold'>{`It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T`}</p>
                            <p className=' font-bold'>{`”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen`}</p>
                            <p className=' my-8 font-bold'>{`“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon`}</p>
                            <p className='mt-8'>
                                {`Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`}
                            </p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">What makes Linktree better than the other link in bio options?
                    </span >)}
                    <Image src={openQuestion8 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion8(!openQuestion8)} className='absolute  top-14 right-10'></Image>
                </div>
            </div>
        </div>
    )
}

export default Questions
