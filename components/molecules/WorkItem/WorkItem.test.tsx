import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { WorkItem } from './WorkItem';

/**
 * @file Archivo de pruebas para el componente molecular `WorkItem`.
 *
 * @description
 * Esta suite de pruebas se enfoca en validar el componente `WorkItem`, que se utiliza
 * para mostrar una entrada individual en la línea de tiempo de experiencia.
 *
 * Las pruebas cubren dos aspectos principales:
 * 1.  **Renderizado de Contenido Principal:** Se asegura de que toda la información
 * básica (título, compañía, período y descripción) se muestre correctamente.
 * 2.  **Renderizado Condicional:** Se valida que el enlace "Saber más" aparezca
 * únicamente cuando se proporciona la prop `moreLink`, y que esté ausente
 * en caso contrario.
 */
describe('Componente: WorkItem', () => {
    const mockWorkItem = {
        title: 'Desarrollador Frontend',
        company: 'Tech Solutions Inc.',
        period: 'Enero 2022 - Presente',
        description: 'Desarrollo de interfaces de usuario interactivas con React y TypeScript.',
        moreLink: 'https://example.com/details',
    };

    // Prueba 1: Verifica que toda la información principal se renderice.
    it('debe renderizar el título, la empresa, el período y la descripción', () => {
        render(<WorkItem {...mockWorkItem} />);

        expect(screen.getByText(mockWorkItem.title)).toBeInTheDocument();
        expect(screen.getByText(mockWorkItem.company)).toBeInTheDocument();
        expect(screen.getByText(mockWorkItem.period)).toBeInTheDocument();
        expect(screen.getByText(mockWorkItem.description)).toBeInTheDocument();
    });

    // Prueba 2: Valida la renderización condicional del enlace "Saber más".
    it('debe renderizar el enlace "Saber más" si se proporciona la URL', () => {
        render(<WorkItem {...mockWorkItem} />);

        const moreLinkElement = screen.getByRole('link', { name: /saber más/i });
        expect(moreLinkElement).toBeInTheDocument();
        expect(moreLinkElement).toHaveAttribute('href', mockWorkItem.moreLink);
    });

    // Prueba 3: Asegura que el enlace no aparezca si no se pasa la prop.
    it('no debe renderizar el enlace "Saber más" si no se proporciona la URL', () => {
        // Creamos una versión del mock sin el 'moreLink'
        const { moreLink, ...itemWithoutLink } = mockWorkItem;
        render(<WorkItem {...itemWithoutLink} />);

        // Usamos queryByRole para confirmar que el elemento no está en el DOM.
        const moreLinkElement = screen.queryByRole('link', { name: /saber más/i });
        expect(moreLinkElement).not.toBeInTheDocument();
    });
});