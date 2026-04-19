"use client"
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "motion/react"
import { Playfair_Display,Roboto,Poppins } from 'next/font/google'

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



const AboutSection = () => {
  return (
    <section className="">
    <div className='lg:hidden'>
    <motion.div
      initial={{ x:200,}}
      whileInView={{ x: 0, }} 
      transition={{ delay: 0.2, duration: 1.5, type: 'spring', stiffness: 50 }} // Smooth spring animation
      aria-hidden="true"

      
      
      
      
      
      >
        <div className={`text-justify leading-[35px] text-[#666666] shadow-lg px-10 py-6 shadow-black  font-bold ${roboto.className}`}>
        "सर्व प्रयास सामाजिक संस्था की शुरुआत 4 अप्रैल 2023 से शुरू हुई जिसकी मुख्य संस्थापक ज्योति शर्मा बृजवासी सह संस्थापक कुमुद पायल ओझा अनीता पंडया एवं सीमा ओझा द्वारा संस्था की शुरुआत करी गई वर्तमान में संस्था की 7 शाखाएं हैं जिसमें मुख्य रूप से नागदा उज्जैन महिदपुर सिटी खाचरोद महिदपुर रोड घोंसला वडोदरा गुजरात मैं संचालित की जा रही हैसर्व प्रयास सामाजिक संस्था" की शुरुआत 4 April, 2023 को हुई थी, जिसका मुख्य उद्देश्य समाज में गरीब, जरूरतमंद और वंचित वर्ग के लोगों के लिए कार्य करना है। विशेष रूप से संस्था महिला सशक्तिकरण, पर्यावरण संरक्षण और बिना माता-पिता के गरीब एवं जरूरतमंद बालिकाओं के पालन-पोषण के क्षेत्र में सक्रिय है। 

इस संस्था ने यह जिम्मेदारी ली है कि वह ऐसी बालिकाओं को शिक्षा, पोषण, और देखभाल प्रदान करेगी, जो किसी कारणवश अपने माता-पिता से वंचित हैं। इन बालिकाओं को न केवल गुणवत्तापूर्ण शिक्षा दी जाती है, बल्कि उनका संपूर्ण पालन-पोषण, जैसे स्वास्थ्य, मानसिक और शारीरिक विकास, भी संस्था द्वारा किया जाता है। संस्था द्वारा बालिकाओं की शादी तक सभी आवश्यक खर्चों का ध्यान रखा जाता है, ताकि वे एक सुरक्षित और सशक्त जीवन जी सकें। 

इसके अलावा, संस्था महिला सशक्तिकरण के प्रयासों में भी संलग्न है, जहां महिलाओं को उनके अधिकारों, शिक्षा और आत्मनिर्भरता के लिए प्रोत्साहित किया जाता है। संस्था का एक और महत्वपूर्ण उद्देश्य पर्यावरण संरक्षण है, जिसके तहत विभिन्न पहल की जाती हैं, जैसे वृक्षारोपण, स्वच्छता अभियान और पर्यावरणीय जागरूकता फैलाना। 

सर्व प्रयास सामाजिक संस्था समाज में सकारात्मक बदलाव लाने के लिए निरंतर प्रयासरत है और इसका उद्देश्य समाज के हर वर्ग तक मदद पहुँचाना है।"
        </div>
      </motion.div>
    </div>
  <div className="container hidden lg:block max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className={`text-[60px] font-[700] text-center ${playfair.className}`}>About Us</h2>
          
      <p className={`max-w-3xl mx-auto mt-4 text-xl text-green-600 text-center ${poppins.className}`}>BEST NGO IN UJJAIN</p>
    </div>
    <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 lg:items-center ">
    <motion.div initial={{ x: -200,opacity:0}}
        whileInView={{ x: 0,opacity:1 }} 
        transition={{ delay: 0.2, duration: 1.5, type: 'spring', stiffness: 50 }} // Smooth spring animation
  aria-hidden="true" className="mt-10 lg:mt-0 ">
     <Image src="/girl.webp" height={500} width={500} alt="Girl"/>
      </motion.div>
      <motion.div
      initial={{ x:200,}}
      whileInView={{ x: 0, }} 
      transition={{ delay: 0.2, duration: 1.5, type: 'spring', stiffness: 50 }} // Smooth spring animation
      aria-hidden="true"

      
      
      
      
      
      >
        <div className={`text-justify leading-[35px] text-[#666666] shadow-lg px-10 py-6 shadow-black  font-bold ${roboto.className}`}>
        "सर्व प्रयास सामाजिक संस्था की शुरुआत 4 अप्रैल 2023 से शुरू हुई जिसकी मुख्य संस्थापक ज्योति शर्मा बृजवासी सह संस्थापक कुमुद पायल ओझा, द्वारा संस्था की शुरुआत करी गई।
        वर्तमान में संस्था की 7 शाखाएँ संचालित हैं, जो मुख्य रूप से नागदा, उज्जैन, महिदपुर सिटी, खाचरोद, महिदपुर रोड, घोंसला तथा वडोदरा (गुजरात) में स्थित हैं।

संस्था की शुरुआत नागदा जंक्शन से हुई थी। इसके पश्चात शाखाएँ उज्जैन, महिदपुर सिटी, खाचरोद, महिदपुर रोड, घटिया, घोंसला, वडोदरा (गुजरात), अकोदिया (शाजापुर), तराना तथा रतलाम में स्थापित की गईं।

इस संस्था ने यह जिम्मेदारी ली है कि वह ऐसी बालिकाओं को शिक्षा, पोषण, और देखभाल प्रदान करेगी, जो किसी कारणवश अपने माता-पिता से वंचित हैं। इन बालिकाओं को न केवल गुणवत्तापूर्ण शिक्षा दी जाती है, बल्कि उनका संपूर्ण पालन-पोषण भी संस्था द्वारा किया जाता है। संस्था द्वारा बालिकाओं की शादी तक सभी आवश्यक खर्चों का ध्यान रखा जाता है। 

इसके अलावा, संस्था महिला सशक्तिकरण के प्रयासों में भी संलग्न है, जहां महिलाओं को उनके अधिकारों, शिक्षा और आत्मनिर्भरता के लिए प्रोत्साहित किया जाता है। संस्था का एक और महत्वपूर्ण उद्देश्य पर्यावरण संरक्षण है, जिसके तहत विभिन्न पहल की जाती हैं, जैसे वृक्षारोपण, स्वच्छता अभियान और पर्यावरणीय जागरूकता फैलाना। 
संस्था महिलाओं को समाज सेवा के लिए प्रेरित कर उनको समाज सेवा के क्षेत्र में आगे बढ़ा रही है

सर्व प्रयास सामाजिक संस्था समाज में सकारात्मक बदलाव लाने के लिए निरंतर प्रयासरत है और इसका उद्देश्य समाज के हर वर्ग तक मदद पहुँचाना है।"
        </div>
      </motion.div>
     
      
    </div>
  </div>
  
  

{/* <motion.h2 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-green-600 mb-4"
      >
        Support Our Mission
      </motion.h2> */}




  
</section>

  );
};

export default AboutSection;