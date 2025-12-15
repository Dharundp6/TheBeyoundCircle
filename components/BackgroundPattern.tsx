import React from 'react';

export const BackgroundPattern: React.FC<{ opacity?: number; color?: string }> = ({ opacity = 0.1, color = "currentColor" }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="doodle-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Mimicking the organic doodle lines from the reference image */}
            <path
              d="M10,50 Q40,10 70,50 T130,50 T190,50"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20,120 Q50,80 80,120 T140,120"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
             <path
              d="M150,20 Q170,60 150,100"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
             <path
              d="M50,160 Q90,140 130,160 T190,180"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="30" cy="90" r="4" fill="none" stroke={color} strokeWidth="2" />
            <circle cx="160" cy="140" r="6" fill="none" stroke={color} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
    </div>
  );
};