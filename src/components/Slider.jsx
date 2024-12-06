import React, { useState, useEffect } from 'react';

const imageData = [
  {
    image: '/1.jpg',
    lines: [
      { 
        text: '"WELCOME TO SERVE PRAYAS SAMAJIK SANSHTHA"', 
        color: 'text-white', 
        firsttext:'text-[50px]',
        bold:'font-[700]',
        fontFamily: 'font-playfair' 
      },
      { 
        text: 'Your small help make the world better', 
        color: 'text-white',
        fontFamily: 'font-poppins'
      },
    ]
  },
  {
    image: '/2.jpg', 
    lines: [
      { 
        text: '"Empowering Women, Uplifting Lives"', 
        color: 'text-white',
        firsttext:'text-[40px]',
        bold:'font-[700]',
        fontFamily: 'font-playfair' 
      },
      
    ]
  },
  {
    image: '/3.jpg', 
    lines: [
      { 
        text: '"A Voice for the Voiceless"', 
        color: 'text-white',
        bold:'font-[700]',
        firsttext:'text-[40px]',
        fontFamily: 'font-playfair' 
      },
     
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
    <>
      {/* Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={currentSlide.image} 
            alt={`Slide ${currentIndex + 1}`} 
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center pt-40">
            <div className="">
              {currentSlide.lines.map((line, lineIndex) => (
                <div 
                  key={lineIndex}
                  className={`transform mb-5 transition-all text-center duration-700 ${
                    activeLines[lineIndex] 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-full opacity-0'
                  }`}
                >
                  <h2 className={`
                    pl-2
                    ${line.firsttext}
                    ${line.color} 
                    ${line.bold}
                    ${line.fontFamily}
                    ${lineIndex === 0 ? 'text-md' : 
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
    </>
  );
};

export default Slider;