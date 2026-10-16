import React from 'react';

interface SmileLineProps {
  variant?: 'hero' | 'section' | 'separator';
  className?: string;
}

export const SmileLine: React.FC<SmileLineProps> = ({ variant = 'section', className = '' }) => {
  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3 sm:h-4 overflow-visible pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <path
          d="M 4 5 Q 60 20 116 5"
          stroke="#FFCD57"
          strokeWidth="6"
          strokeLinecap="round"
          className="hero-smile-animated"
        />
      </svg>
    );
  }

  if (variant === 'separator') {
    return (
      <div className={`w-full overflow-hidden flex justify-center py-4 ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 800 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-4xl h-10 opacity-30 text-secondary"
        >
          <path
            d="M 20 15 Q 400 55 780 15"
            stroke="#FFCD57"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // 'section' ornament (40px wide)
  return (
    <svg
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-3 mb-2.5 text-secondary block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 2 3 Q 20 12 38 3"
        stroke="#FFCD57"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
