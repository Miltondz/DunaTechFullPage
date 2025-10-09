
import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Sobre Nosotros - Dunatech | Empresa Joven Fábrica de Software Chile';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Conoce Dunatech: empresa joven de desarrollo de software a medida en Chile fundada en 2019. Fábrica de software con +13 años de experiencia acumulada, +50 proyectos exitosos. Certificaciones en Google Cloud, Microsoft .NET y Machine Learning. Especializados en soluciones TI para pymes con metodologías ágiles.');
        }
        
        // SEO: Meta keywords with Chile focus
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'sobre dunatech, empresa joven desarrollo software, fábrica de software Chile, startup tech Santiago, equipo dunatech Chile, Milton Díaz, empresa tecnología Chile, certificaciones google cloud, certificaciones microsoft, experiencia desarrollo software, consultoría informática para startups, empresa IT Santiago, misión visión valores, equipo desarrollo ágil, desarrolladores certificados Chile, transformación digital pymes');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Sobre Nosotros - Dunatech | Empresa Joven Fábrica Software Chile');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Empresa joven de software a medida fundada en 2019. Combinamos 13+ años de experiencia con metodologías ágiles y tecnologías modernas. Fábrica de software especializada en soluciones TI para pymes en Santiago, Chile.');
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://dunatech.com/sobre-nosotros');
    }, []);
    
    return <About />;
};

export default AboutPage;
