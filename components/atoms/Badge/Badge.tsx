import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    gradientBorder?: boolean;
}

/**
 * Componente Atómico: Badge
 * * Renderiza un pequeño contenedor estilizado (insignia o "tag") para mostrar
 * información concisa, como categorías, estados o etiquetas de tecnología.
 * Es personalizable en color y puede tener un borde con gradiente.
 */
export const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-gray-700', gradientBorder = false }) => {
    // Clases responsivas separadas y sin comentarios dentro del string
    const classes = `relative inline-block ${color} text-white font-medium text-xs px-3 py-1.5 md:text-sm md:px-4 md:py-2 xl:text-base xl:px-5 xl:py-2.5 rounded-full ${gradientBorder ? 'badge-gradient-border' : ''}`;

    return (
        <span className={classes}>
            {children}
        </span>
    );
};
