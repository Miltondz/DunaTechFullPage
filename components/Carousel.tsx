import React, { useState, useCallback, useEffect } from 'react';
import { CarouselSlide } from '../types';

const slides: CarouselSlide[] = [
    {
        id: 1,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1gUXeWeyet7bX25Vd2T1S9-oaWHDtN_cYq7ulEsckw2QmJGQea_ONJtsumQdd3NoHd5hI2fGeRYj7j3NdBSN9QJir49na8lXM0QBCS5dwwdHNw38-hWFKn4Q0DvaH29vkHS4kPMMZAnXZGHxN0L2rKiuTDj_1dbvHKICnBu4C4B6kVeZaVpCAm6kwuGGtl48cxaDEMAhItny4pR5LTHiJlSPdn3NzMwbJoedheKgIy6afXp1dNi1TsQyK2nX64YaC6IHmb58ewIo",
        title: "Desarrollo de Software a Medida",
        description: "Creamos soluciones de software personalizadas que se alinean perfectamente con los objetivos de tu negocio, optimizando procesos y potenciando el crecimiento."
    },
    {
        id: 2,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0sVs3ERsnSN3gj8mENwGsCA62yIda7vgX65IESy1C_FsL8chMGYAFM1wZqyIjnYyv1OS-uEXWJ2gX8NFK1talOX__PobSEyCTK9jUDMj8nF2c1hegf_Up2ikOzmQaq9drbZTAW0Yi7CfYNzLGYRBOuMQwPehVBBxZlUNCzTzv3BZ6zMZ_rYpyScNBbPG5evbC-8OeV5NGwasQnuCInwHYbMYkaXZkxNx2c5X9KeKY9RdyaRyWKVwGmvh-q3dx7mDYFWAs3nW48pU",
        title: "Consultoría Tecnológica",
        description: "Nuestros expertos te guían para adoptar las tecnologías más adecuadas que impulsen tu estrategia y te mantengan a la vanguardia."
    },
    {
        id: 3,
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0sVs3ERsnSN3gj8mENwGsCA62yIda7vgX65IESy1C_FsL8chMGYAFM1wZqyIjnYyv1OS-uEXWJ2gX8NFK1talOX__PobSEyCTK9jUDMj8nF2c1hegf_Up2ikOzmQaq9drbZTAW0Yi7CfYNzLGYRBOuMQwPehVBBxZlUNCzTzv3BZ6zMZ_rYpyScNBbPG5evbC-8OeV5NGwasQnuCInwHYbMYkaXZkxNx2c5X9KeKY9RdyaRyWKVwGmvh-q3dx7mDYFWAs3nW48pU",
        title: "Soluciones en la Nube",
        description: "Migramos, gestionamos y optimizamos tu infraestructura en la nube para garantizar escalabilidad, seguridad y eficiencia."
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
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${slide.imageUrl}")` }}></div>
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