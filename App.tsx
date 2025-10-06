
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ApplicationsPage from './pages/ApplicationsPage';
import ContactPage from './pages/ContactPage';
import { PopupType } from './types';

const App: React.FC = () => {
    const [popupConfig, setPopupConfig] = useState({
        show: false,
        title: '',
        message: '',
        type: PopupType.Success,
    });

    const handleContactSuccess = () => {
        setPopupConfig({
            show: true,
            title: '¡Mensaje Enviado!',
            message: 'Gracias por contactarnos. Te responderemos a la brevedad.',
            type: PopupType.Success,
        });
    };
    
    const closePopup = () => {
        setPopupConfig(prev => ({ ...prev, show: false }));
    };

    return (
        <Layout popupConfig={popupConfig} onPopupClose={closePopup}>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="sobre-nosotros" element={<AboutPage />} />
                <Route path="servicios" element={<ServicesPage />} />
                <Route path="aplicaciones" element={<ApplicationsPage />} />
                <Route path="contacto" element={<ContactPage onFormSubmit={handleContactSuccess} />} />
            </Routes>
        </Layout>
    );
};

export default App;