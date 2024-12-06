import React from 'react';

const BoardMemberCard = ({ name, designation, details, imageUrl }) => {
  return (
    <div className="group w-64 bg-white rounded-lg shadow-lg overflow-hidden m-4 transition-all duration-300 hover:shadow-2xl">
      {/* Member Image with Zoom Effect */}
      <div className="overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/250/250"} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Member Information with Subtle Animation */}
      <div className="p-4 text-center transition-all duration-300 group-hover:bg-blue-50">
        <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 transition-colors duration-300 group-hover:text-blue-600">
          {designation}
        </p>
        <p className="text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">
          {details}
        </p>
      </div>
    </div>
  );
};

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Emily Richardson",
      designation: "Executive Director",
      details: "",
      imageUrl: "/bm1.jpg"
    },
    {
      name: "Michael Chen",
      designation: "Program Director",
      details: "",
      imageUrl: "/bm1.jpg"
    },
    {
      name: "Sarah Rodriguez",
      designation: "Finance & Operations Lead",
      details: "",
      imageUrl: "/bm1.jpg"
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#54595F] p-2">
      <div className="flex flex-wrap justify-center items-center">
        {boardMembers.map((member, index) => (
          <BoardMemberCard 
            key={index}
            name={member.name}
            designation={member.designation}
            details={member.details}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;