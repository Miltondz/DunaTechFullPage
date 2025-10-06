
import React, { useState } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
    return (
        <RouterNavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `relative cursor-pointer text-text-dark/80 hover:text-primary transition-colors duration-300 py-2 text-lg md:text-base after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full ${isActive ? 'text-primary after:w-full' : ''}`
            }
        >
            {children}
        </RouterNavLink>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        { to: '/', label: 'Inicio' },
        { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
        { to: '/servicios', label: 'Servicios' },
        { to: '/aplicaciones', label: 'Aplicaciones' },
        { to: '/contacto', label: 'Contacto' },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-background-dark/50 backdrop-blur-md shadow-lg fixed w-full z-50 top-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/80 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl">layers</span>
                        </div>
                        <div>
                            <h1 className="text-white text-xl font-bold font-display">Dunatech</h1>
                            <p className="text-primary text-xs font-display">Ingenio que Construye</p>
                        </div>
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map(link => (
                            <NavLink 
                                key={link.to} 
                                to={link.to} 
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <button className="md:hidden text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
                
                {/* Mobile Menu */}
                <div 
                     className={`md:hidden absolute top-0 left-0 w-full h-screen bg-background-dark/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <nav className="flex flex-col items-center justify-center space-y-6 h-full">
                         {navLinks.map(link => (
                            <NavLink 
                                key={link.to} 
                                to={link.to} 
                                onClick={closeMenu}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;