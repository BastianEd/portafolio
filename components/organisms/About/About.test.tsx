import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { About } from './About';

/**
 * @file Archivo de pruebas para el componente `About`.
 *
 * @description
 * Esta suite de pruebas valida el componente `About`, que es responsable de
 * renderizar la sección "Sobre mí" del portafolio. Las pruebas se centran en
 * tres áreas clave:
 *
 * 1.  **Aislamiento del Componente:** Se mockean los datos de `profileData` para
 * asegurar que la prueba sea independiente de la fuente de datos real.
 * 2.  **Renderizado de Contenido:** Se verifica que tanto el título de la sección
 * como los párrafos de texto se muestren correctamente.
 * 3.  **Manejo de HTML:** Se prueba específicamente que el componente pueda
 * renderizar etiquetas HTML (`<strong>`) inyectadas desde los datos y que
 * aplique clases dinámicas a estas etiquetas, validando la lógica de
 * manipulación de strings y el uso de `dangerouslySetInnerHTML`.
 */
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