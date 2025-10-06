import React, { useState, useEffect, useCallback } from 'react';
import { CountdownTime } from '../types';

const CountdownUnit: React.FC<{ value: number; label: string; }> = ({ value, label }) => (
    <div className="flex flex-col gap-1 hud-overlay p-4 rounded-lg bg-background-dark/30">
        <span className="font-display text-5xl font-bold text-primary sm:text-6xl">{String(value).padStart(2, '0')}</span>
        <span className="text-sm uppercase tracking-wider text-text-light/50 dark:text-text-dark/50">{label}</span>
    </div>
);

const Countdown: React.FC = () => {
    // --- MODIFICACIÓN DE LA FECHA DE LANZAMIENTO ---
    // Para cambiar la fecha de finalización del contador, puedes usar dos métodos:
    
    // MÉTODO 1: Establecer una fecha y hora específicas.
    // Descomenta la siguiente línea, comenta el MÉTODO 2, y edítala con tu fecha objetivo.
    // Formato: 'YYYY-MM-DDTHH:mm:ss'
    // const [launchDate] = useState(new Date('2025-01-01T00:00:00'));

    // MÉTODO 2: Establecer una duración desde el momento actual.
    // Modifica los valores en la función de inicialización de useState.
    const [launchDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 25); // Añade 25 días desde ahora
        date.setHours(date.getHours() + 12); // Añade 12 horas
        date.setMinutes(date.getMinutes() + 30); // Añade 30 minutos
        date.setSeconds(date.getSeconds() + 45); // Añade 45 segundos
        return date;
    });
    
    const calculateTimeLeft = useCallback((): CountdownTime => {
        const difference = +launchDate - +new Date();
        let timeLeft: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }, [launchDate]);

    const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <div className="grid grid-cols-4 gap-4 text-center">
            <CountdownUnit value={timeLeft.days} label="Días" />
            <CountdownUnit value={timeLeft.hours} label="Horas" />
            <CountdownUnit value={timeLeft.minutes} label="Minutos" />
            <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
    );
};

export default Countdown;