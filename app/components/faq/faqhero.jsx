import React from 'react'
import Image from 'next/image'

function Faqhero() {
  return (
<>
<div className="container mx-auto my-20">
<Image
      src="/assets/image/faq-hero.png"
      layout="responsive"
      width={300}
      height={950}
      alt="Picture of the author"
    />

</div>
</>
  )
}

export default Faqhero