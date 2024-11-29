"use client"
import AboutSection from "@/components/AboutSection";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ImageSlider from "@/components/Slider";

import Image from "next/image";

export default function Home() {
 
  return (
    <div>
    
      <ImageSlider/>
      <AboutSection/>
    </div>
  );
}
