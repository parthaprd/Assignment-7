import React, { useState, useEffect } from 'react';
import Banner, { SummaryCards } from '../components/Banner';
import FriendCard from '../components/FriendCard';
import friendsData from '../friends.json';
import { Loader2, Search, Filter } from 'lucide-react';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredFriends = friends.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <Banner />
      <SummaryCards />
      
      <div className="max-w-[1110px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <h2 className="font-['Geist'] font-bold text-2xl text-[#1F2937]">Your Friends</h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-text-muted font-medium">Fetching your friends...</p>
          </div>
        ) : (
          <>
            {filteredFriends.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredFriends.map(friend => (
                  <FriendCard key={friend.id} friend={friend} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card rounded-lg border border-border-theme">
                <p className="text-text-muted text-lg">No friends found matching your search.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
