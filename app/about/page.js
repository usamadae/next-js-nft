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

            <div className="container mx-auto py-20">
                <div className="flex justify-items-center items-center">
                    <div className="w-[1050px] mx-auto">
                        <h4 className={`${bungee.className} text-[72px] text-center`}>WHAT IS
                            &nbsp;
                            <span className='custom_color_blue'>
                                FARMHASH?
                            </span>
                        </h4>
                        <p className='pt-6 text-[26px] text-center'>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                        </p>
                    </div>



                </div>

                <Image className='pt-20'
                    src="/assets/image/about-hero.png"
                    layout="responsive"
                    width={300}
                    height={800}
                    alt="Picture of the author"
                />

                <div className="flex justify-items-center items-center gap-10 px-20 bg-work mt-[-50px]">
                    <div className="w-[33%] bg-[#0C153B] rounded-[50px] border-transparent">
                        <Image className='pt-10 mx-auto'
                            src="/assets/image/about1.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] text-[34px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white text-[24px] text-center font-semibold py-10'>Total mined by
                            users</p>
                    </div>
                    <div className="w-[33%] bg-[#0C153B] rounded-[50px] border-transparent">
                        <Image className='pt-10 mx-auto'
                            src="/assets/image/about2.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] text-[34px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white text-[24px] text-center font-semibold py-10'>Total mined by
                            users</p>
                    </div>
                    <div className="w-[33%] bg-[#0C153B] rounded-[50px] border-transparent">
                        <Image className='pt-10 mx-auto'
                            src="/assets/image/about3.png"

                            width={285}
                            height={285}
                            alt="Picture of the author"
                        />

                        <h4 className='text-[#0D6EFD] text-[34px] text-center font-bold pt-5'>2429 BTC</h4>

                        <p className='text-white text-[24px] text-center font-semibold py-10'>Total mined by
                            users</p>
                    </div>
                </div>

                <div className='bg-work'>
                    <div className="flex justify-items-center items-center py-20">
                        <div className="w-[50%]">
                            <h4 className={`${bungee.className} text-[72px]`}>digital miner
                                &nbsp;
                                <span className='custom_color_blue'>
                                    vs
                                </span>
                                <br />
                                token
                            </h4>
                            <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>


                    <div className="flex justify-items-center items-center py-20 px-20 w-[1100px] mx-auto relative">
                        <div className="w-[50%] bg-[#0D3066] px-10 py-20 rounded-[50px] border-transparent about-arrow relative">
                            <h4 className={`${bungee.className} text-[#0D6EFD] text-[34px] text-center font-bold pt-5`}>Digital <br /> miner</h4>

                            <p className='text-white text-[22px] text-center font-normal py-10'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                                users</p>
                        </div>
                        <div className="w-[50%] bg-[#0C153B] px-10 py-20 rounded-[50px] border-transparent">
                            <h4 className={`${bungee.className} text-[#0D6EFD] text-[34px] text-center font-bold pt-5`}>token <br /> <span className='invisible'>dsa</span></h4>

                            <p className='text-white text-[22px] text-center font-normal py-10'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum
                                users</p>
                        </div>
                    </div>
                </div>

                <div className='bg-product'>
                    <div className="flex justify-items-center items-center py-20">
                        <div className="w-[50%]">
                            <h4 className={`${bungee.className} text-[72px]`}>how farmhash
                                <br />
                                <span className='custom_color_blue'>
                                    digital miners
                                </span>
                                <br />
                                works?
                            </h4>


                        </div>

                    </div>


                    <div className="flex justify-items-center w-[1200px] mx-auto">
                        <div className="w-[45%]">
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10'>


                                <p className='text-white text-[22px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how1.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 mt-[200px]'>


                                <p className='text-white text-[22px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how3.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="w-[10%] mx-auto">
                            <Image className='mx-auto h-[1600px]'
                                src="/assets/image/howbar.png"

                                width={164}
                                height={1500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="w-[45%]">
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 mt-[200px]'>


                                <p className='text-white text-[22px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how2.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='bg-[#0C153B] border-transparent rounded-[30px] p-10 mt-[200px]'>


                                <p className='text-white text-[22px] font-normal'>In publishing and graphic design, Lorem ipsu placeholder text commonly used to demons</p>

                                <Image className='pt-10 mx-auto'
                                    src="/assets/image/how4.png"

                                    width={575}
                                    height={362}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[1000px] mx-auto bg-[#0B336F] p-20 border-transparent rounded-[30px]'>
                        <h4 className={`${bungee.className} text-[28px] w-[700px] mx-auto`}>This is the <span className='custom_color_blue'>simplest</span> and most
                            <span className='custom_color_blue'>profitable</span> way to <span className='custom_color_blue'>mine</span> today,
                            because:</h4>

                        <div className='profitable_point mt-10'>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='text-[22px]'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='text-[22px]'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='text-[22px]'>You don't need to take care of equipment maintena
                                    nce and placement yourself.</p>
                            </div>
                            <div className="profitable-block bg-[#0D3888] border-transparent rounded-[20px] p-4 flex items-center justify-center gap-5 mt-5">
                                <Image className=''
                                    src="/assets/image/profit-check.png"

                                    width={72}
                                    height={72}
                                    alt="Picture of the author"
                                />
                                <p className='text-[22px]'>You don't need to take care of equipment maintena
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
                    <div className="flex justify-items-center items-center py-20">
                        <div className="w-[50%]">
                            <h4 className={`${bungee.className} text-[72px]`}>how our
                                &nbsp;
                                <span className='custom_color_blue'>
                                    token
                                    works
                                </span>
                                <br />

                            </h4>
                            <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex gap-10 flex-wrap">
                        <div className="w-[48%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10">
                            <div className='w-[50%]'>
                                <p className='text-[24px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="w-[50%]">
                                <Image className=''
                                    src="/assets/image/token.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="w-[48%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10">
                            <div className='w-[50%]'>
                                <p className='text-[24px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="w-[48%]">
                                <Image className=''
                                    src="/assets/image/token2.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="w-[48%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10">
                            <div className='w-[50%]'>
                                <p className='text-[24px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="w-[50%]">
                                <Image className=''
                                    src="/assets/image/token3.png"

                                    width={373}
                                    height={284}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>
                        <div className="w-[48%] border-transparent rounded-[20px] bg-[#0C153B] gap-5 flex items-center justify-center p-10">
                            <div className='w-[50%]'>
                                <p className='text-[24px]'>
                                    lorem ipsum is a dummy
                                    text which is used for dum
                                    my content commonly used
                                    to demons placeholder.</p>
                            </div>
                            <div className="w-[50%]">
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
                    <div className="flex justify-items-center items-center py-20">
                        <div className="w-[50%]">
                            <h4 className={`${bungee.className} text-[72px]`}>how TO BUY 
                           
                                <span className='custom_color_blue'>
                                FARMHASH
                                </span>
                                <br />
Token?
                            </h4>
                            <p className='pt-6 text-[26px]'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>

                        </div>

                    </div>

                    <div className="flex gap-10">
                        <div className="w-[50%] border-transparent rounded-[20px] bg-[#0C153B] p-10">
                        <h5 className='text-center font-bold text-[32px]'>
                        BUY IN &nbsp;
                            <span className='custom_color_blue'>
                            PERSONAL ACCOUNT
                            </span> 
                        </h5>
                        <p className='pt-6 text-[26px] text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
                        <div className='flex justify-center'>
                    <Link className='mt-10' href="/">
                        <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                        Create Your Account 
                        </button>
                    </Link>
                </div>
                        </div>
                        <div className="w-[50%] border-transparent rounded-[20px] bg-[#0C153B] p-10">
                        <h5 className='text-center font-bold text-[32px] uppercase'>
                        on &nbsp;
                            <span className='custom_color_blue'>
                            exchanges
                            </span> 
                        </h5>
                        <p className='pt-6 text-[26px] text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>
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