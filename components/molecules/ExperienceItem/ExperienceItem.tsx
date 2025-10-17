import React from 'react';

interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
}

/**
 * Componente Molecular: ExperienceItem
 * * Representa una única entrada en la línea de tiempo de experiencia profesional.
 * Combina varios elementos de texto (átomos) para mostrar de forma estructurada
 * un puesto de trabajo, incluyendo el rol, la empresa, el período y una descripción.
 * * @param {ExperienceItemProps} props - Las propiedades que definen el contenido del item de experiencia.
 */
export const ExperienceItem: React.FC<ExperienceItemProps> = ({
                                                                  title,
                                                                  company,
                                                                  period,
                                                                  description
                                                              }) => {
    return (
        <div className="relative pl-8 pb-8 border-l-2 border-gray-700 last:pb-0">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="text-sm text-gray-400 mb-1">{period}</div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <div className="text-yellow-400 mb-2">{company}</div>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};
