import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Work() {
    return (
        <>
            <div className="container mx-auto bg-work lg:py-20 md:py-10 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px] md:text-left text-center`}>How FarmHash
                            <br className='md:block hidden' />
                            <span className='custom_color_blue'>
                                Works ?
                            </span></h4>


                    </div>

                </div>
                <div className="flex justify-items-center items-center pt-20 flex-wrap md:gap-0 gap-y-20">
                    <div className="lg:w-[25%] md:w-[50%] px-5" id='borderimg_2'>
                        <Image className='mx-auto md:w-auto w-[30%]'
                            src="/assets/image/01.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} md:text-[32px] text-[22px] text-center pt-3`}>Create An Account </h5>
                        <p className='md:text-[24px] text-[18px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                        <Image className='mx-auto'
                            src="/assets/image/work-1.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                    </div>

                    <div className="lg:w-[25%] md:w-[50%] px-5" id='borderimg_1'>
                    <Image className='mx-auto pb-4'
                            src="/assets/image/work-2.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                        <Image className='mx-auto md:w-auto w-[30%]'
                            src="/assets/image/02.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} md:text-[32px] text-[22px] text-center pt-3`}>Choose Plans  </h5>
                        <p className='md:text-[24px] text-[18px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                       
                    </div>


                    <div className="lg:w-[25%] md:w-[50%] px-5" id='borderimg_2'>
                        <Image className='mx-auto md:w-auto w-[30%]'
                            src="/assets/image/03.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} md:text-[32px] text-[22px] text-center pt-3`}>Start Earning   </h5>
                        <p className='md:text-[24px] text-[18px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                        <Image className='mx-auto'
                            src="/assets/image/work-3.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                    </div>


                    
                    <div className="lg:w-[25%] md:w-[50%] px-5">
                    <Image className='mx-auto pb-4'
                            src="/assets/image/work-4.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                        <Image className='mx-auto md:w-auto w-[30%]'
                            src="/assets/image/04.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} md:text-[32px] text-[22px] text-center pt-3`}>Withdraw Profit   </h5>
                        <p className='md:text-[24px] text-[18px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work