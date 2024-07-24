import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Product() {
    return (
        <>
            <div className="container mx-auto bg-work py-40">
                <div className="flex justify-items-center items-center">
                    <div className="w-[50%]">
                        <h4 className={`${bungee.className} text-[72px]`}>Our  
                        &nbsp;
                            <span className='custom_color_blue'>
                             Products
                            </span></h4>
                            <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>


                    </div>

                </div>
                <div className="flex justify-items-center items-center pt-40 ">
                    <div className="w-[33%] p-10 bg-[#0C153B] rounded-[50px]">
                        <Image className='mx-auto'
                            src="/assets/image/product-1.png"
     layout="responsive"
                            width={471}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} text-[32px] text-center pt-3`}>Create An Account </h5>
                        <p className='text-[24px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                        <Image className='mx-auto'
                            src="/assets/image/work-1.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                    </div>

                    <div className="w-[25%] px-5" id='borderimg_1'>
                    <Image className='mx-auto pb-4'
                            src="/assets/image/work-2.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                        <Image className='mx-auto'
                            src="/assets/image/02.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} text-[32px] text-center pt-3`}>Choose Plans  </h5>
                        <p className='text-[24px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                       
                    </div>


                    <div className="w-[25%] px-5" id='borderimg_2'>
                        <Image className='mx-auto'
                            src="/assets/image/03.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} text-[32px] text-center pt-3`}>Start Earning   </h5>
                        <p className='text-[24px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                        <Image className='mx-auto'
                            src="/assets/image/work-3.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                    </div>


                    
                    <div className="w-[25%] px-5">
                    <Image className='mx-auto pb-4'
                            src="/assets/image/work-4.png"

                            width={118}
                            height={118}

                            alt="Picture of the author"
                        />
                        <Image className='mx-auto'
                            src="/assets/image/04.png"

                            width={193}
                            height={47}

                            alt="Picture of the author"
                        />
                        <h5 className={`${lexendDeca.className} text-[32px] text-center pt-3`}>Withdraw Profit   </h5>
                        <p className='text-[24px] text-center py-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </p>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product