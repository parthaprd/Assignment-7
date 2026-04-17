import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTimeline = JSON.parse(localStorage.getItem('keenkeeper_timeline') || '[]');
    setTimeline(savedTimeline);
  }, []);

  const filteredTimeline = timeline.filter(entry => {
    return filter === 'all' || entry.type === filter;
  });

  const getEmoji = (type) => {
    switch (type) {
      case 'call': return '📞';
      case 'text': return '💬';
      case 'video': return '📹';
      case 'meetup': return '🤝';
      default: return '📅';
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen w-full flex flex-col items-center pt-20 pb-20 px-4 sm:px-[245px] gap-6 overflow-hidden">
      <div className="flex flex-col items-start gap-6 w-full max-w-[1110px]">
        <h1 className="w-full font-['Geist'] font-bold text-5xl leading-[62px] flex items-center text-[#1F2937]">
          Timeline
        </h1>
        
        <div className="relative w-[347px] h-[55px]">
          <select 
            className="w-full h-full bg-white border border-[#E9E9E9] shadow-[0px_1px_6px_rgba(0,0,0,0.08)] rounded-lg px-4 py-2 appearance-none font-['Geist'] font-normal text-lg text-[#64748B] focus:outline-none cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Filter timeline</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
            <option value="meetup">Meetups</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9696A2] pointer-events-none" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 w-full max-w-[1110px]">
        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((entry) => (
            <div 
              key={entry.id} 
              className="flex flex-row items-center p-4 gap-4 w-full bg-white border border-[#E9E9E9] rounded-lg transition-all hover:shadow-md"
            >
              <div className="w-10 h-10 font-['Geist'] font-medium text-4xl leading-[52px] flex items-center justify-center text-[#244D3F]">
                {getEmoji(entry.type)}
              </div>
              
              <div className="flex flex-col items-start gap-1 flex-grow">
                <div className="flex flex-row items-center gap-2 w-full">
                  <span className="font-['Geist'] font-medium text-xl leading-[26px] capitalize text-[#244D3F]">
                    {entry.type}
                  </span>
                  <span className="font-['Geist'] font-normal text-lg leading-[23px] text-[#64748B]">
                    with {entry.friendName}
                  </span>
                </div>
                <div className="font-['Geist'] font-medium text-base leading-[21px] capitalize text-[#64748B]">
                  {new Date(entry.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full py-20 bg-white rounded-lg border border-[#E9E9E9] text-center">
            <p className="font-['Geist'] text-[#64748B]">No interactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
