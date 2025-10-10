
import React, { useEffect } from 'react';
import Applications from '../components/Applications';

const ApplicationsPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title optimizado con palabras clave principales
        document.title = 'Aplicaciones Web Personalizadas y Software a Medida Chile | Dunatech';
        
        // SEO: Meta description optimizada (150-160 caracteres)
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Descubre nuestras aplicaciones web personalizadas y software a medida en Chile: sistemas de gestión, acortador de URLs, plataformas de reservas y soluciones empresariales modernas con React y tecnologías de vanguardia.');
        }
        
        // SEO: Meta keywords actualizadas con términos específicos
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'aplicaciones web personalizadas Chile, software a medida, desarrollo de aplicaciones React, sistema de gestión talleres mecánicos, acortador de URLs, plataforma de reservas, software para pymes Chile, desarrollo full-stack, aplicaciones con Supabase, software empresarial personalizado, CanvasDesk, urlz.lat, AutoTaller Pro, desarrollo web profesional Chile, aplicaciones SaaS Chile');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Aplicaciones Web Personalizadas y Software a Medida Chile | Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Portfolio de aplicaciones web personalizadas en Chile: CanvasDesk, urlz.lat, AutoTaller Pro y más. Desarrollo de software a medida con React, TypeScript y tecnologías modernas para empresas.');
        
        // SEO: Open Graph image
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', 'https://dunatech.com/images/canvasdesk01.jpeg');
        
        // SEO: Twitter Card
        let twitterCard = document.querySelector('meta[name="twitter:card"]');
        if (!twitterCard) {
            twitterCard = document.createElement('meta');
            twitterCard.setAttribute('name', 'twitter:card');
            document.head.appendChild(twitterCard);
        }
        twitterCard.setAttribute('content', 'summary_large_image');
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://dunatech.com/aplicaciones');
        
        // SEO: Structured Data - ItemList Schema
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Aplicaciones Web Desarrolladas por Dunatech",
            "description": "Portfolio de aplicaciones web personalizadas y software a medida desarrollado en Chile",
            "itemListElement": [
                {
                    "@type": "SoftwareApplication",
                    "position": 1,
                    "name": "CanvasDesk",
                    "description": "Herramienta de pensamiento visual con canvas infinito para organizar ideas",
                    "applicationCategory": "ProductivityApplication",
                    "operatingSystem": "Web Browser",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    }
                },
                {
                    "@type": "SoftwareApplication",
                    "position": 2,
                    "name": "urlz.lat",
                    "description": "Acortador de URLs inteligente con generación de QR y analíticas",
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "Web Browser"
                },
                {
                    "@type": "SoftwareApplication",
                    "position": 3,
                    "name": "AutoTaller Pro",
                    "description": "Sistema de gestión integral para talleres mecánicos y servicios automotrices",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Web Browser"
                },
                {
                    "@type": "SoftwareApplication",
                    "position": 4,
                    "name": "Website Profesor de Música",
                    "description": "Plataforma web con sistema de reservas y CMS para profesores",
                    "applicationCategory": "WebApplication",
                    "operatingSystem": "Web Browser"
                },
                {
                    "@type": "SoftwareApplication",
                    "position": 5,
                    "name": "¿Cuánto Me Toca?",
                    "description": "Aplicación para dividir cuentas de restaurante con OCR e IA",
                    "applicationCategory": "FinanceApplication",
                    "operatingSystem": "Web Browser"
                }
            ]
        };
        
        let scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(structuredData);
    }, []);
    
    return <Applications />;
};

export default ApplicationsPage;
