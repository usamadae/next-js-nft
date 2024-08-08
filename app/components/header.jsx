"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoogleTranslate, getPrefLangCookie } from './GoogleTranslate';
import { useRef } from 'react';

function Header() {
  const pathname = usePathname();
  const prefLangCookie = getPrefLangCookie();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/mining', label: 'Mining' },
    { path: '/admin', label: 'Admin' },
    { path: '/faq', label: 'FAQ' },
  ];

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }

    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()

  return (
    <>
      <div className='w-full relative'>
        <div className="container mx-auto flex lg:justify-items-center justify-between items-center px-5 py-5">
          <div className='width-[20%] md:pr-0 pr-5'>
            <Link href="/">
              <Image className='w-[60%]'
                src="/assets/image/logo.png"
                width={300}
                height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Logo"
              />
            </Link>
          </div>
          <div className='w-[55%] justify-center lg:flex hidden'>
            <nav>
              <ul className='flex gap-2'>
                {navItems.map((item) => (
                  <li key={item.path} className={`px-5 py-10 ${pathname === item.path ? 'active' : ''}`}>
                    <Link href={item.path} className='text-[18px]'>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className='w-[10%] justify-end lg:flex mr-4 google_transte hidden'>
            <GoogleTranslate prefLangCookie={prefLangCookie} />
          </div>
          <div className='w-[15%] md:flex md:justify-end lg:block'>
            <Link className='lg:block hidden' href="/">
              <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                Get Started
              </button>
            </Link>
            <div onClick={toggleCart} className='cursor-pointer lg:hidden flex justify-end'>
              <svg width="25px" height="25px" viewBox="0 -1 20 20" version="1.1">
                <defs></defs>
                <g stroke="none" strokeWidth="1" fill="white" fillRule="evenodd">
                  <g transform="translate(-210.000000, -887.000000)" fill="white">
                    <path d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>


        </div>
        <div ref={ref} className='absolute bg-black p-10 md:w-[60%] w-[100%] h-screen top-0 right-0 transform transition-transform translate-x-full'>
          <div onClick={toggleCart} className='flex justify-end cursor-pointer mb-10'>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white">

              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white" /> </clipPath> </defs> </g>

            </svg>
          </div>
          <nav>
            <ul className='flex gap-2 flex-col'>
              {navItems.map((item) => (
                <li key={item.path} className={` py-3 ${pathname === item.path ? 'active-m' : ''}`}>
                  <Link href={item.path} className='text-[18px]'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='flex justify-center items-center'>
            <div className='google_transte my-5 w-[50%]'>
              <GoogleTranslate prefLangCookie={prefLangCookie} />
            </div>

            <div className='w-[50%]'>
              <Link href="/">
                <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active {
          font-weight: bold;
          background-color: #0D6EFD;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}

export default Header;
