import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from './Hero';

/**
 * @file Archivo de pruebas para el componente `Hero`.
 *
 * @description
 * Esta suite de pruebas valida el organismo `Hero`, que es el componente principal
 * de la página. La estrategia se basa en el aislamiento completo del componente para
 * probar su lógica de composición de forma unitaria.
 *
 * Se mockean todas las dependencias externas:
 * 1.  **Datos (`profileData`):** Para asegurar que la prueba es predecible.
 * 2.  **Componentes Hijos (`Button`, `SocialLinks`):** Para que la prueba se centre
 * en la orquestación del `Hero` y no en la implementación de sus hijos.
 *
 * Las pruebas verifican que el componente renderice correctamente el contenido textual,
 * los botones de acción con sus respectivos enlaces y el componente de redes sociales.
 */
// Mockeamos los datos y los componentes hijos para aislar el Hero
vi.mock('~/data/profile', () => ({
    profileData: {
        hero: {
            title: 'Hola, soy Bastián Rubio',
            subtitle: 'Estudiante de Ingeniero en informática',
            university: 'Duoc UC',
            description: 'Apasionado por la programación.',
            contactLink: '#contact',
            cvLink: '#cv',
        },
    },
}));

vi.mock('../../atoms/Button/Button', () => ({
    Button: ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    ),
}));

vi.mock('../../molecules/SocialLinks/SocialLinks', () => ({
    SocialLinks: () => <div data-testid="social-links" />,
}));

describe('Componente: Hero', () => {
    it('debe renderizar el título principal, subtítulo y descripción', () => {
        render(<Hero />);

        expect(screen.getByText('Hola, soy Bastián Rubio')).toBeInTheDocument();
        expect(screen.getByText(/Estudiante de Ingeniero en informática/)).toBeInTheDocument();
        expect(screen.getByText('Apasionado por la programación.')).toBeInTheDocument();
    });

    it('debe renderizar los botones de acción con los enlaces correctos', () => {
        render(<Hero />);

        const contactButton = screen.getByRole('link', { name: 'Contáctame' });
        const cvButton = screen.getByRole('link', { name: 'Curriculum Vitae' });

        expect(contactButton).toHaveAttribute('href', '#contact');
        expect(cvButton).toHaveAttribute('href', '#cv');
    });

    it('debe renderizar el componente SocialLinks', () => {
        render(<Hero />);
        expect(screen.getByTestId('social-links')).toBeInTheDocument();
    });
});