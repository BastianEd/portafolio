import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { CertificationCard } from './CertificationCard';

describe('Componente: CertificationCard', () => {
    const mockCertification = {
        title: 'React a Fondo',
        issuer: 'Platzi',
        issueDate: '2024',
        credentialUrl: 'https://platzi.com/certificado/123',
        badgeImage: '/fake-image.png',
    };

    // Renderiza el componente antes de cada prueba
    beforeEach(() => {
        render(<CertificationCard {...mockCertification} />);
    });

    it('debe renderizar el título, emisor y fecha de la certificación', () => {
        expect(screen.getByText(mockCertification.title)).toBeInTheDocument();
        expect(screen.getByText(mockCertification.issuer)).toBeInTheDocument();
        // Usamos una expresión regular para encontrar el texto parcial
        expect(screen.getByText(`Emitido: ${mockCertification.issueDate}`)).toBeInTheDocument();
    });

    it('debe renderizar la imagen de la insignia con el alt text correcto', () => {
        const badgeImage = screen.getByRole('img');
        expect(badgeImage).toBeInTheDocument();
        expect(badgeImage).toHaveAttribute('src', mockCertification.badgeImage);
        expect(badgeImage).toHaveAttribute('alt', `Insignia de ${mockCertification.title}`);
    });

    it('debe renderizar un enlace "Ver credencial" que apunte a la URL correcta', () => {
        const credentialLink = screen.getByRole('link', { name: /ver credencial/i });
        expect(credentialLink).toBeInTheDocument();
        expect(credentialLink).toHaveAttribute('href', mockCertification.credentialUrl);
    });
});