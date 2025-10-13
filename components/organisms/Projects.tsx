import React from 'react';
import { ProjectCard } from '../molecules/ProjectCard';
import { profileData } from 'app/data/profile';

export const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12">Proyectos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {profileData.projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
