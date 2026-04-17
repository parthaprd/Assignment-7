import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const FriendCard = ({ friend }) => {
  const statusColors = {
    'overdue': 'bg-[#EF4444] text-white',
    'almost due': 'bg-[#F59E0B] text-white',
    'on-track': 'bg-[#244D3F] text-white',
  };

  return (
    <Link 
      to={`/friend/${friend.id}`}
      className="group bg-white border border-[#E9E9E9] rounded-lg p-8 transition-all duration-300 hover:shadow-md flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-[#E9E9E9]">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <h3 className="font-['Geist'] text-lg font-bold text-[#1F2937] mb-1 group-hover:text-[#244D3F] transition-colors">
        {friend.name}
      </h3>
      
      <p className="font-['Geist'] text-[#64748B] text-xs mb-3">
        {friend.days_since_contact}d ago
      </p>
      
      <div className="flex flex-col gap-2 items-center">
        <div className="flex flex-wrap gap-1 justify-center">
          {friend.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-3 py-0.5 bg-[#CBFADB] text-[#244D3F] rounded-full text-[10px] font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>
        <span className={cn(
          "px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase",
          statusColors[friend.status] || 'bg-[#64748B] text-white'
        )}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
