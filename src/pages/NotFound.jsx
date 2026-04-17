import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-bg text-accent-red rounded-full flex items-center justify-center mb-8 animate-bounce border border-border-theme">
        <AlertCircle className="w-12 h-12" />
      </div>
      <h1 className="text-6xl font-bold text-text-main mb-4">404</h1>
      <h2 className="text-2xl font-bold text-text-main mb-6">Page Not Found</h2>
      <p className="text-text-muted max-w-md mb-10 leading-relaxed">
        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
