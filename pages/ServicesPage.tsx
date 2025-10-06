
import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Servicios de Desarrollo de Software y Consultoría IT - Dunatech';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Servicios de arquitectura de bases de datos, desarrollo web, integración de sistemas y soluciones cloud. Optimiza tu infraestructura y automatiza procesos con tecnología de vanguardia.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'servicios desarrollo software, arquitectura bases datos SQL, desarrollo aplicaciones web, integración sistemas ERP, soluciones cloud azure aws, devops, consultoría IT');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Servicios IT: Desarrollo, Bases de Datos, Integración y Cloud - Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Transforma tu negocio con nuestros servicios: optimización de BD, desarrollo web full-stack, integración de sistemas y migración a cloud.');
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://dunatech.com/servicios');
    }, []);
    
    return <Services />;
};

export default ServicesPage;
