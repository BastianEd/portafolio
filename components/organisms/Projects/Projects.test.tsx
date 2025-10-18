import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Projects } from './Projects';

/**
 * @file Archivo de pruebas para el componente `Projects`.
 *
 * @description
 * Esta suite de pruebas valida el organismo `Projects`, responsable de mostrar la
 * sección de proyectos destacados. La estrategia de testing se basa en el aislamiento
 * total del componente para verificar su lógica de composición.
 *
 * Se utilizan dos mocks clave:
 * 1.  **Mock de Datos (`profileData`):** Se proporciona un array de proyectos falso
 * para asegurar que la prueba sea predecible y consistente.
 * 2.  **Mock del Componente Hijo (`ProjectCard`):** Se simula la molécula `ProjectCard`
 * para que la prueba se centre únicamente en verificar que el organismo `Projects`
 * renderiza la cantidad correcta de hijos basándose en los datos recibidos.
 */
vi.mock('~/data/profile', () => ({
    profileData: {
        projects: [
            { title: 'Proyecto 1' },
            { title: 'Proyecto 2' },
        ],
    },
}));

vi.mock('../../molecules/ProjectCard/ProjectCard', () => ({
    ProjectCard: ({ title }: { title: string }) => <article>{title}</article>,
}));

describe('Componente: Projects', () => {
    it('debe renderizar el título de la sección de proyectos', () => {
        render(<Projects />);
        expect(screen.getByText('Proyectos Destacados')).toBeInTheDocument();
    });

    it('debe renderizar una lista de ProjectCards', () => {
        render(<Projects />);
        const projectCards = screen.getAllByRole('article');

        expect(projectCards).toHaveLength(2);
        expect(projectCards[0]).toHaveTextContent('Proyecto 1');
        expect(projectCards[1]).toHaveTextContent('Proyecto 2');
    });
});