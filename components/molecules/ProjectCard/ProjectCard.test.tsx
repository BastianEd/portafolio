import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './ProjectCard';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from './ProjectCard';
import { FaGithub, FaLink } from 'react-icons/fa';

// Mockeamos los componentes hijos (átomos) para aislar las pruebas a la molécula ProjectCard.
// Esto nos asegura que estamos probando solo la lógica de ProjectCard, no la de sus hijos.

vi.mock('../../atoms/Button/Button', () => ({
    // Simulamos el componente Button. Guardamos sus props para poder verificarlas.
    Button: ({ children, href, icon }: { children: React.ReactNode, href: string, icon: React.ReactNode }) => (
        <a href={href} data-testid="mock-button">
            {icon}
            <span>{children}</span>
        </a>
    ),
}));

vi.mock('../../atoms/TechIcon/TechIcon', () => ({
    // Simulamos TechIcon. Solo nos importa que se renderice con el 'tech' correcto.
    TechIcon: ({ tech }: { tech: string }) => <div data-testid="tech-icon">{tech}</div>,
}));


describe('Componente: ProjectCard', () => {
    const mockProject = {
        title: 'Mi Proyecto Increíble',
        description: 'Esta es una descripción de prueba.',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
        github: 'https://github.com/user/repo',
        demo: 'https://demo.example.com',
        image: '/project-image.png',
    };

    // Prueba 1: Verifica que la información textual y la imagen se rendericen.
    it('debe renderizar el título, la descripción y la imagen del proyecto', () => {
        render(<ProjectCard {...mockProject} />);

        expect(screen.getByText(mockProject.title)).toBeInTheDocument();
        expect(screen.getByText(mockProject.description)).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', mockProject.image);
        expect(image).toHaveAttribute('alt', mockProject.title);
    });

    // Prueba 2: Verifica que se rendericen los iconos de tecnología correctamente.
    it('debe renderizar un TechIcon por cada tag en los datos', () => {
        render(<ProjectCard {...mockProject} />);

        // Buscamos todos los mocks de TechIcon por su 'data-testid'
        const techIcons = screen.getAllByTestId('tech-icon');
        expect(techIcons).toHaveLength(mockProject.tags.length);

        // Verificamos que el contenido de texto de cada icono corresponda al tag
        expect(techIcons[0]).toHaveTextContent('React');
        expect(techIcons[1]).toHaveTextContent('TypeScript');
        expect(techIcons[2]).toHaveTextContent('TailwindCSS');
    });

    // Prueba 3: Verifica que los botones se rendericen con sus respectivos iconos y enlaces.
    it('debe renderizar los botones de "Código" y "Preview" con sus iconos y href', () => {
        render(<ProjectCard {...mockProject} />);

        // Buscamos los enlaces por su texto
        const codeLink = screen.getByText('Código').closest('a');
        const previewLink = screen.getByText('Preview').closest('a');

        expect(codeLink).toBeInTheDocument();
        expect(codeLink).toHaveAttribute('href', mockProject.github);

        expect(previewLink).toBeInTheDocument();
        expect(previewLink).toHaveAttribute('href', mockProject.demo);

        // Aquí podríamos ser más específicos y verificar que los SVGs de los iconos están dentro,
        // pero con el mock es suficiente saber que se intentaron renderizar.
        expect(codeLink?.querySelector('svg')).toBeInTheDocument();
        expect(previewLink?.querySelector('svg')).toBeInTheDocument();
    });

    // Prueba 4: Verifica el renderizado condicional del botón "Preview".
    it('no debe renderizar el botón "Preview" si no se proporciona la URL de demo', () => {
        // Creamos una copia del mock sin la propiedad 'demo'
        const { demo, ...projectWithoutDemo } = mockProject;

        render(<ProjectCard {...projectWithoutDemo} />);

        // `queryByText` es ideal para verificar que un elemento NO existe. Devuelve null si no lo encuentra.
        const previewLink = screen.queryByText('Preview');
        expect(previewLink).not.toBeInTheDocument();
    });

    // Prueba 5: Verifica el fallback cuando no hay imagen.
    it('debe mostrar el texto "Sin imagen" si no se proporciona una URL de imagen', () => {
        const { image, ...projectWithoutImage } = mockProject;

        render(<ProjectCard {...projectWithoutImage} />);

        expect(screen.getByText('Sin imagen')).toBeInTheDocument();
        // Nos aseguramos de que no se renderice ninguna etiqueta <img>
        expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
});