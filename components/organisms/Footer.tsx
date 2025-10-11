import React from 'react';
import { SocialLinks } from '../molecules/SocialLinks';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold mb-2">Bastian Rubio</p>
                        <p className="text-gray-400 text-sm">
                            Estudiante de Ingeniero en informática • Chile.
                        </p>
                    </div>
                    <SocialLinks />
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Bastian Rubio.
                </div>
            </div>
        </footer>
    );
};
