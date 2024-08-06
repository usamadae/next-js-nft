import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
import { Lato } from 'next/font/google';
import Link from 'next/link';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});



const latoFont = Lato({ weight: '900', subsets: ['latin'] });

const latoFontme = Lato({ weight: '400', subsets: ['latin'] });

function Bitcoin() {
    return (
        <>
            <div className="container mx-auto bg-work lg:py-20 md:py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>NFTs To Mine
                            <br className='md:block hidden' />
                            <span className='custom_color_blue'>
                                Bitcoins
                            </span></h4>

                        <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                    </div>

                </div>
                <div className="flex justify-items-center gap-7 items-center pt-20 lg:flex-nowrap flex-wrap">
                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative '>
                         <div className='relative '>
                         <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-1.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                         </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative soldout'>
                        <div className="relative">
                        <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-2.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                        </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative soldout'>
                         <div className='relative'>
                         <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-3.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                         </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative '>
                            <div className='relative '>
                                <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-4.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                            </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative '>
                            <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-5.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative soldout'>
                            <div className='relative'>
                            <div className='relative'>
                            <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-6.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                            </div>
                            </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[14%] md:w-[30%] w-[46%]">
                        <div className="flex item-center">
                            <div className="w-[60%] p-3 bg-[#A5A6DB]" style={{ clipPath: 'polygon(0 0, 75% 0%, 100% 100%, 0% 100%)' }}>
                                <p className={`${latoFont.className} text-[18px]`}>12:05:00</p>
                            </div>
                            <div className="w-[40%] pl-5 py-3">
                                <p className={`${latoFontme.className} text-[14px]`}>300</p>
                            </div>
                        </div>

                        <div className='relative soldout'>
                           <div className='relative'>
                           <Image className='mx-auto relative z-10 mt-[-10px] '
                                src="/assets/image/b-7.png"
                                layout="responsive"
                                width={471}
                                height={47}

                                alt="Picture of the author"
                            />
                            <span className='bg-[#AA0404] soldout-tag hidden h-[35px] text-[22px] font-bold absolute z-50 top-0 bottom-0 m-auto text-center left-0 right-0'>Sold Out </span>
                           </div>
                            <Link href='/'>
                                <h3 className={`${latoFont.className} text-[20px] text-[#A5A6DB] py-2`}>Arcade Land </h3>
                            </Link>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className={`${latoFont.className} text-[20px] `}>0.045 ETH</span>
                                </div>
                                <div>
                                    <Image className='mx-auto relative z-10 mt-[-10px] '
                                        src="/assets/image/bit.png"

                                        width={63}
                                        height={25}

                                        alt="Picture of the author"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/">
                            <button className='bg-[#0D6EFD] text-white md:text-[28px] text-[18px] md:mt-24 mt-10 text-center flex mx-auto border my-5 border-[#0D6EFD] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border hover:border-white'>Go To Marketplace  </button>
                        </Link>
            </div>
        </>
    )
}

export default Bitcoin