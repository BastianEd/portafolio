import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Footer } from './Footer';

// Mockeamos el componente hijo para aislar la prueba
vi.mock('../../molecules/SocialLinks/SocialLinks', () => ({
    SocialLinks: () => <div data-testid="social-links-mock" />,
}));

describe('Componente: Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    it('debe renderizar el nombre y la descripción del autor', () => {
        expect(screen.getByText('Bastian Rubio')).toBeInTheDocument();
        expect(screen.getByText(/Estudiante de Ingeniería en informática • Chile/)).toBeInTheDocument();
    });

    it('debe renderizar el componente SocialLinks', () => {
        expect(screen.getByTestId('social-links-mock')).toBeInTheDocument();
    });

    it('debe renderizar el texto de copyright con el año actual', () => {
        const currentYear = new Date().getFullYear();
        // Usamos una expresión regular para buscar el texto que contiene el año
        const copyrightText = screen.getByText(new RegExp(`© ${currentYear} Bastian Rubio.`));
        expect(copyrightText).toBeInTheDocument();
    });
});