
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
    onFormSubmit: () => void;
}

const InfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        </div>
        <div>
            <h4 className="text-lg font-semibold text-text-dark font-display">{title}</h4>
            <div className="text-text-dark/70">{children}</div>
        </div>
    </div>
);

const Contact: React.FC<ContactProps> = ({ onFormSubmit }) => {
    const [state, handleSubmit] = useForm("mwprnoja");
    
    // Show success message after form submission
    React.useEffect(() => {
        if (state.succeeded) {
            onFormSubmit();
        }
    }, [state.succeeded, onFormSubmit]);

    return (
        <section className="pb-24 sm:pb-32 bg-background-dark/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue dark:text-text-dark mb-6 font-display animate-glow">
                            Hablemos de tu <span className="text-primary">Proyecto</span>
                        </h2>
                        <p className="text-xl text-gris-grafito dark:text-text-dark/70 max-w-3xl mx-auto">
                            Estamos listos para transformar tus desafíos tecnológicos en oportunidades de crecimiento
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="bg-background-dark/50 p-8 rounded-2xl shadow-xl hud-overlay backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-text-dark mb-6 font-display">Información de Contacto</h3>
                            <div className="space-y-6">
                                <InfoItem icon="location_on" title="Ubicación">
                                    <p>Santiago, Región Metropolitana, Chile</p>
                                </InfoItem>
                                <InfoItem icon="mail" title="Email">
                                    <p>dunatech.site@gmail.com</p>
                                </InfoItem>
                                <InfoItem icon="call" title="Teléfono">
                                    <p>+1 (555) 123-4567</p>
                                </InfoItem>
                                <InfoItem icon="schedule" title="Horario">
                                    <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                                    <p className="text-sm text-text-dark/50">Disponible para proyectos urgentes</p>
                                </InfoItem>
                            </div>
                        </div>

                        <div className="bg-background-dark/50 p-8 rounded-2xl shadow-xl hud-overlay backdrop-blur-sm">
                             <h3 className="text-2xl font-bold text-text-dark mb-6 font-display">Envíanos un Mensaje</h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="sr-only">Nombre</label>
                                        <input 
                                            id="name"
                                            type="text" 
                                            name="name"
                                            className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-dark placeholder-text-dark/50 focus:ring-0" 
                                            placeholder="Tu nombre" 
                                            required 
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input 
                                            id="email"
                                            type="email" 
                                            name="email"
                                            className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-dark placeholder-text-dark/50 focus:ring-0" 
                                            placeholder="tu@email.com" 
                                            required 
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="project-type" className="sr-only">Tipo de Proyecto</label>
                                    <select 
                                        id="project-type"
                                        name="project-type"
                                        className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-dark placeholder-text-dark/50 focus:ring-0" 
                                        required
                                    >
                                        <option className="bg-background-dark" value="">Seleccionar tipo de proyecto</option>
                                        <option className="bg-background-dark" value="web">Desarrollo Web</option>
                                        <option className="bg-background-dark" value="db">Bases de Datos</option>
                                        <option className="bg-background-dark" value="integration">Integración de Sistemas</option>
                                        <option className="bg-background-dark" value="consulting">Consultoría IT</option>
                                        <option className="bg-background-dark" value="other">Otro</option>
                                    </select>
                                    <ValidationError prefix="Project Type" field="project-type" errors={state.errors} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Mensaje</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        rows={4} 
                                        className="form-input w-full bg-transparent dark:bg-background-dark/50 border border-primary/30 rounded-md py-3 px-4 text-text-dark placeholder-text-dark/50 focus:ring-0" 
                                        placeholder="Cuéntanos sobre tu proyecto..." 
                                        required
                                    ></textarea>
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={state.submitting}
                                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-light-blue hover:tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="material-symbols-outlined align-middle mr-2">send</span>
                                    {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;