import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
import { Lato } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });
import Link from 'next/link';
import Twitter from './twitter';
import Instagram from './instagram';
import Threads from './threads';
import SubscribeForm from './SubscribeForm';

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});
const latoFont = Lato({ weight: '900', subsets: ['latin'] });
function Footer() {
    return (
        <>
            <div className="container-fluid bg-[#0C153B] py-20">
                <div className='mx-auto container px-5'>
                    <div className="flex justify-items-center lg:gap-10 lg:flex-nowrap flex-wrap md:gap-0 gap-y-10">
                        <div className="lg:w-[25%] md:w-[50%] w-[100%] md:pr-20 lg:pr-0">

                            <Link href="/">
                                <Image
                                    src="/assets/image/logo.png"
                                    width={300}
                                    height={300}
                                    alt="Picture of the author"
                                />
                            </Link>

                            <p className='text-[18px] mt-5'>
                            Connecting real-world sports with digital social gaming through decentralized technology
                            </p>

                            <h4 className={`${bungee.className}  md:text-[24px] text-[20px] capitalize mt-10`}>
                            Connect&nbsp;
                            <span className='custom_color_blue'>
                            With Us
                            </span>

                            <div className="flex mt-5 gap-5">
                           <Link href='/'>
                           <Twitter></Twitter>
                           </Link>
                           <Link href='/'>
                           <Instagram></Instagram>
                           </Link>
                           <Link href='/'>
                           <Threads></Threads>
                           </Link>
                            </div>
                            
                          

                        </h4>
                        </div>
                        <div className="lg:w-[25%] md:w-[50%] w-[50%]">

                            <h5  className={`${latoFont.className} lg:mt-10 md:mt-0 md:text-[28px] text-[22px] text-[#0D6EFD] font-black`}>Support</h5>

                            <nav className='nav_footer'>
                                <ul>
                                    <li className='my-5'>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/'>
                                        help
                                        </Link>
                                    </li>
                                    <li className='mb-5'>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/'>
                                        privacy policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/'>
                                        terms & conditions
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="lg:w-[25%] md:w-[50%] w-[50%]">
                        <h5  className={`${latoFont.className} md:mt-10 mt-0 md:text-[28px] text-[22px] text-[#0D6EFD] font-black`}>Quick Links</h5>
                        <nav className='nav_footer'>
                                <ul>
                                    <li className='my-5'>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/'>
                                        Home
                                        </Link>
                                    </li>
                                    <li className='mb-5'>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/about'>
                                     About
                                        </Link>
                                    </li>
                                 
                                  
                                    <li>
                                        <Link className='md:text-[22px] text-[18px] capitalize font-normal' href='/'>
                                        Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="lg:w-[25%] md:w-[50%] w-[100%]">

                        <h5  className={`${latoFont.className} md:mt-10 mt-0 md:text-[28px] text-[22px] text-[#0D6EFD] font-black`}>Newsletter</h5>
                        <p className='md:text-[22px] text-[18px] mt-5'>Subscribe Our Newsletter To Get Our Latest Update </p>

                        <SubscribeForm></SubscribeForm>

                        </div>

                    </div>
                </div>
               

            </div>
            <div className="container-fluid">
            <div className="container mx-auto py-10 px-5">
            <p className={`${latoFont.className} capitalize md:text-[18px] text-[14px] lg:text-left text-center font-semibold`} >COPYRIGHT@2023-ALL RIGHTS RESERVED BY <span className='text-[#863AF0]'>MYKD</span></p>
            </div>
       
            </div>
        </>
    )
}

export default Footer