
import React from 'react';
import { Link } from 'react-router-dom';

const TeaserCard: React.FC<{ title: string; description: string; animationDelay: string; link?: string; linkText?: string; }> = ({ title, description, animationDelay, link, linkText }) => (
    <div
        className="bg-background-dark/50 p-5 sm:p-8 rounded-xl hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards,float_6s_ease-in-out_infinite] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:[animation-play-state:paused]"
        style={{ animationDelay: animationDelay }}
    >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-3 text-text-dark/80 text-sm sm:text-base leading-relaxed">{description}</p>
        {link && linkText && (
            <Link to={link} className="inline-flex items-center mt-4 text-primary hover:text-light-blue transition-colors font-semibold text-sm sm:text-base">
                {linkText}
                <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
            </Link>
        )}
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
                    title="Arquitectura Orientada a Negocio [01]"
                    description="No empezamos por el código, sino por el proceso. Diseñamos soluciones que integran visión estratégica con implementación práctica, asegurando que cada sistema resuelva cuellos de botella reales en la operación de tu empresa."
                    animationDelay="0s, 0s"
                    link="/servicios"
                    linkText="Enfoque Pragmático"
                />
                <TeaserCard
                    title="Calidad y UX por Diseño [02]"
                    description="La robustez técnica se une a la perspectiva humana. Aplicamos procesos integrales de Quality Assurance (QA) e investigación de usuarios (UX) desde el primer día, garantizando sistemas intuitivos que los equipos realmente adoptan."
                    animationDelay="0.3s, 2s"
                    link="/sobre-nosotros"
                    linkText="Enfoque Humano"
                />
                <TeaserCard
                    title="Modernización Segura y Escalable [03]"
                    description="Transformamos lo obsoleto en ventaja competitiva. Somos especialistas en modernizar sistemas críticos sin interrumpir tu continuidad operativa, utilizando tecnologías que escalan al ritmo de tu crecimiento."
                    animationDelay="0.6s, 4s"
                    link="/servicios"
                    linkText="Enfoque Técnico"
                />
            </div>

            {/* CTA Destacado */}
            <div className="mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/30">
                    <div className="flex-grow text-left">
                        <p className="text-text-dark font-display font-bold text-lg mb-1">¿Listo para Transformar tu Negocio?</p>
                        <p className="text-text-dark/70 text-sm">Agenda una consultoría gratuita y descubre cómo podemos ayudarte.</p>
                    </div>
                    <Link 
                        to="/contacto" 
                        className="inline-flex items-center bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-light-blue transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    >
                        <span className="material-symbols-outlined mr-2">calendar_month</span>
                        Agendar Ahora
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Teasers;