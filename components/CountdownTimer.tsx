// components/CountdownTimer.tsx

'use client';
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 justify-center items-center p-2 rounded-lg shadow-lg">
      <div className="text-center">
        <p className="text-4xl font-bold">{String(timeLeft.days).padStart(2, '0')}</p>
        <span>Jours</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</p>
        <span>Heures</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</p>
        <span>Minutes</span>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</p>
        <span>Secondes</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
