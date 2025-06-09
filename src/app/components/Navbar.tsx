'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 ">
      <div className="flex items-center justify-between px-4 md:px-10 py-4 max-w-screen-xl mx-auto">
 
        <div className="flex items-center">
          <img className="h-10 w-auto" src="/logo.png.webp" alt="Logo" />
          <p className="font-bold text-xl ml-2">VISTAHAVEN</p>
        </div>

    
        <div className="hidden md:flex gap-8 text-[18px] font-light">
          <a href="#" className="hover:text-black/70">Home</a>
          <a href="#services" className="hover:text-black/70">Services</a>
          <a href="#properties" className="hover:text-black/70">Properties</a>
          <a href="#aboutus" className="hover:text-black/70">About</a>
          <a href="#agents" className="hover:text-black/70">Agents</a>
        </div>

       
        <div className="hidden md:block">
          <div className="bg-black text-white text-center h-11 w-[180px] rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <p className="flex justify-center items-center h-full text-[16px]">Contact Us Now</p>
          </div>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
          <a href="#" className="block text-lg font-light">Home</a>
          <a href="#services" className="block text-lg font-light">Services</a>
          <a href="#properties" className="block text-lg font-light">Properties</a>
          <a href="#aboutus" className="block text-lg font-light">About</a>
          <a href="#agents" className="block text-lg font-light">Agents</a>
          <div className="mt-4">
            <div className="bg-black text-white text-center h-11 w-full rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <p className="flex justify-center items-center h-full text-[16px]">Contact Us Now</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
