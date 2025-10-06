
import React, { useEffect } from 'react';
import Applications from '../components/Applications';

const ApplicationsPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Aplicaciones y Productos - Dunatech | Software Personalizado';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Descubre nuestras aplicaciones y productos de software. Soluciones personalizadas que resuelven problemas reales y automatizan procesos empresariales.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'aplicaciones dunatech, productos software, soluciones empresariales, software personalizado, aplicaciones web, SaaS, herramientas digitales');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Nuestras Aplicaciones y Productos de Software - Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Explora nuestro catálogo de aplicaciones y productos de software diseñados para impulsar la eficiencia de tu negocio.');
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://dunatech.com/aplicaciones');
    }, []);
    
    return <Applications />;
};

export default ApplicationsPage;
