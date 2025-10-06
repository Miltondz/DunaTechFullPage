
import React from 'react';

const ServiceCard: React.FC<{ icon: string; title: string; description: string; features: string[]; delay: string; }> = ({ icon, title, description, features, delay }) => (
    <div 
        className="bg-background-dark/50 p-8 rounded-xl shadow-lg hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/30"
        style={{ animationDelay: delay }}
    >
        <div className="flex items-start mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-text-dark font-display">{title}</h3>
        </div>
        <p className="text-text-dark/70 mb-6">
            {description}
        </p>
        <div className="space-y-2">
            {features.map(feature => (
                <div key={feature} className="flex items-center">
                    <span className="material-symbols-outlined text-primary/80 mr-2 text-lg">arrow_forward</span>
                    <span className="text-text-dark/80">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);


const Services: React.FC = () => {
    const servicesData = [
        {
            icon: 'database',
            title: 'Arquitectura y Optimización de Bases de Datos',
            description: 'Maestría en MS SQL Server para el desarrollo y mejora de procedimientos almacenados, optimización de consultas y diseño de arquitecturas de datos robustas.',
            features: ['Optimización de procedimientos almacenados', 'Diseño de arquitecturas escalables', 'Gestión de perfiles y seguridad'],
            delay: '0.1s'
        },
        {
            icon: 'code',
            title: 'Desarrollo de Aplicaciones Web',
            description: 'Creación de nuevas funcionalidades y módulos, adaptándolos a las necesidades específicas de cada organización para mejorar la experiencia del usuario.',
            features: ['Desarrollo de módulos personalizados', 'Interfaces de usuario intuitivas', 'Corrección y mejora de sistemas existentes'],
            delay: '0.2s'
        },
        {
            icon: 'account_tree',
            title: 'Integración de Sistemas Complejos',
            description: 'Experiencia clave en proyectos de integración de WMS con ERP de múltiples clientes, asegurando comunicación fluida entre sistemas empresariales.',
            features: ['Integración WMS-ERP', 'APIs y servicios web', 'Sincronización de datos en tiempo real'],
            delay: '0.3s'
        },
        {
            icon: 'headset_mic',
            title: 'Consultoría IT y Soporte Avanzado',
            description: 'Brindamos asistencia técnica de calidad, resolviendo tickets, atendiendo consultas de usuarios y ofreciendo consultoría IT estratégica.',
            features: ['Soporte de tercer nivel', 'Coordinación de proyectos IT', 'Consultoría estratégica'],
            delay: '0.4s'
        }
    ];

    return (
        <section className="pb-24 sm:pb-32 bg-background-dark/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Nuestros <span className="text-primary">Servicios</span>
                        </h2>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            Pilares de servicio que transforman desafíos tecnológicos en oportunidades de crecimiento
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {servicesData.map(service => <ServiceCard key={service.title} {...service} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;