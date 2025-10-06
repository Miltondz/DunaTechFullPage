
import React from 'react';

const TeaserCard: React.FC<{ title: string; description: string; animationDelay: string; }> = ({ title, description, animationDelay }) => (
    <div
        className="bg-background-dark/50 p-8 rounded-xl hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards,float_6s_ease-in-out_infinite] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:[animation-play-state:paused]"
        style={{ animationDelay: animationDelay }}
    >
        <h3 className="font-display text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-3 text-text-dark/80">{description}</p>
    </div>
);


const Teasers: React.FC = () => {
    return (
        <div className="w-full max-w-6xl">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark animate-glow mb-4">
                    ¿Por Qué Elegir <span className="text-primary">Dunatech</span>?
                </h2>
                <p className="mt-4 text-lg md:text-xl text-text-light/70 dark:text-text-dark/70 max-w-3xl mx-auto">
                    Nos diferenciamos por nuestra metodología probada y nuestro compromiso con la excelencia técnica.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <TeaserCard
                    title="Solución Integral [01]"
                    description="Desde el análisis inicial hasta el mantenimiento continuo. Acompañamos tu proyecto en cada etapa para garantizar el éxito."
                    animationDelay="0s, 0s"
                />
                <TeaserCard
                    title="Tecnología Moderna [02]"
                    description="Utilizamos las herramientas más avanzadas del mercado. Arquitecturas escalables, seguras y preparadas para el futuro."
                    animationDelay="0.3s, 2s"
                />
                <TeaserCard
                    title="Resultados Medibles [03]"
                    description="Enfoque data-driven con métricas claras. Transformamos datos en decisiones que impulsan el crecimiento de tu negocio."
                    animationDelay="0.6s, 4s"
                />
            </div>

            {/* CTA Destacado */}
            <div className="mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/30">
                    <div className="flex-grow text-left">
                        <p className="text-text-dark font-display font-bold text-lg mb-1">¿Listo para Transformar tu Negocio?</p>
                        <p className="text-text-dark/70 text-sm">Agenda una consultoría gratuita y descubre cómo podemos ayudarte.</p>
                    </div>
                    <a 
                        href="/contacto" 
                        className="inline-flex items-center bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-light-blue transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                        <span className="material-symbols-outlined mr-2">calendar_month</span>
                        Agendar Ahora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Teasers;