
import React from 'react';
import { Link } from 'react-router-dom';
import { blogArticles, BlogArticle } from '../data/blogArticles';

const BlogCard: React.FC<{ article: BlogArticle }> = ({ article }) => {
    const formattedDate = new Date(article.date).toLocaleDateString('es-CL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <article className="bg-background-dark/50 rounded-2xl overflow-hidden hud-overlay backdrop-blur-sm hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            {/* Image */}
            <Link to={`/blog/${article.slug}`} className="block relative h-40 sm:h-48 overflow-hidden">
                <img 
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                        {article.category}
                    </span>
                </div>
                
                {/* Featured Badge */}
                {article.featured && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-light-blue/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">star</span>
                            Destacado
                        </span>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-text-dark/60 mb-3">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">person</span>
                        {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        {formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {article.readTime}
                    </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${article.slug}`}>
                    <h3 className="text-xl font-bold text-text-dark mb-3 font-display hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-text-dark/70 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                    {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                        <span 
                            key={tag} 
                            className={`text-xs bg-background-dark/50 text-text-dark/80 px-2 py-1 rounded ${
                                index >= 2 ? 'hidden sm:inline-block' : ''
                            }`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Read More Button */}
                <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center text-primary font-semibold text-sm hover:text-light-blue transition-colors mt-auto"
                >
                    Leer artículo completo
                    <span className="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
                </Link>
            </div>
        </article>
    );
};

const Blog: React.FC = () => {
    // Sort articles by date (newest first)
    const sortedArticles = [...blogArticles].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    const featuredArticles = sortedArticles.filter(article => article.featured);
    const regularArticles = sortedArticles.filter(article => !article.featured);

    return (
        <section className="pb-24 sm:pb-32" aria-labelledby="blog-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-16">
                        <h1 id="blog-heading" className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Blog de <span className="text-primary">Dunatech</span>
                        </h1>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            Casos de uso, tecnología y mejores prácticas en desarrollo de software a medida para empresas
                        </p>
                    </header>

                    {/* Featured Articles */}
                    {featuredArticles.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-text-dark mb-6 font-display flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2">star</span>
                                Artículos Destacados
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredArticles.map(article => (
                                    <BlogCard key={article.id} article={article} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* All Articles */}
                    {regularArticles.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-text-dark mb-6 font-display flex items-center">
                                <span className="material-symbols-outlined text-primary mr-2">article</span>
                                Todos los Artículos
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regularArticles.map(article => (
                                    <BlogCard key={article.id} article={article} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Empty State */}
                    {blogArticles.length === 0 && (
                        <div className="text-center py-16">
                            <span className="material-symbols-outlined text-6xl text-text-dark/30 mb-4 block">article</span>
                            <p className="text-text-dark/60 text-lg">Próximamente nuevos artículos...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blog;
