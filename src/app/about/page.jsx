"use client"

import { Menu, X, Heart } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { Playfair_Display,Roboto,Poppins } from 'next/font/google'
import Link from 'next/link';
import { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700'], 
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'], 
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const AboutUs = () => {
  
  
  const [isDonationPopupOpen, setIsDonationPopupOpen] = useState(false);


  return (
    <div className="min-h-screen  bg-[white]">
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
      <main className=" mx-auto ">
        <section className="text-center py-10 bg-[#f2f0ec]">
          <h1 className={`text-[50px] font-[700] text-black pt-10 mb-4 ${roboto.className}`}>
            Empowering Women, Nurturing Futures
          </h1>
          <p className={`text-[30px] font-[500] text-black pb-10 mx-auto ${roboto.className}`}>
            "Women's empowerment and child welfare"
          </p>
        </section>
        <section>
          <Image src="/paper1.jpg" width={800} alt="Paper" className='m-auto shadow-xl shadow-black'  height={800}/>
        </section>

        <section className='bg-[#424242] py-10 pb-20'>
        <div className="font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                <h2 className={`text-white text-4xl font-extrabold text-[50px] ${playfair.className}`}>
  Our Board Members
</h2>                </div>

                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    <div className="bg-gray-800 p-4 border m-auto rounded-lg">
                     <div className='h-[250px] w-[250px] relative'>
                        <Image src="/bm1.jpg"  layout='fill' objectFit='cover'  alt="bm1" className="w-full object-contain object-top rounded-lg" />
                        </div>
                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">President</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                            <br />
                            <hr />
                            <br />
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo.</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                    <div className='h-[250px] w-[250px] relative'>
                        <Image src="/bm1.jpg"  layout='fill' objectFit='cover'  alt="bm1" className="w-full object-contain object-top rounded-lg" />
                        </div>
                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">President</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                            <br />
                            <hr />
                            <br />
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo.</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-4 border rounded-lg">
                    <div className='h-[250px] w-[250px] relative'>
                        <Image src="/bm1.jpg"  layout='fill' objectFit='cover'  alt="bm1" className="w-full object-contain object-top rounded-lg" />
                        </div>
                        <div className="text-center mt-4">
                            <h4 className="text-base font-semibold text-white">President</h4>
                            <p className="text-xs mt-2 text-white">John Doe</p>
                            <br />
                            <hr />
                            <br />
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>



        <section className='sm:px-52 px-5 py-10'>
          <div className="flex gap-10 sm:flex-row flex-col">
            <div className='border relative h-[200px]   sm:w-[700px]'>
            <Image src="/7.jpg" layout="fill" objectFit='cover' alt="about"/>

            </div>
            <div>
              <h1 className={`font-extrabold text-[50px] ${playfair.className}`}>Discover About us</h1>
              <div className={`leading-8 ${poppins.className}`}>
              Nitya Foundation was established on dated 25th of May 2012 Under Societies Registration Act 1860. Nitya Foundation is a National level society having 80G & 12A. It was founded with the passion of “Devotion to the Nation“ and the vision of a “prosperous Nation”.
              </div>

            </div>

            
          </div>
          <br />
            <br />
          <div className={`text-justify leading-7 font-[400] ${roboto.className}`}>
          We are the best NGO in Delhi NCR, India. We endeavor for holistic growth of the Nation and its people. We are the best social organisation in Delhi NCR, India. Support by Donate to NGO or Donate in India. We mainly focused on poverty in India, Child Development, Women Empowerment, Skill Development, Education for poor & Street Children, Health programs, Environment protection, Consumer awareness, Elderly care, Rural development programs, Slum development, Donate for Livelihood, etc. Donate to India’s best NGO and support development. At Nitya, we believe that each and every person is entitled to a worthy, meaningful, and dignified life just as mentioned under Article 21 (Right to life and personal liberty) of the Indian constitution.
          <br />
          <br />

The bitter factor is that yet being a country with the second most population in the world and one of the largest economies, India is still suffering from issues like abject poverty, many social evils, educational backwardness, environment degradation, and health, etc and to overcome these hurdles to the development of we serve our Nation.
<br />
<br />

Thus following the words of our Honorable former President and “missile man” of the country Dr. APJ Abdul Kalam – “you have to dream before the dream come true” – we dream of a stronger and developed India with equality, peace, brotherhood, and a nation where all its people get to live a quality life.
<br />
<br />

So far Nitya Foundation has been contributing all its efforts towards the fulfillment of this dream by arranging meals and tuitions for the poor and underprivileged, organizing placement link skill development programs and placements driven for youth, organizing health checkups, plantation, and environment awareness programs, conducting counseling on social issues and many more programs for the betterment of the society and nature too!
<br />
<br />

Our organization is dedicated to the wholesome upliftment of society, and we do not limit ourselves to specific issues. We understand that with the passage of time, the needs of our society change. Therefore, we have kept our horizons open to address every challenge and make our nation shine brighter.
<br />
<br />

As the top 10 NGO and the best NGO in Delhi NCR India, we encourage everyone to join us in our efforts to make a difference. We invite you to donate to our cause, regardless of how small the amount may be. Your contribution will help us in supporting underprivileged children and bringing them a better future.
<br />
<br />
We have various social causes and activities that you can be a part of. You can donate to education, or donate for poor child education in Delhi NCR India. We also encourage you to donate to slum children, donate to poor children, and donate to old age homes.
<br />
<br />

Our organization also works towards women’s empowerment, health, environment, consumer awareness, and cancer patients. We request you to donate and support these types of causes, as each contribution counts towards making a significant impact.
<br />
<br />
Together, let us make a positive difference in society. Visit our website to donate and contribute to our cause. Join us in our mission to make our nation a better place for everyone.
          </div>
        </section>

       


        <section className="text-center bg-purple-100 py-12 ">
          <h2 className="text-3xl font-bold text-green-500 mb-6">
            Join Our Mission
          </h2>
          <p className="text-gray-700  mb-8">
            Your support can make a real difference. Whether through volunteering, 
            donations, or spreading awareness, you can help us create lasting change.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition" onClick={()=>setIsDonationPopupOpen(!isDonationPopupOpen)}>
              Donate Now
            </button>
            <Link href="/join">
            <button className="bg-white text-green-500 px-6 py-3 rounded-lg border-2 border-green-500 hover:bg-purple-50 transition">
              Join Us
            </button>
            </Link>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default AboutUs;