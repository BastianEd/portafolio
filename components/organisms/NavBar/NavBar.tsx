import React, { useState, useEffect } from 'react';
import { NavMenu } from '../../molecules/NavMenu/NavMenu';
import { MobileMenuButton } from '../../molecules/MobileMenuButton/MobileMenuButton';
import { NavLink } from '../../atoms/NavLink/NavLink';

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

    const menuItems = [
        { label: 'Inicio', href: '#' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Certificaciones', href: '#certificaciones' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Sobre mí', href: '#sobre-mi' },
    ];

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
                : 'bg-transparent'
            }
      `}
        >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-3xl font-bold logo-animated-gradient">
                    Bastián
                </a>

                {/* Desktop Menu */}
                <NavMenu />

                {/* Mobile Menu Button */}
                <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-800">
                    <div className="flex flex-col gap-4 px-4 py-6">
                        {menuItems.map((item) => (
                            <NavLink key={item.label} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
