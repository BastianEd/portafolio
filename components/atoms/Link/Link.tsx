import React from 'react';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

/**
 * Componente Atómico: Link
 * * Renderiza una etiqueta `<a>` estilizada para la navegación.
 * Este componente se diferencia del `Button` en que su propósito principal es
 * la navegación, no las acciones. Incluye lógica para manejar enlaces externos
 * de forma segura.
 * * @param {LinkProps} props - Las propiedades para configurar el enlace.
 */
export const Link: React.FC<LinkProps> = ({ href, children, external = false }) => {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
        >
            {children}
        </a>
    );
};
