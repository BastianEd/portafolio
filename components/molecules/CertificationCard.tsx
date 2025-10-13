import React from 'react';
import { Button } from '../atoms/Button';

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
        <article className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex items-start gap-5">
            {/* Contenedor de la imagen */}
            <div className="flex-shrink-0">
                <img
                    src={badgeImage}
                    alt={`Insignia de ${title}`}
                    className="w-35 h-35 object-contain"
                />
            </div>

            {/* Contenedor del contenido de texto */}
            <div className="flex flex-col justify-between flex-grow h-full">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-yellow-400 mb-1">{issuer}</p>
                    <p className="text-gray-400 text-sm mb-4">{`Emitido: ${issueDate}`}</p>
                </div>
                <div className="mt-auto">
                    <Button href={credentialUrl} variant="secondary">
                        Ver credencial
                    </Button>
                </div>
            </div>
        </article>
    );
};