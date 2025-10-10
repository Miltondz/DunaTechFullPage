
import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedLink {
    title: string;
    description: string;
    link: string;
    icon: string;
}

interface RelatedContentProps {
    title?: string;
    subtitle?: string;
    links: RelatedLink[];
}

const RelatedContent: React.FC<RelatedContentProps> = ({ 
    title = "Contenido Relacionado", 
    subtitle = "Continúa explorando",
    links 
}) => {
    return (
        <section className="py-16 bg-background-dark/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-2 font-display">
                            {title}
                        </h2>
                        <p className="text-text-dark/70 text-lg">{subtitle}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {links.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className="group bg-background-dark/50 p-6 rounded-xl hud-overlay backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-text-dark font-display mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-text-dark/70 text-sm leading-relaxed">{item.description}</p>
                                <div className="flex items-center mt-4 text-primary font-semibold text-sm group-hover:text-light-blue transition-colors">
                                    Leer más
                                    <span className="material-symbols-outlined ml-1 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedContent;
