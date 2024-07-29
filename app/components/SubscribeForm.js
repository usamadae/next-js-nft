'use client';

import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('Failed to subscribe.');
      }
    } catch (error) {
      setStatus('Error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input className='bg-[#29243F] w-[100%] my-5 text-[18px] font-black text-white placeholder:text-white p-5 rounded-lg border-0 outline-none'
        id="email"
        type="email"
        placeholder='Your Email Adress'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className='bg-[#0D6EFD] text-white text-[18px] font-black border-[#0D6EFD] text-center flex mx-auto py-5 w-[100%] items-center justify-center rounded-lg hover:bg-transparent hover:border-white border-[1px]' type="submit">Subscribe</button>
      {status && <p className='text-center text-[#0D6EFD] text-[18px] uppercase mt-5'>{status}</p>}
    </form>
  );
};

export default SubscribeForm;
