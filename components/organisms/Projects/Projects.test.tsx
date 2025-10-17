import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Projects } from './Projects';

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