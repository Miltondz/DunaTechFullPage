
import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Dunatech - Servicios';
    }, []);
    return <Services />;
};

export default ServicesPage;
