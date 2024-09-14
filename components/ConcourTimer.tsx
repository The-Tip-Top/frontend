'use client'
import { useEffect, useState } from 'react'

const ConcourTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-10-30T23:59:59'); // Date de fin du jeu
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();


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
  }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4">
      <div
        className="flex flex-col items-center space-y-2 p-3 rounded-lg"
        aria-labelledby="countdown-title"
      >
        <h2
          id="countdown-title"
          className="text-xl font-semibold text-white mb-2"
          style={{ color: '#F9F9F9' }}  // Assurer un bon contraste
        >
          Le grand tirage dans
        </h2>
        <div
          className="flex space-x-4 justify-center items-center  p-2 rounded-lg"
          aria-live="polite"
        >
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold" aria-label={`Il reste ${timeLeft.days} jours`}>
              {String(timeLeft.days).padStart(2, '0')}
            </p>
            <span>Jours</span>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold" aria-label={`Il reste ${timeLeft.hours} heures`}>
              {String(timeLeft.hours).padStart(2, '0')}
            </p>
            <span>Heures</span>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold" aria-label={`Il reste ${timeLeft.minutes} minutes`}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </p>
            <span>Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold" aria-label={`Il reste ${timeLeft.seconds} secondes`}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </p>
            <span>Secondes</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConcourTimer
