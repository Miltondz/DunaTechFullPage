
import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Sobre Nosotros - Dunatech | 13+ Años de Experiencia en Tecnología';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Conoce la historia de Dunatech, fundada en 2019 por Milton Díaz. Más de 13 años de experiencia, +50 proyectos exitosos y certificaciones en Google Cloud, Microsoft .NET y Machine Learning.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'sobre dunatech, equipo dunatech, Milton Díaz, historia empresa tecnología, certificaciones google cloud, experiencia desarrollo software, misión visión valores');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Sobre Nosotros - Dunatech | Equipo Experto en Tecnología');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Fundada en 2019, Dunatech combina 13+ años de experiencia con innovación continua. Conoce nuestra historia, equipo y certificaciones.');
        
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
