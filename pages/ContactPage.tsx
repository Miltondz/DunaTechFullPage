
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

interface ContactPageProps {
  onFormSubmit: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onFormSubmit }) => {
    useEffect(() => {
        // SEO: Page title
        document.title = 'Contacto - Dunatech | Solicita una Consultoría Gratuita';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Contáctanos para una consultoría gratuita. Tel: +1 (809) 123-4567 | Email: info@dunatech.com | Santiago, República Dominicana. Respuesta en menos de 24 horas.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'contacto dunatech, consultoría gratuita, cotización desarrollo software, contacto IT Santiago, teléfono dunatech, email dunatech');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Contacto - Dunatech | Estamos Listos para Ayudarte');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Solicita una consultoría gratuita. Nuestro equipo está disponible de Lunes a Viernes, 8AM-6PM. Respuesta garantizada en 24 horas.');
        
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