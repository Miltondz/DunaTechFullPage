
import React from 'react';

const TechTag: React.FC<{ children: React.ReactNode; }> = ({ children }) => (
    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">{children}</span>
);

const AppCard: React.FC<{
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    techStack: string[];
    proFeatures?: string[];
    delay: string;
}> = ({ icon, title, subtitle, description, features, techStack, proFeatures, delay }) => (
    <div 
        className="bg-background-dark/50 rounded-2xl shadow-xl overflow-hidden hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30"
        style={{ animationDelay: delay }}
    >
        <div className="bg-gradient-to-br from-primary/20 to-light-blue/20 p-8">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-background-dark rounded-lg flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
                    <p className="text-primary text-md">{subtitle}</p>
                </div>
            </div>
        </div>
        <div className="p-8">
            <p className="text-text-dark/70 mb-6">{description}</p>
            <div className="space-y-4 mb-8">
                <h4 className="text-lg font-bold text-text-dark font-display">Características Principales:</h4>
                <div className="grid grid-cols-1 gap-2">
                    {features.map(feature => (
                        <div key={feature} className="flex items-center">
                            <span className="material-symbols-outlined text-light-green mr-2">check</span>
                            <span className="text-text-dark/80">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            {proFeatures && (
                 <div className="bg-background-dark/50 p-4 rounded-lg mb-6 hud-overlay">
                    <h5 className="font-bold text-text-dark mb-2 font-display">Funciones Pro:</h5>
                    <div className="space-y-1 text-sm text-text-dark/70">
                       {proFeatures.map(f => <p key={f}>• {f}</p>)}
                    </div>
                </div>
            )}
            <div className="bg-background-dark/50 p-4 rounded-lg mb-6 hud-overlay">
                <h5 className="font-bold text-text-dark mb-2 font-display">Stack Tecnológico:</h5>
                <div className="flex flex-wrap gap-2">
                    {techStack.map(tech => <TechTag key={tech}>{tech}</TechTag>)}
                </div>
            </div>
            <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-light-blue hover:tracking-widest">
                <span className="material-symbols-outlined align-middle mr-2">open_in_new</span>
                Ver Aplicación
            </button>
        </div>
    </div>
);

const Applications: React.FC = () => {
    const appsData = [
        {
            icon: 'brush',
            title: 'CanvasDesk',
            subtitle: 'Progressive Web App de canvas infinito',
            description: 'Una PWA revolucionaria construida con React, Konva y Supabase que permite crear, organizar y manipular diferentes tipos de objetos en un espacio de trabajo sin límites.',
            features: ['Canvas infinito con navegación fluida', 'Múltiples tipos de objetos (texto, código, imágenes)', 'Colaboración en tiempo real', 'Persistencia automática'],
            techStack: ['React', 'TypeScript', 'Konva', 'Supabase', 'Tailwind CSS'],
            delay: '0.1s'
        },
        {
            icon: 'mic',
            title: 'Idea Saver',
            subtitle: 'AI-Powered Voice Notes - Captura instantánea de ideas',
            description: 'Una PWA moderna que aprovecha el poder de la IA generativa para capturar, transcribir, organizar y expandir tus ideas a través de notas de voz.',
            features: ['Grabación de voz de alta calidad', 'Transcripción AI multilingüe', 'Generación automática de títulos', 'Funciones Pro con AI avanzada'],
            techStack: ['Next.js', 'TypeScript', 'Firebase', 'Google AI', 'Tailwind CSS'],
            proFeatures: ['Resúmenes AI inteligentes', 'Expansión de ideas', 'Generación de planes de proyecto', 'Extracción de tareas', 'Sincronización en la nube'],
            delay: '0.3s'
        }
    ];

    return (
        <section className="pb-24 sm:pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Nuestras <span className="text-primary">Aplicaciones</span>
                        </h2>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            Soluciones innovadoras que demuestran nuestro compromiso con la excelencia tecnológica
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                       {appsData.map(app => <AppCard key={app.title} {...app} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Applications;