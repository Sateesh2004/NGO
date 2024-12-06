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
const initiatives = [
  {
    id: 1,
    title: 'Child Welfare',
    description: 'Providing warm clothes, educational materials, and festive gifts to underprivileged children.',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Women Empowerment',
    description: 'Offering sewing classes, mehendi training, and job placement assistance to make women self-reliant.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Education Support',
    description: 'Sponsoring education fees and providing stationery to ensure continuous learning for needy students.',
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Environmental Care',
    description: 'Annual tree plantation drives and eco-friendly Ganesh idol making to promote environmental consciousness.',
    icon: Sprout,
  },
];

function Initiatives() {
  return (
    <section className="py-24 sm:py-32 bg-green-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className={`text-base font-semibold leading-7 text-green-600 ${poppins.className}`}>OUR FOCUS AREAS</h2>
          <p className={`mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${playfair.className} `}>
            Key Initiatives for Social Change
          </p>
          <p className={`mt-6 text-lg leading-8 text-gray-600 ${roboto.className}`}>
            Through our diverse programs, we strive to create lasting positive impact in various aspects of society
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {initiatives.map((initiative) => (
              <div key={initiative.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <initiative.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  <div className={`${roboto.className} font-[700] text-[20px]`}> {initiative.title}</div>
                 
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className={`flex-auto ${roboto.className}`}>{initiative.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Initiatives;
