"use client"
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const AboutSection = () => {
  return (
    <section className="">
    
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">About Us</h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Best NGO in Delhi</p>
    </div>
    <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 lg:items-center ">
      <Fade direction='left' triggerOnce>
    <div aria-hidden="true" className="mt-10 lg:mt-0 ">
     <Image src="/girl.webp" height={500} width={500} alt="Girl"/>
      </div>
      </Fade>
      <Fade direction='right' triggerOnce>
      <div>
        <div className='text-justify leading-[35px] shadow-lg px-10 py-6 shadow-black  font-bold'>
        "सर्व प्रयास सामाजिक संस्था" की शुरुआत 14 जनवरी 2022 को हुई थी, जिसका मुख्य उद्देश्य समाज में गरीब, जरूरतमंद और वंचित वर्ग के लोगों के लिए कार्य करना है। विशेष रूप से संस्था महिला सशक्तिकरण, पर्यावरण संरक्षण और बिना माता-पिता के गरीब एवं जरूरतमंद बालिकाओं के पालन-पोषण के क्षेत्र में सक्रिय है। 

इस संस्था ने यह जिम्मेदारी ली है कि वह ऐसी बालिकाओं को शिक्षा, पोषण, और देखभाल प्रदान करेगी, जो किसी कारणवश अपने माता-पिता से वंचित हैं। इन बालिकाओं को न केवल गुणवत्तापूर्ण शिक्षा दी जाती है, बल्कि उनका संपूर्ण पालन-पोषण, जैसे स्वास्थ्य, मानसिक और शारीरिक विकास, भी संस्था द्वारा किया जाता है। संस्था द्वारा बालिकाओं की शादी तक सभी आवश्यक खर्चों का ध्यान रखा जाता है, ताकि वे एक सुरक्षित और सशक्त जीवन जी सकें। 

इसके अलावा, संस्था महिला सशक्तिकरण के प्रयासों में भी संलग्न है, जहां महिलाओं को उनके अधिकारों, शिक्षा और आत्मनिर्भरता के लिए प्रोत्साहित किया जाता है। संस्था का एक और महत्वपूर्ण उद्देश्य पर्यावरण संरक्षण है, जिसके तहत विभिन्न पहल की जाती हैं, जैसे वृक्षारोपण, स्वच्छता अभियान और पर्यावरणीय जागरूकता फैलाना। 

सर्व प्रयास सामाजिक संस्था समाज में सकारात्मक बदलाव लाने के लिए निरंतर प्रयासरत है और इसका उद्देश्य समाज के हर वर्ग तक मदद पहुँचाना है।"
        </div>
      </div>
      </Fade>
      
    </div>
  </div>
  
  
</section>

  );
};

export default AboutSection;