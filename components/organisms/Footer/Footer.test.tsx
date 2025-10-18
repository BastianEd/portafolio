import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Footer } from './Footer';

/**
 * @file Archivo de pruebas para el componente `Footer`.
 *
 * @description
 * Esta suite de pruebas valida el organismo `Footer`. La estrategia se centra
 * en asegurar que todos los elementos del pie de página se rendericen correctamente,
 * incluyendo contenido estático, dinámico y componentes hijos.
 *
 * Puntos clave de la prueba:
 * 1.  **Aislamiento:** Se mockea el componente molecular `SocialLinks` para que la
 * prueba del `Footer` no dependa de su implementación interna.
 * 2.  **Contenido Estático:** Se verifica la presencia del nombre del autor y su descripción.
 * 3.  **Contenido Dinámico:** Se comprueba que el texto de copyright muestre el año
 * actual, haciendo la prueba robusta a lo largo del tiempo.
 * 4.  **Composición:** Se asegura que el componente hijo (`SocialLinks`) esté presente.
 */
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