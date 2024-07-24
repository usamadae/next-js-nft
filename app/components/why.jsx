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
            <div className="container mx-auto bg-work py-40">
                <div className="flex justify-items-center items-center">
                    <div className="w-[50%]">
                        <h4 className={`${bungee.className} text-[72px]`}>Why
                            &nbsp;
                            <span className='custom_color_blue'>
                                FarmHash?
                            </span></h4>
                        <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                    </div>

                </div>
                <div className="flex justify-items-center items-center pt-5 why-bg">
                    <div className='w-[50%]'>
                        <div className='flex justify-items-center items-center'>
                            <span>
                                <Image className='mx-auto'
                                    src="/assets/image/list-icon.png"

                                    width={38}
                                    height={38}

                                    alt="Picture of the author"
                                />
                            </span>
                            <p className='text-[28px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
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
                            <p className='text-[28px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
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
                            <p className='text-[28px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
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
                            <p className='text-[28px] ps-5'>graphic design, Lorem ipsum is a placeholder text </p>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <Image className='mx-auto'
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