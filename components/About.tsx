
import React from 'react';
import { Link } from 'react-router-dom';

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
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-light-blue/20 rounded-2xl blur-xl opacity-50"></div>
                                    <div className="relative bg-background-dark/80 rounded-2xl p-8 hud-overlay backdrop-blur-sm">
                                        <div className="space-y-4 text-text-dark/70 text-lg">
                                            <div className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary text-3xl mt-1">history</span>
                                                <div>
                                                    <h4 className="font-display font-bold text-text-dark mb-2">2019 - Nuestros Inicios</h4>
                                                    <p>Fundada en República Dominicana con la visión de democratizar el acceso a soluciones tecnológicas de clase mundial.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-light-blue text-3xl mt-1">trending_up</span>
                                                <div>
                                                    <h4 className="font-display font-bold text-text-dark mb-2">2020-2023 - Crecimiento</h4>
                                                    <p>Expansión de servicios y equipo. Más de 50 proyectos exitosos entregados a clientes en diversos sectores.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-light-green text-3xl mt-1">rocket_launch</span>
                                                <div>
                                                    <h4 className="font-display font-bold text-text-dark mb-2">2024 - Innovación Continua</h4>
                                                    <p>Integración de IA y Cloud Computing avanzado. Nos consolidamos como líderes en transformación digital.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 font-display">
                                    Nuestra <span className="text-primary">Historia</span>
                                </h2>
                                <p className="text-text-dark/80 text-lg mb-6 leading-relaxed">
                                    Dunatech nació de una simple pero poderosa idea: <strong className="text-primary">la tecnología debe ser un catalizador para el crecimiento</strong>, no un obstáculo.
                                </p>
                                <p className="text-text-dark/80 text-lg mb-6 leading-relaxed">
                                    Fundada por Milton Díaz, un ingeniero con más de 13 años de experiencia, nuestra empresa se construyó sobre los cimientos de la excelencia técnica, la innovación constante y un compromiso inquebrantable con el éxito de nuestros clientes.
                                </p>
                                <p className="text-text-dark/80 text-lg leading-relaxed">
                                    Hoy, somos un equipo multidisciplinario que combina experiencia local con estándares globales, transformando desafíos tecnológicos en ventajas competitivas.
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
                                    Ser reconocidos como el socio tecnológico preferido en el Caribe, destacando por nuestra capacidad de entregar soluciones de nivel global con la cercanía y comprensión del mercado local. Queremos ser sinónimo de excelencia técnica e innovación.
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
                                        <p className="text-primary font-semibold">Fundador & CEO</p>
                                        <div className="flex justify-center gap-4 mt-4">
                                            <a href="https://www.linkedin.com/in/milton-diaz" target="_blank" rel="noopener noreferrer" className="text-text-dark/50 hover:text-primary transition-colors">
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-dark/80 text-lg mb-6 leading-relaxed">
                                        Con más de <strong className="text-primary">13 años de experiencia</strong> en el sector tecnológico, Milton es el arquitecto detrás de Dunatech. Su enfoque combina rigor técnico con una profunda comprensión de las necesidades empresariales.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {[
                                            '13+ años en desarrollo de software',
                                            'Certificado en Google Cloud AI/ML',
                                            'Experto en arquitectura de sistemas',
                                            'Especialista en .NET y Blazor',
                                            'Bilingüe (Español/Inglés)',
                                            'Líder en optimización de procesos'
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
                                        'DevOps & Cloud',
                                        'UI/UX Design',
                                        'Data Science',
                                        'Ciberseguridad',
                                        'Gestión de Proyectos'
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
                                Logros y <span className="text-primary">Certificaciones</span>
                            </h2>
                            <p className="text-xl text-text-dark/70">
                                Respaldo técnico que garantiza soluciones de calidad mundial
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { number: '50+', label: 'Proyectos Completados', icon: 'task_alt' },
                                { number: '100%', label: 'Satisfacción Cliente', icon: 'sentiment_satisfied' },
                                { number: '5+', label: 'Años de Experiencia', icon: 'workspace_premium' },
                                { number: '15+', label: 'Tecnologías Dominadas', icon: 'code' }
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
                                Certificaciones Profesionales
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'Smart Analytics', provider: 'Google Cloud', icon: 'analytics' },
                                    { name: 'Machine Learning', provider: 'Google Cloud', icon: 'psychology' },
                                    { name: 'AI on Google Cloud', provider: 'Google', icon: 'neurology' },
                                    { name: 'Blazor WebAssembly', provider: 'Microsoft', icon: 'web' },
                                    { name: '.NET Development', provider: 'Microsoft', icon: 'code' },
                                    { name: 'Cloud Architecture', provider: 'Certified', icon: 'cloud' }
                                ].map((cert, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-background-dark/30 p-4 rounded-lg border border-primary/20">
                                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary text-2xl">{cert.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark font-display text-sm">{cert.name}</h4>
                                            <p className="text-text-dark/60 text-xs">{cert.provider}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
