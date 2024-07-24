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
            <div className="container mx-auto bg-product py-40">
                <div className="flex justify-items-center items-center">
                    <div className="w-[50%]">
                        <h4 className={`${bungee.className} text-[72px]`}>
                            <span className='custom_color_blue'>
                                Mining
                            </span>
                            &nbsp; By <br />
                            FarmHash

                        </h4>
                        <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons </p>


                    </div>

                </div>
                <div className="flex justify-items-center items-center max-w-[1000px] mx-auto pt-28 gap-5">
                    <div className="w-[50%]">
                        <h5 className='text-center font-bold text-[42px]'>
                            <span className='custom_color_blue'>
                                Artificial
                            </span> Mining
                        </h5>
                    </div>
                    <div className="w-[50%]">
                        <h5 className='text-center font-bold text-[42px]'>
                            <span className='custom_color_blue'>
                                FarmHash
                            </span> Mining
                        </h5>
                    </div>

                </div>
                <div className='flex justify-items-center items-center '>
                    <h6 className='text-[52px] font-black text-center w-[100%] text-[#0D6EFD]'>VS</h6>
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