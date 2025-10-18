import React from 'react';
import {FaJava, FaCss3Alt, FaHtml5, FaBootstrap, FaReact,} from 'react-icons/fa';
import {SiJavascript, SiSpringboot, SiMysql, SiJunit5, SiSwagger, SiTailwindcss, SiTypescript,} from 'react-icons/si';

// Objeto que mapea un string (el tag) al componente de ícono correspondiente.
// Usamos claves en minúsculas para estandarizar.
const iconMap: { [key: string]: React.ElementType } = {
    html: FaHtml5,
    css: FaCss3Alt,
    javascript: SiJavascript,
    bootstrap: FaBootstrap,
    java: FaJava,
    springboot: SiSpringboot,
    springdatajpa: SiSpringboot,
    mysql: SiMysql,
    hateoas: () => <span className="text-xs font-semibold">HATEOAS</span>,
    junit5: SiJunit5,
    mockito: () => <span className="text-xs font-semibold">Mockito</span>,
    swagger: SiSwagger,
    react: FaReact,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
    // Añade aquí más tecnologías para el futuro
};

interface TechIconProps {tech: string;className?: string;}

/**
 * Componente Atómico: TechIcon
 * Muestra un ícono correspondiente a una tecnología específica.
 * Incluye un tooltip con el nombre de la tecnología para mejorar la accesibilidad.
 * @param {TechIconProps} props - El nombre de la tecnología a mostrar.
 */
export const TechIcon: React.FC<TechIconProps> = ({ tech, className = '' }) => {
    // Normalizamos el tag a minúsculas y sin espacios para que coincida con las claves del map
    const techKey = tech.toLowerCase().replace(/\s+/g, '');
    const IconComponent = iconMap[techKey];

    // Si no encontramos un ícono, podemos mostrar el texto o nada.
    if (!IconComponent) {
        return null; // O un ícono genérico
    }

    return (
        <div className="relative group flex justify-center">
            <IconComponent className={`text-2xl text-gray-400 group-hover:text-white transition-colors ${className}`} />
            {/* Tooltip que aparece al hacer hover */}
            <span className="absolute bottom-full mb-2 w-max px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {tech}
            </span>
        </div>
    );
};