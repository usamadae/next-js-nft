import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });
import { Lato } from 'next/font/google';
const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});
const latoFont = Lato({ weight: '900', subsets: ['latin'] });

const latoFontme = Lato({ weight: '400', subsets: ['latin'] });
function Roadmap() {
    return (
        <>
            <div className="container mx-auto bg-work lg:py-20 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>Our
                            &nbsp;
                            <span className='custom_color_blue'>
                                Roadmap
                            </span></h4>
                        <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons </p>

                    </div>

                </div>
                <Image className='w-[100%] md:mb-0 mb-10'
                    src="/assets/image/roadmap.png"
                    layout="responsive"
                    width={1000}
                    height={100}

                    alt="Picture of the author"
                />
                <div>

                </div>
                <div className="flex justify-items-center items-center lg:py-20 md:py-10 lg:flex-nowrap flex-wrap lg:gap-0 gap-y-5 md:gap-x-5">
                    <div className="lg:w-[25%] md:w-[48%]">
                        <Image className='md:w-auto w-[30%]'
                            src="/assets/image/road-1.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] lg:w-[226px] md:w-[100%]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>

                    <div className="lg:w-[25%] md:w-[48%]">
                        <Image className='md:w-auto w-[30%]'
                            src="/assets/image/road-2.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] lg:w-[226px] md:w-[100%]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                    <div className="lg:w-[25%] md:w-[48%]">
                        <Image className='md:w-auto w-[30%]'
                            src="/assets/image/road-3.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] lg:w-[226px] md:w-[100%]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                    <div className="lg:w-[25%] md:w-[48%]">
                        <Image className='md:w-auto w-[30%]'
                            src="/assets/image/road-4.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] lg:w-[226px] md:w-[100%]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap