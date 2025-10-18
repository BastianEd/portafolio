import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Certifications } from './Certifications';

/**
 * @file Archivo de pruebas para el componente `Certifications`.
 *
 * @description
 * Esta suite de pruebas valida el organismo `Certifications`. La estrategia de testing
 * se centra en el aislamiento del componente mediante un doble "mocking":
 *
 * 1.  **Mock de Datos (`profileData`):** Se simula la fuente de datos para asegurar
 * que la prueba sea predecible y no dependa de los datos reales.
 * 2.  **Mock del Componente Hijo (`CertificationCard`):** Se simula el componente
 * molecular para que la prueba se enfoque únicamente en la lógica del organismo
 * `Certifications` (es decir, que renderice su título y mapee correctamente los datos
 * para generar la lista de hijos), sin testear la implementación interna de `CertificationCard`.
 */
vi.mock('~/data/profile', () => ({
    profileData: {
        certifications: [
            { title: 'Cert A', issuer: 'Issuer A' },
            { title: 'Cert B', issuer: 'Issuer B' },
            { title: 'Cert C', issuer: 'Issuer C' },
        ],
    },
}));

vi.mock('../../molecules/CertificationCard/CertificationCard', () => ({
    CertificationCard: ({ title }: { title: string }) => <article>{title}</article>,
}));

describe('Componente: Certifications', () => {
    it('debe renderizar el título de la sección', () => {
        render(<Certifications />);
        expect(screen.getByText('Certificaciones')).toBeInTheDocument();
    });

    it('debe renderizar una lista de CertificationCards', () => {
        render(<Certifications />);
        const certificationCards = screen.getAllByRole('article');

        expect(certificationCards).toHaveLength(3);
        expect(certificationCards[0]).toHaveTextContent('Cert A');
        expect(certificationCards[1]).toHaveTextContent('Cert B');
        expect(certificationCards[2]).toHaveTextContent('Cert C');
    });
});