
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="animate-fadeIn text-center">
                        {/* Trust Badge - Credibilidad inmediata */}
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/40 mb-6">
                            <span className="material-symbols-outlined text-primary text-lg">verified</span>
                            <span className="text-text-dark text-sm font-display font-semibold">+50 Proyectos Exitosos · Empresa Joven en Chile</span>
                        </div>

                        {/* Propuesta de Valor Clara - "¿Qué hacemos?" */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-heading text-white leading-tight">
                            Transformamos Ideas en
                            <span className="block text-primary animate-glow mt-2">Soluciones Digitales</span>
                        </h1>
                        
                        {/* Subtítulo - Propuesta de valor específica */}
                        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-light-blue font-display font-semibold">
                            Software a Medida · Integración de Sistemas · Consultoría Informática
                        </p>
                        
                        {/* "¿Es para mí?" - Identificación del cliente ideal */}
                        <p className="text-base md:text-lg mb-8 text-text-dark/90 max-w-3xl mx-auto font-body leading-relaxed">
                            Fábrica de software joven especializada en desarrollo a medida, integraciones y consultoría TI para pymes.
                            <span className="block mt-2 text-primary font-semibold">Metodologías ágiles, tecnologías modernas y soporte 24/7.</span>
                        </p>

                        {/* CTAs Principales - "¿Qué debo hacer ahora?" */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link 
                                to="/contacto" 
                                className="group inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg py-4 px-8 hover:bg-light-blue transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 text-lg"
                            >
                                <span className="material-symbols-outlined text-2xl mr-2 group-hover:animate-pulse">send</span>
                                Solicitar Consultoría Gratuita
                            </Link>
                            <Link 
                                to="/servicios" 
                                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-4 px-8 font-bold transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <span className="material-symbols-outlined text-2xl mr-2">explore</span>
                                Ver Nuestros Servicios
                            </Link>
                        </div>

                        {/* Indicadores de confianza - Social proof rápido */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-12">
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-heading">100%</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Satisfacción</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-light-blue font-heading">24/7</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Soporte</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-light-green font-heading">5+</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Años Exp.</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-heading">50+</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Proyectos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <span className="material-symbols-outlined text-primary text-3xl opacity-70">expand_more</span>
            </div>
        </section>
    );
};

export default Hero;