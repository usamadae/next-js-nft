import React from 'react'
import Link from 'next/link';
import { Bungee } from "next/font/google";
import Image from "next/image";
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

function Hero() {
    return (
        <>
            <div className='container mx-auto py-20'>
                <div className="flex justify-items-center items-center">
                    <div className="w-[60%]">
                        <h1 className={`${bungee.className} text-[72px]`}>
                            Explore, Buy And Sell Exceptional&nbsp; <br />
                            <span className='custom_color_blue'>
                                NFTs.
                            </span>
                        </h1>
                        <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                        <div className='pt-10'>
                            <Link href="/">
                                <button className='bg-[#0D6EFD] text-white text-[26px] mr-4 px-5 rounded-[8px] py-2 bg-transparent border hover:bg-[#0D6EFD] hover:border-[#0D6EFD]'>About Project </button>
                            </Link>
                            <Link href="/">
                                <button className='bg-[#0D6EFD] text-white text-[26px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border-white hover:border'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-40%">
                        <Image
                            src="/assets/image/hero.png"
                                    layout="responsive"
                            width={100}
                            height={100}
                            
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero