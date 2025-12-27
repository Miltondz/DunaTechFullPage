import React, { useState, useCallback, useEffect } from 'react';
import { CarouselSlide } from '../types';

const slides: CarouselSlide[] = [
    {
        id: 1,
        imageUrl: "/images/servicios001.png",
        title: "Desarrollo de Software a Medida",
        description: "Desarrollo de aplicaciones web, de escritorio y móviles personalizadas. Modernización de código legacy VB6 a .NET. Prototipado rápido para validar ideas antes de invertir.",
        alt: "Desarrollo de software a medida para empresas en Chile - Aplicaciones web y móviles personalizadas | Dunatech"
    },
    {
        id: 2,
        imageUrl: "/images/Investigacion_UX.jpg",
        title: "Investigación UX y Quality Assurance",
        description: "Testing de usabilidad, investigación de usuarios y diseño UX/UI. QA profesional con testing cross-browser y accesibilidad WCAG. Reduce abandono hasta 45% y errores en 62%.",
        alt: "Investigación UX y testing de usabilidad profesional - Diseño centrado en usuarios y QA | Dunatech Chile"
    },
    {
        id: 3,
        imageUrl: "/images/Integracion_BD.jpg",
        title: "Integración y Bases de Datos",
        description: "Integración de sistemas con APIs REST, SOAP y Web Services. Optimización de bases de datos y procedimientos almacenados. Automatización con Make y n8n.",
        alt: "Integración de sistemas y optimización de bases de datos - APIs REST, SOAP y automatización | Dunatech"
    },
    {
        id: 4,
        imageUrl: "/images/Implementación_IA.jpg",
        title: "Consultoría e Implementación con IA",
        description: "Consultoría e implementación de soluciones de Inteligencia Artificial. Machine Learning, automatización inteligente y análisis predictivo para optimizar tu negocio con tecnología de vanguardia.",
        alt: "Consultoría e implementación de Inteligencia Artificial - Machine Learning y automatización inteligente para empresas | Dunatech Chile"
    },
    {
        id: 5,
        imageUrl: "/images/SystemasLegacy.jpg",
        title: "Modernización de Sistemas Legacy",
        description: "Modernización de aplicaciones VB6, Visual Basic y sistemas heredados. Mantenimiento preventivo, actualizaciones de seguridad y migración a tecnologías actuales sin perder funcionalidad.",
        alt: "Modernización de sistemas legacy VB6 y Visual Basic - Migración a tecnologías modernas sin pérdida de datos | Dunatech Chile"
    }
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    useEffect(() => {
        // MODIFICACIÓN: Cambia el valor '5000' para ajustar la velocidad del carrusel automático (en milisegundos).
        // Por ejemplo, 10000 para 10 segundos.
        const slideInterval = setInterval(goToNext, 5000);

        // Limpia el intervalo cuando el componente se desmonta o cuando el usuario navega manualmente.
        // Esto previene fugas de memoria y reinicia el temporizador.
        return () => clearInterval(slideInterval);
    }, [goToNext]);


    return (
        <div className="relative">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`grid-cols-1 md:grid-cols-2 gap-8 items-center ${index === currentIndex ? 'grid animate-fadeIn' : 'hidden'}`}>
                    <div className="aspect-video w-full overflow-hidden rounded-xl border border-primary/20 shadow-[0_0_20px_theme(colors.primary/0.2)]">
                        <img 
                            src={slide.imageUrl} 
                            alt={slide.alt || slide.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-display text-2xl font-bold text-dark-blue dark:text-text-dark">{slide.title}</h3>
                        <p className="mt-2 text-text-light/70 dark:text-text-dark/70">{slide.description}</p>
                    </div>
                </div>
            ))}
            <div className="absolute inset-y-0 left-0 flex items-center -ml-4 sm:-ml-10">
                <button onClick={goToPrevious} className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all duration-300 hover:scale-110">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-4 sm:-mr-10">
                <button onClick={goToNext} className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all duration-300 hover:scale-110">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;