"use client"
import React from 'react';
import { Users, Heart, UserPlus, Award } from 'lucide-react';

import CountUp from 'react-countup';
const StatCard = ({ icon: Icon, number, label }) => (
  <div className="bg-green-500  rounded-xl p-6 text-center ">
    <div className="flex justify-center mb-4">
      <Icon className="w-12 h-12 text-white" />
    </div>
    <div className="text-4xl font-bold text-black mb-2">
      {/* {number.toLocaleString()}+ */}
      <CountUp end={number} enableScrollSpy={true} scrollSpyOnce={true} suffix="+" />
    </div>
    <div className="text-white uppercase tracking-wide font-semibold">
      {label}
    </div>
  </div>
);

const ImpactStatistics = () => {
  const stats = [
    {
      icon: Users,
      number: 50000,
      label: 'Visitors'
    },
    {
      icon: Heart,
      number: 5000,
      label: 'Donors'
    },
    {
      icon: UserPlus,
      number: 2500,
      label: 'Members'
    },
    {
      icon: Award,
      number: 1000,
      label: 'Volunteers'
    }
  ];

  return (
    <section className="bg-green-500 py-16">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;