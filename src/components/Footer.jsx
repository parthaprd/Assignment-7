import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] flex flex-col items-center pt-20 pb-[30px] px-4 sm:px-[245px] gap-10 w-full overflow-hidden">
      <div className="flex flex-col items-center gap-10 w-full max-w-[1110px]">
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-['Geist'] font-bold text-7xl text-white tracking-tighter">KeenKeeper</h2>
          <p className="w-full max-w-[1110px] font-['Geist'] font-normal text-base leading-6 text-center text-white opacity-80">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="font-['Geist'] font-bold text-base text-center text-white">
            Social Links
          </h3>
          <div className="flex flex-row items-center gap-4">
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-white rounded-full transition-all hover:bg-white hover:text-[#244D3F] text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-white rounded-full transition-all hover:bg-white hover:text-[#244D3F] text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 border border-white rounded-full transition-all hover:bg-white hover:text-[#244D3F] text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[30px] w-full max-w-[1110px] mt-10">
        <div className="w-full h-0 opacity-10 border border-white"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <p className="font-['Geist'] font-normal text-sm text-white opacity-50">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex flex-row gap-8 font-['Geist'] font-normal text-sm text-white opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
