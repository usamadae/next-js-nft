 "use client"
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pages', label: 'Pages' },
    { path: '/admin', label: 'Admin' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      
      <div className="container mx-auto flex justify-items-center items-center">
        <div className='width-[20%]'>
          <Link href="/">
            <Image
              src="/assets/image/logo.png"
              width={300}
              height={300}
              alt="Logo"
            />
          </Link>
        </div>
        <div className='w-[55%] justify-center flex'>
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
        <div className='w-[10%] justify-end flex mr-4'>
          <Link href="/">
            <Image
              src="/assets/image/tranlate.png"
              width={80}
              height={55}
              alt="Translate"
            />
          </Link>
        </div>
        <div className='w-[15%]'>
          <Link href="/">
            <button className='bg-[#0D6EFD] text-white text-[18px] px-5 rounded-[8px] py-2 hover:bg-transparent hover:border'>
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .active {
          font-weight: bold;
          background-color:#0D6EFD;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
}

export default Header;
