
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
    <a href={href} className="text-text-dark/70 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-primary/20 bg-background-dark">
            <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                               <img 
                                    src="/logo_dunatech.svg" 
                                    alt="Dunatech Logo" 
                                    className="w-10 h-10"
                                    onError={(e) => {
                                        // Fallback if logo doesn't exist
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.querySelector('.logo-fallback')?.classList.remove('hidden');
                                    }}
                                />
                                <div className="logo-fallback hidden w-10 h-10 bg-primary/80 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-2xl">layers</span>
                                </div>
                                <div>
                                    <h1 className="text-white text-xl font-bold font-display">Dunatech</h1>
                                    <p className="text-primary text-xs font-display">Ingenio que Construye, Data que Impulsa</p>
                                </div>
                            </div>
                            <p className="text-text-dark/70 mb-4 text-sm">
                                Transformamos los desafíos tecnológicos en oportunidades de crecimiento con soluciones digitales robustas y eficientes.
                            </p>
                            <div className="flex space-x-4">
                                <SocialIcon href="https://www.linkedin.com/company/duna-tech">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </SocialIcon>
                                <SocialIcon href="https://www.instagram.com/dunatechsoluciones/">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </SocialIcon>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-lg font-semibold text-text-dark">Servicios</h3>
                            <ul className="mt-4 space-y-2 text-sm text-text-dark/70">
                                <li><Link to="/servicios" className="hover:text-primary transition-colors">Bases de Datos</Link></li>
                                <li><Link to="/servicios" className="hover:text-primary transition-colors">Desarrollo Web</Link></li>
                                <li><Link to="/servicios" className="hover:text-primary transition-colors">Integración de Sistemas</Link></li>
                                <li><Link to="/servicios" className="hover:text-primary transition-colors">Consultoría IT</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-display text-lg font-semibold text-text-dark">Aplicaciones</h3>
                            <ul className="mt-4 space-y-2 text-sm text-text-dark/70">
                                <li><Link to="/aplicaciones" className="hover:text-primary transition-colors">CanvasDesk</Link></li>
                                <li><Link to="/aplicaciones" className="hover:text-primary transition-colors">Idea Saver</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-text-dark/50">
                        <p>© 2024 Duna Tech. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;