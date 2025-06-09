'use client';

import { Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-[1310px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
       
 
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.5a.375.375 0 01.375-.375h3.75a.375.375 0 01.375.375v4.5h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
            </svg>
            <h1 className="text-[28px] font-semibold">VISTAHAVEN</h1>
          </div>

          <div className="text-gray-400 space-y-2 text-[17px] leading-relaxed">
            <p>+1-800-555-1234</p>
            <p>info@vistahaven.com</p>
            <p>123 Serenity Boulevard, Greenwood Heights, NY 11222, United States</p>
          </div>
        </div>

     
        <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
          <div className="flex gap-4">
            <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full">
              <Facebook className="text-white w-6 h-6" />
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full">
              <Linkedin className="text-white w-6 h-6" />
            </button>
            <button className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded-full">
              <Youtube className="text-white w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-400 text-base">© Copyright 2025. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
