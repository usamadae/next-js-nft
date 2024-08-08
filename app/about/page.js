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

const bungee = Bungee({ weight: '400', subsets: ['latin'] });
const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

function About() {
    return (
        <>
            <Header></Header>

            <div className="container mx-auto md:py-20 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="w-[1050px] mx-auto">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px] text-center`}>WHAT IS
                            &nbsp;
                            <span className='custom_color_blue'>
                                FARMHASH?
                            </span>
                        </h4>
                        <p className='pt-6 md:text-[26px] text-[18px] text-center'>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                        </p>
                    </div>



                </div>

                <Image className='md:pt-20 pt-10'
                    src="/assets/image/about-hero.png"
                    layout="responsive"
                    width={300}
                    height={800}
                    alt="Picture of the author"
                />

                <div className="flex justify-items-center items-center gap-10 lg:px-20 md:px-5 bg-work md:mt-[-50px] mt-[50px] md:flex-nowrap flex-wrap ">
                    <div className="md:w-[33%] w-[100%] md:pb-0 pb-10 bg-[#0C153B] rounded-[50px] border-transparent ">
                        <Image className='pt-10 mx-auto lg:w-auto md:w-[70%] w-[50%]'
                            src="/assets/image/about1.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] lg:text-[34px] text-[22px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white lg:text-[24px] text-[18px] text-center font-semibold lg:py-10 md:pt-5 md:pb-20'>Total mined by
                            users</p>
                    </div>
                    <div className="md:w-[33%] w-[100%] md:pb-0 pb-10 bg-[#0C153B] rounded-[50px] border-transparent">
                        <Image className='pt-10 mx-auto lg:w-auto md:w-[70%] w-[50%]'
                            src="/assets/image/about2.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] lg:text-[34px] text-[22px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white lg:text-[24px] text-[18px] text-center font-semibold lg:py-10 md:pt-5 md:pb-20'>Total mined by
                            users</p>
                    </div>
                    <div className="md:w-[33%] w-[100%] md:pb-0 pb-10 bg-[#0C153B] rounded-[50px] border-transparent">
                        <Image className='pt-10 mx-auto lg:w-auto md:w-[70%] w-[50%]'
                            src="/assets/image/about3.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] lg:text-[34px] text-[22px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white lg:text-[24px] text-[18px] text-center font-semibold lg:py-10 md:pt-5 md:pb-20'>Total mined by
                            users</p>
                    </div>
                </div>

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center lg:py-20 py-10">
                        <div className="lg:w-[50%] md:w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>digital miner
                                &nbsp;
                                <span className='custom_color_blue'>
                                    vs
                                </span>
                                <br />
                                token
                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>


                    <div className="flex justify-items-center items-center md:py-20 py-10 lg:px-20 md:px-10 lg:w-[1100px] md:w-auto mx-auto relative md:flex-nowrap flex-wrap">
                        <div className="md:w-[50%] w-[100%] bg-[#0D3066] lg:px-10 lg:py-20 p-10 rounded-[50px] border-transparent about-arrow relative">
                            <h4 className={`${bungee.className} text-[#0D6EFD] md:text-[34px] text-[22px] text-center font-bold pt-5`}>Digital <br className='md:block hidden'/> miner</h4>

                            <p className='text-white md:text-[22px] text-[18px] text-center font-normal md:py-10 py-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                                users</p>
                        </div>
                        <div className="md:w-[50%] w-[100%] bg-[#0C153B] px-10 lg:px-10 lg:py-20 p-10 rounded-[50px] border-transparent">
                            <h4 className={`${bungee.className} text-[#0D6EFD] md:text-[34px] text-[22px] text-center font-bold pt-5`}>token <br className='md:block hidden' /> <span className='invisible md:block hidden'>dsa</span></h4>

                            <p className='text-white md:text-[22px] text-[18px] text-center font-normal md:py-10 py-5'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                                users</p>
                        </div>
                    </div>
                </div>

                <div className='bg-product'>
                    <div className="flex justify-items-center items-center lg:py-20 py-10">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>how farmhash
                                <br  className='md:block hidden'/>
                                <span className='custom_color_blue md:pr-0 pr-2'>
                                    digital miners
                                </span>
                                <br  className='md:block hidden'/>
                                works?
                            </h4>


                        </div>

                    </div>


                    <div className="flex justify-items-center lg:w-[1200px] w-auto mx-auto md:flex-nowrap flex-wrap">
                        <div className="md:w-[45%] w-[100%]">
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10'>


                                <p className='text-white md:text-[22px] text-[18px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how1.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 md:mt-[200px] mt-[20px]'>


                                <p className='text-white md:text-[22px] text-[18px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how3.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="w-[10%] md:block hidden mx-auto">
                            <Image className='mx-auto h-[1600px]'
                                src="/assets/image/howbar.png"

                                width={164}
                                height={1500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="md:w-[45%] w-[100%]">
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 md:mt-[200px] mt-[20px]'>


                                <p className='text-white md:text-[22px] text-[18px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how2.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 md:mt-[200px] mt-[20px]'>


                                <p className='text-white md:text-[22px] text-[18px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how4.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[1000px] w-[100%] mx-auto md:mt-0 mt-10 bg-[#0B336F] lg:p-20 p-10 border-transparent rounded-[30px]'>
                        <h4 className={`${bungee.className} md:text-[28px] text-[22px] lg:w-[700px] w-auto mx-auto`}>This is the <span className='custom_color_blue'>simplest</span> and most
                            <span className='custom_color_blue'>profitable</span> way to <span className='custom_color_blue'>mine</span> today,
                            because:</h4>

                        <div className='profitable_point mt-10'>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5 md:flex-nowrap flex-wrap">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='md:text-[22px] text-[18px] md:text-left text-center'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5  md:flex-nowrap flex-wrap" >
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='md:text-[22px] text-[18px] md:text-left text-center'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5  md:flex-nowrap flex-wrap">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='md:text-[22px] text-[18px] md:text-left text-center'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5  md:flex-nowrap flex-wrap">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='md:text-[22px] text-[18px] md:text-left text-center'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='flex justify-center mt-20'>
                    <Link href="/">
                        <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                            Get Started
                        </button>
                    </Link>
                </div>

                <Mining></Mining>

                <div className='flex justify-center'>
                    <Link href="/">
                        <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                            Go To Marketplace
                        </button>
                    </Link>
                </div>

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center md:py-20 py-10">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>how our
                                &nbsp;
                                <span className='custom_color_blue'>
                                    token
                                    works
                                </span>
                                <br />

                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex lg:gap-10 gap-5 flex-wrap">
                        <div className="md:w-[48%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10 lg:flex-nowrap flex-wrap">
                            <div className='lg:w-[50%] w-[100%]'>
                                <p className='md:text-[24px] text-[18px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="lg:w-[50%] w-[100%]">
                                <Image className=''
                                    src="/assets/image/token.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="md:w-[48%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10 lg:flex-nowrap flex-wrap">
                            <div className='lg:w-[50%] w-[100%]'>
                                <p className='md:text-[24px] text-[18px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="lg:w-[48%] w-[100%]">
                                <Image className=''
                                    src="/assets/image/token2.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="md:w-[48%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10 lg:flex-nowrap flex-wrap">
                            <div className='lg:w-[50%] w-[100%]'>
                                <p className='md:text-[24px] text-[18px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="lg:w-[50%] w-[100%]">
                                <Image className=''
                                    src="/assets/image/token3.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="md:w-[48%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10 lg:flex-nowrap flex-wrap">
                            <div className='lg:w-[50%] w-[100%]'>
                                <p className='md:text-[24px] text-[18px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="lg:w-[50%] w-[100%]">
                                <Image className=''
                                    src="/assets/image/token4.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                    </div>


                    <div className='flex justify-center mt-20'>
                        <Link href="/">
                            <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='bg-product'>
                    <div className="flex justify-items-center items-center lg:py-20 py-10">
                        <div className="lg:w-[50%] w-[100%]">
                            <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>how TO BUY 
                           
                                <span className='custom_color_blue'>
                                FARMHASH
                                </span>
                                <br />
Token?
                            </h4>
                            <p className='pt-6 md:text-[26px] text-[18px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex gap-10 md:flex-nowrap flex-wrap">
                        <div className="md:w-[50%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] p-10">
                        <h5 className='text-center font-bold lg:text-[32px] md:text-[22px]'>
                        BUY IN &nbsp;
                            <span className='custom_color_blue'>
                            PERSONAL ACCOUNT
                            </span> 
                        </h5>
                        <p className='pt-6 lg:text-[26px] md:text-[20px] text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                        <div className='flex justify-center'>
                    <Link className='mt-10' href="/">
                        <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                        Create Your Account 
                        </button>
                    </Link>
                </div>
                        </div>
                        <div className="md:w-[50%] w-[100%] border-transparent rounded-[20px] bg-[#0C153B] p-10">
                        <h5 className='text-center font-bold lg:text-[32px] md:text-[22px] uppercase'>
                        on &nbsp;
                            <span className='custom_color_blue'>
                            exchanges
                            </span> 
                        </h5>
                        <p className='pt-6 lg:text-[26px] md:text-[20px] text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                        <div className='flex justify-center'>
                    <Link className='mt-10' href="/">
                        <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                        Buy On Exchanges  
                        </button>
                    </Link>
                </div>

                        </div>
                       
                        
                    </div>


                   
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}

export default About