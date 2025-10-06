
import React, { useEffect } from 'react';
import Contact from '../components/Contact';

interface ContactPageProps {
  onFormSubmit: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onFormSubmit }) => {
    useEffect(() => {
        document.title = 'Dunatech - Contacto';
    }, []);

    return <Contact onFormSubmit={onFormSubmit} />;
};

export default ContactPage;