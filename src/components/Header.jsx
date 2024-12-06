import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Playfair_Display, Roboto, Poppins } from 'next/font/google'
import Link from 'next/link';
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700','900'], 
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700'], 
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'], 
});

const Header = () => {
  return (
    <div>
      <header className="bg-white flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-white w-full md:w-[60%] p-6 md:p-5 text-center md:text-left">
          <div className="font-bold text-[20px] md:text-[30px] text-green-500">
            सर्व प्रयास सामाजिक संस्था
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#424242] w-full md:w-[40%] p-6 md:p-10 rounded-bl-none md:rounded-bl-[200px]">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-3 md:gap-5">
            {/* Email */}
            <div className="flex items-center text-white font-bold">
              <Mail className="mr-2 text-green-500" />
              <Link
                href="mailto:sarvprayassamajiksanstha@gmail.com"
                className={`hover:text-green-500 transition-colors ${roboto.className}`}
              >
                sarvprayassamajiksanstha@gmail.com
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-center text-white font-bold">
              <Phone className="mr-2 text-green-500" />
              <Link
                href="tel:+91 90984 07030"
                className={`hover:text-green-500 transition-colors ${roboto.className}`}
              >
                +91 90984 07030
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
