
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Popup, { PopupProps } from './Popup';
import ScrollToTopButton from './ScrollToTopButton';
import ParticleBackground from './ParticleBackground';
import ScrollToTopOnNavigate from './ScrollToTopOnNavigate';

interface LayoutProps {
    children: React.ReactNode;
    popupConfig: Omit<PopupProps, 'onClose'>;
    onPopupClose: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, popupConfig, onPopupClose }) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    useEffect(() => {
        // Set dark mode by default
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <ScrollToTopOnNavigate />
            <div className="relative dark:bg-gradient-to-br dark:from-dark-blue dark:via-background-dark dark:to-dark-blue flex-grow dark:[background-size:400%_400%] dark:animate-gradientWave">
                <ParticleBackground />
                <Header />
                <main className={`relative z-[5] flex h-full grow flex-col ${isHomePage ? '' : 'pt-28'}`}>
                    {children}
                </main>
            </div>
            <Footer />
            <Popup
                type={popupConfig.type}
                title={popupConfig.title}
                message={popupConfig.message}
                show={popupConfig.show}
                onClose={onPopupClose}
            />
            <ScrollToTopButton />
        </div>
    );
};

export default Layout;