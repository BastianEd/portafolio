import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
}
/**
 * Componente Atómico: NavLink
 * * Renderiza un enlace `<a>` diseñado específicamente para su uso en menús de
 * navegación. Soporta un estado "activo" para resaltar la página actual
 * y puede incluir un ícono para una mejor experiencia visual.
 * * @param {NavLinkProps} props - Las propiedades para configurar el enlace de navegación.
 */
export const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false, icon, onClick }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`
        flex items-center gap-3 w-full md:w-auto text-sm font-medium transition-colors duration-300
        ${active
                ? 'text-yellow-400'
                : 'text-gray-300 hover:text-white'
            }
      `}
            aria-current={active ? 'page' : undefined}
        >
            {icon && (
                // icon container: fijo en tamaño para alinear correctamente
                <span className="w-6 flex-shrink-0 text-xl" aria-hidden="true">{icon}</span>
            )}
            <span className="text-left">{children}</span>
        </a>
    );
};
