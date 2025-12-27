
import React from 'react';
import { Link } from 'react-router-dom';
import RelatedContent from './RelatedContent';

const About: React.FC = () => {
    return (
        <>
            {/* Hero Section - Introducción */}
            <section className="pb-16 pt-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-6 font-display animate-glow">
                            Sobre <span className="text-primary">Dunatech</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-dark/80 font-display leading-relaxed">
                            Construyendo el futuro digital, un proyecto a la vez
                        </p>
                    </div>
                </div>
            </section>

            {/* Historia y Propósito */}
            <section className="py-16 bg-background-dark/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-8 font-display text-center">
                                Nuestra <span className="text-primary">Historia</span>
                            </h2>
                            <div className="space-y-6 text-text-dark/80 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-primary">Dunatech</strong> no empieza desde cero; nace como la consolidación de décadas de trayectoria profesional puestas al servicio de un propósito común: <strong className="text-light-blue">que la tecnología sea un catalizador para el crecimiento</strong>, no un obstáculo.
                                </p>
                                <p>
                                    Nuestra empresa es el punto de encuentro de dos caminos sólidos. Fundada por <strong className="text-primary">Milton Díaz</strong>, ingeniero con más de 20 años de liderazgo en el sector corporativo y proyectos privados de software empresarial, Dunatech hereda la experiencia real de modernizar sistemas legacy críticos, diseñar arquitecturas WMS e integraciones bancarias de alta complejidad.
                                </p>
                                <p>
                                    A esta robustez técnica se suma la visión de <strong className="text-light-green">María Alejandra Eggers</strong>, antropóloga y especialista en UX/QA. Su trayectoria en investigación de usuarios añade una dimensión humana esencial, garantizando que nuestras soluciones no solo funcionen a la perfección, sino que sean intuitivas y adoptadas con éxito por las personas.
                                </p>
                                <h3 className="text-2xl font-bold text-text-dark font-display mt-8 mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary mr-2">verified_user</span>
                                    Innovación Validada en Escenarios Reales
                                </h3>
                                <p>
                                    No solo proyectamos soluciones; las ponemos a prueba en los ecosistemas más exigentes. En nuestro primer año, hemos demostrado nuestra capacidad de ejecución en hitos clave:
                                </p>
                                <ul className="space-y-4 ml-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl mt-1 flex-shrink-0">emoji_events</span>
                                        <span><strong className="text-primary">Finalistas Nacionales:</strong> Seleccionados entre los 6 mejores proyectos en el desafío de innovación de la Cámara Chilena de la Construcción con nuestra plataforma de IA, PREVIO.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-light-blue text-xl mt-1 flex-shrink-0">favorite</span>
                                        <span><strong className="text-light-blue">Impacto Social en ETM Day 2025:</strong> Desarrollo de un MVP funcional para la Teletón en la hackathon de IA "LaBenditaIA", transformando tecnología compleja en esperanza.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-light-green text-xl mt-1 flex-shrink-0">public</span>
                                        <span><strong className="text-light-green">Validación Global:</strong> Participación en la World's Largest Hackathon de Bolt, compitiendo con estándares internacionales de desarrollo rápido y escalable.</span>
                                    </li>
                                </ul>
                                <p className="mt-6">
                                    Transformamos desafíos tecnológicos en ventajas competitivas, combinando el rigor del mundo corporativo con la agilidad de la innovación moderna. <Link to="/contacto" className="text-primary font-semibold hover:underline">Conversemos sobre cómo podemos construir tu próximo gran paso digital</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión y Valores */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 font-display animate-glow">
                                Nuestro <span className="text-primary">Propósito</span>
                            </h2>
                            <p className="text-xl text-text-dark/70">
                                Los principios que guían cada decisión y cada línea de código
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Misión */}
                            <div className="bg-background-dark/50 p-8 rounded-2xl hud-overlay backdrop-blur-sm">
                                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary text-4xl">flag</span>
                                </div>
                                <h3 className="text-2xl font-bold text-text-dark mb-4 font-display">Nuestra Misión</h3>
                                <p className="text-text-dark/80 text-lg leading-relaxed">
                                    Transformar empresas mediante soluciones tecnológicas innovadoras, escalables y seguras. Nos comprometemos a entender profundamente las necesidades de nuestros clientes para crear sistemas que no solo resuelvan problemas actuales, sino que anticipen desafíos futuros.
                                </p>
                            </div>

                            {/* Visión */}
                            <div className="bg-background-dark/50 p-8 rounded-2xl hud-overlay backdrop-blur-sm">
                                <div className="w-16 h-16 bg-light-blue/20 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-light-blue text-4xl">visibility</span>
                                </div>
                                <h3 className="text-2xl font-bold text-text-dark mb-4 font-display">Nuestra Visión</h3>
                                <p className="text-text-dark/80 text-lg leading-relaxed">
                                    Ser reconocidos como el socio tecnológico preferido de las pymes en Chile, destacando por nuestra capacidad de entregar soluciones de nivel global con la cercanía y comprensión del mercado local. Queremos ser sinónimo de innovación accesible y transformación digital efectiva.
                                </p>
                            </div>
                        </div>

                        {/* Valores */}
                        <div className="bg-gradient-to-br from-background-dark/50 to-background-dark/30 p-8 md:p-12 rounded-2xl hud-overlay backdrop-blur-sm">
                            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-8 font-display text-center">
                                Nuestros <span className="text-primary">Valores</span>
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: 'verified', title: 'Excelencia', desc: 'Compromiso con la calidad en cada detalle' },
                                    { icon: 'psychology', title: 'Innovación', desc: 'Adopción de tecnologías de vanguardia' },
                                    { icon: 'handshake', title: 'Integridad', desc: 'Transparencia y honestidad en todo momento' },
                                    { icon: 'groups', title: 'Colaboración', desc: 'Trabajo en equipo con clientes y partners' }
                                ].map((value, index) => (
                                    <div key={index} className="text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                                            <span className="material-symbols-outlined text-primary text-4xl">{value.icon}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-text-dark mb-2 font-display">{value.title}</h4>
                                        <p className="text-text-dark/70 text-sm">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipo */}
            <section className="py-20 bg-background-dark/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 font-display animate-glow">
                                Nuestro <span className="text-primary">Equipo</span>
                            </h2>
                            <p className="text-xl text-text-dark/70 max-w-3xl mx-auto">
                                Profesionales apasionados que hacen realidad tu visión tecnológica
                            </p>
                        </div>

                        {/* Fundador */}
                        <div className="bg-background-dark/50 rounded-2xl shadow-xl p-8 md:p-12 hud-overlay backdrop-blur-sm mb-12">
                            <div className="grid md:grid-cols-5 gap-8 items-center">
                                <div className="md:col-span-2 text-center">
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-primary to-light-blue rounded-full blur-xl opacity-30"></div>
                                        <div className="relative w-48 h-48 bg-gradient-to-br from-primary/50 to-light-blue/50 rounded-full mx-auto flex items-center justify-center animate-float">
                                            <span className="material-symbols-outlined text-white text-8xl">person</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-text-dark font-display">Milton Díaz</h3>
                                        <p className="text-primary font-semibold">Fundador & CEO | Product Manager</p>
                                        <div className="flex justify-center gap-4 mt-4">
                                            <a href="https://www.linkedin.com/in/milton-diaz" target="_blank" rel="noopener noreferrer" className="text-text-dark/50 hover:text-primary transition-colors">
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-dark/80 text-lg mb-6 leading-relaxed">
                                        Con más de <strong className="text-primary">20 años de experiencia</strong> en liderazgo corporativo y desarrollo de software, Milton dirige la estrategia técnica de Dunatech. Su experiencia abarca desde la modernización de sistemas críticos (Legacy) hasta el diseño de arquitecturas escalables para banca y retail.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            '20+ años en desarrollo de software',
                                            'Warehouse Management Systems (WMS)',
                                            'Sistemas contables e integraciones bancarias',
                                            'Desarrollo de tiendas en línea (e-commerce)',
                                            'Modernización de sistemas legacy',
                                            'Product Management y diseño de soluciones',
                                            'Prototipado rápido y validación de ideas',
                                            'Análisis y mejora de procesos empresariales'
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-light-green text-xl">check_circle</span>
                                                <span className="text-text-dark/80 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UX/QA Specialist */}
                        <div className="bg-background-dark/50 rounded-2xl shadow-xl p-8 md:p-12 hud-overlay backdrop-blur-sm mb-12">
                            <div className="grid md:grid-cols-5 gap-8 items-center">
                                <div className="md:col-span-2 text-center">
                                    <div className="relative inline-block">
                                        <div className="absolute -inset-4 bg-gradient-to-br from-light-blue to-light-green rounded-full blur-xl opacity-30"></div>
                                        <div className="relative w-48 h-48 bg-gradient-to-br from-light-blue/50 to-light-green/50 rounded-full mx-auto flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                                            <span className="material-symbols-outlined text-white text-8xl">person</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-text-dark font-display">María Alejandra Eggers</h3>
                                        <p className="text-light-blue font-semibold">UX Researcher & QA Specialist | Product Owner</p>
                                        <div className="flex justify-center gap-4 mt-4">
                                            <a href="mailto:contacto@antropeggers.cl" className="text-text-dark/50 hover:text-primary transition-colors">
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-dark/80 text-lg mb-6 leading-relaxed">
                                        <strong className="text-light-blue">Antropóloga y especialista en UX</strong> con más de 4 años de experiencia en investigación de usuarios, testing de usabilidad y aseguramiento de calidad. Su perspectiva antropológica aporta una dimensión única al entendimiento del comportamiento humano en entornos digitales.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            'Investigación UX con enfoque antropológico',
                                            'Testing de usabilidad y accesibilidad (WCAG)',
                                            'Quality Assurance integral',
                                            'Documentación técnica accesible',
                                            'Capacitación, Onboarding, y adopción de procesos',
                                            'Análisis de patrones comportamentales'
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-light-green text-xl">check_circle</span>
                                                <span className="text-text-dark/80 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Equipo Multidisciplinario */}
                        <div className="bg-primary/10 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-text-dark mb-4 font-display">Equipo Multidisciplinario</h3>
                                <p className="text-text-dark/80 text-lg mb-6">
                                    Trabajamos con una red de especialistas certificados en diversas áreas:
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        'Desarrollo Full-Stack',
                                        'UX Research & Design',
                                        'Quality Assurance (QA)',
                                        'Documentación Técnica',
                                        'Integración de Sistemas',
                                        'Bases de Datos',
                                        'Capacitación IT',
                                        'Testing & Accesibilidad'
                                    ].map((role, index) => (
                                        <span key={index} className="inline-block bg-background-dark/50 px-4 py-2 rounded-full text-text-dark font-display text-sm border border-primary/20">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logros y Certificaciones */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 font-display animate-glow">
                                Experiencia y <span className="text-primary">Especialización</span>
                            </h2>
                            <p className="text-xl text-text-dark/70">
                                Trayectoria profesional que garantiza soluciones efectivas para tu negocio
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                            {[
                                { number: '100%', label: 'Propiedad del Código', icon: 'verified' },
                                { number: '20+', label: 'Años de Experiencia', icon: 'workspace_premium' },
                                { number: 'Top 6', label: 'Finalistas CChC', icon: 'trophy' }
                            ].map((stat, index) => (
                                <div key={index} className="bg-background-dark/50 p-6 rounded-xl hud-overlay backdrop-blur-sm text-center transform hover:scale-105 transition-all duration-300">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-3 block">{stat.icon}</span>
                                    <div className="text-4xl font-bold text-primary font-heading mb-2">{stat.number}</div>
                                    <div className="text-text-dark/70 text-sm font-display">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Certificaciones */}
                        <div className="bg-background-dark/50 rounded-2xl p-8 md:p-12 hud-overlay backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-text-dark mb-8 font-display text-center">
                                Áreas de Especialización
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'Desarrollo de Software a Medida', icon: 'code' },
                                    { name: 'Modernización de Sistemas Legacy', icon: 'upgrade' },
                                    { name: 'Investigación UX y Accesibilidad', icon: 'psychology' },
                                    { name: 'Quality Assurance (QA) Integral', icon: 'verified' },
                                    { name: 'Integraciones Bancarias y WMS', icon: 'account_tree' },
                                    { name: 'Inteligencia Artificial Aplicada', icon: 'smart_toy' }
                                ].map((spec, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-background-dark/30 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl">{spec.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark font-display text-sm">{spec.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Content */}
            <RelatedContent
                title="Explora Más Sobre Dunatech"
                subtitle="Descubre nuestros servicios y proyectos"
                links={[
                    {
                        title: 'Nuestros Servicios',
                        description: 'Desarrollo a medida, integración de sistemas, UX research, QA, documentación técnica y más.',
                        link: '/servicios',
                        icon: 'build'
                    },
                    {
                        title: 'Casos de Éxito',
                        description: 'Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos.',
                        link: '/aplicaciones',
                        icon: 'work'
                    },
                    {
                        title: 'Contacto',
                        description: 'Agenda una consultoría gratuita y descubre cómo podemos ayudarte.',
                        link: '/contacto',
                        icon: 'send'
                    }
                ]}
            />

            {/* CTA Final */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-light-blue/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 font-display">
                            ¿Listo para Trabajar Juntos?
                        </h2>
                        <p className="text-xl text-text-dark/80 mb-8">
                            Descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/contacto" 
                                className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg py-4 px-8 hover:bg-light-blue transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <span className="material-symbols-outlined mr-2">send</span>
                                Contactar Ahora
                            </Link>
                            <Link 
                                to="/servicios" 
                                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg py-4 px-8 font-bold transition-all duration-300 hover:scale-105 text-lg"
                            >
                                <span className="material-symbols-outlined mr-2">explore</span>
                                Ver Servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
