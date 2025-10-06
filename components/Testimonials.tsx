
import React from 'react';

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    imageInitials: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, content, rating, imageInitials }) => (
    <article className="bg-background-dark/50 p-8 rounded-xl hud-overlay backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4" aria-label={`${rating} de 5 estrellas`}>
            {[...Array(5)].map((_, i) => (
                <span 
                    key={i} 
                    className={`material-symbols-outlined text-2xl ${i < rating ? 'text-primary' : 'text-text-dark/20'}`}
                >
                    star
                </span>
            ))}
        </div>

        {/* Testimonial Content */}
        <blockquote className="flex-grow mb-6">
            <p className="text-text-dark/90 text-lg leading-relaxed italic">
                "{content}"
            </p>
        </blockquote>

        {/* Author Info */}
        <footer className="flex items-center gap-4 mt-auto border-t border-primary/20 pt-6">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-xl font-display">{imageInitials}</span>
            </div>
            <div>
                <cite className="not-italic">
                    <p className="font-display font-bold text-text-dark text-lg">{name}</p>
                    <p className="text-text-dark/70 text-sm">{role}</p>
                    <p className="text-primary text-sm font-semibold">{company}</p>
                </cite>
            </div>
        </footer>
    </article>
);

const Testimonials: React.FC = () => {
    const testimonials: TestimonialCardProps[] = [
        {
            name: "Carlos Méndez",
            role: "CTO",
            company: "TechVision Corp",
            content: "Dunatech transformó completamente nuestra infraestructura de datos. Su enfoque proactivo y expertise técnico nos permitió escalar de manera eficiente y segura.",
            rating: 5,
            imageInitials: "CM"
        },
        {
            name: "María Rodríguez",
            role: "Directora de Innovación",
            company: "InnovatePro",
            content: "El equipo de Dunatech no solo entregó una solución técnica excepcional, sino que se convirtieron en partners estratégicos de nuestro negocio. Altamente recomendados.",
            rating: 5,
            imageInitials: "MR"
        },
        {
            name: "Jorge Ramírez",
            role: "CEO",
            company: "Digital Solutions RD",
            content: "La arquitectura de sistemas que diseñaron superó nuestras expectativas. Su capacidad para anticipar necesidades futuras demuestra un conocimiento profundo del sector.",
            rating: 5,
            imageInitials: "JR"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-background-dark/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
                        </h2>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            La confianza de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
                        </p>
                    </header>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
                            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
                            <p className="text-text-dark font-display font-semibold">
                                +50 Proyectos Exitosos Entregados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
