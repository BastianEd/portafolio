import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from './Hero';

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