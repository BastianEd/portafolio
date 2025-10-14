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
        <article className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col">

            <div className="flex-grow">
                <div className="flex items-start gap-5">
                    {/* Contenedor de la imagen */}
                    <div className="flex-shrink-0">
                        <img
                            src={badgeImage}
                            alt={`Insignia de ${title}`}
                            className="w-30 h-30 object-contain"
                        />
                    </div>
                    {/* Contenido de texto */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                        <p className="text-yellow-400 mb-1 md:text-base">{issuer}</p>
                        <p className="text-gray-400 text-sm md:text-base">{`Emitido: ${issueDate}`}</p>
                    </div>
                </div>
            </div>

            {/* 3. Contenedor del botón. `mt-6` añade un espacio consistente entre el texto y el botón. */}
            <div className="mt-6">
                <Button href={credentialUrl} variant="secondary">
                    Ver credencial
                </Button>
            </div>
        </article>
    );
};