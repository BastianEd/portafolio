import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

/**
 * Componente Atómico: Button
 * * Renderiza un botón o un enlace con estilos predefinidos. Es el principal
 * elemento para llamadas a la acción (CTAs) en la aplicación.
 * Se adapta automáticamente a una etiqueta `<a>` si se le pasa una prop `href`.
 * * @param {ButtonProps} props - Las propiedades para configurar el botón.
 */
export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  href,
                                                  onClick,
                                                  variant = 'primary'
                                              }) => {
    const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-300';
    const variantClasses = variant === 'primary'
        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
        : 'border border-gray-600 text-white hover:border-gray-400';

    if (href) {
        return (
            <a
                href={href}
                className={`${baseClasses} ${variantClasses} inline-block`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    return (
            <button type="button" onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
            {children}
        </button>
    );
};
