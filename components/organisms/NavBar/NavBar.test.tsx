import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from './NavBar';

/**
 * @file Archivo de pruebas para el componente `Navbar`.
 *
 * @description
 * Esta suite de pruebas valida el organismo `Navbar`, que es un componente con estado
 * y lógica de interacción compleja. La estrategia se basa en el aislamiento total
 * del componente mediante el "mocking" de todos sus hijos (`NavMenu`, `MobileMenuButton`, `NavLink`).
 *
 * Las pruebas cubren los siguientes comportamientos críticos:
 * 1.  **Manejo de Estado del Menú Móvil:** Se simulan clics en el botón para verificar
 * que el menú desplegable se muestra y se oculta correctamente.
 * 2.  **Flujo de Interacción:** Se prueba que al hacer clic en un enlace del menú
 * móvil, este se cierra, validando la comunicación entre componentes.
 * 3.  **Renderizado Base:** Se asegura que los elementos estáticos, como el logo y el
 * menú de escritorio, estén siempre presentes.
 * 4.  **Efectos Secundarios (Hooks):** Se simula un evento de `scroll` en la ventana
 * para confirmar que el `useEffect` del componente aplica las clases CSS
 * dinámicas correctamente.
 */
// Mocks de los componentes hijos (sin cambios)
vi.mock('../../molecules/NavMenu/NavMenu', () => ({
    NavMenu: () => <div data-testid="nav-menu-desktop" />,
}));
vi.mock('../../molecules/MobileMenuButton/MobileMenuButton', () => ({
    MobileMenuButton: ({ onClick }: { onClick: () => void }) => (
        <button data-testid="mobile-menu-button" onClick={onClick}>Menu</button>
    ),
}));
vi.mock('../../atoms/NavLink/NavLink', () => ({
    NavLink: ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
        <a href="#" onClick={onClick}>{children}</a>
    ),
}));

describe('Componente: NavBar', () => {

    it('debe mostrar y ocultar el menú móvil al hacer clic en el botón', () => {
        // Usamos 'container' que nos da acceso al elemento DOM base
        const { container } = render(<Navbar />);
        const mobileButton = screen.getByTestId('mobile-menu-button');

        // 1. Abre el menú
        fireEvent.click(mobileButton);

        // SOLUCIÓN: Buscamos el elemento por su ID usando querySelector
        const mobileMenu = container.querySelector('#mobile-menu');
        expect(mobileMenu).toBeInTheDocument();

        // 2. Cierra el menú
        fireEvent.click(mobileButton);
        expect(container.querySelector('#mobile-menu')).not.toBeInTheDocument();
    });

    it('debe cerrar el menú móvil al hacer clic en un enlace', () => {
        render(<Navbar />);
        const mobileButton = screen.getByTestId('mobile-menu-button');

        // Abre el menú
        fireEvent.click(mobileButton);

        // Aseguramos que el menú está abierto y encontramos un enlace
        const homeLink = screen.getByText('Inicio');
        expect(homeLink).toBeInTheDocument();

        // Hacemos clic en el enlace
        fireEvent.click(homeLink);

        // Verificamos que el menú se haya cerrado
        expect(screen.queryByText('Inicio')).not.toBeInTheDocument();
    });

    // El resto de las pruebas no necesitan cambios
    it('debe renderizar el logo y el menú de escritorio', () => {
        render(<Navbar />);
        expect(screen.getByText('Bastián')).toBeInTheDocument();
        expect(screen.getByTestId('nav-menu-desktop')).toBeInTheDocument();
    });

    it('debe cambiar de estilo al hacer scroll', () => {
        const { container } = render(<Navbar />);
        const header = container.querySelector('header');

        expect(header).toHaveClass('bg-transparent');
        fireEvent.scroll(window, { target: { scrollY: 100 } });
        expect(header).toHaveClass('bg-gray-900/95');
    });

});