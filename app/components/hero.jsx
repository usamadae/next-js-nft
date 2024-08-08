import React from 'react'
import Link from 'next/link';
import { Bungee } from "next/font/google";
import Image from "next/image";
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

function Hero() {
    return (
        <>
            <div className='container mx-auto lg:py-20 md:py-10 px-5'>
                <div className="flex justify-items-center items-center flex-wrap">
                    <div className="lg:w-[60%] w-[100%]">
                        <h1 className={`${bungee.className} lg:text-[72px] md:text-[62px] sm:text-[34px] text-[28px] `}>
                            Explore, Buy And Sell Exceptional&nbsp; <br />
                            <span className='custom_color_blue'>
                                NFTs.
                            </span>
                        </h1>
                        <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                        <div className='pt-10'>
                            <Link href="/about">
                                <button className='bg-[#0D6EFD] text-white md:text-[26px] text-[18px] mr-4 px-5 rounded-[8px] py-2 bg-transparent border hover:bg-[#0D6EFD] hover:border-[#0D6EFD]'>About Project </button>
                            </Link>
                            <Link href="/">
                                <button className='bg-[#0D6EFD] text-white md:text-[26px] text-[18px]  px-5 rounded-[8px] py-2 hover:bg-transparent hover:border-white hover:border'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-[40%] w-[100%] lg:mt-0 mt-10">
                        <Image className='lg:!w-[100%] md:!w-[80%] mx-auto'
                            src="/assets/image/hero.png"
                                    layout="responsive"
                            width={100}
                            height={100}
                             sizes="(max-width: 992px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero