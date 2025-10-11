import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8">Sobre mí</h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Me llamo <strong className="text-white">Bastián Rubio</strong>, estudiante de
                        Ingeniería Informática en Duoc UC. Apasionado por la tecnología y la programación,
                        con especialización en Ciencia de Datos a partir del próximo año.
                    </p>
                    <p>
                        Tengo experiencia en Python, bases de datos (Oracle SQL, MySQL) y automatización
                        de procesos. He participado en proyectos como mi práctica en Banco de Chile,
                        donde desarrollé herramientas de validación con Python.
                    </p>
                    <p>
                        Me interesa el análisis de datos, machine learning y crear soluciones
                        que resuelvan problemas reales. Siempre estoy aprendiendo nuevas tecnologías
                        y buscando aplicar mis conocimientos en proyectos prácticos.
                    </p>
                </div>
            </div>
        </section>
    );
};
