
import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Sobre Nosotros - Dunatech | Empresa Joven Fábrica de Software Chile';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Conoce Dunatech: empresa joven de desarrollo de software a medida en Chile. Milton Díaz (20+ años exp.) y María Alejandra Eggers (UX/QA). Especializados en modernización de sistemas legacy, desarrollo web/escritorio, integración de sistemas, UX research, QA & Testing, documentación técnica y capacitación IT.');
        }
        
        // SEO: Meta keywords with Chile focus
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'sobre dunatech, empresa joven desarrollo software, fábrica de software Chile, equipo dunatech Chile, Milton Díaz, María Alejandra Eggers, antropologa UX Chile, UX researcher Santiago, QA specialist Chile, empresa tecnología Chile, experiencia desarrollo software, modernización sistemas legacy, mantenimiento código legacy, prototipado rápido, diseño soluciones empresariales, análisis mejora procesos, empresa IT Santiago, equipo desarrollo ágil, transformación digital pymes, UX research Chile, quality assurance Chile, testing usabilidad WCAG, documentación técnica, capacitación IT Chile, integración sistemas, arquitectura software');
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
