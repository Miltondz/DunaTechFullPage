
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ServiceDetail {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    problem: string;
    solution: string;
    benefits: string[];
    features: string[];
    technologies: string[];
    useCases: string[];
    visualColor: string;
}

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<number>(0);

    const servicesData: ServiceDetail[] = [
        {
            icon: 'database',
            title: 'Arquitectura y Optimización de Bases de Datos',
            subtitle: 'Datos rápidos, seguros y escalables',
            description: 'Transformamos tu información en un activo estratégico mediante arquitecturas de bases de datos optimizadas y escalables.',
            problem: '¿Tus consultas son lentas? ¿Tu base de datos no puede manejar el crecimiento? ¿Tienes problemas de seguridad o integridad de datos?',
            solution: 'Diseñamos, optimizamos y gestionamos bases de datos de alto rendimiento que crecen con tu negocio.',
            benefits: [
                'Reduce tiempos de respuesta hasta 10x más rápido',
                'Ahorra costos en infraestructura con optimización inteligente',
                'Escala sin límites conforme crece tu negocio',
                'Protege tu información crítica con seguridad avanzada',
                'Mejora la productividad del equipo con acceso rápido a datos'
            ],
            features: [
                'Diseño de esquemas optimizados',
                'Optimización de consultas SQL complejas',
                'Implementación de índices estratégicos',
                'Migración de datos sin tiempo de inactividad',
                'Monitoreo y ajuste continuo de rendimiento',
                'Backup y recuperación ante desastres'
            ],
            technologies: ['MS SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
            useCases: [
                'E-commerce con millones de productos',
                'Sistemas ERP con alta concurrencia',
                'Aplicaciones analíticas y reportes complejos',
                'Plataformas SaaS multi-tenant'
            ],
            visualColor: 'from-primary to-light-blue'
        },
        {
            icon: 'code',
            title: 'Desarrollo de Aplicaciones Web',
            subtitle: 'Aplicaciones modernas que impulsan resultados',
            description: 'Creamos aplicaciones web personalizadas que no solo se ven bien, sino que resuelven problemas reales y generan valor para tu negocio.',
            problem: '¿Tu sitio web es lento y desactualizado? ¿Necesitas automatizar procesos manuales? ¿Quieres una aplicación que te diferencie de la competencia?',
            solution: 'Desarrollamos aplicaciones web a medida usando tecnologías modernas, con enfoque en experiencia de usuario y rendimiento.',
            benefits: [
                'Automatiza procesos y reduce errores humanos',
                'Mejora la experiencia de tus clientes y empleados',
                'Accede a tu negocio desde cualquier dispositivo',
                'Intégrate fácilmente con otros sistemas',
                'Diferencíate con funcionalidades únicas'
            ],
            features: [
                'Desarrollo Full-Stack (Frontend + Backend)',
                'Diseño responsivo (móvil, tablet, desktop)',
                'Interfaces de usuario intuitivas',
                'API RESTful y GraphQL',
                'Autenticación y autorización segura',
                'Dashboards y reportes en tiempo real'
            ],
            technologies: ['React', 'TypeScript', '.NET Core', 'Node.js', 'Blazor'],
            useCases: [
                'Portales de clientes y proveedores',
                'Sistemas de gestión interna (CRM, ERP)',
                'Plataformas de e-learning',
                'Marketplaces y tiendas online'
            ],
            visualColor: 'from-light-blue to-light-green'
        },
        {
            icon: 'account_tree',
            title: 'Integración de Sistemas',
            subtitle: 'Conecta tu ecosistema tecnológico',
            description: 'Hacemos que tus sistemas hablen entre sí, eliminando silos de información y automatizando flujos de trabajo entre plataformas.',
            problem: '¿Tus sistemas no se comunican? ¿Duplicas datos manualmente entre plataformas? ¿Pierdes tiempo en tareas repetitivas?',
            solution: 'Integramos tus sistemas existentes mediante APIs, webhooks y servicios de sincronización, creando un ecosistema unificado.',
            benefits: [
                'Elimina entrada manual de datos y errores',
                'Sincroniza información en tiempo real',
                'Reduce costos operativos significativamente',
                'Mejora la visibilidad de toda tu operación',
                'Toma decisiones con datos actualizados'
            ],
            features: [
                'Integración WMS-ERP-CRM',
                'Conexión con APIs de terceros',
                'Webhooks y eventos en tiempo real',
                'ETL y transformación de datos',
                'Middleware y message brokers',
                'Monitoreo de integraciones 24/7'
            ],
            technologies: ['REST API', 'GraphQL', 'Azure Service Bus', 'RabbitMQ', 'Zapier'],
            useCases: [
                'Sincronización ERP con e-commerce',
                'Integración con pasarelas de pago',
                'Conexión con servicios de logística',
                'Automatización de marketing y ventas'
            ],
            visualColor: 'from-light-green to-primary'
        },
        {
            icon: 'cloud',
            title: 'Soluciones Cloud & DevOps',
            subtitle: 'Infraestructura moderna y automatizada',
            description: 'Migramos y optimizamos tu infraestructura en la nube, implementando prácticas DevOps para entregas más rápidas y confiables.',
            problem: '¿Tu infraestructura es costosa y difícil de escalar? ¿Los despliegues son lentos y propensos a errores? ¿Te preocupa la seguridad?',
            solution: 'Migramos a cloud, automatizamos despliegues y establecemos prácticas DevOps para operaciones eficientes.',
            benefits: [
                'Reduce costos de infraestructura hasta 40%',
                'Escala automáticamente según demanda',
                'Despliega actualizaciones sin tiempo de inactividad',
                'Mejora seguridad con certificaciones cloud',
                'Recupera tu servicio en minutos ante fallas'
            ],
            features: [
                'Migración a Azure/AWS/GCP',
                'Contenedores Docker y Kubernetes',
                'CI/CD automatizado',
                'Infrastructure as Code (Terraform)',
                'Monitoreo y alertas proactivas',
                'Backups automatizados'
            ],
            technologies: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
            useCases: [
                'Migración de on-premise a cloud',
                'Arquitecturas microservicios',
                'Aplicaciones serverless',
                'Disaster recovery y alta disponibilidad'
            ],
            visualColor: 'from-primary via-light-blue to-light-green'
        }
    ];

    const selectedServiceData = servicesData[selectedService];

    return (
        <>
            {/* Hero Section */}
            <section className="pb-12 pt-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6 font-display animate-glow">
                            Nuestros <span className="text-primary">Servicios</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-dark/80 leading-relaxed">
                            Soluciones tecnológicas que resuelven problemas reales y generan valor medible para tu negocio
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Navigation */}
            <section className="py-8 bg-background-dark/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {servicesData.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedService(index)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                        selectedService === index
                                            ? 'bg-primary/20 border-primary shadow-lg shadow-primary/30 scale-105'
                                            : 'bg-background-dark/50 border-primary/20 hover:border-primary/50'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-4xl mb-2 block ${
                                        selectedService === index ? 'text-primary' : 'text-text-dark/50'
                                    }`}>{service.icon}</span>
                                    <h3 className="font-display font-bold text-text-dark text-sm">{service.title}</h3>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Detail */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Header with Visual */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-4xl">{selectedServiceData.icon}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark font-display">{selectedServiceData.title}</h2>
                                        <p className="text-primary font-display font-semibold text-lg">{selectedServiceData.subtitle}</p>
                                    </div>
                                </div>
                                <p className="text-text-dark/80 text-lg leading-relaxed mb-6">{selectedServiceData.description}</p>
                                
                                {/* Problem/Solution */}
                                <div className="space-y-4">
                                    <div className="bg-background-dark/30 p-4 rounded-lg border-l-4 border-primary/50">
                                        <p className="text-sm font-display font-bold text-primary mb-2">⚠️ El Problema</p>
                                        <p className="text-text-dark/70 text-sm">{selectedServiceData.problem}</p>
                                    </div>
                                    <div className="bg-background-dark/30 p-4 rounded-lg border-l-4 border-light-green">
                                        <p className="text-sm font-display font-bold text-light-green mb-2">✅ Nuestra Solución</p>
                                        <p className="text-text-dark/70 text-sm">{selectedServiceData.solution}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div className="relative">
                                <div className={`absolute -inset-4 bg-gradient-to-br ${selectedServiceData.visualColor} rounded-2xl blur-2xl opacity-30`}></div>
                                <div className="relative bg-background-dark/80 rounded-2xl p-8 hud-overlay backdrop-blur-sm">
                                    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id={`grad-${selectedService}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: '#FF9500', stopOpacity: 0.8 }} />
                                                <stop offset="100%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.8 }} />
                                            </linearGradient>
                                        </defs>
                                        
                                        {/* Dynamic illustration based on service */}
                                        <g className="animate-float">
                                            <rect x="50" y="50" width="300" height="200" rx="15" fill="rgba(26,35,50,0.5)" stroke={`url(#grad-${selectedService})`} strokeWidth="3"/>
                                            <circle cx="200" cy="150" r="60" fill={`url(#grad-${selectedService})`} opacity="0.3">
                                                <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite"/>
                                            </circle>
                                            {[...Array(8)].map((_, i) => (
                                                <circle key={i} cx={100 + i * 30} cy={100 + Math.sin(i) * 20} r="4" fill="#FF9500" opacity="0.6">
                                                    <animate attributeName="cy" values={`${100 + Math.sin(i) * 20};${120 + Math.sin(i) * 20};${100 + Math.sin(i) * 20}`} dur="2s" repeatCount="indefinite"/>
                                                </circle>
                                            ))}
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Benefits - Enfoque principal */}
                        <div className="mb-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 font-display text-center">
                                Beneficios <span className="text-primary">Concretos</span> para tu Negocio
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {selectedServiceData.benefits.map((benefit, index) => (
                                    <div key={index} className="bg-gradient-to-br from-primary/10 to-light-blue/5 p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                                        <div className="flex items-start gap-4">
                                            <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0">verified</span>
                                            <p className="text-text-dark font-display text-base leading-relaxed">{benefit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features & Technologies */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-16">
                            {/* Qué Incluye */}
                            <div className="bg-background-dark/50 p-8 rounded-2xl hud-overlay backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-text-dark mb-6 font-display flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">checklist</span>
                                    Qué Incluye
                                </h3>
                                <div className="space-y-3">
                                    {selectedServiceData.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-text-dark/80">
                                            <span className="material-symbols-outlined text-light-green text-xl">check_circle</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tecnologías */}
                            <div className="bg-background-dark/50 p-8 rounded-2xl hud-overlay backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-text-dark mb-6 font-display flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">build</span>
                                    Tecnologías
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedServiceData.technologies.map((tech, index) => (
                                        <span key={index} className="inline-block bg-primary/20 px-4 py-2 rounded-full text-text-dark font-display font-semibold border border-primary/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-lg font-bold text-text-dark mt-8 mb-4 font-display">Casos de Uso</h4>
                                <ul className="space-y-2">
                                    {selectedServiceData.useCases.map((useCase, index) => (
                                        <li key={index} className="flex items-start gap-2 text-text-dark/70 text-sm">
                                            <span className="material-symbols-outlined text-light-blue text-lg mt-0.5">arrow_right</span>
                                            <span>{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-primary/20 to-light-blue/10 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
                            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 font-display">
                                ¿Listo para Empezar?
                            </h3>
                            <p className="text-text-dark/80 text-lg mb-8 max-w-2xl mx-auto">
                                Agenda una consultoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos con {selectedServiceData.title.toLowerCase()}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/contacto" 
                                    className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg py-4 px-8 hover:bg-light-blue transition-all duration-300 hover:scale-105 text-lg"
                                >
                                    <span className="material-symbols-outlined mr-2">send</span>
                                    Solicitar Consultoría
                                </Link>
                                <a 
                                    href="#" 
                                    className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-4 px-8 font-bold transition-all duration-300 hover:scale-105 text-lg"
                                >
                                    <span className="material-symbols-outlined mr-2">download</span>
                                    Descargar Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Services Overview */}
            <section className="py-20 bg-background-dark/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12 font-display text-center">
                            Todos Nuestros Servicios
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {servicesData.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedService(index)}
                                    className="bg-background-dark/50 p-6 rounded-xl hud-overlay backdrop-blur-sm text-left hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-text-dark font-display mb-1">{service.title}</h3>
                                            <p className="text-primary text-sm font-semibold">{service.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-text-dark/70 text-sm line-clamp-2">{service.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
