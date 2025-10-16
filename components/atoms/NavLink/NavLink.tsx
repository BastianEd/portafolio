import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
    icon?: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false, icon }) => {
    return (
        <a
            href={href}
            className={`
        text-sm font-medium transition-colors duration-300
        ${active
                ? 'text-yellow-400'
                : 'text-gray-300 hover:text-white'
            }
      `}
        >
            {icon && <span className="flex text-xl justify-center">{icon}</span>}
            {children}
        </a>
    );
};
