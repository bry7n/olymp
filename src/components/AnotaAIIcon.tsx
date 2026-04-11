import React from 'react';

interface AnotaAIIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const AnotaAIIcon = ({ size = 24, className = "", color = "#CA9949" }: AnotaAIIconProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M19.5 5.5C18.5 4.5 17.5 4 16 4C14.5 4 13.5 4.5 12.5 5.5C11.5 6.5 11 7.5 11 9V10H13V9C13 8 13.5 7.5 14 7C14.5 6.5 15.2 6.2 16 6.2C16.8 6.2 17.5 6.5 18 7C18.5 7.5 18.8 8.1 18.8 9C18.8 9.9 18.5 10.5 18 11L14 15V17H21V15L17.5 11.5C18.5 10.5 19 9.5 19 8C19 6.5 18.5 5.5 17.5 4.5"
        fill="currentColor"
        className="hidden"
      />
      {/* Mascot Head Body */}
      <path 
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" 
        fill={color}
        className="opacity-0"
      />
      {/* Recreating the mascot more accurately based on common Anota AI style */}
      <path 
        d="M18.8 14.5C20.2 13.1 21 11.1 21 9C21 4 17 0 12 0C7 0 3 4 3 9C3 11.1 3.8 13.1 5.2 14.5C4.2 15.5 3.5 17.3 3.5 20C3.5 21.1 4.4 22 5.5 22H18.5C19.6 22 20.5 21.1 20.5 20C20.5 17.3 19.8 15.5 18.8 14.5Z" 
        fill={color}
        className="hidden"
      />
      
      {/* FINAL SVG PATH for the Mascot Head */}
      <g fill={color}>
        {/* The Head Body */}
        <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fillRule="evenodd" clipRule="evenodd" />
        {/* Hair Tuft */}
        <path d="M11 2C11 1.44772 11.4477 1 12 1C13.6569 1 15 2.34315 15 4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 2.55228 11 2Z" />
        {/* Eyes */}
        <circle cx="9" cy="11" r="1.5" />
        <circle cx="15" cy="11" r="1.5" />
        {/* Tail (speech bubble style) */}
        <path d="M4 18L2 21H6L4 18Z" />
      </g>
    </svg>
  );
};

export default AnotaAIIcon;
