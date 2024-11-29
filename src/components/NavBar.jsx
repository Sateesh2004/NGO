"use client"
import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion';
const NavBar = () => {
  const pathname = usePathname()
  console.log(pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md relative  z-50">
       <AnimatePresence>

{isDonationPopupOpen&&
(  



  <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
>
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-white rounded-lg shadow-xl max-w-md w-full relative"
  >
    {/* Close Button */}
    <button 
              onClick={() => setIsDonationPopupOpen(!isDonationPopupOpen)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>

    {/* Donation Content */}
    <div className="p-6 text-center">
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-green-600 mb-4"
      >
        Support Our Mission
      </motion.h2>
      
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-6"
      >
        Your generosity helps us make a meaningful impact. 
        Every contribution brings us closer to our goals.
      </motion.p>

      {/* Placeholder QR Code */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center mb-6"
      >
        <div className=" bg-gray-200 flex items-center justify-center rounded-lg">
          <Image
           
          src="/qr.jpg"
          width={200}
          height={200}
          alt="QR code"
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-blue-50 p-4 rounded-lg mb-6"
      >
       
        <p className="text-black text-sm">
          Use your mobile banking app or payment service to scan and donate
        </p>
      </motion.div>

      {/* Donation Amount Buttons */}
     

      
    </div>
  </motion.div>
</motion.div>
)
  
}
</AnimatePresence>


      <div className="   px-5   ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="NGO Logo" 
                width={80}
                height={80}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`  hover:text-green-600 ${
        pathname === "/" ? "text-green-600" : "text-white"}  transition duration-300 text-[18px] font-bold `}>
              Home
            </Link>
            <Link href="about" className={` hover:text-green-600 ${
        pathname === "/about" ? "text-green-600" : "text-white"} transition duration-300 text-[18px] font-bold`}>
              About Us
            </Link>
            <Link href="/join" className={` hover:text-green-600 ${
        pathname === "/join" ? "text-green-600" : "text-white"} transition duration-300 text-[18px] font-bold`}>
              Join Us
            </Link>
            <Link href="/gallery" className={` hover:text-green-600 ${
        pathname === "/gallery" ? "text-green-600" : "text-white"} transition duration-300 text-[18px] font-bold`}>
              Gallery
            </Link>
          </div>

          
          <div className="hidden md:flex">
            <button 
              href="/donate" 
              onClick={() => setIsDonationPopupOpen(!isDonationPopupOpen)}
              className="flex items-center bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition duration-300 shadow-md"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donate
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block text-gray-700 hover:bg-green-50 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-gray-700 hover:bg-green-50 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                href="/join" 
                className="block text-gray-700 hover:bg-green-50 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Join Us
              </Link>
              <Link 
                href="/gallery" 
                className="block text-gray-700 hover:bg-green-50 px-3 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <button 
                 
                className="block bg-green-500 text-white text-center px-4 py-2 rounded-full hover:bg-green-600 mt-2"
                onClick={()=>{setIsDonationPopupOpen(!isDonationPopupOpen)}}
              >
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;