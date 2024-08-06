import React from 'react'
import Image from "next/image"
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';
import Link from 'next/link';
const bungee = Bungee({ weight: '400', subsets: ['latin'] });

const lexendDeca = Lexend_Deca({
    subsets: ['latin'], // Specify the subsets you need
});

function Product() {
    return (
        <>
            <div className="container mx-auto bg-product lg:py-40 py-10 px-5">
                <div className="flex justify-items-center items-center">
                    <div className="lg:w-[50%] md:w-[100%]">
                        <h4 className={`${bungee.className} lg:text-[72px] md:text-[62px] text-[28px]`}>Our
                            &nbsp;
                            <span className='custom_color_blue'>
                                Products
                            </span></h4>
                        <p className='pt-6 md:text-[26px] text-[18px'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </p>


                    </div>

                </div>
                <div className="flex justify-items-center items-center md:pt-20 pt-10 gap-5 lg:flex-nowrap flex-wrap">
                    <div className="lg:w-[33%] md:w-[48%] w-[100%] md:p-10 p-5 bg-[#0C153B] rounded-[50px]">
                        <Image className='mx-auto'
                            src="/assets/image/product-1.png"
                            layout="responsive"
                            width={471}
                            height={47}

                            alt="Picture of the author"
                        />
                        <div className="flex justify-between items-center py-5">
                            <div>
                                <div className='flex justify-items-center items-center'>
                                    <span>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="22" fill="url(#pattern0_1_334)" />
                                            <defs>
                                                <pattern id="pattern0_1_334" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use href="#image0_1_334" transform="scale(0.0111111)" />
                                                </pattern>
                                                <image id="image0_1_334" width="90" height="90" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO3cO2hVSRjA8S+aVdE0rp1i4QMtfGQrdX2BFgYLiy18IaKCrouohY0WWywWgmLhO/gWZWEVbWwsJD6wEZS1URZWxXfW+EAtRBPUv8yeKUTuOffe3PPlzMyZH1wIyc35Ml8mk5nvfueKRFEURVEUlR4wCvgN+BP4G3gF9ADPgIvAcWATMB3oX/qE1QPoBywCrgFfqN1LYD8woa6AZQTMBe7QGPPLOQOMKXo8zgEG2dmYp/fARqCp6PE5ARgGXEfPafOLlDIjSfJt9HUAg6XEy8X1GpL0ENgNzAPGA0Psw3zcZr9mnlPN+VLuTKi+Jj8CVphdSA3X6g+sBB5XueZWKeHuIsuZ3vyp25l+NuO6n4CpUgYksy9rC7ejkZ2C+V5gZ8b1b5RiJwIszkjCuTySYJP9V0acBRI6khNf2pqc287ALiNpa/YlKUHt4kvK4FcoxFuVEuszMFJCRVIgquRhLbuLXv4/MH8playRUJFU4SrZrRhzb0rMkxIqklJnJW2KMeenxLwpoSKpJ1cyTjGmOUFW8lJCBXSnDLpFMWZLSsxuCRUpQo1bGGKiY6JLO6OBVuBXYB9wBfgX6AI+2keX/dxlu4Uzz21tNG4QqDJgYDZwoIZyZ5ZHtgQ7q9a4wSGdOSrfIn+3Mo7hpUx0ISRUOEZChWMkRCTFeNc0hZjkvbjnkEZ5tsgkH8Rd7UHMbOAP3Pe7+Az4pc6O0KKYn3GR+AgYAbzBH++8fB0RuIB/Lnq1XgPL8NcS8QHwA3APf901YxDXAWvx3xpxXQ63RrjgH6fXaltPDsV0cRVwjHAcFoeP2p2Eo9PJ5QP4ifBMFNcA6xUH/AHYBUz55h6Wqfb+FfNCrZZ14hpbBdPwBJicEbfVPkfDfnENcFVpJk+uIXar0sy+LK4B7isMdFcd8fcoxL8nrrE3vedtSh3xpynEfyEedYo2oiWHrtFGfJSSJHpoHfF/LEui05rM++QYDMwkf+41qwMPFAZ6qI74RxTi3xfX2I7PvPV826yYEftnpaWrQ1yj2FLwHzCjypLxXCl2u7jGvtuLlp6MuGbWa1kvZSsqSXrc0hWVmpQOLf/LiKuly8kyqXbhX9Jjaql5x9PngDmKAx+e0qSjpepup+g3B9QoLhmbK8Tbgl7LgZvLRh+0G3SbZJuZbR+blfbO3rQbDASe4q/HwADxAbAcfy0Rn5i308E/V5xfm78HjLWtsL54C4wWHwEL8cdS8RmwHfdtE9/Zo/lR3HXKu3U5DdAMnMA9pmTQLCEhmdkuLSPbgpnJGXdqvSkwwe+82ys3uPW7VECSO7zdwjW4lCxT7Jv7/ljt9/atUcAAU8RRusHIVOFWe1O76MMZPtu2DZhXN3rLfO9he61w/9nlmPRJwAbbDtxhZ+drWxrttg07d+3X2m1/9sSY3CiKoiiKoiiKIqnPVymeJpS6KQiuAAAAAElFTkSuQmCC" />
                                            </defs>
                                        </svg>

                                    </span>
                                    <span className='text-[16px] text-[#0D6EFD] pl-1'>
                                        3 stock available
                                    </span>
                                </div>


                            </div>
                            <div>

                                <Link href='/'>
                                    <svg class="fill-current text-white hover:text-[#0D6EFD]" width="28" height="28" viewBox="0 0 28 28">
                                        <rect width="28" height="28" fill="url(#pattern0_1_335)" />
                                        <defs>
                                            <pattern id="pattern0_1_335" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use href="#image0_1_335" transform="scale(0.01)" />
                                            </pattern>
                                            <image id="image0_1_335" width="100" height="100" href="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </Link>

                            </div>
                        </div>

                        <div className="flex justify-between pt-3 pb-5">
                            <div>
                                <Link href='/'>
                                    <h4 className='font-extrabold md:text-[24px] text-[18px]'>
                                        FarmHash Token
                                    </h4>
                                </Link>
                                <span className='text-[14px]'>
                                    @farmhash tokens
                                </span>
                            </div>
                            <div>
                                <span className='text-[20px]'>0.784 ETH</span>
                            </div>
                        </div>

                        <Link href="/">
                            <button className='bg-[#0D6EFD] text-white text-[18px] text-center flex mx-auto border my-5 border-[#0D6EFD] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border hover:border-white'>Place a Bid</button>
                        </Link>
                    </div>
                    <div className="lg:w-[33%] md:w-[48%] w-[100%] md:p-10 p-5 bg-[#0C153B] rounded-[50px]">
                        <Image className='mx-auto'
                            src="/assets/image/product-2.png"
                            layout="responsive"
                            width={471}
                            height={47}

                            alt="Picture of the author"
                        />
                        <div className="flex justify-between items-center py-5">
                            <div>
                                <div className='flex justify-items-center items-center'>
                                    <span>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="22" fill="url(#pattern0_1_334)" />
                                            <defs>
                                                <pattern id="pattern0_1_334" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use href="#image0_1_334" transform="scale(0.0111111)" />
                                                </pattern>
                                                <image id="image0_1_334" width="90" height="90" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO3cO2hVSRjA8S+aVdE0rp1i4QMtfGQrdX2BFgYLiy18IaKCrouohY0WWywWgmLhO/gWZWEVbWwsJD6wEZS1URZWxXfW+EAtRBPUv8yeKUTuOffe3PPlzMyZH1wIyc35Ml8mk5nvfueKRFEURVEUlR4wCvgN+BP4G3gF9ADPgIvAcWATMB3oX/qE1QPoBywCrgFfqN1LYD8woa6AZQTMBe7QGPPLOQOMKXo8zgEG2dmYp/fARqCp6PE5ARgGXEfPafOLlDIjSfJt9HUAg6XEy8X1GpL0ENgNzAPGA0Psw3zcZr9mnlPN+VLuTKi+Jj8CVphdSA3X6g+sBB5XueZWKeHuIsuZ3vyp25l+NuO6n4CpUgYksy9rC7ejkZ2C+V5gZ8b1b5RiJwIszkjCuTySYJP9V0acBRI6khNf2pqc287ALiNpa/YlKUHt4kvK4FcoxFuVEuszMFJCRVIgquRhLbuLXv4/MH8playRUJFU4SrZrRhzb0rMkxIqklJnJW2KMeenxLwpoSKpJ1cyTjGmOUFW8lJCBXSnDLpFMWZLSsxuCRUpQo1bGGKiY6JLO6OBVuBXYB9wBfgX6AI+2keX/dxlu4Uzz21tNG4QqDJgYDZwoIZyZ5ZHtgQ7q9a4wSGdOSrfIn+3Mo7hpUx0ISRUOEZChWMkRCTFeNc0hZjkvbjnkEZ5tsgkH8Rd7UHMbOAP3Pe7+Az4pc6O0KKYn3GR+AgYAbzBH++8fB0RuIB/Lnq1XgPL8NcS8QHwA3APf901YxDXAWvx3xpxXQ63RrjgH6fXaltPDsV0cRVwjHAcFoeP2p2Eo9PJ5QP4ifBMFNcA6xUH/AHYBUz55h6Wqfb+FfNCrZZ14hpbBdPwBJicEbfVPkfDfnENcFVpJk+uIXar0sy+LK4B7isMdFcd8fcoxL8nrrE3vedtSh3xpynEfyEedYo2oiWHrtFGfJSSJHpoHfF/LEui05rM++QYDMwkf+41qwMPFAZ6qI74RxTi3xfX2I7PvPV826yYEftnpaWrQ1yj2FLwHzCjypLxXCl2u7jGvtuLlp6MuGbWa1kvZSsqSXrc0hWVmpQOLf/LiKuly8kyqXbhX9Jjaql5x9PngDmKAx+e0qSjpepup+g3B9QoLhmbK8Tbgl7LgZvLRh+0G3SbZJuZbR+blfbO3rQbDASe4q/HwADxAbAcfy0Rn5i308E/V5xfm78HjLWtsL54C4wWHwEL8cdS8RmwHfdtE9/Zo/lR3HXKu3U5DdAMnMA9pmTQLCEhmdkuLSPbgpnJGXdqvSkwwe+82ys3uPW7VECSO7zdwjW4lCxT7Jv7/ljt9/atUcAAU8RRusHIVOFWe1O76MMZPtu2DZhXN3rLfO9he61w/9nlmPRJwAbbDtxhZ+drWxrttg07d+3X2m1/9sSY3CiKoiiKoiiKIqnPVymeJpS6KQiuAAAAAElFTkSuQmCC" />
                                            </defs>
                                        </svg>

                                    </span>
                                    <span className='text-[16px] text-[#0D6EFD] pl-1'>
                                        3 stock available
                                    </span>
                                </div>


                            </div>
                            <div>

                                <Link href='/'>
                                    <svg class="fill-current text-white hover:text-[#0D6EFD]" width="28" height="28" viewBox="0 0 28 28">
                                        <rect width="28" height="28" fill="url(#pattern0_1_335)" />
                                        <defs>
                                            <pattern id="pattern0_1_335" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use href="#image0_1_335" transform="scale(0.01)" />
                                            </pattern>
                                            <image id="image0_1_335" width="100" height="100" href="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </Link>

                            </div>
                        </div>

                        <div className="flex justify-between pt-3 pb-5">
                            <div>
                                <Link href='/'>
                                    <h4 className='font-extrabold md:text-[24px] text-[18px]'>
                                        FarmHash Token
                                    </h4>
                                </Link>
                                <span className='text-[14px]'>
                                    @farmhash tokens
                                </span>
                            </div>
                            <div>
                                <span className='text-[20px]'>0.784 ETH</span>
                            </div>
                        </div>

                        <Link href="/">
                            <button className='bg-[#0D6EFD] text-white text-[18px] text-center flex mx-auto border my-5 border-[#0D6EFD] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border hover:border-white'>Place a Bid</button>
                        </Link>
                    </div>

                    <div className="lg:w-[33%] md:w-[48%] w-[100%] mx-auto md:p-10 p-5 bg-[#0C153B] rounded-[50px]">
                        <Image className='mx-auto'
                            src="/assets/image/product-3.png"
                            layout="responsive"
                            width={471}
                            height={47}

                            alt="Picture of the author"
                        />
                        <div className="flex justify-between items-center py-5">
                            <div>
                                <div className='flex justify-items-center items-center'>
                                    <span>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="22" height="22" fill="url(#pattern0_1_334)" />
                                            <defs>
                                                <pattern id="pattern0_1_334" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use href="#image0_1_334" transform="scale(0.0111111)" />
                                                </pattern>
                                                <image id="image0_1_334" width="90" height="90" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO3cO2hVSRjA8S+aVdE0rp1i4QMtfGQrdX2BFgYLiy18IaKCrouohY0WWywWgmLhO/gWZWEVbWwsJD6wEZS1URZWxXfW+EAtRBPUv8yeKUTuOffe3PPlzMyZH1wIyc35Ml8mk5nvfueKRFEURVEUlR4wCvgN+BP4G3gF9ADPgIvAcWATMB3oX/qE1QPoBywCrgFfqN1LYD8woa6AZQTMBe7QGPPLOQOMKXo8zgEG2dmYp/fARqCp6PE5ARgGXEfPafOLlDIjSfJt9HUAg6XEy8X1GpL0ENgNzAPGA0Psw3zcZr9mnlPN+VLuTKi+Jj8CVphdSA3X6g+sBB5XueZWKeHuIsuZ3vyp25l+NuO6n4CpUgYksy9rC7ejkZ2C+V5gZ8b1b5RiJwIszkjCuTySYJP9V0acBRI6khNf2pqc287ALiNpa/YlKUHt4kvK4FcoxFuVEuszMFJCRVIgquRhLbuLXv4/MH8playRUJFU4SrZrRhzb0rMkxIqklJnJW2KMeenxLwpoSKpJ1cyTjGmOUFW8lJCBXSnDLpFMWZLSsxuCRUpQo1bGGKiY6JLO6OBVuBXYB9wBfgX6AI+2keX/dxlu4Uzz21tNG4QqDJgYDZwoIZyZ5ZHtgQ7q9a4wSGdOSrfIn+3Mo7hpUx0ISRUOEZChWMkRCTFeNc0hZjkvbjnkEZ5tsgkH8Rd7UHMbOAP3Pe7+Az4pc6O0KKYn3GR+AgYAbzBH++8fB0RuIB/Lnq1XgPL8NcS8QHwA3APf901YxDXAWvx3xpxXQ63RrjgH6fXaltPDsV0cRVwjHAcFoeP2p2Eo9PJ5QP4ifBMFNcA6xUH/AHYBUz55h6Wqfb+FfNCrZZ14hpbBdPwBJicEbfVPkfDfnENcFVpJk+uIXar0sy+LK4B7isMdFcd8fcoxL8nrrE3vedtSh3xpynEfyEedYo2oiWHrtFGfJSSJHpoHfF/LEui05rM++QYDMwkf+41qwMPFAZ6qI74RxTi3xfX2I7PvPV826yYEftnpaWrQ1yj2FLwHzCjypLxXCl2u7jGvtuLlp6MuGbWa1kvZSsqSXrc0hWVmpQOLf/LiKuly8kyqXbhX9Jjaql5x9PngDmKAx+e0qSjpepup+g3B9QoLhmbK8Tbgl7LgZvLRh+0G3SbZJuZbR+blfbO3rQbDASe4q/HwADxAbAcfy0Rn5i308E/V5xfm78HjLWtsL54C4wWHwEL8cdS8RmwHfdtE9/Zo/lR3HXKu3U5DdAMnMA9pmTQLCEhmdkuLSPbgpnJGXdqvSkwwe+82ys3uPW7VECSO7zdwjW4lCxT7Jv7/ljt9/atUcAAU8RRusHIVOFWe1O76MMZPtu2DZhXN3rLfO9he61w/9nlmPRJwAbbDtxhZ+drWxrttg07d+3X2m1/9sSY3CiKoiiKoiiKIqnPVymeJpS6KQiuAAAAAElFTkSuQmCC" />
                                            </defs>
                                        </svg>

                                    </span>
                                    <span className='text-[16px] text-[#0D6EFD] pl-1'>
                                        3 stock available
                                    </span>
                                </div>


                            </div>
                            <div>

                                <Link href='/'>
                                    <svg class="fill-current text-white hover:text-[#0D6EFD]" width="28" height="28" viewBox="0 0 28 28">
                                        <rect width="28" height="28" fill="url(#pattern0_1_335)" />
                                        <defs>
                                            <pattern id="pattern0_1_335" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use href="#image0_1_335" transform="scale(0.01)" />
                                            </pattern>
                                            <image id="image0_1_335" width="100" height="100" href="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </Link>

                            </div>
                        </div>

                        <div className="flex justify-between pt-3 pb-5">
                            <div>
                                <Link href='/'>
                                    <h4 className='font-extrabold md:text-[24px] text-[18px]'>
                                        FarmHash Token
                                    </h4>
                                </Link>
                                <span className='text-[14px]'>
                                    @farmhash tokens
                                </span>
                            </div>
                            <div>
                                <span className='text-[20px]'>0.784 ETH</span>
                            </div>
                        </div>

                        <Link href="/">
                            <button className='bg-[#0D6EFD] text-white text-[18px] text-center flex mx-auto border my-5 border-[#0D6EFD] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border hover:border-white'>Place a Bid</button>
                        </Link>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Product