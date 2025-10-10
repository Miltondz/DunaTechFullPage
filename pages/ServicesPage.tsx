
import React, { useEffect } from 'react';
import Services from '../components/Services';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
    // FAQ Schema Data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Qué servicios de desarrollo de software ofrece Dunatech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dunatech ofrece servicios de desarrollo de aplicaciones web y de escritorio, optimización de bases de datos, integración de sistemas (APIs, webhooks), investigación y diseño UX, quality assurance (QA) y testing, además de documentación técnica y capacitación. Nos especializamos en soluciones a medida para pymes en Chile."
                }
            },
            {
                "@type": "Question",
                "name": "¿Pueden modernizar aplicaciones legacy en Visual Basic o VB6?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, en Dunatech somos especialistas en modernizar código legacy de Visual Basic 6 (VB6) y Visual Basic .NET a tecnologías modernas como .NET Core, C# y aplicaciones web con React. Migramos tu aplicación de escritorio sin perder funcionalidad y mejorando el rendimiento."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo pueden ayudarme a integrar mis sistemas empresariales?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Conectamos tus sistemas existentes (ERP, CRM, WMS, e-commerce) mediante APIs REST, SOAP, Web Services y herramientas de automatización como Make, n8n y Zapier. Eliminamos la entrada manual de datos y sincronizamos información en tiempo real para mejorar tu eficiencia operacional."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué incluye el servicio de optimización de bases de datos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nuestro servicio incluye implementación de índices estratégicos, refactorización de procedimientos almacenados, optimización de consultas SQL, actualización de lógica de negocio obsoleta, migración de datos sin tiempo de inactividad y monitoreo continuo de rendimiento. Trabajamos con MS SQL Server, PostgreSQL, MySQL y MongoDB."
                }
            },
            {
                "@type": "Question",
                "name": "¿Ofrecen servicios de Quality Assurance (QA) y testing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ofrecemos QA funcional con perspectiva de usuario, testing de usabilidad y accesibilidad (WCAG), pruebas cross-browser y cross-device, testing de regresión y end-to-end. Detectamos errores antes del lanzamiento para garantizar una experiencia impecable y reducir tickets de soporte."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto tiempo toma un proyecto de desarrollo de software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los tiempos varían según la complejidad del proyecto. Un prototipo rápido (MVP) puede estar listo en 2-4 semanas, mientras que desarrollos más complejos como sistemas ERP o integraciones personalizadas pueden tomar entre 2-6 meses. Trabajamos con metodologías ágiles con entregas incrementales para que veas progreso constante."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué es la investigación UX y por qué es importante?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La investigación UX consiste en estudiar las necesidades reales de tus usuarios mediante entrevistas, testing de usabilidad y análisis de comportamiento. Es importante porque te permite crear productos que los usuarios realmente necesitan y aman, reduciendo tasas de abandono hasta un 45% y aumentando conversiones significativamente."
                }
            },
            {
                "@type": "Question",
                "name": "¿Ofrecen soporte y mantenimiento después del desarrollo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, ofrecemos servicios de soporte técnico, mantenimiento correctivo y evolutivo, además de capacitación continua para tu equipo. También proporcionamos documentación técnica completa para que puedas gestionar el sistema de forma autónoma si lo prefieres."
                }
            },
            {
                "@type": "Question",
                "name": "¿Trabajan con metodologías ágiles?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, en Dunatech trabajamos con metodologías ágiles (Scrum/Kanban) que permiten entregas incrementales, feedback constante y adaptación rápida a cambios. Esto te garantiza transparencia total del proceso, entregas frecuentes y la flexibilidad de ajustar el rumbo cuando sea necesario."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuál es el costo de los servicios de desarrollo de Dunatech?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Los costos varían según el alcance y complejidad de cada proyecto. Ofrecemos una consultoría gratuita inicial donde analizamos tus necesidades y entregamos una cotización detallada sin compromiso. Contáctanos para agendar tu consulta y conocer opciones adaptadas a tu presupuesto."
                }
            }
        ]
    };

    useEffect(() => {
        // SEO: Page title
        document.title = 'Servicios de Desarrollo Software a Medida + Consultoría TI | Dunatech Chile';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Servicios de desarrollo de software a medida en Chile: aplicaciones web y móviles, sistemas ERP personalizados, integración de APIs, consultoría informática, soluciones de IA y transformación digital para pymes. Metodologías ágiles y acompañamiento profesional.');
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
    
    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            <Services />
        </>
    );
};

export default ServicesPage;
