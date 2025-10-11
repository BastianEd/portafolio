import React from 'react';
import { Icon } from '../atoms/Icon';

export const SocialLinks: React.FC = () => {
    const socials = [
        { name: 'github', url: 'https://github.com/BastianEd', label: 'GitHub' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/bastián-rubio-meneses/', label: 'LinkedIn' },
        { name: 'email', url: 'mailto:bastian@example.com', label: 'Email' }
    ];

    return (
        <nav className="flex gap-4">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                >
                    <Icon name={social.name} size={36} />
                </a>
            ))}
        </nav>
    );
};
