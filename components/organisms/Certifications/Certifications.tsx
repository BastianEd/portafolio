import React from 'react';
import { CertificationCard } from '../../molecules/CertificationCard/CertificationCard';
import { profileData } from '~/data/profile';
import { FcDiploma1 } from "react-icons/fc";


/**
 * Componente Organismo: Certifications
 * * Renderiza la sección completa de "Certificaciones".
 * Este organismo obtiene la lista de certificaciones desde `profileData` y
 * renderiza una molécula `CertificationCard` por cada una, organizándolas
 * en una grilla responsiva.
 */
export const Certifications: React.FC = () => {
    return (
        <section id="certificaciones" className="py-20 px-4">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
                    <FcDiploma1 className="text-4xl"/>
                    Certificaciones
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                    {profileData.certifications.map((cert) => (
                        <CertificationCard key={cert.title} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};