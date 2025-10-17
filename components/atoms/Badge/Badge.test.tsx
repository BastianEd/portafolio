import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Componente: Badge', () => {
    // Prueba 1: Asegura que el contenido (children) se renderice.
    it('debe renderizar el contenido correctamente', () => {
        render(<Badge>Disponible</Badge>);
        expect(screen.getByText('Disponible')).toBeInTheDocument();
    });

    // Prueba 2: Verifica que la clase de color por defecto se aplique.
    it('debe aplicar el color de fondo por defecto si no se especifica uno', () => {
        // Renderizamos el componente y obtenemos el elemento por su texto.
        render(<Badge>Default Color</Badge>);
        const badgeElement = screen.getByText('Default Color');
        // Comprobamos que la clase por defecto 'bg-gray-700' esté presente.
        expect(badgeElement).toHaveClass('bg-gray-700');
    });

    // Prueba 3: Comprueba que se puede asignar un color personalizado.
    it('debe aplicar una clase de color personalizada cuando se proporciona', () => {
        render(<Badge color="bg-blue-500">Custom Color</Badge>);
        const badgeElement = screen.getByText('Custom Color');
        expect(badgeElement).toHaveClass('bg-blue-500');
        // Adicionalmente, nos aseguramos de que no tenga la clase por defecto.
        expect(badgeElement).not.toHaveClass('bg-gray-700');
    });

    // Prueba 4: Valida la aplicación de la clase para el borde con gradiente.
    it('debe aplicar la clase de borde gradiente cuando gradientBorder es true', () => {
        render(<Badge gradientBorder>Gradient Border</Badge>);
        const badgeElement = screen.getByText('Gradient Border');
        expect(badgeElement).toHaveClass('badge-gradient-border');
    });
});