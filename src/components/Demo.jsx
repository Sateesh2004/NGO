import React from "react";
import { Playfair_Display,Roboto,Poppins } from 'next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400','500','700'], 
  });
  const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400'], 
  });
  const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700','900'], 
  });
const BoardMembers = () => {
  const members = [
    {
      name: "John Doe",
      designation: "CEO",
      details: "John has 15 years of experience in leading organizations to success.",
      image: "/bm1.jpg"
    },
    {
      name: "Jane Smith",
      designation: "संस्थापक एवं महासचिव",
      details: "Jane is a tech visionary with expertise in software engineering and AI.",
       image: "/bm2.jpg"
    },
    {
      name: "Alice Johnson",
      designation: "कोषाध्यक्ष",
      details: "Alice specializes in financial planning and has a keen eye for investments.",
       image: "/bm4.jpg"
    }
  ];

  return (
    <div className="bg-[#424242] py-12">
<h2 className={`text-white text-center text-4xl font-extrabold text-[50px] ${playfair.className}`}>
  Our Board Members
</h2>       
<br />
<br />
  <div className="flex justify-center  gap-8 flex-wrap">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-72 p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 mb-4 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-white font-medium mb-4">{member.designation}</p>
              <hr />
              <br />
              <p className="text-white text-sm">{member.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
