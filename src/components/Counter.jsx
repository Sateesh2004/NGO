"use client";

import { useCountAnimation } from "@/hooks/useCountAnimation";
import { Users, HandHeart,CircleUserRound,Handshake } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  elementRef 
}) => (
  <div
    ref={elementRef}
    className="flex flex-col items-center p-6 bg-green-500 rounded-xl  transform transition-all duration-300 hover:scale-105"
  >
    <Icon className="w-12 h-12 text-white mb-4" />
    <div className="text-4xl font-bold text-black mb-2">{value}+</div>
    <div className="text-muted-foreground text-white text-center">{label}</div>
  </div>
);

export default function StatsSection() {
  const clients = useCountAnimation({ end: 2500 });
  const countries = useCountAnimation({ end: 50 });
  const awards = useCountAnimation({ end: 100 });
  const projects = useCountAnimation({ end: 1000 });

  return (
    <section className="py-10 bg-green-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 bg-green-500 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={Users}
            value={clients.count}
            label="Visitors"
            elementRef={clients.elementRef}
          />
          <StatCard
            icon={HandHeart}
            value={countries.count}
            label="Donors"
            elementRef={countries.elementRef}
          />
          <StatCard
            icon={CircleUserRound}
            value={awards.count}
            label="Members"
            elementRef={awards.elementRef}
          />
          <StatCard
            icon={Handshake}
            value={projects.count}
            label="Volunteers"
            elementRef={projects.elementRef}
          />
        </div>
      </div>
    </section>
  );
}
