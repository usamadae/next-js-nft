import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Numberbar() {
    return (
        <>
            <div className="container-fluid bg-number py-20 ">
               <div className='mx-auto container px-5'>
               <div className="flex justify-items-center items-center flex-wrap lg:gap-0 gap-y-10">
                    <div className="lg:w-[25%] w-[50%]">
                        
                          <h5 className='md:text-[52px] text-[24px] text-center font-extrabold'>07 Years </h5>
                          <p className='md:text-[32px] text-[22px] text-center md:pt-5 pt-2 font-normal'>Exertise</p>

                    </div>
                      <div className="lg:w-[25%] w-[50%]">
                        
                          <h5 className='md:text-[52px] text-[24px] text-center font-extrabold'>350MW  </h5>
                          <p className='md:text-[32px] text-[22px] text-center md:pt-5 pt-2 font-normal'>Data Capacity  </p>

                    </div>
                      <div className="lg:w-[25%] w-[50%]">
                        
                          <h5 className='md:text-[52px] text-[24px] text-center font-extrabold'>$126,67,00  </h5>
                          <p className='md:text-[32px] text-[22px] text-center md:pt-5 pt-2 font-normal'>Mining Marketing   </p>

                    </div>
                      <div className="lg:w-[25%] w-[50%]">
                        
                   <h5 className='md:text-[52px] text-[24px] text-center font-extrabold'>&lt;99%</h5>

                          <p className='md:text-[32px] text-[22px] text-center md:pt-5 pt-2 font-normal'>Equipments  </p>

                    </div>

                </div>
               </div>

            </div>
        </>
    )
}

export default Numberbar