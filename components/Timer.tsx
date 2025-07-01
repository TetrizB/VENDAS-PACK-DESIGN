
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const initialTime = 12 * 60 * 60; // 12 hours in seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };

    const { hours, minutes, seconds } = formatTime(timeLeft);

    return (
        <div className="mt-8">
            <p className="text-lg text-white font-semibold mb-3">⏰ Restam apenas...</p>
            <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <div className="text-center bg-gray-900/50 p-3 rounded-lg w-20 md:w-24">
                    <p className="text-3xl md:text-4xl font-bold text-yellow-300">{hours}</p>
                    <p className="text-xs uppercase text-gray-400">Horas</p>
                </div>
                 <span className="text-3xl font-bold text-yellow-300">:</span>
                <div className="text-center bg-gray-900/50 p-3 rounded-lg w-20 md:w-24">
                    <p className="text-3xl md:text-4xl font-bold text-yellow-300">{minutes}</p>
                    <p className="text-xs uppercase text-gray-400">Minutos</p>
                </div>
                 <span className="text-3xl font-bold text-yellow-300">:</span>
                <div className="text-center bg-gray-900/50 p-3 rounded-lg w-20 md:w-24">
                    <p className="text-3xl md:text-4xl font-bold text-yellow-300">{seconds}</p>
                    <p className="text-xs uppercase text-gray-400">Segundos</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
