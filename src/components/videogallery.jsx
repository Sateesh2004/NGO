import { Heart, BookOpen, Users, Sprout } from 'lucide-react';
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


function Initiatives() {
  return (
    <section className="py-24 sm:py-32 bg-green-50">
      <div className='flex justify-center'>
      <iframe height="700px" className='w-full' src="https://www.youtube.com/embed/rp6x83I4Mv4?si=PZrkOUnnokvwbxUF&amp;start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </section>
  );
}

export default Initiatives;
