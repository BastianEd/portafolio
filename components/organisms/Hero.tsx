import React from 'react';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { SocialLinks } from '../molecules/SocialLinks';


export const Hero: React.FC = () => {
    return (
        <section className="flex flex-col justify-center items-center px-4 py-12 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
                <div className="relative inline-flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full pointer-events-none animate-spin-gradient z-0" />
                    <Badge color="bg-transparent" gradientBorder>
                        Disponible para trabajar
                    </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-4">
                    Hola, soy Bastian Rubio
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                    <span className="text-yellow-400">Estudiante de Ingeniero en informática</span> de Chile.
                </p>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                    Especializado en el desarrollo de aplicaciones web y soluciones de datos utilizando
                    tecnologías como <b><i> Python, JavaScript, HTML5, CSS3, Oracle SQL, y Java</i></b>,
                    combinando experiencia profesional en proyectos innovadores y prácticas
                    en ingeniería informática.
                </p>
                <div className="flex justify-center gap-4 mb-8">
                    <Button href="https://www.linkedin.com/in/bastián-rubio-meneses/" variant="primary">
                        Contáctame
                    </Button>
                    <Button href="https://github.com/BastianEd" variant="secondary">
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
