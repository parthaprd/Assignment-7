import React from 'react';
import { UserPlus } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative w-full py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-6 w-full max-w-[1110px] px-4">
        <div className="flex flex-col items-center gap-4 w-full">
          <h1 className="font-['Geist'] font-bold text-6xl text-[#1F2937] text-center tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="max-w-2xl font-['Geist'] font-normal text-base leading-6 text-center text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>
        
        <button className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-8 py-3 rounded-lg font-bold text-base shadow-sm transition-all hover:scale-105 active:scale-95">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>
    </div>
  );
};

export const SummaryCards = () => {
  const stats = [
    { label: 'Total Friends', value: '10' },
    { label: 'On Track', value: '3' },
    { label: 'Need Attention', value: '6' },
    { label: 'Interactions This Month', value: '12' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1110px] mx-auto px-4 mb-20 relative z-20">
      {stats.map((stat, i) => {
        return (
          <div key={i} className="bg-white border border-[#E9E9E9] rounded-lg p-10 text-center shadow-sm">
            <p className="font-['Geist'] text-4xl font-bold text-[#1F2937] mb-2">{stat.value}</p>
            <p className="font-['Geist'] text-[#64748B] text-sm font-medium">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
