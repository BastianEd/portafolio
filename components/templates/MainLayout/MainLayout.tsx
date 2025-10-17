import React from 'react';
import { Navbar } from '../../organisms/NavBar/NavBar';

interface MainLayoutProps {
    children: React.ReactNode;
}

/**
 * Componente Template: MainLayout
 * * Define la estructura visual principal y consistente para todas las páginas de la aplicación.
 * Este template se encarga de posicionar los organismos principales, como la `Navbar`,
 * y de proporcionar un contenedor `<main>` para el contenido específico de cada página,
 * que se pasa a través de `children`.
 * * @param {MainLayoutProps} props - Las propiedades que incluyen el contenido a renderizar.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <Navbar />
            <main className="relative">
                {children}
            </main>
        </div>
    );
};
