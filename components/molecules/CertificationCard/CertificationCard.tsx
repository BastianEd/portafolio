import React from 'react';
import { Button } from '../../atoms/Button/Button';

interface CertificationCardProps {
    title: string;
    issuer: string;
    issueDate: string;
    credentialUrl: string;
    badgeImage: string;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
                                                                        title,
                                                                        issuer,
                                                                        issueDate,
                                                                        credentialUrl,
                                                                        badgeImage
                                                                    }) => {
    return (
        <article className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col justify-between">

            {/* Contenedor principal del contenido */}
            <div className="flex items-start gap-4">
                {/* 1. Imagen flexible y de tamaño controlado */}
                <div className="flex-shrink-0">
                    <img
                        src={badgeImage}
                        alt={`Insignia de ${title}`}
                        className="w-16 h-16 object-contain" // Tamaño base para móviles
                    />
                </div>

                {/* 2. Contenedor de texto */}
                <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-yellow-400 text-sm mb-1">{issuer}</p>
                    <p className="text-gray-400 text-xs">{`Emitido: ${issueDate}`}</p>
                </div>
            </div>

            {/* 3. Botón con margen superior */}
            <div className="mt-6">
                <Button href={credentialUrl} variant="secondary">
                    Ver credencial
                </Button>
            </div>
        </article>
    );
};