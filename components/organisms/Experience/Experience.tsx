import React from 'react';
import { WorkItem } from '../../molecules/WorkItem/WorkItem';
import { profileData } from '~/data/profile';

/**
 * Componente Organismo: Experience
 * * Renderiza la sección de "Experiencia laboral" como una línea de tiempo.
 * Obtiene los datos de experiencia desde `profileData` y mapea cada entrada
 * para renderizar un componente molecular `WorkItem`, creando una lista
 * vertical que representa la trayectoria profesional.
 */
export const Experience: React.FC = () => (
    <section id="experiencia" className="py-20 px-4">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
                <span className="text-4xl">💼</span> {/* Ícono ligeramente más pequeño para móviles */}
                Experiencia laboral
            </h2>
            {/* Quitamos el margen izquierdo aquí */}
            <div className="relative">
                {profileData.experience.map((exp) => (
                    <WorkItem key={exp.company} {...exp} />
                ))}
            </div>
        </div>
    </section>
);