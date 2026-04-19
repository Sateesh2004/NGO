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
                <img src="n1.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NEWS</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n2.jpeg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Article</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n3.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Media</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="n4.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
                <img src="n5.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NEWS</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n6.jpeg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Article</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n7.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Media</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="n8.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

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
                <img src="n9.jpeg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">NEWS</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n10.jpeg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Article</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="n11.jpeg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Media</span> */}
            </a>

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="n12.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">People</span> */}
            </a>
        </div>
    </div>
</div>



<div>

      {/* Heading */}
      <div className='bg-[#d2cfcf] p-20'>
        <h1 className={`text-center font-bold text-[60px] text-black ${playfair.className}`}>
          Video Gallery
        </h1>
      </div>

      {/* Video Grid */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* YouTube Video */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid022k1P2oUs2ZCTD7q2yeSZx9b33MbsKuAXmo3HMbD5spBPvvo6KhcNN7h4WiqU8ohDl%26id%3D61563828024498&show_text=true&width=500"
              
                              allowFullScreen>
                      </iframe>


                      
            

             
            </div>

            {/* Facebook Video */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2384698738707221%2F&show_text=true&width=560"
              
                allowFullScreen>
              </iframe>


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02xmMX5YagskETWndv3yfeQX4BH9LHisquLM8JHC7ngwzVbRRHwMQ4PdaD7xzxL2Dsl%26id%3D61563828024498&show_text=true&width=500"
              
                allowFullScreen>
              </iframe>


             


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0CCnj6RvXWuDSjftSM84qARYkKip3RxCQhP2LR1B7grXaqdH3XH5TfJkeq6eXwuAYl%26id%3D61563828024498&show_text=true&width=500"
              
                allowFullScreen>
              </iframe>



            


             


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              

              



            
<iframe
  src="https://www.instagram.com/reel/DLFR_A_oeei/embed"
  className="w-full h-64 rounded-lg"
  allowFullScreen
></iframe>

             


             
            </div>
           
            <div className="rounded-lg overflow-hidden shadow-lg">
              

              



            
<iframe
  src="https://www.instagram.com/reel/DQs-DUQEsFU/embed"
  className="w-full h-64 rounded-lg"
  allowFullScreen
></iframe>

             


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              

              



            
<iframe
  src="https://www.instagram.com/reel/DN7BZZxgfmr/embed"
  className="w-full h-64 rounded-lg"
  allowFullScreen
></iframe>

             


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              

              



            
<iframe
  src="https://www.instagram.com/reel/DNvlCoXZJLM/embed"
  className="w-full h-64 rounded-lg"
  allowFullScreen
></iframe>

             


             
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              

              



            
<iframe
  src="https://www.youtube.com/embed/bdPRagmLtlc?si=XJrHo8X9kd16IUUJ"
  className="w-full h-64 rounded-lg"
  allowFullScreen
></iframe>

             

            


             
            </div>
            


           
           
            
            

          </div>
        </div>
      </div>

    </div>



<Counter/>



    </div>
  )
}

export default page
