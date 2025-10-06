
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <div className="animate-fadeIn">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading uppercase animate-glow">
                            <span className="text-primary">Duna</span><span className="text-white">tech</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-light-blue font-display">
                            Ingenio que Construye, Data que Impulsa
                        </p>
                        <p className="text-lg md:text-xl mb-12 text-text-dark/80 max-w-3xl mx-auto font-body">
                            Transformamos los desafíos tecnológicos en oportunidades de crecimiento. Con un profundo conocimiento técnico y una mentalidad proactiva, construimos soluciones digitales robustas que impulsan el éxito de su negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/servicios" className="inline-block bg-primary text-white font-semibold rounded-md py-3 px-8 hover:bg-light-blue transition-all duration-300 hover:tracking-widest flex-shrink-0">
                                <span className="material-symbols-outlined text-xl align-middle mr-2">rocket_launch</span>
                                Conocer Servicios
                            </Link>
                            <Link to="/aplicaciones" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md py-3 px-8 font-semibold transition-all duration-300">
                               <span className="material-symbols-outlined text-xl align-middle mr-2">play_arrow</span>
                                Ver Aplicaciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;