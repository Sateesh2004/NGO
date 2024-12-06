import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Counter from "@/components/Counter"
const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], 
  });
const page = () => {
  return (
    <div>

        <div className='bg-[#d2cfcf] p-20'>
           <h1 className={`text-center font-bold text-[60px] text-[black] ${playfair.className}`}>Photo Gallery</h1> 
        </div>
      

      <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="paper1.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NEWS</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="7.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Article</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="6.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Media</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="5.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">People</span> */}
            </a>
        </div>
    </div>
</div>


<div className="bg-white dark:bg-gray-800  h-full py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="g4.jpg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NEWS</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="g10.jpg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Article</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="g11.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Media</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="g16.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">People</span> */}
            </a>
        </div>
    </div>
</div>



<Counter/>



    </div>
  )
}

export default page
