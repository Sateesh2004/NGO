"use client"
import React from 'react';
import { Facebook,Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">

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
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <Image 
              src="/logo.png" 
              alt="NGO Logo" 
              className="mb-4"
              width={100}
              height={100}
            />
            <p className="text-gray-400 text-sm">
              Empowering communities, creating sustainable change, and building a better world for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/join" className="text-gray-300 hover:text-white transition">Join Us</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition">Gallery</Link></li>
              <li><button  className="text-green-500 hover:text-white transition"  onClick={() => setIsDonationPopupOpen(!isDonationPopupOpen)}>Donate Now</button></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="mr-2 w-5 h-5 text-green-500" />
                <span className="text-gray-300">78/4, Prakash Nagar, Nagda Jn., Ujjain, Madhya Pradesh</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 w-5 h-5 text-green-500" />
                <span className="text-gray-300">+91 9098407030</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 w-5 h-5 text-green-500" />
                <span className="text-gray-300">sarvprayassamajiksanstha@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Stay Connected</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for updates and inspiring stories.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600 transition"
              >
                Send
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://www.facebook.com/groups/1419899381853154/?ref=share&mibextid=KtfwRi" target="_blank" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </Link>
              
              <Link href="https://www.instagram.com/sarv_prayas_samajik_sanstha/" target="_blank" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </Link>
             
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} सर्व प्रयास सामाजिक संस्था. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;