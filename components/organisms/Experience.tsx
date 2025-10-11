import React from 'react';
import { WorkItem } from 'components/molecules/WorkItemProps';

export const Experience: React.FC = () => (
    <section id="experiencia" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Experiencia laboral
            </h2>
            <div className="relative ml-2">
                <WorkItem
                    title="Practicante Profesional"
                    company="Banco de Chile"
                    period="Diciembre 2023 — Enero 2024"
                    description="Desarrollo de programas para validación y modificación de mallas de control
                                 utilizando Python. Participación en proyectos de gestión y análisis de datos
                                 enfocados en Big Data, contribuyendo a la automatización de procesos y mejora continua.
                                 "
                />
            </div>
        </div>
    </section>
);
