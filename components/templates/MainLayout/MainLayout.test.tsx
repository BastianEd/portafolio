import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MainLayout } from './MainLayout';

// Mockeamos el Navbar, ya que solo nos interesa saber si MainLayout lo incluye,
// no cómo funciona Navbar internamente.
vi.mock('../../organisms/NavBar/NavBar', () => ({
    Navbar: () => <header data-testid="navbar-mock" />,
}));

describe('Componente: MainLayout', () => {

    // Prueba 1: Verifica que el componente Navbar esté siempre presente.
    it('debe renderizar el componente Navbar', () => {
        render(
            <MainLayout>
                <div>Contenido de prueba</div>
            </MainLayout>
        );

        // Buscamos el mock del Navbar por su test-id.
        expect(screen.getByTestId('navbar-mock')).toBeInTheDocument();
    });

    // Prueba 2: Asegura que cualquier contenido pasado como 'children' se renderice.
    it('debe renderizar correctamente los componentes hijos (children)', () => {
        const childText = 'Este es el contenido principal de la página.';

        render(
            <MainLayout>
                <section>
                    <h1>{childText}</h1>
                </section>
            </MainLayout>
        );

        // Verificamos que el contenido pasado se encuentre dentro del documento.
        const childElement = screen.getByText(childText);
        expect(childElement).toBeInTheDocument();
        // También podemos verificar que está dentro de la etiqueta <main>.
        expect(childElement.closest('main')).toBeInTheDocument();
    });
});