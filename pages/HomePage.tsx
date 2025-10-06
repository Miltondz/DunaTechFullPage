
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Teasers from '../components/Teasers';
import Carousel from '../components/Carousel';

const HomePage: React.FC = () => {
    useEffect(() => {
        document.title = 'Dunatech - Inicio';
    }, []);
    return (
        <>
            <Hero />
            <section className="py-24 sm:py-32 flex justify-center bg-background-dark/30">
                <Teasers />
            </section>
             <section className="py-24 sm:py-32 flex justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                                Explora Nuestros <span className="text-primary">Dominios</span>
                            </h2>
                            <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                                Soluciones integrales que abarcan desde el desarrollo a medida hasta la consultoría estratégica.
                            </p>
                        </div>
                        <Carousel />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;