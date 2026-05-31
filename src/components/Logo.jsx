import React from 'react';

export default function Logo({ className = "h-8 w-8", strokeWidth = 7 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polygon points="50,6 90,29 90,75 50,98 10,75 10,29" strokeWidth={strokeWidth - 2} />
      <path d="M 32,70 L 50,32 L 68,70" />
      <path d="M 39,55 L 61,55" />
      <path d="M 72,45 C 72,34 62,24 50,24 C 38,24 28,34 28,50 C 28,66 38,76 50,76 C 62,76 70,68 70,58 L 54,58" />
    </svg>
  );
}
