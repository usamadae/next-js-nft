"use client";
import React, { useState } from 'react';
import { Bungee } from "next/font/google";
import { Lexend_Deca } from 'next/font/google';

const bungee = Bungee({ weight: '400', subsets: ['latin'] });
const lexendDeca = Lexend_Deca({ subsets: ['latin'] });

const faqData = [
  {
    title: "What is farmhash Token?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "How can the token be used?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "Where can i read about farmhash tokens?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "How many holders does Farmhash Have?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "what is the proice of token ?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "What is farmhash Token?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "What is farmhash Token?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  },
  {
    title: "What is farmhash Token?",
    content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document "
  }

 
];

function Faqacordian() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (val) => {
    setOpenSections(prev => ({ ...prev, [val]: !prev[val] }));
  };

  return (
    <div className="container mx-auto bg-work">
      <div className="flex justify-items-center items-center">
        <div className="w-[1050px] mx-auto">
          <h4 className={`${bungee.className} text-[72px] text-center`}>FREQUENTLY ASKED
            <br />
            <span className='custom_color_blue'>
              QUESTIONS
            </span>
          </h4>
          <p className='pt-6 text-[26px] text-center'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
          </p>
        </div>
      </div>

      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
          <div className="w-full md:mt-0 sm:mt-14 mt-10">
            {faqData.map((section, index) => (
              <div key={index}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(index)}>
                  <h3 className=" text-[26px] capitalize font-medium dark:text-white leading-5 text-gray-800">{section.title}</h3>
                  <button aria-label="toggle" className="text-gray-800 dark:text-white cursor-pointer bg-transparent focus:outline-none">
                    
                    <svg width="25" height="25" viewBox="0 0 46 25" className={`transition-transform duration-700	${openSections[index] ? 'rotate-180' : ''} transition-all `} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.9037 24.1073L44.7642 0.99995L2.0002 0.999954L23.9037 24.1073Z" fill="#0D6EFD" stroke="#863AF0" />
                    </svg>

                  </button>
                </div>
                <p className={`${openSections[index] ? 'block' : 'hidden'} font-normal text-[24px] text-base leading-6 text-white my-10 w-11/12`}>
                  {section.content}
                </p>
                <hr className="my-7 bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqacordian;
