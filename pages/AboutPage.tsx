
import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Dunatech - Sobre Nosotros';
    }, []);
    return <About />;
};

export default AboutPage;
