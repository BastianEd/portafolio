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
                text-white font-medium
                text-xs px-3 py-1.5         // -> Móvil
                md:text-sm md:px-4 md:py-2   // -> Tabletas y desktops
                xl:text-base xl:px-5 xl:py-2.5 // -> Pantallas grandes (2K, 4K)
                rounded-full
                ${gradientBorder ? 'badge-gradient-border' : ''}`
            }>
            {children}
        </span>
    );
};
