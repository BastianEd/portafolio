import React from 'react';
import { ProjectCard } from '../../molecules/ProjectCard/ProjectCard';
import { profileData } from '~/data/profile';
import { FcMultipleDevices } from "react-icons/fc";

/**
 * Componente Organismo: Projects
 * * Renderiza la sección completa de "Proyectos Destacados".
 * Este componente se encarga de:
 * 1.  Mostrar un título para la sección.
 * 2.  Obtener la lista de proyectos desde el archivo de datos `profileData`.
 * 3.  Iterar sobre los datos y renderizar un componente molecular `ProjectCard`
 * por cada proyecto en una grilla responsiva.
 */
export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
                    <FcMultipleDevices className="text-4xl"/>
                    Proyectos Destacados
                </h2>
                {/* Grilla ajustada para mejor responsive en móviles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {profileData.projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
