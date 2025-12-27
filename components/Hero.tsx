
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="animate-fadeIn text-center">
                        {/* Trust Badge - Credibilidad inmediata */}
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-primary/40 mb-6">
                            <span className="material-symbols-outlined text-primary text-base sm:text-lg">verified</span>
                            <span className="text-text-dark text-xs sm:text-sm font-display font-semibold">
                                <span className="hidden sm:inline">Empresa Joven en Chile · Soluciones TI Profesionales</span>
                                <span className="sm:hidden">Empresa Chilena · Soluciones TI</span>
                            </span>
                        </div>

                        {/* Propuesta de Valor Clara - "¿Qué hacemos?" */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-heading text-white leading-tight">
                            Transformamos Ideas en
                            <span className="block text-primary animate-glow mt-2">Soluciones Digitales</span>
                        </h1>
                        
                        {/* Subtítulo - Propuesta de valor específica */}
                        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-light-blue font-display font-semibold">
                            <Link to="/servicios" className="hover:text-primary transition-colors">Software a Medida</Link> · <Link to="/servicios" className="hover:text-primary transition-colors">Integración de Sistemas</Link> · <Link to="/servicios" className="hover:text-primary transition-colors">Consultoría Informática</Link>
                        </p>
                        
                        {/* "¿Es para mí?" - Identificación del cliente ideal */}
                        <p className="text-base md:text-lg mb-8 text-text-dark/90 max-w-3xl mx-auto font-body leading-relaxed">
                            Fábrica de software joven especializada en <Link to="/servicios" className="text-white hover:text-primary underline transition-colors">desarrollo a medida</Link>, <Link to="/servicios" className="text-white hover:text-primary underline transition-colors">integraciones</Link> y <Link to="/servicios" className="text-white hover:text-primary underline transition-colors">consultoría TI</Link> para pymes.
                            <span className="block mt-2 text-primary font-semibold">Metodologías ágiles, tecnologías modernas y acompañamiento profesional. <Link to="/sobre-nosotros" className="hover:text-light-blue transition-colors">Conócenos más</Link>.</span>
                        </p>

                        {/* CTAs Principales - "¿Qué debo hacer ahora?" */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                            <Link 
                                to="/contacto" 
                                className="group inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg py-3 sm:py-4 px-6 sm:px-8 hover:bg-light-blue transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 text-base sm:text-lg"
                            >
                                <span className="material-symbols-outlined text-xl sm:text-2xl mr-2 group-hover:animate-pulse">send</span>
                                <span className="hidden sm:inline">Solicitar Consultoría Gratuita</span>
                                <span className="sm:hidden">Consultoría Gratis</span>
                            </Link>
                            <Link 
                                to="/servicios" 
                                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-3 sm:py-4 px-6 sm:px-8 font-bold transition-all duration-300 hover:scale-105 text-base sm:text-lg"
                            >
                                <span className="material-symbols-outlined text-xl sm:text-2xl mr-2">explore</span>
                                <span className="hidden sm:inline">Ver Nuestros Servicios</span>
                                <span className="sm:hidden">Ver Servicios</span>
                            </Link>
                        </div>

                        {/* Indicadores de confianza - Social proof rápido */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mt-12">
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-heading">Top 6</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Finalistas Nac. CChC</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-light-blue font-heading">20+</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Años Ingeniería</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-light-green font-heading">6+</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Apps en Portafolio</div>
                            </div>
                            <div className="bg-background-dark/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
                                <div className="text-3xl md:text-4xl font-bold text-primary font-heading">100%</div>
                                <div className="text-sm md:text-base text-text-dark/70 font-display">Propiedad del Código</div>
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