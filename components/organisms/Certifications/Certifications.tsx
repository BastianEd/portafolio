import React from 'react';
import { CertificationCard } from '../../molecules/CertificationCard/CertificationCard';
import { profileData } from '~/data/profile';

export const Certifications: React.FC = () => {
    return (
        <section id="certificaciones" className="py-20 px-4">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
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