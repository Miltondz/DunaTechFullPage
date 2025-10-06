
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
        <div className="w-full max-w-5xl text-center">
            <h2 className="font-display text-4xl font-bold text-dark-blue dark:text-text-dark animate-glow">Vistazos al Futuro</h2>
            <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">Un adelanto exclusivo de los paradigmas que estamos redefiniendo.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <TeaserCard
                    title="Filosofía [01]"
                    description="Código como catalizador. Creamos soluciones elegantes y robustas que anticipan las necesidades del mañana."
                    animationDelay="0s, 0s"
                />
                <TeaserCard
                    title="Arquitectura [02]"
                    description="Diseñamos sistemas escalables y resilientes. Infraestructuras pensadas para la evolución continua."
                    animationDelay="0.3s, 2s"
                />
                <TeaserCard
                    title="Arsenal [03]"
                    description="Dominamos las herramientas de vanguardia para convertir ideas complejas en realidades funcionales y eficientes."
                    animationDelay="0.6s, 4s"
                />
            </div>
        </div>
    );
};

export default Teasers;