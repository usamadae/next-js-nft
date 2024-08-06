import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Why() {
    return (
        <>
            <div className="container mx-auto bg-work lg:py-40 md:py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>Why
                            &nbsp;
                            <span className='custom_color_blue'>
                                FarmHash?
                            </span></h4>
                        <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                    </div>

                </div>
                <div className="flex justify-items-center items-center pt-5 why-bg flex-wrap">
                    <div className='lg:w-[50%] md:w-[100%]'>
                        <div className='flex justify-items-center items-center'>
                            <span>
                                <Image className='mx-auto'
                                    src="/assets/image/list-icon.png"

                                    width={38}
                                    height={38}

                                    alt="Picture of the author"
                                />
                            </span>
                            <p className='md:text-[28px] text-[20px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
                        </div>
                        <div className='flex justify-items-center items-center pt-5'>
                            <span>
                                <Image className='mx-auto'
                                    src="/assets/image/list-icon.png"

                                    width={38}
                                    height={38}

                                    alt="Picture of the author"
                                />
                            </span>
                            <p className='md:text-[28px] text-[20px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
                        </div>
                        <div className='flex justify-items-center items-center pt-5'>
                            <span>
                                <Image className='mx-auto'
                                    src="/assets/image/list-icon.png"

                                    width={38}
                                    height={38}

                                    alt="Picture of the author"
                                />
                            </span>
                            <p className='md:text-[28px] text-[20px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
                        </div>
                        <div className='flex justify-items-center items-center pt-5'>
                            <span>
                                <Image className='mx-auto'
                                    src="/assets/image/list-icon.png"

                                    width={38}
                                    height={38}

                                    alt="Picture of the author"
                                />
                            </span>
                            <p className='md:text-[28px] text-[20px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
                        </div>
                    </div>
                    <div className="lg:w-[50%] md:w-[100%]">
                        <Image className='mx-auto lg:!w-[100%] md:!w-[80%] mt-10 lg:mt-0'
                            src="/assets/image/why-bg.png"
                            layout="responsive"
                            width={38}
                            height={38}

                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Why