import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';
import { SocialLinks } from '../../molecules/SocialLinks/SocialLinks';
import { profileData } from '~/data/profile';
import createDOMPurify from 'dompurify';


export const Hero: React.FC = () => {
    const { hero } = profileData; // Extrae la sección hero
    // Creamos una instancia de DOMPurify solo si `window` está disponible
    const purify = typeof window !== 'undefined' ? createDOMPurify(window) : { sanitize: (s: string) => s };
    // Sanitizamos la descripción para evitar XSS
    const sanitizedDescription = purify.sanitize(hero.description);
    // Si había reemplazos específicos, se pueden aplicar después de sanitizar
    const finalDescription = sanitizedDescription.replace(/<b><i>/g, '<b><i>').replace(/<\/i><\/b>/g, '</i></b>');
    return (
        <section className="flex flex-col justify-center items-center px-4 py-12 md:py-24">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto text-center">
                <div className="relative inline-flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full pointer-events-none animate-spin-gradient z-0" />
                    <Badge color="bg-transparent" gradientBorder>
                        Disponible para trabajar
                    </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-bold text-white mt-6 mb-4">
                    {hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    <span className="text-yellow-400">{hero.subtitle}</span> de {hero.university}.
                </p>
                {/* Usamos dangerouslySetInnerHTML para renderizar el HTML de las negritas, sanitizado */}
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
                   dangerouslySetInnerHTML={{ __html: finalDescription }}
                />
                <div className="flex justify-center gap-4 mb-8">
                    <Button href={hero.contactLink} variant="primary">
                        Contáctame
                    </Button>
                    <Button href={hero.cvLink} variant="secondary">
                        Curriculum Vitae
                    </Button>
                    <Button href={hero.projectsLink} variant="secondary">
                        Ver proyectos
                    </Button>
                </div>

                <div className="flex justify-center mt-10">
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};
