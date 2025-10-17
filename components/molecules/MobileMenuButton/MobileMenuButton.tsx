import React from 'react';

interface MobileMenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
      <span
          className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
      />
            <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
        </button>
    );
};
