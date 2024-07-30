import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import Image from 'next/image';
import Faqhero from '../components/faq/faqhero';
import Faqacordian from '../components/faq/faqacordian';

function FAQ() {
  return (
    <>
<Header></Header>
<Faqhero></Faqhero>
<Faqacordian></Faqacordian>
<Footer></Footer>
    </>
  )
}

export default FAQ