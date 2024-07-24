import React from 'react'
import { Lato } from 'next/font/google';
import Link from 'next/link';
const latoFont = Lato({ weight: '900', subsets: ['latin'] });
function Subscribe() {
  return (
   
    <>
    <div className="container-fluid py-20 bg-subscribe h-[800px] flex items-center justify-center">
       <div className="container mx-auto">
       <h5 className={`${latoFont.className} capitalize text-[72px]`}>
        The world's first crypto art <br />
that mines bitcoins. <br />
It is just one click away. 
        </h5>

        <Link href="/">
     <button className='bg-[#0D6EFD] text-white text-[28px] mt-20 px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>Get Started</button>
   </Link> 
       </div>
    </div>
    </>

  )
}

export default Subscribe