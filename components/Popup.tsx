
import React, { useState, useEffect } from 'react';
import { PopupType } from '../types';

export interface PopupProps {
    type?: PopupType;
    title: string;
    message: string;
    show: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ type = PopupType.Success, title, message, show, onClose }) => {
    const [shouldRender, setShouldRender] = useState(show);
    
    const isError = type === PopupType.Error;
    const iconName = isError ? 'warning' : 'task_alt';
    const iconColorClass = isError ? 'text-error-red' : 'text-primary';
    const hudOverlayClass = isError ? 'hud-overlay error' : 'hud-overlay';
    const shadowClass = isError ? 'shadow-error-red/30' : 'shadow-primary/20';
    const hoverColorClass = isError ? 'hover:text-error-red' : 'hover:text-primary';

    useEffect(() => {
        if (show) {
            setShouldRender(true);
        } else {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // Corresponds to fadeOut animation duration
            return () => clearTimeout(timer);
        }
    }, [show]);
    
    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`fixed inset-x-0 bottom-0 z-50 flex justify-center items-end p-4`}>
            <div className={`${show ? 'animate-slideInUp' : 'animate-fadeOut'} ${hudOverlayClass} bg-background-dark/80 backdrop-blur-md rounded-xl p-6 shadow-2xl ${shadowClass} flex items-start gap-4 max-w-lg w-full`}>
                <span className={`material-symbols-outlined ${iconColorClass} text-3xl`}>{iconName}</span>
                <div className="flex-grow">
                    <h3 className="font-display text-xl font-bold text-text-dark">{title}</h3>
                    <p className="text-text-dark/80 mt-1">{message}</p>
                </div>
                <button className={`text-text-dark/50 ${hoverColorClass} transition-colors`} onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    );
};

export default Popup;