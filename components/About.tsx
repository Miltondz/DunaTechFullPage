
import React from 'react';

const SectionWrapper: React.FC<{ title: string; subtitle: string; children: React.ReactNode; }> = ({ title, subtitle, children }) => (
    <section className="pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                        {title}
                    </h2>
                    <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>
                {children}
            </div>
        </div>
    </section>
);

const FeatureCard: React.FC<{ icon: string; title: string; description: string; delay: string; }> = ({ icon, title, description, delay }) => (
    <div
        className="bg-background-dark/50 p-6 rounded-xl hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
        style={{ animationDelay: delay }}
    >
        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
        </div>
        <h3 className="text-xl font-bold text-text-dark mb-3 font-display">{title}</h3>
        <p className="text-text-dark/70 text-sm">
            {description}
        </p>
    </div>
);

const About: React.FC = () => {
    return (
        <SectionWrapper
            title="El Espíritu Dunatech"
            subtitle="Más que un ingeniero, Milton Diaz es el arquitecto principal detrás de Dunatech, una firma que fusiona la precisión técnica con una adaptabilidad fluida."
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <FeatureCard icon="workspace_premium" title="Profesional" description="13+ años de experiencia en diferentes niveles del área informática, con metodología rigurosa y compromiso inquebrantable con la calidad." delay="0.1s" />
                <FeatureCard icon="psychology" title="Geek/Nerdo" description="Pasión por la tecnología con certificaciones en Smart Analytics, Machine Learning, AI on Google Cloud, Blazor WebAssembly y .NET." delay="0.2s" />
                <FeatureCard icon="public" title="Caribeño" description="Comunicación bilingüe (Español nativo, Inglés Full Professional) con orientación al cumplimiento de objetivos y buen desempeño bajo presión." delay="0.3s" />
                <FeatureCard icon="code" title="Darks" description="Capacidad de sumergirse en desafíos complejos para optimizar procesos, agilizar tareas y mejorar la eficiencia en gestión de datos." delay="0.4s" />
            </div>

            <div className="bg-background-dark/50 rounded-2xl shadow-xl p-8 md:p-12 hud-overlay backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-text-dark mb-6 font-display">Milton Diaz</h3>
                        <p className="text-text-dark/70 text-lg mb-6">
                            Arquitecto principal de Dunatech, lidera un equipo multidisciplinario de expertos que complementan su visión, asegurando una cobertura integral y soluciones robustas.
                        </p>
                        <div className="space-y-4">
                            {['13+ años de experiencia en TI', 'Certificaciones en Google Cloud y .NET', 'Especialista en integración de sistemas', 'Líder en optimización de procesos'].map(item => (
                                <div key={item} className="flex items-center">
                                    <span className="material-symbols-outlined text-light-green mr-3">check_circle</span>
                                    <span className="text-text-dark/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-center hidden md:block">
                        <div className="w-64 h-64 bg-gradient-to-br from-primary/50 to-light-blue/50 rounded-2xl mx-auto flex items-center justify-center animate-float">
                            <span className="material-symbols-outlined text-white text-8xl opacity-80">business_center</span>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;