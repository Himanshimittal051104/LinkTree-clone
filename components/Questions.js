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
    const [openQuestion9, setOpenQuestion9] = useState(false);
    return (
        <div className="bg-bg2 flex flex-col justify-center items-center px-24 py-40 text-bg12 gap-12">
            <div className="font-bold text-5xl">Got questions?</div>
            <div className="flex flex-col gap-4 justify-center w-[60%] relative">
                <div className="bg-red-950 px-12 py-12 rounded-3xl cursor-pointer ">
                    {openQuestion1 ? (<div>
                        <span className="text-2xl font-bold">Why do I need a link in bio tool?
                        </span >
                        <div className='mt-12'>
                            <p>{`Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date.`}</p>
                            <p className='mt-8'>{`A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Why do I need a link in bio tool?
                    </span >)}
                    <Image src={openQuestion1 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion1(!openQuestion1)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion2 ? (<div>
                        <span className="text-2xl font-bold"> Is Linktree the original link in bio tool?
                        </span >
                        <div className='mt-12'>
                            <p>{`The short answer? Yes!`}</p>
                            <p className='mt-8'>{`Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Is Linktree the original link in bio tool?
                    </span >)}
                    <Image src={openQuestion2 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion2(!openQuestion2)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion3 ? (<div>
                        <span className="text-2xl font-bold">Can you get paid and sell things from a Linktree?
                        </span >
                        <div className='mt-12'>
                            <p>{`Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.`}</p>
                            <p className='my-8'>{`A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!`}</p>
                            <p className='font-bold'>
                                {`“We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany`}
                            </p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Can you get paid and sell things from a Linktree?
                    </span >)}
                    <Image src={openQuestion3? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion3(!openQuestion3)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion4 ? (<div>
                        <span className="text-2xl font-bold">Is Linktree safe to use on all of my social media profiles?
                        </span >
                        <div className='mt-12'>
                            <p>{`Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Is Linktree safe to use on all of my social media profiles?
                    </span >)}
                    <Image src={openQuestion4? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion4(!openQuestion4)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion5? (<div>
                        <span className="text-2xl font-bold">What makes Linktree better than the other link in bio options?
                        </span >
                        <div className='mt-12'>
                            <p>{`We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say:`}</p>
                            <p className='my-8 font-bold'>{`“Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman`}</p>
                            <p className=' font-bold'>{`”It’s so much easier to set up and have all of your links in one place in a well designed format.” – Catie T`}</p>
                            <p className=' my-8 font-bold'>{`”Websites are cool (I have one) but Linktrees just make it so much easier.” – Tan Nguyen`}</p>
                            <p className='font-bold'>{`“I love their analytics. Other link-in-bio companies don’t provide extensive data on what’s going on.” – Riley Lemon`}</p>
                            <p className='mt-8'>
                                {`Linktree invented the bio link tool in 2016, and it continues to be the world’s most popular bio link to this day – with 50M+ people using it as their trusted place to share, sell and grow online. Join them on Linktree today and see for yourself!`}
                            </p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">What makes Linktree better than the other link in bio options?
                    </span >)}
                    <Image src={openQuestion5? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion5(!openQuestion5 )} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion6 ? (<div>
                        <span className="text-2xl font-bold">How can I drive more traffic to and through my Linktree?
                        </span >
                        <div className='mt-12'>
                            <p>{`Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links.`}</p>
                            <p className='mt-8'>{`Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!`}</p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">How can I drive more traffic to and through my Linktree?
                    </span >)}
                    <Image src={openQuestion6 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion6(!openQuestion6)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion7 ? (<div>
                        <span className="text-2xl font-bold">How many links should I have on my Linktree?
                        </span >
                        <div className='mt-12'>
                            <p>{`This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.`}</p>
                            <p className='my-8'>{`That said: for certain creators whose priority is display, education and showcasing (e.g. a record label with a library of new releases to promote, or a management company looking to showcase their full roster of clients), including more than seven links fulfils their purpose perfectly.`}</p>
                            <p className='font-bold'>
                                {`You can use features on Linktree to add subheadings, sections, animation and other prioritisation methods to your links – so no matter how many things you’ve got to share, you can drive your visitors to what’s most important, first.`}
                            </p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">How many links should I have on my Linktree?
                    </span >)}
                    <Image src={openQuestion7 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion7(!openQuestion7)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion8 ? (<div>
                        <span className="text-2xl font-bold">Do I need a website to use Linktree?
                        </span >
                        <div className='mt-12'>
                            <p>{`No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.`}</p>
                            <p className='mt-8'>“I hardly touch my website any more. I just send people to my Linktree! It’s a good-looking, fresh interface… so much more dynamic. I can take a few minutes, update my links and put my phone away rather than spending 45 struggling on WordPress.” – <a className='underline text-bg11' href="">@ashleyhopeperez`</a></p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Do I need a website to use Linktree?
                    </span >)}
                    <Image src={openQuestion8 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion8(!openQuestion8)} className='absolute  top-14 right-10'></Image>
                </div>
                <div className="bg-red-950 cursor-pointer px-12 py-12 rounded-3xl relative">
                    {openQuestion9 ? (<div>
                        <span className="text-2xl font-bold">Where can I download the app?
                        </span >
                        <div className='mt-12'>
                            <p>Find it in the <a className='text-bg11 underline href="'>App Store</a>, and in the <a className='text-bg11 underline href="'>Google Play store!</a></p>
                        </div>
                    </div>) : (<span className="text-2xl font-bold">Where can I download the app?
                    </span >)}
                    <Image src={openQuestion9 ? "/arrow-up.svg" : "/arrow-down.svg"} alt="arrow" width="20" height="20" onClick={() => setOpenQuestion9(!openQuestion9)} className='absolute  top-14 right-10'></Image>
                </div>
            </div>
        </div>
    )
}

export default Questions
