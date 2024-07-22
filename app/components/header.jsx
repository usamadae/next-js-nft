import React from 'react'
import Image from "next/image";
import Link from 'next/link';
function Header() {
  return (
<>
<div className='container mx-auto'>
        <hr className='my-[30px] text-[#454545]' />
    </div>
<div className="container mx-auto flex justify-items-center items-center">
    <div className='width-[20%]'>
   <Link href="/">
   <Image
      src="/assets/image/logo.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
   </Link>
    </div>
    <div className='w-[55%] justify-center  flex'>
        <nav>
            <ul className='flex gap-10 '>
                <li>
                    <Link className='text-[18px]' href='/'>Home</Link>
                </li>
                <li>
                    <Link className='text-[18px]'  href='/'>About</Link>
                </li>
                <li>
                    <Link className='text-[18px]'  href='/'>Pages</Link>
                </li>
                <li>
                    <Link className='text-[18px]'  href='/'>Admin</Link>
                </li>
                <li>
                    <Link className='text-[18px]'  href='/'>FAQ</Link>
                </li>
            </ul>
        </nav>
    </div>
    <div className='w-[10%] justify-end flex mr-4'>
    <Link href="/">
   <Image
      src="/assets/image/tranlate.png"
      width={80}
      height={55}
      alt="Picture of the author"
    />
   </Link> 
    </div>
    <div className='w-[15%]'>
    <Link href="/">
     <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>Get Started</button>
   </Link> 
    </div>
</div>
</>
  )
}

export default Header