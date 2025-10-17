import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Link } from './Link';

describe('Componente: Link', () => {
    const testUrl = 'https://example.com';

    // Prueba 1: Renderizado básico con contenido y href.
    it('debe renderizar un enlace con el href y contenido correctos', () => {
        render(<Link href={testUrl}>Visitar Ejemplo</Link>);
        const linkElement = screen.getByRole('link', { name: 'Visitar Ejemplo' });

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', testUrl);
    });

    // Prueba 2: Comportamiento de enlace interno (por defecto).
    it('no debe tener target="_blank" si external es false o no se define', () => {
        render(<Link href="/internal-page">Página Interna</Link>);
        const linkElement = screen.getByRole('link');

        // Nos aseguramos de que no tenga el atributo 'target'.
        expect(linkElement).not.toHaveAttribute('target');
        expect(linkElement).not.toHaveAttribute('rel');
    });

    // Prueba 3: Comportamiento de enlace externo.
    it('debe añadir target="_blank" y rel="noopener noreferrer" si external es true', () => {
        render(
            <Link href={testUrl} external>
                Sitio Externo
            </Link>
        );
        const linkElement = screen.getByRole('link');

        // Verificamos los atributos para seguridad y funcionalidad de enlace externo.
        expect(linkElement).toHaveAttribute('target', '_blank');
        expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
    });
});