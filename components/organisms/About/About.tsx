import React from 'react';
import { profileData } from '~/data/profile';
import createDOMPurify from 'dompurify';
import { SlUser } from "react-icons/sl";
/**
 * Componente Organismo: About
 * * Renderiza la sección "Sobre mí" del portafolio.
 * Se encarga de mostrar el título de la sección y los párrafos descriptivos
 * obtenidos desde `profileData`. Utiliza DOMPurify para sanear el contenido
 * HTML antes de renderizarlo, garantizando la seguridad contra ataques XSS.
 */
export const About: React.FC = () => {
        const { about } = profileData;
        return (
            <section id="sobre-mi" className="py-20 px-4">
                <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-12 flex items-center gap-2">
                        <SlUser className="text-4xl"/>
                        {about.title}
                    </h2>
                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                        {about.paragraphs.map((text, index) => {
                            // Creamos una instancia de DOMPurify solo si `window` está disponible
                            const purify = typeof window !== 'undefined' ? createDOMPurify(window) : { sanitize: (s: string) => s };
                            const sanitized = purify.sanitize(text);
                            const withStrongClass = sanitized.replace(/<strong>/g, '<strong class="text-white">');
                            return <p key={index} dangerouslySetInnerHTML={{ __html: withStrongClass }} />;
                        })}
                    </div>
                </div>
            </section>
    );
};
