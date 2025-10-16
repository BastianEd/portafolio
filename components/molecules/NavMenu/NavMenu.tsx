import React from 'react';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { FaHome, FaBriefcase, FaCertificate, FaLaptopCode, FaUser } from 'react-icons/fa';
import { GiDiploma } from "react-icons/gi";

export const NavMenu: React.FC = () => {
    const menuItems = [
        { label: 'Inicio', href: '#', icon: <FaHome /> },
        { label: 'Experiencia', href: '#experiencia', icon: <FaBriefcase /> },
        { label: 'Certificaciones', href: '#certificaciones', icon: <GiDiploma /> },
        { label: 'Proyectos', href: '#proyectos', icon: <FaLaptopCode /> },
        { label: 'Sobre mí', href: '#sobre-mi', icon: <FaUser /> },
    ];

    return (
        <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
                <NavLink key={item.label} href={item.href} icon={item.icon}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};
