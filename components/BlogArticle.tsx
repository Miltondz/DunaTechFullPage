
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogArticles } from '../data/blogArticles';

const BlogArticle: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    
    const article = blogArticles.find(a => a.slug === slug);
    
    useEffect(() => {
        if (!article) {
            navigate('/blog');
            return;
        }

        // SEO: Page title específico del artículo
        document.title = `${article.title} | Blog Dunatech`;
        
        // SEO: Meta description del artículo
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', article.excerpt);
        }
        
        // SEO: Meta keywords del artículo
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', article.tags.join(', '));
        }
        
        // SEO: Open Graph
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', article.title);
        
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', article.excerpt);
        
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', `https://dunatech.com${article.image}`);
        
        // SEO: Canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://dunatech.com/blog/${article.slug}`);
        
        // SEO: Structured Data - Article Schema
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "image": `https://dunatech.com${article.image}`,
            "datePublished": article.date,
            "dateModified": article.date,
            "author": {
                "@type": "Person",
                "name": article.author
            },
            "publisher": {
                "@type": "Organization",
                "name": "Dunatech",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://dunatech.com/logo_dunatech.svg"
                }
            },
            "description": article.excerpt,
            "articleBody": article.content,
            "keywords": article.tags.join(', ')
        };
        
        let scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (!scriptTag) {
            scriptTag = document.createElement('script');
            scriptTag.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(structuredData);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }, [article, navigate]);
    
    if (!article) {
        return null;
    }

    const formattedDate = new Date(article.date).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Simple markdown to HTML converter (basic implementation)
    const renderContent = (content: string) => {
        return content
            .split('\n')
            .map((line, index) => {
                // Headers
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl md:text-4xl font-bold text-text-dark mb-6 mt-8 font-display">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl md:text-3xl font-bold text-text-dark mb-4 mt-6 font-display">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl md:text-2xl font-bold text-text-dark mb-3 mt-5 font-display">{line.slice(4)}</h3>;
                }
                if (line.startsWith('#### ')) {
                    return <h4 key={index} className="text-lg md:text-xl font-bold text-text-dark mb-2 mt-4 font-display">{line.slice(5)}</h4>;
                }
                
                // Lists
                if (line.match(/^- /)) {
                    const processedLine = line.slice(2)
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-light-blue hover:text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>');
                    return <li key={index} className="text-text-dark/80 mb-2 ml-4" dangerouslySetInnerHTML={{ __html: processedLine }} />;
                }
                if (line.match(/^\d+\. /)) {
                    const processedLine = line.replace(/^\d+\. /, '')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-light-blue hover:text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>');
                    return <li key={index} className="text-text-dark/80 mb-2 ml-4" dangerouslySetInnerHTML={{ __html: processedLine }} />;
                }
                
                // Horizontal rule
                if (line.trim() === '---') {
                    return <hr key={index} className="my-8 border-t border-text-dark/20" />;
                }
                
                // Empty line
                if (line.trim() === '') {
                    return <br key={index} />;
                }
                
                // Regular paragraph with bold support
                const processedLine = line
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-light-blue hover:text-primary underline" target="_blank" rel="noopener noreferrer">$1</a>');
                
                return <p key={index} className="text-text-dark/80 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />;
            });
    };

    return (
        <article className="pb-24 sm:pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link 
                        to="/blog"
                        className="inline-flex items-center text-primary hover:text-light-blue transition-colors mb-8 font-semibold"
                    >
                        <span className="material-symbols-outlined mr-2">arrow_back</span>
                        Volver al blog
                    </Link>

                    {/* Article Header */}
                    <header className="mb-8">
                        {/* Category & Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                                {article.category}
                            </span>
                            <div className="flex items-center gap-4 text-sm text-text-dark/60">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">person</span>
                                    {article.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">calendar_today</span>
                                    {formattedDate}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">schedule</span>
                                    {article.readTime}
                                </span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold text-text-dark mb-6 font-display leading-tight">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-text-dark/70 leading-relaxed mb-6">
                            {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span key={tag} className="text-xs bg-background-dark/30 text-text-dark/70 px-3 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
                        <img 
                            src={article.image}
                            alt={article.imageAlt}
                            className="w-full h-auto object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent"></div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-background-dark/30 rounded-2xl p-8 md:p-12 hud-overlay backdrop-blur-sm">
                            {renderContent(article.content)}
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 p-6 bg-primary/10 rounded-2xl border border-primary/20">
                        <h3 className="text-lg font-bold text-text-dark mb-4 font-display">
                            ¿Te gustó este artículo? Compártelo
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://dunatech.com/blog/${article.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-light-blue text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors"
                            >
                                <span className="text-sm font-semibold">Twitter</span>
                            </a>
                            <a 
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dunatech.com/blog/${article.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-light-blue transition-colors"
                            >
                                <span className="text-sm font-semibold">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/10 to-light-blue/10 rounded-2xl">
                        <h3 className="text-2xl font-bold text-text-dark mb-4 font-display">
                            ¿Necesitas una solución similar para tu negocio?
                        </h3>
                        <p className="text-text-dark/70 mb-6 max-w-2xl mx-auto">
                            En Dunatech desarrollamos software a medida que resuelve problemas reales. 
                            Conversemos sobre tu proyecto.
                        </p>
                        <Link 
                            to="/contacto"
                            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-light-blue transition-colors"
                        >
                            <span className="material-symbols-outlined mr-2">mail</span>
                            Contactar Ahora
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogArticle;
