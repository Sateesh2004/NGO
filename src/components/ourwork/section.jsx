import { ActivityList } from './activity-list';
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
export function OurWorkSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${playfair.className}`}>Our Work</h2>
          <p className={`mt-4 text-lg leading-8 text-gray-600 ${poppins.className}`}>
            Over the past 3 years, we have conducted more than 30 programs to support our community
          </p>
        </div>
        <ActivityList />
      </div>
    </div>
  );
}