import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import Image from 'next/image';
import Faqhero from '../components/faq/faqhero';
import Faqacordian from '../components/faq/faqacordian';
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
import Link from 'next/link'
import Mining from '../components/mining';
import Numberbar from '../components/number-bar';
import Linksvg from '../components/linksvg';

const bungee = Bungee({ weight: '400', subsets: ['latin'] });
const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

function About() {
    return (
        <>
            <Header></Header>

            <div className="container mx-auto md:py-20 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[1050px] md:w-[100%] mx-auto">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px] text-center`}>09
                            &nbsp;
                            <span className='custom_color_blue'>
                                data centers &nbsp;
                            </span>
                            in
                            diffrent countries
                        </h4>
                        <p className='pt-6 md:text-[26px] text-[18px] text-center'>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                        </p>
                    </div>



                </div>

                <Image className='pt-20 mb-10'
                    src="/assets/image/mining-hero.png"
                    layout="responsive"
                    width={300}
                    height={800}
                    alt="Picture of the author"
                />

                <Numberbar></Numberbar>

                <div className='bg-product'>
                    <div className="flex justify-items-center items-center md:py-20 py-10">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>don’t trust
                                <br className='lg:block hidden' />
                                <span className='custom_color_blue lg:ps-0 ps-2'>
                                    verify!
                                </span>


                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-10 lg:flex-nowrap flex-wrap">
                        <div className="lg:w-[33%] md:w-[46%] w-[100%] bg-[#0C153B] p-5">
                            <div className="flex items-center gap-3">
                                <Image className='lg:w-auto md:w-[20%]'
                                    src="/assets/image/verify1.png"

                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h5 className='text-[#0D6EFD] lg:text-[34px] text-[22px] font-semibold'>Total Workers</h5>

                            </div>
                            <p className='lg:text-[22px] text-[18px] mt-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                        </div>
                        <div className="lg:w-[33%] md:w-[46%] w-[100%] bg-[#0C153B] p-5">
                            <div className="flex items-center gap-3">
                                <Image className='lg:w-auto md:w-[20%]'
                                    src="/assets/image/verify1.png"

                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h5 className='text-[#0D6EFD] lg:text-[34px] text-[22px] font-semibold'>Active Workers</h5>

                            </div>
                            <p className='lg:text-[22px] text-[18px] mt-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                        </div>
                        <div className="lg:w-[33%] md:w-[46%] w-[100%] bg-[#0C153B] p-5">
                            <div className="flex items-center gap-3">
                                <Image className='lg:w-auto md:w-[20%]'
                                    src="/assets/image/verify3.png"

                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                                <h5 className='text-[#0D6EFD] lg:text-[34px] text-[22px] font-semibold'>Hashrate</h5>

                            </div>
                            <p className='lg:text-[22px] text-[18px] mt-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                        </div>
                    </div>



                </div>

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center md:py-20 py-10">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>our
                                &nbsp;
                                <span className='custom_color_blue'>
                                    partners
                                </span>


                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]' >
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                            </p>


                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-10">
                        <div className="w-[33%]">
                            <Link href='/'>
                                <Image className='lg:w-auto md:w-[60%] mx-auto'
                                    src="/assets/image/partner1.png"
                                    
                                    width={400}
                                    height={146}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                        <div className="w-[33%]">
                            <Link href='/'>
                                <Image className='lg:w-auto md:w-[60%] mx-auto'
                                    src="/assets/image/partner2.png"
                                    
                                    width={376}
                                    height={47}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                        <div className="w-[33%]">
                            <Link href='/'>
                                <Image className='lg:w-auto md:w-[60%] mx-auto'
                                    src="/assets/image/partner3.png"
                                   
                                    width={357}
                                    height={214}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>
                    </div>


                 
                </div>

              

              

                

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center md:py-20 py-10">
                        <div className="lg:w-[60%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>our
                                &nbsp;
                                <span className='custom_color_blue'>
                                mining pools
                                </span>
                               

                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className='table_s'>
                        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full  table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-[22px] text-white uppercase bg-[#0A143C] font-semibold">
            <tr>
                <th scope="col" class="px-6 py-10 text-center">
                Active Members
                </th>
                <th scope="col" class="px-6 py-10 text-center">
                Hashrate 
                </th>
                <th scope="col" class="px-6 py-10 text-center">
                Links 
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd]  cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
            <tr class="bg-[#101D4F] border-b  hover:bg-[#0d6efd] cursor-pointer">
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                8330
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
                0PH/s
                </td>
                <td class="px-6 py-10 font-semibold text-[20px] whitespace-nowrap text-white text-center">
              
              <span className='flex justify-center items-center gap-3'>
               <Linksvg></Linksvg>
              <Link href='/'>
              https://www.antpool.com.
              </Link>
               </span>
           
                </td>
             
               
            </tr>
           
        </tbody>
    </table>
</div>

                    </div>


                   
                </div>

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center py-20">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[32px]`}>FARMHASH
                            &nbsp;
                                <span className='custom_color_blue'>
                                LIVE!
                                </span>
                                
                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex justify-center gap-10 bg-work lg:flex-nowrap flex-wrap">
                        
                        <div className="lg:w-[50%] w-[100%]">
                        <Image
                                    src="/assets/image/live1.png"
                                    
                                    width={950}
                                    height={764}
                                    alt="Picture of the author"
                                />
 
                   
                        </div>
                        <div className="lg:w-[50%] lg:flex hidden items-center">
                        <Image 
                                    src="/assets/image/live-arrow.png"
                                   
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                />
                        </div>
                        <div className="lg:w-[50%] lg:flex hidden">
                        <Image className='lg:h-[580px] h-[400px] lg:w-auto w-[100%]'
                                    src="/assets/image/live2.png"
                                    
                                    width={484}
                                    height={500}
                                    alt="Picture of the author"
                                />
                        </div>

                    </div>
                    <h4 className='text-[#0D6EFD] mt-5 md:text-[28px] text-[18px] font-semibold'>Camera 01 </h4>
                    <h4 className='text-white mt-5 md:text-[28px] text-[18px] font-semibold'>Data Center Block 87</h4>


                </div>

            </div>

            <Footer></Footer>
        </>
    )
}

export default About