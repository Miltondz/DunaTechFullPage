
import React from 'react';

interface MilestoneCardProps {
    title: string;
    event: string;
    achievement: string;
    content: string;
    icon: string;
    color: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ title, event, achievement, content, icon, color }) => (
    <article className="bg-background-dark/50 p-8 rounded-xl hud-overlay backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full">
        {/* Icon Header */}
        <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-${color}/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined text-${color} text-4xl`}>{icon}</span>
            </div>
            <div>
                <h3 className="text-xl font-bold text-text-dark font-display">{title}</h3>
                <p className={`text-${color} text-sm font-semibold`}>{achievement}</p>
            </div>
        </div>

        {/* Content */}
        <blockquote className="flex-grow mb-6">
            <p className="text-text-dark/90 text-base leading-relaxed">
                {content}
            </p>
        </blockquote>

        {/* Event Info */}
        <footer className="border-t border-primary/20 pt-4">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">event</span>
                <p className="text-text-dark/70 text-sm font-display">{event}</p>
            </div>
        </footer>
    </article>
);

const Testimonials: React.FC = () => {
    const milestones: MilestoneCardProps[] = [
        {
            title: "PREVIO",
            event: "CChC - #TenemosQueInnovar2026",
            achievement: "Top 6 Finalistas Nacionales",
            content: "Finalistas Nacionales en el desafío de seguridad de la Cámara Chilena de la Construcción. Nuestra plataforma de gestión de SSO con IA fue reconocida entre las soluciones más innovadoras del sector construcción en Chile.",
            icon: "verified_user",
            color: "primary"
        },
        {
            title: "RehabiliA",
            event: "Emprende Tu Mente 2025 - La Bendita IA",
            achievement: "Desarrolladores con Impacto Social",
            content: "Participación destacada en la Hackathon de IA de Emprende Tu Mente Day 2025, creando soluciones tecnológicas innovadoras para la Teletón. Nuestra plataforma de rehabilitación domiciliaria híbrida combina gamificación con seguimiento clínico profesional.",
            icon: "favorite",
            color: "light-blue"
        },
        {
            title: "CanvasDesk",
            event: "World's Largest Hackathon - Bolt",
            achievement: "Competidores Globales",
            content: "Participación en el World's Largest Hackathon organizado por Bolt, compitiendo a nivel global con nuestra herramienta de pensamiento visual. CanvasDesk representa nuestra visión de productividad fluida en un lienzo infinito.",
            icon: "public",
            color: "light-green"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-background-dark/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Hitos de <span className="text-primary">Validación</span>
                        </h2>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            No solo proyectamos soluciones; las ponemos a prueba en los escenarios más exigentes.
                        </p>
                    </header>

                    {/* Milestones Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {milestones.map((milestone, index) => (
                            <MilestoneCard key={index} {...milestone} />
                        ))}
                    </div>

                    {/* Innovation Badge */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
                            <span className="material-symbols-outlined text-primary text-2xl">emoji_events</span>
                            <p className="text-text-dark font-display font-semibold">
                                Innovación Validada en Competencias Nacionales e Internacionales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
