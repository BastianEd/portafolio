import React from 'react';
import { Navbar } from '../organisms/NavBar';

interface MainLayoutProps {
    children: React.ReactNode;
}

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
