import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`
                fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-2 sm:p-3 rounded-full 
                bg-primary/80 text-white backdrop-blur-sm
                hud-overlay
                transition-all duration-300 ease-in-out
                hover:bg-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
            aria-label="Volver arriba"
            title="Volver arriba"
        >
            <span className="material-symbols-outlined text-2xl sm:text-3xl leading-none">
                rocket_launch
            </span>
        </button>
    );
};

export default ScrollToTopButton;
