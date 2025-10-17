import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { About } from './About';

// Mockeamos los datos para aislar el componente
vi.mock('~/data/profile', () => ({
    profileData: {
        about: {
            title: 'Sobre mí',
            paragraphs: [
                'Este es el primer párrafo de prueba.',
                'Este es el <strong>segundo</strong> párrafo con texto en negrita.',
            ],
        },
    },
}));

describe('Componente: About', () => {
    beforeEach(() => {
        render(<About />);
    });

    it('debe renderizar el título de la sección', () => {
        // Buscamos el título por su rol de heading
        const title = screen.getByRole('heading', { name: /sobre mí/i });
        expect(title).toBeInTheDocument();
    });

    it('debe renderizar los párrafos desde profileData', () => {
        // Verificamos que el texto de cada párrafo esté presente
        expect(screen.getByText(/Este es el primer párrafo de prueba./)).toBeInTheDocument();
        expect(screen.getByText(/segundo/)).toBeInTheDocument(); // Texto dentro de la etiqueta <strong>
    });

    it('debe renderizar el HTML correctamente para los párrafos', () => {
        // Verificamos que la etiqueta <strong> se renderice correctamente
        const strongElement = screen.getByText('segundo');
        expect(strongElement.tagName).toBe('STRONG');
        expect(strongElement).toHaveClass('text-white'); // Validamos la clase aplicada dinámicamente
    });
});