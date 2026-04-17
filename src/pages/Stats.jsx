import React, { useState, useEffect } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid 
} from 'recharts';
import { BarChart3, TrendingUp, Users, Heart } from 'lucide-react';

const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem('keenkeeper_timeline') || '[]');
    setTimeline(savedTimeline);
  }, []);

  const interactionCounts = [
    { name: 'Text', value: timeline.filter(e => e.type === 'text').length, color: '#9333EA' },
    { name: 'Call', value: timeline.filter(e => e.type === 'call').length, color: '#244D3F' },
    { name: 'Video', value: timeline.filter(e => e.type === 'video').length, color: '#37A163' },
  ].filter(item => item.value > 0);

  // Fallback data if timeline is empty
  const displayData = interactionCounts.length > 0 ? interactionCounts : [
    { name: 'Text', value: 12, color: '#9333EA' },
    { name: 'Call', value: 5, color: '#244D3F' },
    { name: 'Video', value: 3, color: '#37A163' },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12">
      <div className="max-w-[1110px] mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-['Geist'] text-4xl font-bold text-[#1F2937]">Friendship Analytics</h1>
        </div>

        <div className="bg-white border border-[#E9E9E9] rounded-lg p-10 shadow-sm min-h-[500px] flex flex-col">
          <p className="font-['Geist'] text-[#244D3F] text-base font-semibold mb-10">By Interaction Type</p>
          
          <div className="flex-1 w-full flex flex-col items-center justify-center">
            <div className="h-[350px] w-full max-w-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={displayData}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={8}
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1500}
                    stroke="none"
                  >
                    {displayData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: '1px solid #E9E9E9', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', fontSize: '14px', fontWeight: 'bold', fontFamily: 'Geist' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle" 
                    wrapperStyle={{ fontSize: '14px', fontWeight: '500', color: '#64748B', fontFamily: 'Geist', paddingTop: '40px' }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            {timeline.length === 0 && (
              <p className="text-center text-[#64748B] text-[10px] font-bold uppercase tracking-wider mt-6 font-['Geist']">
                Showing sample data
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
