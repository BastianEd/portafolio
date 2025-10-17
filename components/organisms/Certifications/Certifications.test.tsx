import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Certifications } from './Certifications';

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