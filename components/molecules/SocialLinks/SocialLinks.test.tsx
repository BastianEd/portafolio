import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SocialLinks } from './SocialLinks';

/**
 * @file Archivo de pruebas para el componente molecular `SocialLinks`.
 *
 * @description
 * Esta suite de pruebas valida que el componente `SocialLinks` renderice
 * correctamente los enlaces a redes sociales basándose en una fuente de datos externa.
 *
 * La estrategia clave aquí es el "mocking" del módulo `profileData`. Esto aísla
 * el componente, permitiendo probar su lógica de renderizado de manera predecible
 * y sin depender de los datos reales.
 *
 * La prueba se enfoca en:
 * 1.  Verificar que se renderice un enlace por cada objeto en el array `socials` mockeado.
 * 2.  Asegurar que cada enlace tenga el atributo `href` correcto.
 * 3.  Validar la accesibilidad, comprobando que se asigne el `aria-label` adecuado.
 */
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