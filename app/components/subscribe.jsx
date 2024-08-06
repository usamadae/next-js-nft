import React from 'react'
import { Lato } from 'next/font/google';
import Link from 'next/link';
const latoFont = Lato({ weight: '900', subsets: ['latin'] });
function Subscribe() {
  return (
   
    <>
    <div className="container-fluid md:py-20 py-10 bg-subscribe lg:h-[800px] md:h-auto flex items-center justify-center">
       <div className="container mx-auto px-5">
       <h5 className={`${latoFont.className} capitalize lg:text-[72px] md:text-[42px]`}>
        The world's first crypto art <br />
that mines bitcoins. <br />
It is just one click away. 
        </h5>

        <Link href="/">
     <button className='bg-[#0D6EFD] text-white lg:text-[28px] md:text-[22px] lg:mt-20 mt-10 px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>Get Started</button>
   </Link> 
       </div>
    </div>
    </>

  )
}

export default Subscribe