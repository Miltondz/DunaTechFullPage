
import React from 'react';

interface ContactFormProps {
    isOpen: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would handle form submission logic
        alert("Formulario de contacto enviado (simulación).");
    };
    
    return (
        <div id="contact-section" className={`w-full max-w-xl text-center mt-8 ${isOpen ? 'open' : ''}`}>
            <div className="w-full max-w-xl text-center">
                <h2 className="font-display text-3xl font-bold text-dark-blue dark:text-text-dark">Contáctanos</h2>
                <p className="mt-4 text-lg text-text-light/70 dark:text-text-dark/70">Para consultas y acceso anticipado, por favor contáctanos.</p>
                <form className="mt-6 mx-auto max-w-md space-y-4 text-left" onSubmit={handleSubmit}>
                    <div>
                        <label className="sr-only" htmlFor="nombre">Nombre</label>
                        <input className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:ring-0 focus:border-primary transition-all duration-300" id="nombre" name="nombre" placeholder="Nombre" type="text" required />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="correo">Correo</label>
                        <input className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:ring-0 focus:border-primary transition-all duration-300" id="correo" name="correo" placeholder="Correo" type="email" required />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="consulta">Consulta</label>
                        <textarea className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 focus:ring-0 focus:border-primary transition-all duration-300" id="consulta" name="consulta" placeholder="Consulta" rows={4} required></textarea>
                    </div>
                    <div className="text-center">
                        <button className="inline-block bg-primary text-white font-semibold rounded-md py-3 px-8 hover:bg-light-blue transition-all duration-300 hover:tracking-widest" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;