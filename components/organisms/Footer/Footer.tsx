import React from 'react';
import { SocialLinks } from '../../molecules/SocialLinks/SocialLinks';

export const Footer: React.FC = () => {
    return (
        <footer className="py-12 px-4 border-t border-gray-800">
            <div className="max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto">
                {/* Contenedor principal: flex-col en móvil, flex-row en desktop */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* 1. Agrupamos nombre y rol para mejor control */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold text-lg">Bastian Rubio</p>
                        <p className="text-gray-400 text-sm">
                            Estudiante de Ingeniero en informática • Chile.
                        </p>
                    </div>

                    {/* 2. Iconos sociales */}
                    <SocialLinks />

                    {/* 3. Copyright*/}
                    <div className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} Bastian Rubio.
                    </div>
                </div>
            </div>
        </footer>
    );
};