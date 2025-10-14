import React from 'react';
import { profileData } from '~/data/profile';

export const About: React.FC = () => {
        const { about } = profileData;
        return (
            <section id="sobre-mi" className="py-20 px-4">
                <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
                        {about.title}
                    </h2>
                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                        {about.paragraphs.map((text, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: text.replace(/<strong>/g, '<strong class="text-white">') }} />
                        ))}
                    </div>
                </div>
            </section>
    );
};
