import React from 'react';

interface LinkProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

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
