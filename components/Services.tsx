
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RelatedContent from './RelatedContent';

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
            problem: '¿Tus consultas son lentas? ¿Tus reportes y consultas están desactualizados? ¿Necesitas implementar nueva lógica de negocio o modificar la existente?',
            solution: 'Optimizamos consultas, actualizamos procedimientos almacenados y adaptamos tu base de datos a nuevos requerimientos de negocio con rapidez y precisión.',
            benefits: [
                'Reduce tiempos de respuesta hasta 10x más rápido',
                'Ahorra costos en infraestructura con optimización inteligente',
                'Reportes actualizados con información en tiempo real',
                'Adapta tu base de datos a nuevos requerimientos de negocio',
                'Mejora la productividad del equipo con acceso rápido a datos'
            ],
            features: [
                'Implementación de índices estratégicos',
                'Refactorización de procedimientos almacenados',
                'Migración de datos sin tiempo de inactividad',
                'Actualización de lógica de negocio obsoleta',
                'Monitoreo y ajuste continuo de rendimiento',
                'Backup y recuperación ante desastres'
            ],
            technologies: ['MS SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'],
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
            title: 'Desarrollo de Aplicaciones Web y Escritorio',
            subtitle: 'Aplicaciones modernas y escritorio que impulsan resultados',
            description: 'Creamos aplicaciones web, de escritorio y prototipos rápidos personalizados que no solo se ven bien, sino que resuelven problemas reales y generan valor para tu negocio. Desde sistemas modernos hasta modernización de código legacy.',
            problem: '¿Tu sitio web es lento y desactualizado? ¿Necesitas automatizar procesos manuales? ¿Tienes aplicaciones de escritorio obsoletas que necesitan modernizarse?',
            solution: 'Desarrollamos aplicaciones web y de escritorio a medida, creamos prototipos rápidos para validar ideas y modernizamos código legacy (VB6, Visual Basic) a tecnologías actuales.',
            benefits: [
                'Automatiza procesos y reduce errores humanos',
                'Mejora la experiencia de tus clientes y empleados',
                'Prototipa y valida ideas rápidamente antes de invertir',
                'Moderniza aplicaciones legacy sin perder funcionalidad',
                'Diferencíate con funcionalidades únicas'
            ],
            features: [
                'Desarrollo Full-Stack (Frontend + Backend)',
                'Aplicaciones de escritorio Windows (WinForms, WPF)',
                'Prototipado rápido y MVP (Minimum Viable Product)',
                'Modernización de código legacy VB6/Visual Basic',
                'API RESTful y GraphQL',
                'Dashboards y reportes en tiempo real'
            ],
            technologies: ['React', 'TypeScript', '.NET Core', 'C#', 'VB.NET', 'Visual Basic', 'VB6 Legacy'],
            useCases: [
                'Portales de clientes y proveedores',
                'Sistemas de gestión de escritorio Windows',
                'Modernización de aplicaciones VB6 a .NET',
                'Prototipos rápidos para validación de producto'
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
                'Conexión con APIs de terceros (REST, SOAP, WS)',
                'Webhooks y eventos en tiempo real',
                'ETL y transformación de datos',
                'Middleware y message brokers',
                'Automatización con Make y n8n'
            ],
            technologies: ['REST API', 'SOAP', 'Web Services', 'Azure Service Bus', 'RabbitMQ', 'Make', 'n8n', 'Zapier'],
            useCases: [
                'Sincronización ERP con e-commerce',
                'Integración con pasarelas de pago',
                'Conexión con servicios de logística',
                'Automatización de marketing y ventas'
            ],
            visualColor: 'from-light-green to-primary'
        },
        {
            icon: 'psychology',
            title: 'Investigación y Diseño UX',
            subtitle: 'Experiencia de usuario centrada en personas',
            description: 'Investigamos y diseñamos experiencias digitales excepcionales mediante metodologías UX profesionales que garantizan que tu producto resuelva las necesidades reales de tus usuarios.',
            problem: '¿Tus usuarios abandonan tu aplicación? ¿No sabes qué necesitan realmente? ¿Tu diseño no convierte como esperas?',
            solution: 'Aplicamos investigación de usuarios, testing de usabilidad y diseño centrado en personas para crear experiencias que los usuarios aman y que generan resultados medibles.',
            benefits: [
                'Reduce tasas de abandono hasta un 45%',
                'Aumenta conversiones y satisfacción del usuario',
                'Identifica problemas antes de desarrollar',
                'Diferenciáte con experiencias superiores',
                'Toma decisiones basadas en datos reales de usuarios'
            ],
            features: [
                'Investigación cualitativa (entrevistas, observación)',
                'Testing de usabilidad con usuarios reales',
                'Diseño de interfaces (UI/UX)',
                'Arquitectura de información',
                'Prototipado rápido y wireframes',
                'Evaluaciones heurísticas y auditorías UX'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'UserTesting', 'Hotjar', 'Miro'],
            useCases: [
                'Rediseño de aplicaciones con baja adopción',
                'Validación de nuevos productos antes de desarrollar',
                'Optimización de procesos de conversión',
                'Mejora de apps móviles y plataformas web'
            ],
            visualColor: 'from-primary to-light-blue'
        },
        {
            icon: 'verified',
            title: 'Quality Assurance y Testing',
            subtitle: 'Calidad garantizada en cada detalle',
            description: 'Aseguramos la calidad de tu software mediante testing exhaustivo y QA profesional, detectando errores antes de que lleguen a tus usuarios y garantizando una experiencia impecable.',
            problem: '¿Tu aplicación tiene errores frecuentes? ¿Pierdes clientes por problemas técnicos? ¿Necesitas garantizar calidad antes del lanzamiento?',
            solution: 'Ejecutamos testing funcional, de usabilidad y compatibilidad, combinando QA técnico con evaluación de experiencia de usuario para entregar productos robustos y confiables.',
            benefits: [
                'Detecta y corrige errores antes del lanzamiento',
                'Reduce tickets de soporte hasta en 62%',
                'Garantiza compatibilidad en todos los dispositivos',
                'Mejora la confianza y satisfacción del usuario',
                'Ahorra costos evitando errores en producción'
            ],
            features: [
                'QA funcional con perspectiva de usuario',
                'Testing de usabilidad y accesibilidad (WCAG)',
                'Pruebas cross-browser y cross-device',
                'Testing de regresión y end-to-end',
                'Documentación detallada de bugs y soluciones',
                'Certificación de calidad pre-lanzamiento'
            ],
            technologies: ['Selenium', 'Cypress', 'Jest', 'Postman', 'JMeter', 'BrowserStack'],
            useCases: [
                'Validación pre-lanzamiento de aplicaciones',
                'Testing continuo en sprints ágiles',
                'Certificación de calidad para clientes',
                'Auditorías de software existente'
            ],
            visualColor: 'from-light-green to-primary'
        },
        {
            icon: 'menu_book',
            title: 'Documentación Técnica y Capacitación',
            subtitle: 'Conocimiento accesible que empodera equipos',
            description: 'Creamos documentación técnica clara y accesible, combinada con capacitación especializada que transforma conocimiento complejo en acción concreta para tu equipo.',
            problem: '¿Tu documentación es confusa y genera muchas consultas? ¿Tu equipo necesita capacitarse en nuevas tecnologías? ¿Tienes alto volumen de tickets de soporte?',
            solution: 'Desarrollamos documentación técnica profesional, manuales de usuario y programas de capacitación que reducen dependencias y empoderan a tu equipo para ser autónomo.',
            benefits: [
                'Reduce tickets de soporte básico hasta en 62%',
                'Acelera onboarding de nuevos miembros del equipo',
                'Mejora adopción de nuevas funcionalidades en 45%',
                'Empodera al equipo con conocimiento estructurado',
                'Documenta procesos críticos para continuidad operacional'
            ],
            features: [
                'Documentación técnica para desarrolladores',
                'Manuales de usuario con enfoque humano',
                'Guías de implementación paso a paso',
                'Talleres y capacitaciones personalizadas',
                'Video tutoriales y material de formación',
                'Knowledge base y centro de ayuda'
            ],
            technologies: ['Confluence', 'Notion', 'GitBook', 'Markdown', 'Docusaurus', 'Loom', 'Miro'],
            useCases: [
                'Documentación de APIs y sistemas complejos',
                'Manuales para plataformas gubernamentales',
                'Capacitación en herramientas internas',
                'Onboarding de equipos de desarrollo'
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
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                            {servicesData.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedService(index)}
                                    className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                                        selectedService === index
                                            ? 'bg-primary/20 border-primary shadow-lg shadow-primary/30 scale-105'
                                            : 'bg-background-dark/50 border-primary/20 hover:border-primary/50'
                                    }`}
                                >
                                    <span className={`material-symbols-outlined text-3xl sm:text-4xl mb-1 sm:mb-2 block ${
                                        selectedService === index ? 'text-primary' : 'text-text-dark/50'
                                    }`}>{service.icon}</span>
                                    <h3 className="font-display font-bold text-text-dark text-xs sm:text-sm leading-tight">{service.title}</h3>
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
                                <button 
                                    onClick={() => alert('Brochure estará disponible próximamente')}
                                    className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-4 px-8 font-bold transition-all duration-300 hover:scale-105 text-lg"
                                >
                                    <span className="material-symbols-outlined mr-2">download</span>
                                    Descargar Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-background-dark/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-display text-center">
                            Preguntas <span className="text-primary">Frecuentes</span>
                        </h2>
                        <p className="text-text-dark/70 text-center mb-12 text-lg">Todo lo que necesitas saber sobre nuestros servicios</p>
                        
                        <div className="space-y-4">
                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Qué servicios de desarrollo de software ofrece Dunatech?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Dunatech ofrece servicios de desarrollo de aplicaciones web y de escritorio, optimización de bases de datos, integración de sistemas (APIs, webhooks), investigación y diseño UX, quality assurance (QA) y testing, además de documentación técnica y capacitación. Nos especializamos en soluciones a medida para pymes en Chile.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Pueden modernizar aplicaciones legacy en Visual Basic o VB6?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Sí, en Dunatech somos especialistas en modernizar código legacy de Visual Basic 6 (VB6) y Visual Basic .NET a tecnologías modernas como .NET Core, C# y aplicaciones web con React. Migramos tu aplicación de escritorio sin perder funcionalidad y mejorando el rendimiento.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Cómo pueden ayudarme a integrar mis sistemas empresariales?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Conectamos tus sistemas existentes (ERP, CRM, WMS, e-commerce) mediante APIs REST, SOAP, Web Services y herramientas de automatización como Make, n8n y Zapier. Eliminamos la entrada manual de datos y sincronizamos información en tiempo real para mejorar tu eficiencia operacional.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Qué incluye el servicio de optimización de bases de datos?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Nuestro servicio incluye implementación de índices estratégicos, refactorización de procedimientos almacenados, optimización de consultas SQL, actualización de lógica de negocio obsoleta, migración de datos sin tiempo de inactividad y monitoreo continuo de rendimiento. Trabajamos con MS SQL Server, PostgreSQL, MySQL y MongoDB.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Ofrecen servicios de Quality Assurance (QA) y testing?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Sí, ofrecemos QA funcional con perspectiva de usuario, testing de usabilidad y accesibilidad (WCAG), pruebas cross-browser y cross-device, testing de regresión y end-to-end. Detectamos errores antes del lanzamiento para garantizar una experiencia impecable y reducir tickets de soporte.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Cuánto tiempo toma un proyecto de desarrollo de software?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Los tiempos varían según la complejidad del proyecto. Un prototipo rápido (MVP) puede estar listo en 2-4 semanas, mientras que desarrollos más complejos como sistemas ERP o integraciones personalizadas pueden tomar entre 2-6 meses. Trabajamos con metodologías ágiles con entregas incrementales para que veas progreso constante.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Qué es la investigación UX y por qué es importante?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">La investigación UX consiste en estudiar las necesidades reales de tus usuarios mediante entrevistas, testing de usabilidad y análisis de comportamiento. Es importante porque te permite crear productos que los usuarios realmente necesitan y aman, reduciendo tasas de abandono hasta un 45% y aumentando conversiones significativamente.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Ofrecen soporte y mantenimiento después del desarrollo?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Sí, ofrecemos servicios de soporte técnico, mantenimiento correctivo y evolutivo, además de capacitación continua para tu equipo. También proporcionamos documentación técnica completa para que puedas gestionar el sistema de forma autónoma si lo prefieres.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Trabajan con metodologías ágiles?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Sí, en Dunatech trabajamos con metodologías ágiles (Scrum/Kanban) que permiten entregas incrementales, feedback constante y adaptación rápida a cambios. Esto te garantiza transparencia total del proceso, entregas frecuentes y la flexibilidad de ajustar el rumbo cuando sea necesario.</p>
                            </details>

                            <details className="bg-background-dark/50 rounded-xl p-6 hud-overlay backdrop-blur-sm group">
                                <summary className="font-display font-bold text-text-dark text-lg cursor-pointer list-none flex items-center justify-between">
                                    <span>¿Cuál es el costo de los servicios de desarrollo de Dunatech?</span>
                                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <p className="text-text-dark/70 mt-4 leading-relaxed">Los costos varían según el alcance y complejidad de cada proyecto. Ofrecemos una consultoría gratuita inicial donde analizamos tus necesidades y entregamos una cotización detallada sin compromiso. Contáctanos para agendar tu consulta y conocer opciones adaptadas a tu presupuesto.</p>
                            </details>
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

            {/* Related Content */}
            <RelatedContent
                title="Continúa Explorando"
                subtitle="Conoce más sobre Dunatech"
                links={[
                    {
                        title: 'Sobre Nosotros',
                        description: 'Conoce al equipo detrás de las soluciones: experiencia, valores y especializaciones.',
                        link: '/sobre-nosotros',
                        icon: 'groups'
                    },
                    {
                        title: 'Casos de Éxito',
                        description: 'Descubre proyectos reales donde hemos aplicado nuestros servicios.',
                        link: '/aplicaciones',
                        icon: 'work'
                    },
                    {
                        title: 'Blog y Recursos',
                        description: 'Artículos, guías y recursos sobre desarrollo de software y tecnología.',
                        link: '/blog',
                        icon: 'article'
                    }
                ]}
            />
        </>
    );
};

export default Services;
