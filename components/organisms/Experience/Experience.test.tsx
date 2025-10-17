import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Experience } from './Experience';

// Mock de los datos de experiencia
vi.mock('~/data/profile', () => ({
    profileData: {
        experience: [
            { company: 'Empresa A', title: 'Puesto A', period: '2020', description: 'Desc A' },
            { company: 'Empresa B', title: 'Puesto B', period: '2021', description: 'Desc B' },
        ],
    },
}));

// Mock del componente hijo WorkItem
vi.mock('../../molecules/WorkItem/WorkItem', () => ({
    WorkItem: ({ title }: { title: string }) => <div data-testid="work-item">{title}</div>,
}));

describe('Componente: Experience', () => {
    it('debe renderizar una lista de WorkItems basada en los datos del perfil', () => {
        render(<Experience />);

        // Buscamos todos los WorkItems renderizados
        const workItems = screen.getAllByTestId('work-item');

        // Verificamos que se haya renderizado la cantidad correcta
        expect(workItems).toHaveLength(2);

        // Verificamos que el contenido sea el esperado
        expect(workItems[0]).toHaveTextContent('Puesto A');
        expect(workItems[1]).toHaveTextContent('Puesto B');
    });

    it('debe renderizar el título de la sección', () => {
        render(<Experience />);
        expect(screen.getByText('Experiencia laboral')).toBeInTheDocument();
    });
});