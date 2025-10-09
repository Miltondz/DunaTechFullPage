
import React, { useEffect } from 'react';
import Applications from '../components/Applications';

const ApplicationsPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Aplicaciones y Productos de Software a Medida | Soluciones SaaS - Dunatech';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Descubre nuestras aplicaciones y productos de software a medida: sistemas de gestión empresarial, soluciones SaaS personalizadas, herramientas digitales para pymes y software empresarial que automatizan procesos. Desarrollo personalizado en Chile.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'aplicaciones dunatech, productos software a medida, software personalizado Chile, soluciones empresariales, aplicaciones web personalizadas, desarrollo SaaS Chile, herramientas digitales para pymes, software empresarial, sistemas de gestión a medida, aplicaciones móviles empresariales, plataformas SaaS personalizadas, automatización de procesos, software para retail, software para servicios, soluciones tecnológicas personalizadas');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Aplicaciones y Productos Software a Medida | Soluciones SaaS - Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Catálogo de aplicaciones y productos software a medida en Chile: sistemas de gestión empresarial, soluciones SaaS personalizadas y herramientas digitales que impulsan la eficiencia de pymes.');
        
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
