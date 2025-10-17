import React from 'react';

interface WorkItem {
    title: string;
    company: string;
    period: string;
    description: string;
    moreLink?: string;
}

export const WorkItem: React.FC<WorkItem> = ({title, company, period, description, moreLink}) => (
    // Reducimos el padding izquierdo para dar más espacio en móviles
    <div className="relative pl-6 pb-12 border-l border-gray-600 last:pb-0">
        <span className="absolute left-[-7px] top-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
        <div className="mb-2">
            <h3 className="text-lg font-bold text-yellow-400 xl:text-xl">{title}</h3>
            <p className="text-white font-medium md:text-lg">{company}</p>
            <p className="text-gray-400 text-sm md:text-base">{period}</p>
        </div>
        <div className="text-gray-300 text-sm md:text-base"> {/* Tamaño de fuente base más pequeño */}
            <p>{description}</p>
            {moreLink && (
                <a
                    href={moreLink}
                    className="text-yellow-300 font-semibold hover:underline mt-2 block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Saber más &rarr;
                </a>
            )}
        </div>
    </div>
);