import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NavLink } from './NavLink';
import { FaHome } from 'react-icons/fa';

describe('Componente: NavLink', () => {
    // Prueba 1: Renderizado básico.
    it('debe renderizar el enlace con su texto y href', () => {
        render(<NavLink href="#home">Inicio</NavLink>);
        const linkElement = screen.getByRole('link', { name: 'Inicio' });

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '#home');
    });

    // Prueba 2: Verifica el estado inactivo (default).
    it('debe tener clases de inactivo por defecto', () => {
        render(<NavLink href="#about">Sobre mí</NavLink>);
        const linkElement = screen.getByRole('link');

        // Comprobamos que tenga el color de texto para enlaces inactivos.
        expect(linkElement).toHaveClass('text-gray-300');
        expect(linkElement).not.toHaveClass('text-yellow-400');
    });

    // Prueba 3: Verifica el estado activo.
    it('debe tener clases de activo cuando la prop "active" es true', () => {
        render(
            <NavLink href="#proyectos" active>
                Proyectos
            </NavLink>
        );
        const linkElement = screen.getByRole('link');

        // Ahora debe tener la clase de color para enlaces activos.
        expect(linkElement).toHaveClass('text-yellow-400');
        expect(linkElement).not.toHaveClass('text-gray-300');
    });

    // Prueba 4: Verifica la renderización del ícono.
    it('debe renderizar un ícono cuando se proporciona', () => {
        // `data-testid` es una forma de seleccionar elementos que no tienen texto
        // o roles claros, como los contenedores de íconos.
        render(
            <NavLink href="#home" icon={<FaHome data-testid="home-icon" />}>
                Inicio
            </NavLink>
        );

        // Verificamos que el ícono (o su contenedor) esté en el documento.
        expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    });

    // Prueba 5: Simula un clic para probar el evento onClick.
    it('debe llamar a la función onClick al ser presionado', () => {
        const handleClick = vi.fn();
        render(
            <NavLink href="#" onClick={handleClick}>
                Clickable
            </NavLink>
        );

        fireEvent.click(screen.getByText('Clickable'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});