import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SocialLinks } from './SocialLinks';

// Hacemos un mock del módulo de datos para controlar la información de prueba.
vi.mock('~/data/profile', () => ({
    profileData: {
        socials: [
            { name: 'github', url: 'https://github.com/test', label: 'GitHub Test' },
            { name: 'linkedin', url: 'https://linkedin.com/in/test', label: 'LinkedIn Test' },
        ],
    },
}));

describe('Componente: SocialLinks', () => {
    it('debe renderizar los enlaces sociales basados en profileData', () => {
        render(<SocialLinks />);

        // Buscamos los enlaces por su 'aria-label', que es una buena práctica de accesibilidad.
        const githubLink = screen.getByLabelText('GitHub Test');
        const linkedinLink = screen.getByLabelText('LinkedIn Test');

        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/test');

        expect(linkedinLink).toBeInTheDocument();
        expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/test');
    });
});