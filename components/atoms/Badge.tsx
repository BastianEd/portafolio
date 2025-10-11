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
        text-xs px-3 py-1.5     // -> Estilos más pequeños para móvil (base)
        md:text-sm md:px-4 md:py-2 // -> Estilos originales para pantallas medianas y grandes
        rounded-full
        ${gradientBorder ? 'badge-gradient-border' : ''}
    `}
        >
            {children}
        </span>
    );
};
