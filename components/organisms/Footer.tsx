import React from 'react';
import { SocialLinks } from '../molecules/SocialLinks';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold mb-2 md:text-lg">Bastian Rubio</p>
                        <p className="text-gray-400 text-sm md:text-base">
                            Estudiante de Ingeniero en informática • Chile.
                        </p>
                    </div>
                    <SocialLinks />
                    <div className="mt-8 text-center text-gray-500 text-sm md:text-base">
                        © {new Date().getFullYear()} Bastian Rubio.
                    </div>
                </div>
            </div>
        </footer>
    );
};
