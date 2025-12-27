import React, { useState } from "react";

const TechTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
    {children}
  </span>
);

const ImageZoomModal: React.FC<{
  src: string;
  alt: string;
  onClose: () => void;
  images?: string[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}> = ({ src, alt, onClose, images, currentIndex, onIndexChange }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!images || onIndexChange === undefined || currentIndex === undefined) return;
      
      if (e.key === 'ArrowLeft') {
        onIndexChange((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, images, currentIndex, onIndexChange]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && onIndexChange && currentIndex !== undefined) {
       onIndexChange((currentIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images && onIndexChange && currentIndex !== undefined) {
       onIndexChange((currentIndex + 1) % images.length);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background-dark/95 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl max-h-[90vh] w-full flex items-center justify-center select-none" 
        onClick={e => e.stopPropagation()}
      >
        <button
            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-50 focus:outline-none"
            onClick={onClose}
            aria-label="Cerrar"
        >
            <span className="material-symbols-outlined text-4xl">close</span>
        </button>

         {/* Prev Button */}
         {images && images.length > 1 && (
             <button
                 className="absolute left-2 md:-left-16 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 focus:outline-none"
                 onClick={handlePrev}
                 aria-label="Imagen anterior"
             >
                 <span className="material-symbols-outlined text-4xl md:text-5xl">chevron_left</span>
             </button>
         )}

        <img
          src={src}
          key={src} // Force re-render for animation if needed
          alt={`Vista ampliada de ${alt} | Portfolio Dunatech`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-[fadeIn_0.2s_ease-out]"
        />

         {/* Next Button */}
         {images && images.length > 1 && (
             <button
                 className="absolute right-2 md:-right-16 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 focus:outline-none"
                 onClick={handleNext}
                 aria-label="Siguiente imagen"
             >
                 <span className="material-symbols-outlined text-4xl md:text-5xl">chevron_right</span>
             </button>
         )}

         {/* Counter */}
         {images && images.length > 1 && currentIndex !== undefined && (
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 font-medium text-sm">
                {currentIndex + 1} / {images.length}
            </div>
         )}
      </div>
    </div>
  );
};

const AppCard: React.FC<{
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  proFeatures?: string[];
  delay: string;
  image?: string;
  images?: string[];
  period?: string;
  url?: string;
}> = ({ icon, title, subtitle, description, features, techStack, proFeatures, delay, image, images, period, url }) => {
    const [zoomImage, setZoomImage] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Combine legacy single image with new images array
    const displayImages = images && images.length > 0 ? images : (image ? [image] : []);
    const hasMultipleImages = displayImages.length > 1;
    const currentImage = displayImages[currentIndex];

    // Auto-rotation effect
    React.useEffect(() => {
        if (!hasMultipleImages || isHovering || zoomImage) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % displayImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [hasMultipleImages, isHovering, zoomImage, displayImages.length]);
    
    return (
    <>
        {zoomImage && currentImage && (
            <ImageZoomModal 
                src={currentImage} 
                alt={title} 
                onClose={() => setZoomImage(false)}
                images={displayImages}
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
            />
        )}
        
        <div 
            className="bg-background-dark/50 rounded-2xl shadow-xl overflow-hidden hud-overlay backdrop-blur-sm opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] transition-all duration-300 hover:shadow-primary/30 flex flex-col h-full group"
            style={{ animationDelay: delay }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Image Section - Top */}
            {currentImage ? (
                <div 
                    className="relative h-48 overflow-hidden cursor-pointer bg-background-dark/30"
                    onClick={() => setZoomImage(true)}
                >
                    <img 
                        key={currentImage} // Key change triggers animation
                        src={currentImage} 
                        alt={`${title} - ${subtitle} | Aplicación web desarrollada por Dunatech`}
                        className="w-full h-full object-contain transition-transform duration-500 animate-[fadeIn_0.5s_ease-out]"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/30 to-transparent group-hover:opacity-70 transition-opacity pointer-events-none"></div>
                    
                    {/* Zoom icon indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        <div className="bg-background-dark/80 rounded-full p-3 transform transition-transform duration-300 scale-75 group-hover:scale-100">
                            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
                        </div>
                    </div>

                    {/* Carousel Indicators (Dots) */}
                    {hasMultipleImages && (
                        <div className="absolute top-3 right-3 flex space-x-1.5 z-20" onClick={(e) => e.stopPropagation()}>
                            {displayImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === currentIndex 
                                            ? 'bg-primary w-4' 
                                            : 'bg-white/50 hover:bg-white'
                                    }`}
                                    aria-label={`Ver imagen ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                    
                    <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-background-dark/90 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm shadow-lg">
                                <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white font-display drop-shadow-lg leading-tight">{title}</h3>
                                {period && <p className="text-primary text-xs font-semibold drop-shadow">{period}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-gradient-to-br from-primary/20 to-light-blue/20 p-6">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-background-dark rounded-lg flex items-center justify-center mr-4">
                            <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white font-display">{title}</h3>
                            <p className="text-primary text-sm">{subtitle}</p>
                            {period && <p className="text-light-blue text-xs font-semibold mt-1">{period}</p>}
                        </div>
                    </div>
                </div>
            )}
            
            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow relative">
                {!currentImage && <p className="text-sm text-text-dark/60 font-semibold mb-2">{subtitle}</p>}
                
                <p className="text-text-dark/70 mb-4 leading-relaxed text-sm line-clamp-4 hover:line-clamp-none transition-all duration-300">{description}</p>
                
                {/* Features */}
                <div className="mb-4">
                    <h4 className="text-base font-bold text-text-dark font-display mb-3 flex items-center">
                        <span className="material-symbols-outlined text-primary mr-2 text-xl">done_all</span>
                        Características
                    </h4>
                    <div className="space-y-2">
                        {features.slice(0, 4).map(feature => (
                            <div key={feature} className="flex items-start">
                                <span className="material-symbols-outlined text-light-green mr-2 text-lg mt-0.5 flex-shrink-0">check_circle</span>
                                <span className="text-text-dark/80 text-xs leading-relaxed">{feature}</span>
                            </div>
                        ))}
                         {features.length > 4 && (
                            <div className="pl-6 pt-1">
                                <span className="text-primary text-xs font-semibold italic">+{features.length - 4} características más...</span>
                            </div>
                        )}
                    </div>
                </div>
                
                {/* Tech Stack & Pro Features */}
                <div className="space-y-3 mb-4">
                    <div className="bg-background-dark/50 p-3 rounded-lg hud-overlay">
                        <h5 className="font-bold text-text-dark mb-2 font-display flex items-center text-sm">
                            <span className="material-symbols-outlined text-primary mr-2 text-lg">code</span>
                            Stack Tecnológico
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                            {techStack.map(tech => <TechTag key={tech}>{tech}</TechTag>)}
                        </div>
                    </div>
                    
                    {proFeatures && (
                        <div className="bg-gradient-to-br from-light-blue/10 to-primary/10 p-3 rounded-lg border border-light-blue/20">
                            <h5 className="font-bold text-text-dark mb-2 font-display flex items-center text-sm">
                                <span className="material-symbols-outlined text-light-blue mr-2 text-lg">star</span>
                                Funciones Pro
                            </h5>
                            <div className="space-y-1 text-xs text-text-dark/70">
                               {proFeatures.slice(0, 3).map(f => (
                                   <p key={f} className="flex items-start">
                                       <span className="mr-1.5 text-light-blue">•</span>
                                       <span>{f}</span>
                                   </p>
                               ))}
                               {proFeatures.length > 3 && (
                                   <p className="text-light-blue text-xs font-semibold mt-2">
                                       +{proFeatures.length - 3} más...
                                   </p>
                               )}
                            </div>
                        </div>
                    )}
                </div>
                
                <button 
                    onClick={() => url && window.open(url, '_blank')}
                    className="w-full bg-primary text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:bg-light-blue hover:scale-105 text-sm mt-auto shadow-lg shadow-primary/20"
                >
                    <span className="material-symbols-outlined align-middle mr-2 text-lg">open_in_new</span>
                    Ver Aplicación
                </button>
            </div>
        </div>
    </>
    );
};

const Applications: React.FC = () => {
  const appsData = [
    {
      icon: "security",
      title: "PREVIO",
      subtitle: "Plataforma de seguridad ocupacional con IA",
      period: "Dic 2025 - Presente",
      description:
        "Plataforma SaaS de gestión de seguridad y salud ocupacional diseñada para la industria de la construcción. Elimina el papeleo burocrático y garantiza el cumplimiento normativo del DS N° 44 utilizando Inteligencia Artificial avanzada. Permite capturar incidentes en segundos mediante voz o foto, analiza causas raíz automáticamente y genera toda la documentación legal requerida al instante.",
      features: [
        "Captura de incidentes ultra-rápida (<30s) por voz y foto",
        "Análisis automático de riesgos y causas con IA (Google Gemini)",
        "Generación instantánea de documentos legales DS N° 44",
        "Modo Offline-First y firma digital",
        "Dashboards en tiempo real y mapas de calor",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Google Gemini",
      ],
      image: "/images/previo02.jpg",
      images: [
          '/images/previo02.jpg',
          '/images/previo03.jpg',
          '/images/previo04.jpg',
          '/images/previo05.jpg'
      ],
      delay: "0.1s",
      url: "https://previo.netlify.app/",
    },
    {
      icon: "extension",
      title: "RehabiliA",
      subtitle: "Plataforma SaaS de rehabilitación domiciliaria híbrida",
      period: "Nov 2025 - Presente",
      description:
        "Plataforma SaaS de rehabilitación domiciliaria híbrida que conecta a pacientes, cuidadores y especialistas. Solución diseñada para aumentar la adherencia al tratamiento mediante una experiencia unificada que combina gamificación accesible para el paciente y herramientas de soporte técnico y emocional para el cuidador, permitiendo a los médicos una gestión eficiente basada en datos.",
      features: [
        "Experiencia Dual: Interfaz Paciente (Juego) / Técnico (Acompañamiento)",
        "Gestión Clínica Inteligente con dashboard y semáforos",
        "Sistema de gamificación con recompensas y rachas",
        "Arquitectura Serverless con seguridad RLS",
        'Diseño "Medical Glass" 100% accesible',
      ],
      techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Lovable"],
      image: "/images/rehabilia01.jpg",
      images: [
          '/images/rehabilia01.jpg',
          '/images/rehabilia02.jpg',
          '/images/rehabilia03.jpg'
      ],
      delay: "0.2s",
      url: "https://rehabilia.netlify.app/",
    },
    {
      icon: "dashboard",
      title: "CanvasDesk",
      subtitle: "Aplicación web de pensamiento visual con canvas infinito",
      period: "Jun 2025 - Presente",
      description:
        "Aplicación web de pensamiento visual diseñada para ser extremadamente rápida y fluida. Herramienta de productividad que permite organizar ideas en un lienzo infinito con notas, texto, código, imágenes y archivos. Desarrollo con React Konva y Supabase para máxima eficiencia.",
      features: [
        "Canvas infinito con navegación ultra-fluida",
        "Objetos múltiples: notas, texto, código, imágenes",
        "Arquitectura moderna y escalable",
        "Persistencia en tiempo real con Supabase",
        "Autenticación y almacenamiento integrados",
      ],
      techStack: ["React", "React Konva", "PostgreSQL", "Supabase", "bolt.new"],
      image: "/images/canvasdesk01.jpeg",
      images: [
          '/images/canvasdesk01.jpeg',
          '/images/canvasdesk02.jpeg',
          '/images/canvasdesk03.jpeg',
          '/images/canvasdesk04.jpeg'
      ],
      delay: "0.3s",
      url: "https://youtu.be/AHH4o--7S2M",
    },
    {
      icon: "link",
      title: "urlz.lat",
      subtitle: "Acortador de URLs profesional con QR y analíticas",
      period: "Jul 2025 - Presente",
      description:
        "Plataforma web freemium de acortamiento de URLs con funcionalidades empresariales avanzadas. Incluye generación automática de códigos QR, REST APIs, webhooks y analíticas en tiempo real. Solución ideal para empresas que necesitan gestionar enlaces profesionalmente.",
      features: [
        "Acortamiento de URLs instantáneo",
        "Generación de códigos QR automática",
        "REST APIs para integraciones",
        "Webhooks para notificaciones",
        "Análisis de clicks y estadísticas",
      ],
            techStack: ['React', 'PostgreSQL', 'Supabase', 'REST APIs', 'bolt.new'],
            image: '/images/urlz01.jpg',
            images: ['/images/urlz01.jpg', '/images/urlz02.jpg'],
            delay: '0.4s',
            url: "https://urlz.lat/",

    },
    {
      icon: "music_note",
      title: "Website Profesor de Música",
      subtitle: "Plataforma web con sistema de reservas y CMS integrado",
      period: "Jul 2025 - Presente",
      description:
        "Sitio web full-stack profesional con sistema de reservas online, CMS para gestión de contenido y dashboard administrativo. Desarrollo con React 18.3, TypeScript y diseño mobile-first. Solución completa para profesores y profesionales independientes que necesitan agendar citas online.",
      features: [
        "Sistema de reservas de clases integrado",
        "CMS para gestión de contenido dinámico",
        "Dashboard administrativo completo",
        "Diseño mobile-first con Tailwind CSS",
        "Backend escalable con Supabase (BaaS)",
      ],
      techStack: [
        "React 18.3",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "CMS",
      ],
      image: "/images/web_musica01.jpeg",
      images: [
          '/images/web_musica01.jpeg',
          '/images/web_musica02.jpeg',
          '/images/web_musica03.jpeg'
      ],
      delay: "0.5s",
      url: "https://maestralaurakarol.netlify.app/",
    },
    {
      icon: "build",
      title: "AutoTaller Pro",
      subtitle: "Software de gestión integral para talleres automotrices",
      period: "Jul 2025 - Presente",
      description:
        "Sistema web de gestión integral para talleres mecánicos y servicios automotrices. Digitaliza procesos, gestiona clientes, inventario, órdenes de trabajo y facturación. Software personalizado desarrollado con React y TypeScript para optimizar operaciones diarias del taller.",
      features: [
        "Gestión completa de clientes y vehículos",
        "Control de inventario de repuestos",
        "Órdenes de trabajo digitalizadas",
        "Cotizaciones y facturación",
        "Reportes y estadísticas del negocio",
      ],
            techStack: ['React', 'TypeScript', 'Supabase', 'REST APIs', 'CMS'],
            image: '/images/web_taller01.jpeg',
            images: ['/images/web_taller01.jpeg', '/images/web_taller02.jpeg'],
            delay: '0.6s',
            url: "https://dtautotallerpro.netlify.app/",

    },
    {
      icon: "receipt",
      title: "¿Cuánto Me Toca?",
      subtitle: "Aplicación web chilena para dividir cuentas con IA",
      period: "2025 - Presente",
      description:
        "Aplicación web chilena para dividir cuentas de restaurante con tecnología OCR e inteligencia artificial. Escanea boletas automáticamente, ofrece múltiples métodos de división y permite compartir por WhatsApp. Diseño pixel art retro desarrollado con React y Google Vision API.",
      features: [
        "Múltiples métodos de división (equitativa, individual, etc.)",
        "Diseño pixel art retro inspirado en juegos clásicos",
        "Compartir resultados por WhatsApp",
        "Historial de cuentas divididas",
      ],
            techStack: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS'],
            proFeatures: [
                'OCR con IA para escaneo de boletas (Google Vision API)',
                'División inteligente por consumo individual',
                'Cálculo automático de propinas y descuentos',
                'Historial ilimitado',
                'Integración con MercadoPago para pagos directos'
            ],
            image: '/images/cuantometoca01.png',
            images: ['/images/cuantometoca01.png', '/images/cuantometoca02.png'],
            delay: '0.7s',
            url: "https://cuantometoca.netlify.app/",

    },
  ];

  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="applications-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1
              id="applications-heading"
              className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow"
            >
              Aplicaciones Web Personalizadas y{" "}
              <span className="text-primary">Software a Medida</span>
            </h1>
            <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
              Portfolio de aplicaciones web desarrolladas con React, TypeScript
              y tecnologías modernas para empresas en Chile
            </p>
          </header>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8" role="list">
            {appsData.map((app) => (
              <AppCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
