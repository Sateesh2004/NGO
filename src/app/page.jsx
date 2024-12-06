"use client"
import AboutSection from "@/components/AboutSection";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ImageSlider from "@/components/Slider";
import Counter from "@/components/Counter"
import Image from "next/image";

import { OurWorkSection } from '@/components/ourwork/section';
import Initiatives from "@/components/initiative";

export default function Home() {
 
  return (
    <div>
    
      <ImageSlider/>
      <br />
      <br />
      <AboutSection/>
     <Counter/>
     <Initiatives/>
     <OurWorkSection />
    </div>
  );
}
