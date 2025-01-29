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
      name: "ज्योति शर्मा",
      designation: "संस्थापक एवं अध्यक्ष",
      image: "/bm1.jpg"
    },
    {
      name: "कुमुद पायल ओझा",
      designation: "संस्थापक एवं महासचिव",
       image: "/bm2.jpg"
    },
    {
      name: "अनिता पांड्या",
      designation: "कोषाध्यक्ष",
       image: "/bm4.jpg"
    },
    {
      name: "सीमा ओझा",
      designation: "सहसचिव",
       image: "/bm3.jpg"
    },
  ];

  return (
    <div className="bg-[#424242] py-24">
<h2 className={`text-white text-center text-4xl font-extrabold text-[50px] ${playfair.className}`}>
  Our Board Members
</h2>       
<br />
<br />
  <div className="flex justify-center   gap-8 flex-wrap">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-72 p-6 py-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
