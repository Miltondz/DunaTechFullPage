
import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Servicios de Desarrollo Software a Medida + Consultoría TI | Dunatech Chile';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Servicios de desarrollo de software a medida en Chile: aplicaciones web y móviles, sistemas ERP personalizados, integración de APIs, migración a la nube AWS/Azure, consultoría informática y transformación digital para pymes. Metodologías ágiles, soporte 24/7.');
        }
        
        // SEO: Meta keywords with Chile location
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'servicios desarrollo software a medida, desarrollo aplicaciones web Chile, desarrollo apps móviles Santiago, software a medida para empresas, sistemas ERP personalizados, consultoría informática Santiago, consultoría tecnológica para empresas, integración de sistemas empresariales, integración de APIs Chile, integración CRM ERP, migración a la nube Santiago, cloud computing AWS Azure Chile, DevOps automatización, transformación digital pymes, auditoría de sistemas, optimización procesos TI, soluciones TI para pymes Chile, integración SaaS personalizada, conectar sistemas legacy, desarrollo con metodologías ágiles');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Servicios de Software a Medida: Desarrollo, Integración y Consultoría TI - Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Transforma tu pyme con nuestros servicios: desarrollo software a medida, apps web y móviles, sistemas ERP personalizados, integración de APIs, consultoría informática y migración cloud AWS/Azure.');
        
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
