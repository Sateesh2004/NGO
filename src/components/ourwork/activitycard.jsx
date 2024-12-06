import React from 'react'
import { Playfair_Display, Roboto, Poppins } from 'next/font/google'
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
export function ActivityCard ({ title, description, imageUrl })  {
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:cursor-pointer">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover  object-center transition-transform duration-300 hover:scale-110" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <h3 className={`text-[20px] font-[700]  text-gray-900 ${roboto.className} `}>{title}</h3>
          <p className={`mt-3 text-base text-gray-500 ${roboto.className}`}>{description}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

