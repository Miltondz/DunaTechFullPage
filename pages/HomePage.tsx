
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import HeroImage from '../components/HeroImage';
import Teasers from '../components/Teasers';
import Testimonials from '../components/Testimonials';
import Carousel from '../components/Carousel';
import RelatedContent from '../components/RelatedContent';

const HomePage: React.FC = () => {
    useEffect(() => {
        // SEO: Descriptive title optimized for Chile
        document.title = 'Dunatech - Fábrica de Software a Medida Chile | Desarrollo + Consultoría TI';
        
        // SEO: Meta description with local keywords
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Empresa joven de desarrollo de software a medida en Santiago, Chile. Fábrica de software especializada en aplicaciones web, móviles, integración de sistemas ERP/CRM y consultoría informática para pymes. Metodologías ágiles, +50 proyectos exitosos.');
        }
        
        // SEO: Keywords meta
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'desarrollo de software a medida, fábrica de software Chile, empresa joven desarrollo software, desarrollo aplicaciones web Chile, desarrollo apps móviles Santiago, software a medida para empresas, consultoría informática Santiago, soluciones TI para pymes, integración de sistemas empresariales, sistemas ERP personalizados, integración CRM ERP, consultoría tecnológica, transformación digital Chile, migración a la nube Santiago, cloud computing AWS Azure, desarrollo con metodologías ágiles, integración de APIs Chile, automatización procesos RPA, Dunatech Santiago');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'Dunatech - Fábrica de Software a Medida en Chile | Soluciones TI');
        }
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', 'Empresa joven de desarrollo software en Santiago. Soluciones TI personalizadas: apps web y móviles, integración de sistemas ERP/CRM, consultoría informática para pymes. Metodologías ágiles.');
        }
    }, []);
    
    return (
        <>
            {/* Hero Section - Primera impresión crítica para engagement */}
            <Hero />
            
            {/* Hero Image - Visual impactante que refuerza el mensaje */}
            <HeroImage />
            
            {/* Teasers/Preview Section - Vistazo al Futuro */}
            <section className="py-24 sm:py-32 flex justify-center bg-background-dark/30">
                <Teasers />
            </section>
            
            {/* Testimonials - Social Proof para generar confianza */}
            <Testimonials />
            
            {/* Domains/Services Carousel - Exploración de servicios */}
            <section className="py-24 sm:py-32 flex justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                                Explora Nuestros <span className="text-primary">Dominios</span>
                            </h2>
                            <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                                Soluciones integrales que abarcan desde el desarrollo a medida hasta la consultoría estratégica.
                            </p>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </section>

            {/* Related Content - Internal Linking */}
            <RelatedContent
                title="Descubre Más"
                subtitle="Explora todo lo que Dunatech tiene para ofrecer"
                links={[
                    {
                        title: 'Nuestros Servicios',
                        description: 'Desarrollo a medida, integración de sistemas, UX research, QA y más servicios profesionales.',
                        link: '/servicios',
                        icon: 'build'
                    },
                    {
                        title: 'Sobre Nosotros',
                        description: 'Conoce al equipo, nuestra historia, valores y especializaciones en tecnología.',
                        link: '/sobre-nosotros',
                        icon: 'groups'
                    },
                    {
                        title: 'Casos de Éxito',
                        description: 'Proyectos reales que demuestran nuestras capacidades y experiencia.',
                        link: '/aplicaciones',
                        icon: 'work'
                    }
                ]}
            />
        </>
    );
};

export default HomePage;
