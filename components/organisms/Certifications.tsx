import React from 'react';
import { CertificationCard } from '../molecules/CertificationCard';
import { profileData } from 'app/data/profile';

export const Certifications: React.FC = () => {
    return (
        <section id="certificaciones" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12">Certificaciones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profileData.certifications.map((cert) => (
                        <CertificationCard key={cert.title} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};