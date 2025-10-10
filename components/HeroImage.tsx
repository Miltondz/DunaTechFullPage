
import React, { useState } from 'react';

const HeroImage: React.FC = () => {
    const [imageError, setImageError] = useState(false);
    
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Image Container with decorative elements */}
                    <div className="relative group">
                        {/* Decorative glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-light-blue/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative bg-background-dark/50 rounded-2xl hud-overlay backdrop-blur-sm p-8 sm:p-12">
                            {/* Main Hero Image with SVG Fallback */}
                            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-lg">
                                {!imageError ? (
                                    <img 
                                        src="/images/main.jpg" 
                                        alt="Arquitectura de soluciones tecnológicas Dunatech - Desarrollo de software a medida, aplicaciones web personalizadas y sistemas integrados para empresas en Chile"
                                        className="w-full h-full object-cover object-center"
                                        onError={() => setImageError(true)}
                                        loading="eager"
                                    />
                                ) : (
                                <svg 
                                    viewBox="0 0 1200 400" 
                                    className="w-full h-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Ilustración de tecnología y datos"
                                >
                                    {/* Background Grid */}
                                    <defs>
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,149,0,0.1)" strokeWidth="1"/>
                                        </pattern>
                                        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#FF9500', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#4FC3F7', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#4FC3F7', stopOpacity: 0.8 }} />
                                            <stop offset="100%" style={{ stopColor: '#6EE7B7', stopOpacity: 0.8 }} />
                                        </linearGradient>
                                    </defs>
                                    
                                    <rect width="1200" height="400" fill="url(#grid)" opacity="0.3"/>
                                    
                                    {/* Central Server/Database */}
                                    <g className="animate-float" style={{ animationDelay: '0s' }}>
                                        <rect x="500" y="120" width="200" height="160" rx="8" fill="rgba(26,35,50,0.8)" stroke="url(#primaryGradient)" strokeWidth="3"/>
                                        <circle cx="600" cy="160" r="25" fill="url(#primaryGradient)" opacity="0.8">
                                            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                                        </circle>
                                        <rect x="520" y="210" width="160" height="8" rx="4" fill="url(#primaryGradient)" opacity="0.6"/>
                                        <rect x="520" y="230" width="120" height="8" rx="4" fill="url(#primaryGradient)" opacity="0.4"/>
                                        <rect x="520" y="250" width="140" height="8" rx="4" fill="url(#primaryGradient)" opacity="0.5"/>
                                    </g>
                                    
                                    {/* Left Node - Cloud */}
                                    <g className="animate-float" style={{ animationDelay: '1s' }}>
                                        <ellipse cx="200" cy="100" rx="80" ry="50" fill="rgba(79,195,247,0.2)" stroke="#4FC3F7" strokeWidth="2"/>
                                        <path d="M 180 90 L 220 90 L 220 110 L 180 110 Z" fill="none" stroke="#4FC3F7" strokeWidth="2"/>
                                        <circle cx="200" cy="100" r="8" fill="#4FC3F7"/>
                                        <line x1="280" y1="100" x2="500" y2="150" stroke="url(#primaryGradient)" strokeWidth="2" strokeDasharray="5,5">
                                            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                                        </line>
                                    </g>
                                    
                                    {/* Right Node - Analytics */}
                                    <g className="animate-float" style={{ animationDelay: '2s' }}>
                                        <rect x="880" y="75" width="120" height="100" rx="8" fill="rgba(110,231,183,0.2)" stroke="#6EE7B7" strokeWidth="2"/>
                                        <path d="M 900 140 L 920 120 L 940 135 L 960 110 L 980 125" fill="none" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round"/>
                                        <line x1="700" y1="180" x2="880" y2="125" stroke="url(#secondaryGradient)" strokeWidth="2" strokeDasharray="5,5">
                                            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                                        </line>
                                    </g>
                                    
                                    {/* Bottom Left - Mobile/Devices */}
                                    <g className="animate-float" style={{ animationDelay: '0.5s' }}>
                                        <rect x="150" y="260" width="80" height="100" rx="8" fill="rgba(26,35,50,0.8)" stroke="url(#primaryGradient)" strokeWidth="2"/>
                                        <rect x="160" y="270" width="60" height="60" rx="4" fill="url(#primaryGradient)" opacity="0.3"/>
                                        <circle cx="190" cy="345" r="8" fill="#FF9500"/>
                                        <line x1="230" y1="280" x2="500" y2="240" stroke="url(#primaryGradient)" strokeWidth="2" strokeDasharray="5,5">
                                            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                                        </line>
                                    </g>
                                    
                                    {/* Bottom Right - API/Integration */}
                                    <g className="animate-float" style={{ animationDelay: '1.5s' }}>
                                        <circle cx="950" cy="280" r="60" fill="rgba(255,149,0,0.2)" stroke="#FF9500" strokeWidth="2"/>
                                        <path d="M 930 280 L 950 260 L 970 280 L 950 300 Z" fill="none" stroke="#FF9500" strokeWidth="3"/>
                                        <circle cx="950" cy="280" r="15" fill="#FF9500" opacity="0.6">
                                            <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite"/>
                                        </circle>
                                        <line x1="700" y1="250" x2="890" y2="280" stroke="url(#primaryGradient)" strokeWidth="2" strokeDasharray="5,5">
                                            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                                        </line>
                                    </g>
                                    
                                    {/* Floating Data Particles */}
                                    <g opacity="0.6">
                                        <circle cx="350" cy="50" r="4" fill="#FF9500">
                                            <animate attributeName="cy" values="50;70;50" dur="3s" repeatCount="indefinite"/>
                                        </circle>
                                        <circle cx="750" cy="80" r="3" fill="#4FC3F7">
                                            <animate attributeName="cy" values="80;100;80" dur="4s" repeatCount="indefinite"/>
                                        </circle>
                                        <circle cx="450" cy="350" r="3" fill="#6EE7B7">
                                            <animate attributeName="cy" values="350;330;350" dur="3.5s" repeatCount="indefinite"/>
                                        </circle>
                                        <circle cx="850" cy="320" r="4" fill="#FF9500">
                                            <animate attributeName="cy" values="320;340;320" dur="2.5s" repeatCount="indefinite"/>
                                        </circle>
                                    </g>
                                </svg>
                                )}
                            </div>

                            {/* Caption */}
                            <div className="mt-8 text-center">
                                <p className="text-text-dark/70 text-sm sm:text-base font-display">
                                    <span className="text-primary font-semibold">Arquitectura inteligente</span> · 
                                    Conectamos sistemas, datos y personas para crear soluciones que impulsan el crecimiento
                                </p>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-6 -left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/30 animate-float hidden sm:block">
                            <span className="text-white font-display font-bold text-sm">Cloud Native</span>
                        </div>
                        <div className="absolute -top-6 -right-6 bg-light-blue/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-light-blue/30 animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                            <span className="text-white font-display font-bold text-sm">Scalable</span>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-light-green/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-light-green/30 animate-float" style={{ animationDelay: '2s' }}>
                            <span className="text-white font-display font-bold text-sm">Data-Driven</span>
                        </div>
                    </div>

                    {/* Key Features below image */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'speed', label: 'Alto Rendimiento' },
                            { icon: 'security', label: 'Seguridad Robusta' },
                            { icon: 'auto_awesome', label: 'Innovación' },
                            { icon: 'psychology', label: 'Soluciones IA' }
                        ].map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-3 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
                                </div>
                                <p className="text-text-dark/80 font-display font-semibold text-sm">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroImage;
