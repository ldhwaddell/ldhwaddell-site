import React from 'react';

const Pipes = () => {
  return (
    <div className="pipe-container relative w-full h-64">
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Define the pipe path */}
        <path id="pipePath" fill="none" stroke="#0077CC" strokeWidth="8" d="M5,50 Q50,-30 100,50 T195,50" />

        {/* Animate the data */}
        <rect x="0" y="0" width="20" height="8" fill="url(#gradient)">
          <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#pipePath" />
          </animateMotion>
        </rect>
      </svg>

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0)' }} />
          <stop offset="50%" style={{ stopColor: 'rgba(255, 255, 255, 1)' }} />
          <stop offset="100%" style={{ stopColor: 'rgba(255, 255, 255, 0)' }} />
        </linearGradient>
      </defs>
    </div>
  );
};

export default Pipes;
