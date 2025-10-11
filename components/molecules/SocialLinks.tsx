import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importa los iconos que necesitas
import { MdEmail } from 'react-icons/md';
import { profileData } from '../../app/data/profile'; // Importa los datos

// Mapeo de nombres a componentes de icono
const iconMap: { [key: string]: React.ElementType } = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: MdEmail
};

export const SocialLinks: React.FC = () => {
    return (
        <nav className="flex gap-4">
            {profileData.socials.map((social) => {
                const IconComponent = iconMap[social.name];
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label={social.label}
                    >
                        {IconComponent && <IconComponent size={36} />}
                    </a>
                );
            })}
        </nav>
    );
};
