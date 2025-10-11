import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false }) => {
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
            {children}
        </a>
    );
};
