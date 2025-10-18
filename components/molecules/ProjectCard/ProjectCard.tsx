import React from 'react';
import { Badge } from '../../atoms/Badge/Badge';
import { Button } from '../../atoms/Button/Button';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo?: string;
    image?: string;
}

/**
 * Componente Molecular: ProjectCard
 * * Muestra una tarjeta de previsualización para un proyecto individual.
 * Combina varios átomos como una imagen, `Badge` para las tecnologías y `Button`
 * para los enlaces de "Ver código" y "Ver demo". Está diseñada para ser
 * utilizada dentro de una grilla de proyectos.
 * * @param {ProjectCardProps} props - Las propiedades que definen el contenido de la tarjeta de proyecto.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                            title,
                                                            description,
                                                            tags,
                                                            github,
                                                            demo,
                                                            image
                                                        }) => {
    return (
        <article className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300">
            <div className="w-full h-48 bg-gray-700 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Sin imagen
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>

                    ))}
                </div>
                <div className="flex gap-3">
                    <Button href={github} variant="secondary">
                        Ver código
                    </Button>
                    {demo && (
                        <Button href={demo} variant="primary">
                            Ver Preview
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
};
