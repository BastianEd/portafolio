import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    gradientBorder?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-gray-700', gradientBorder = false }) => {
    return (
        <span
            className={`
        relative inline-block
        ${color}
        text-white font-medium text-sm
        px-4 py-2 rounded-full
        ${gradientBorder ? 'badge-gradient-border' : ''}
      `}
        >
      {children}
    </span>
    );
};
