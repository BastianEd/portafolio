import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';

describe('Componente: ProjectCard', () => {
    const mockProject = {
        title: 'Mi Proyecto Increíble',
        description: 'Esta es una descripción de prueba.',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
        github: 'https://github.com/user/repo',
        demo: 'https://demo.example.com',
        image: '/project-image.png',
    };

    it('debe renderizar toda la información del proyecto', () => {
        render(<ProjectCard {...mockProject} />);

        expect(screen.getByText(mockProject.title)).toBeInTheDocument();
        expect(screen.getByText(mockProject.description)).toBeInTheDocument();

        // Verifica que cada tag se renderice
        mockProject.tags.forEach(tag => {
            expect(screen.getByText(tag)).toBeInTheDocument();
        });
    });

    it('debe renderizar los botones de "Ver código" y "Ver demo"', () => {
        render(<ProjectCard {...mockProject} />);

        const codeLink = screen.getByRole('link', { name: /ver código/i });
        const demoLink = screen.getByRole('link', { name: /ver demo/i });

        expect(codeLink).toHaveAttribute('href', mockProject.github);
        expect(demoLink).toHaveAttribute('href', mockProject.demo);
    });

    it('no debe renderizar el botón "Ver demo" si no se proporciona la URL', () => {
        const projectWithoutDemo = { ...mockProject, demo: undefined };
        render(<ProjectCard {...projectWithoutDemo} />);

        // `queryByRole` es útil para asegurar que un elemento NO exista.
        const demoLink = screen.queryByRole('link', { name: /ver demo/i });
        expect(demoLink).not.toBeInTheDocument();
    });
});