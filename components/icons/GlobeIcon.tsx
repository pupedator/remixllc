import React from 'react';

const GlobeIcon: React.FC<{ className?: string }> = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.704 21.045l1.328-1.328A4.5 4.5 0 0012 18.571a4.5 4.5 0 002.968 1.146l1.328 1.328M12 21.045V18.571m0 0a4.502 4.502 0 00-4.477-4.477 4.502 4.502 0 00-4.477 4.477M12 18.571a4.502 4.502 0 014.477-4.477 4.502 4.502 0 014.477 4.477m-8.954-4.477a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
    />
  </svg>
);

export default GlobeIcon;
