import React from 'react';
import { WorkItem } from '../molecules/WorkItem';
import { profileData } from '../../app/data/profile';

export const Experience: React.FC = () => (
    <section id="experiencia" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Experiencia laboral
            </h2>
            <div className="relative ml-2">
                {profileData.experience.map((exp) => (
                    <WorkItem
                        key={exp.company}
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    </section>
);
