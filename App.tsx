
import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PopupType } from './types';

// Lazy load de páginas para code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogArticle = lazy(() => import('./components/BlogArticle'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-background-dark">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
            <p className="text-primary text-xl font-display">Cargando...</p>
        </div>
    </div>
);

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
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="sobre-nosotros" element={<AboutPage />} />
                    <Route path="servicios" element={<ServicesPage />} />
                    <Route path="aplicaciones" element={<ApplicationsPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="blog/:slug" element={<BlogArticle />} />
                    <Route path="contacto" element={<ContactPage onFormSubmit={handleContactSuccess} />} />
                </Routes>
            </Suspense>
        </Layout>
    );
};

export default App;