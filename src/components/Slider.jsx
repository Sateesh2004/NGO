import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const imageData = [
  {
    image: '/1.jpg',
    lines: [
      { text: 'WELCOME TO SERVE PRAYAS SAMAJIK SANSHTHA', color: 'text-white' },
      { text: 'Your small help make the world better', color: 'text-white' },
      { text: 'Read More', color: 'text-white',w:'w-[150px]' },
    ]
  },
  {
    image: '/2.jpg', 
    lines: [
      { text: 'Second Image First Line', color: 'text-white' },
      { text: 'Second Image Second Line', color: 'text-white' },
      { text: 'Second Image Third Line', color: 'white' }
    ]
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeLines, setActiveLines] = useState([false, false, false]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    setActiveLines([false, false, false]);
    
    const timer1 = setTimeout(() => setActiveLines(prev => ({...prev, 0: true})), 500);
    const timer2 = setTimeout(() => setActiveLines(prev => ({...prev, 1: true})), 1000);
    const timer3 = setTimeout(() => setActiveLines(prev => ({...prev, 2: true})), 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentIndex]);

  const currentSlide = imageData[currentIndex];

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={currentSlide.image} 
          alt={`Slide ${currentIndex + 1}`} 
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute  inset-0 bg-black bg-opacity-50 flex items-start justify-start  pt-40">
          <div className="text-left">
            {currentSlide.lines.map((line, lineIndex) => (
              <div 
                key={lineIndex}
                className={`transform mb-5 transition-all  duration-700 ${
                  activeLines[lineIndex] 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-full opacity-0'
                }`}
              >
                <h2 className={`
               pl-2
                  ${line.color} 
                  ${line.w} 
                  ${lineIndex === 0 ? 'text-md ' : 
                    lineIndex === 1 ? 'text-3xl' : 'text-2xl'} 
                  `}
                >
                  {line.text}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;