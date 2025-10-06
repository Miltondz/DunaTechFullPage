
import React, { useEffect } from 'react';
import Applications from '../components/Applications';

const ApplicationsPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Dunatech - Aplicaciones';
    }, []);
    return <Applications />;
};

export default ApplicationsPage;
