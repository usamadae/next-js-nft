import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
import Link from 'next/link';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Mining() {
    return (
        <>
            <div className="container mx-auto bg-product lg:py-40 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>
                            <span className='custom_color_blue !p-0'>
                                Mining
                            </span>
                            &nbsp; By <br className='md:block hidden'/>
                            FarmHash

                        </h4>
                        <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons </p>


                    </div>

                </div>
                <div className="flex justify-items-center items-center max-w-[1000px] mx-auto md:pt-28 pt-10 gap-5">
                    <div className="w-[50%]">
                        <h5 className='text-center font-bold lg:text-[42px] md:text-[32px]'>
                            <span className='custom_color_blue'>
                                Artificial
                            </span> Mining
                        </h5>
                    </div>
                    <div className="w-[50%]">
                        <h5 className='text-center font-bold lg:text-[42px] md:text-[32px]'>
                            <span className='custom_color_blue'>
                                FarmHash
                            </span> Mining
                        </h5>
                    </div>

                </div>
                <div className='flex justify-items-center items-center '>
                    <h6 className='lg:text-[52px] md:text-[42px] font-black text-center w-[100%] text-[#0D6EFD]'>VS</h6>
                </div>

                <div className='max-w-[1000px] mx-auto'>
                    <Image className='mx-auto'
                        src="/assets/image/mining.png"
                        layout="responsive"
                        width={471}
                        height={47}

                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    )
}

export default Mining