import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MobileMenuButton } from './MobileMenuButton';

/**
 * @file Archivo de pruebas para el componente molecular `MobileMenuButton`.
 *
 * @description
 * Esta suite de pruebas está diseñada para validar el comportamiento visual y
 * funcional del botón de menú móvil. Las pruebas se centran en tres áreas clave:
 *
 * 1.  **Estado Cerrado (`isOpen: false`):** Verifica que el botón se renderiza
 * correctamente como un ícono de "hamburguesa".
 * 2.  **Estado Abierto (`isOpen: true`):** Asegura que el botón se transforma
 * visualmente en un ícono de "X" mediante la aplicación de clases CSS.
 * 3.  **Interactividad:** Confirma que la función `onClick` proporcionada se
 * ejecuta cuando el usuario hace clic en el botón.
 */
describe('Componente: MobileMenuButton', () => {
    // Prueba 1: Verifica el estado cerrado (default)
    it('debe renderizar el ícono de hamburguesa cuando está cerrado', () => {
        render(<MobileMenuButton isOpen={false} onClick={() => {}} />);
        const button = screen.getByRole('button');
        const spans = button.querySelectorAll('span');

        // En estado cerrado, ninguna línea debe estar rotada.
        expect(spans[0]).not.toHaveClass('rotate-45');
        expect(spans[2]).not.toHaveClass('-rotate-45');
        // La línea del medio debe ser visible.
        expect(spans[1]).toHaveClass('opacity-100');
    });

    // Prueba 2: Verifica el estado abierto
    it('debe renderizar el ícono de "X" cuando está abierto', () => {
        render(<MobileMenuButton isOpen={true} onClick={() => {}} />);
        const button = screen.getByRole('button');
        const spans = button.querySelectorAll('span');

        // En estado abierto, las líneas superior e inferior se rotan.
        expect(spans[0]).toHaveClass('rotate-45');
        expect(spans[2]).toHaveClass('-rotate-45');
        // La línea del medio se oculta.
        expect(spans[1]).toHaveClass('opacity-0');
    });

    // Prueba 3: Simula la interacción del usuario
    it('debe llamar a la función onClick cuando se hace clic', () => {
        const handleClick = vi.fn();
        render(<MobileMenuButton isOpen={false} onClick={handleClick} />);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});