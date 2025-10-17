import React, { useState, useEffect } from 'react';
import { NavMenu } from '../../molecules/NavMenu/NavMenu';
import { MobileMenuButton } from '../../molecules/MobileMenuButton/MobileMenuButton';
import { NavLink } from '../../atoms/NavLink/NavLink';
// -> 1. Importa los mismos íconos aquí
import { FaHome, FaBriefcase, FaLaptopCode, FaUser } from 'react-icons/fa';
import { GiDiploma } from "react-icons/gi";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // -> 2. Actualiza también este array
    const menuItems = [
        { label: 'Inicio', href: '#', icon: <FaHome /> },
        { label: 'Experiencia', href: '#experiencia', icon: <FaBriefcase /> },
        { label: 'Certificaciones', href: '#certificaciones', icon: <GiDiploma /> },
        { label: 'Proyectos', href: '#proyectos', icon: <FaLaptopCode /> },
        { label: 'Sobre mí', href: '#sobre-mi', icon: <FaUser /> },
    ];

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}
            `}
        >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#" className="text-3xl font-bold logo-animated-gradient">
                    Bastián
                </a>
                <NavMenu />
                <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </nav>

            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-800">
                    {/* Alineamos los elementos al inicio y añadimos un poco de padding-left */}
                    <div className="flex flex-col gap-4 px-4 py-6 items-start">
                        {menuItems.map((item) => (
                            // -> 3. Pasa el ícono aquí también y cierra el menú al pulsar
                            <NavLink key={item.label} href={item.href} icon={item.icon} onClick={() => setIsOpen(false)}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};