import React from 'react';
import { ProjectCard } from '../molecules/ProjectCard';
import imguno from 'assets/images/pasteleria-mil-sabores.webp';
import imgdos from 'assets/images/gamezone.webp';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Pastelería Mil Sabores Dulces',
            description: 'E-commerce completo para pastelería con carrito de compras, autenticación de usuarios, sistema de descuentos y blog integrado. Incluye usuarios de prueba con diferentes roles.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/MilSaboresDulces',
            demo: 'https://pasteleriamilsabores.netlify.app/',
            image: imguno
        },
        {
            title: 'GameZone - Tienda de Videojuegos',
            description: 'Aplicación web para tienda de videojuegos con catálogo de productos, filtros y diseño responsive. Proyecto académico desarrollado con tecnologías frontend modernas.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno',
            demo: 'https://gamezone-store.netlify.app/',
            image: imgdos
        }
    ];

    return (
        <section id="proyectos" className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12">Proyectos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
