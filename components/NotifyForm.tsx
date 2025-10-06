
import React, { useState } from 'react';

interface NotifyFormProps {
    onSuccess: () => void;
    onError: () => void;
}

const NotifyForm: React.FC<NotifyFormProps> = ({ onSuccess, onError }) => {
    const [email, setEmail] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const emailInput = form.elements.namedItem('email-notify') as HTMLInputElement;

        if (emailInput.checkValidity()) {
            setIsInvalid(false);
            onSuccess();
            setEmail('');
        } else {
            setIsInvalid(true);
            onError();
        }
    };

    return (
        <form className="flex items-center gap-4" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="email-notify">Tu correo electrónico</label>
            <input
                className={`form-input flex-grow bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:ring-0 focus:border-primary transition-all duration-300 ${isInvalid ? 'invalid' : ''}`}
                id="email-notify"
                name="email-notify"
                placeholder="Introduce tu correo electrónico"
                required
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    if (isInvalid) setIsInvalid(false);
                }}
            />
            <button className="inline-block bg-primary text-white font-semibold rounded-md py-3 px-8 hover:bg-light-blue transition-all duration-300 hover:tracking-widest flex-shrink-0" type="submit">
                Mantenme Informado
            </button>
        </form>
    );
};

export default NotifyForm;
