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
            <div className="container-fluid  bg-number py-20">
               <div className='mx-auto container'>
               <div className="flex justify-items-center items-center">
                    <div className="w-[25%]">
                        
                          <h5 className='text-[52px] text-center font-extrabold'>07 Years </h5>
                          <p className='text-[32px] text-center pt-5 font-normal'>Exertise</p>

                    </div>
                      <div className="w-[25%]">
                        
                          <h5 className='text-[52px] text-center font-extrabold'>350MW  </h5>
                          <p className='text-[32px] text-center pt-5 font-normal'>Data Capacity  </p>

                    </div>
                      <div className="w-[25%]">
                        
                          <h5 className='text-[52px] text-center font-extrabold'>$126,67,00  </h5>
                          <p className='text-[32px] text-center pt-5 font-normal'>Mining Marketing   </p>

                    </div>
                      <div className="w-[25%]">
                        
                   <h5 className='text-[52px] text-center font-extrabold'>&lt;99%</h5>

                          <p className='text-[32px] text-center pt-5 font-normal'>Equipments  </p>

                    </div>

                </div>
               </div>

            </div>
        </>
    )
}

export default Numberbar