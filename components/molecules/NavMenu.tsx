import React from 'react';
import { NavLink } from '../atoms/NavLink';

export const NavMenu: React.FC = () => {
    const menuItems = [
        { label: 'Inicio', href: '#' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Certificaciones', href: '#certificaciones' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Sobre mí', href: '#sobre-mi' },
    ];

    return (
        <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};
