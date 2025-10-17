import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NavMenu } from './NavMenu';

// Hacemos un mock de los componentes hijos para aislar la prueba a NavMenu.
// Esto es útil para no depender de la implementación interna de NavLink.
vi.mock('../../atoms/NavLink/NavLink', () => ({
    NavLink: ({ href, children }: { href: string; children: React.ReactNode }) => (
        <a href={href}>{children}</a>
    ),
}));

describe('Componente: NavMenu', () => {
    const menuItems = [
        { label: 'Inicio', href: '#' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Certificaciones', href: '#certificaciones' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Sobre mí', href: '#sobre-mi' },
    ];

    it('debe renderizar todos los elementos del menú de navegación', () => {
        render(<NavMenu />);

        // Verificamos que cada elemento del menú esté presente en el documento.
        menuItems.forEach(item => {
            const linkElement = screen.getByRole('link', { name: item.label });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', item.href);
        });
    });
});