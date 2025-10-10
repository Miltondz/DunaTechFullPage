
import React, { useEffect } from 'react';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
    useEffect(() => {
        // SEO: Page title optimizado
        document.title = 'Blog de Desarrollo de Software | Casos de Uso y Tecnología - Dunatech';
        
        // SEO: Meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Blog de Dunatech: casos de éxito, tutoriales y mejores prácticas en desarrollo de software a medida, aplicaciones web personalizadas y soluciones tecnológicas para empresas en Chile.');
        }
        
        // SEO: Meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'blog desarrollo software Chile, casos de uso software, tutoriales programación, AutoTaller Pro, urlz.lat, desarrollo web Chile, software a medida, tecnología empresarial, transformación digital, React tutorials, Supabase');
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', 'Blog de Desarrollo de Software | Casos de Uso y Tecnología - Dunatech');
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', 'Aprende sobre desarrollo de software a medida con casos de uso reales, tutoriales técnicos y mejores prácticas del equipo de Dunatech Chile.');
        
        // SEO: Open Graph image
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', 'https://dunatech.com/images/main.jpg');
        
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
        canonical.setAttribute('href', 'https://dunatech.com/blog');
        
        // SEO: Structured Data - Blog Schema
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Dunatech",
            "description": "Casos de éxito, tutoriales y mejores prácticas en desarrollo de software a medida",
            "url": "https://dunatech.com/blog",
            "publisher": {
                "@type": "Organization",
                "name": "Dunatech",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://dunatech.com/logo_dunatech.svg"
                }
            }
        };
        
        let scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(structuredData);
    }, []);
    
    return <Blog />;
};

export default BlogPage;
