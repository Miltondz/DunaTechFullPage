
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

interface ContactPageProps {
  onFormSubmit: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onFormSubmit }) => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Contacto Dunatech Santiago | Consultoría Gratuita Desarrollo Software';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Contáctanos para una consultoría informática gratuita en Santiago, Chile. Empresa de desarrollo de software a medida en Región Metropolitana. Email: dunatech.site@gmail.com | Respuesta garantizada en 24 horas. Soporte TI para pymes y startups.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'contacto dunatech Chile, consultoría informática gratuita Santiago, consultoría gratuita desarrollo software, cotización desarrollo software a medida Chile, contacto IT Santiago, empresa desarrollo software Región Metropolitana, contactar fábrica software Chile, presupuesto desarrollo web Santiago, presupuesto apps móviles, email dunatech, consultoría TI para pymes, soporte informático empresas Santiago, asesoría tecnológica Chile, transformación digital Santiago');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Contacto Dunatech Santiago | Consultoría Gratuita Software a Medida');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Solicita consultoría informática gratuita en Santiago, Chile. Empresa de desarrollo software a medida. Disponibles Lun-Vie 8AM-6PM. Respuesta en 24h. Soluciones TI para pymes.');
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://dunatech.com/contacto');
    }, []);

    return <Contact onFormSubmit={onFormSubmit} />;
};

export default ContactPage;