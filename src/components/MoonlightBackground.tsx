import React from 'react';

export const MoonlightBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#070204]" />

      {/* The Red Moon & Primary Celestial Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full">
        {/* Soft atmospheric lunar haze */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-rose-600/20 via-maroon-700/15 to-transparent blur-[120px] animate-pulse-slow" />
        
        {/* The glowing red moon sphere */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#ff3355]/40 via-[#8e1224]/30 to-[#38040e]/60 blur-[35px] opacity-75" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 md:w-60 md:h-60 rounded-full bg-gradient-to-tr from-[#9b111e]/25 via-[#ff4d6d]/15 to-transparent blur-[18px] opacity-60" />
      </div>

      {/* Secondary maroon ambient glow orbs across the page */}
      <div className="absolute top-[35%] -left-[15%] w-[500px] h-[500px] rounded-full bg-red-950/25 blur-[140px]" />
      <div className="absolute top-[65%] -right-[15%] w-[550px] h-[550px] rounded-full bg-[#540b17]/20 blur-[150px]" />
      <div className="absolute bottom-[-10%] left-1/3 w-[600px] h-[400px] rounded-full bg-[#8e1224]/15 blur-[160px]" />

      {/* Subtle Star / Dust Speckles */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ff758f, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 150px 80px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 280px 190px, #ff4d6d, rgba(0,0,0,0)),
                            radial-gradient(1.2px 1.2px at 420px 320px, #fecdd3, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 600px 120px, #ffffff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 780px 240px, #ff8fa3, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 940px 380px, #ffffff, rgba(0,0,0,0))`,
          backgroundSize: '1000px 500px'
        }}
      />

      {/* Subtle grid mesh overlay for high-tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ff4d6d 1px, transparent 1px),
                            linear-gradient(to bottom, #ff4d6d 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
