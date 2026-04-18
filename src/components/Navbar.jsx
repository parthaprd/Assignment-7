
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Timeline', path: '/timeline', icon: Clock },
    { name: 'Stats', path: '/stats', icon: BarChart3 },
  ];

  return (
    <nav className="h-[78px] bg-white border-b border-[#E9E9E9] flex items-center justify-between px-4 sm:px-10 lg:px-20 flex-shrink-0 sticky top-0 z-50">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />
      </Link>
      
      <div className="hidden md:flex items-center gap-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center gap-2 text-sm font-bold transition-all px-5 py-2.5 rounded-lg font-['Geist']",
                isActive 
                  ? "bg-[#244D3F] text-white" 
                  : "text-[#64748B] hover:text-[#244D3F]"
              )}
            >
              <Icon className="w-4 h-4" />
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden flex items-center gap-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link key={link.path} to={link.path} className={cn(
              "p-2 rounded",
              isActive ? "bg-primary text-white" : "text-text-muted"
            )}>
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
