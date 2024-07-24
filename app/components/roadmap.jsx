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
            <div className="container mx-auto bg-work py-20">
                <div className="flex justify-items-center items-center">
                    <div className="w-[50%]">
                        <h4 className={`${bungee.className} text-[72px]`}>Our
                            &nbsp;
                            <span className='custom_color_blue'>
                                Roadmap
                            </span></h4>
                        <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons </p>

                    </div>

                </div>
                <Image className='w-[100%]'
                    src="/assets/image/roadmap.png"
                    layout="responsive"
                    width={1000}
                    height={100}

                    alt="Picture of the author"
                />
                <div>

                </div>
                <div className="flex justify-items-center items-center py-20">
                    <div className="w-[25%]">
                        <Image className=''
                            src="/assets/image/road-1.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] w-[226px]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>

                    <div className="w-[25%]">
                        <Image className=''
                            src="/assets/image/road-2.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] w-[226px]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                    <div className="w-[25%]">
                        <Image className=''
                            src="/assets/image/road-3.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] w-[226px]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                    <div className="w-[25%]">
                        <Image className=''
                            src="/assets/image/road-4.png"
                            width={226}
                            height={180}

                            alt="Picture of the author"
                        />
                        <ul className='list-disc pt-3'>
                            <li className={`${latoFontme.className} text-[14px] w-[226px]`}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of </li>
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap