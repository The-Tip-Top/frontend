'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { TicketForm } from '@/components/TicketForm';
import Link from 'next/link';
const  Home: React.FC = () => {
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
    <>
      <h1 className="sr-only">
        Jeu concours Thétiptop - Bienvenue chez Thétiptop, votre magasin de Thé Bio à Nice. Découvrez Thetiptop Nice,
        votre nouvelle boutique de vente de thé bio à Nice et participez à notre jeu-concours exclusif ! Thétiptop est
        votre destination de choix pour découvrir une vaste sélection de thés bio à Nice. Située en plein cœur de la
        ville, notre nouvelle boutique vous offre une expérience unique autour du thé, axée sur le bien-être et la
        relaxation. Nous proposons des thés bio pour le bien-être : thé détox, thé minceur, thé vert, thé noir, thé blanc,
        thé rouge, thé oolong, thé matcha, thé bio en vrac, en sachet et en boîte.
      </h1>

      <div className="relative w-full h-96 lg:h-[500px]">
        <Image src="/newhead.png" alt="Image du jeu-concours" fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Participez à notre jeu-concours exclusif !</h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4">
            Thetiptop - Votre Boutique de Thé Bio à Nice | Jeu Concours pour l&apos;Ouverture
          </p>
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4">
            <div
              className="flex flex-col items-center space-y-2 bg-[#505050] p-3 rounded-lg shadow-lg"
              aria-labelledby="countdown-title"
            >
              <h2
                id="countdown-title"
                className="text-2xl font-semibold text-white mb-2"
                style={{ color: '#F9F9F9' }}  // Assurer un bon contraste
              >
                Le grand tirage dans
              </h2>
              <div
                className="flex space-x-4 justify-center items-center  p-2 rounded-lg shadow-lg"
                aria-live="polite"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold" aria-label={`Il reste ${timeLeft.days} jours`}>
                    {String(timeLeft.days).padStart(2, '0')}
                  </p>
                  <span>Jours</span>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" aria-label={`Il reste ${timeLeft.hours} heures`}>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </p>
                  <span>Heures</span>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" aria-label={`Il reste ${timeLeft.minutes} minutes`}>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </p>
                  <span>Minutes</span>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold" aria-label={`Il reste ${timeLeft.seconds} secondes`}>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </p>
                  <span>Secondes</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            role='link'
            href="/sign-in?concour=true"
            className="text-white bg-[#6AA843] font-bold py-3 px-6 rounded-full transition-colors shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#505050] hover:bg-[#5A9437]"
            aria-label="Cliquez ici pour participer au jeu concours"
          >
            Participer maintenant
          </Link>

        </div>
      </div>
      <section className="container mx-auto mt-8 lg:mt-16 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Comment se déroule le jeu-concours</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Découvrez Thetiptop, votre nouvelle boutique de vente de thé bio à Nice. Profitez de notre jeu concours pour
            célébrer l&apos;ouverture de notre nouveau magasin et explorez notre gamme de thés relaxants, parfaits pour
            le bien-être.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Du 01/09/2024 au 30/09/2024, chaque achat supérieur à 49€ chez Thé Tip Top vous permet de recevoir un ticket
            avec un code unique de 10 caractères. Entrez ce code sur notre application pour participer à notre tirage au
            sort et gagner des cadeaux incroyables !
          </p>

          <div className="flex justify-center mt-4">
            <ul className="text-lg text-[#8FB43A] font-semibold leading-relaxed text-left">
              <li className="flex items-center">
                <span className="mr-2">•</span> Infuseurs à thé
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Boîtes de thé bio détox ou infusion
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Boîtes de thé signature
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span> Coffrets découverte
              </li>
            </ul>
          </div>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Vous avez 30 jours supplémentaires après la fin du concours pour vérifier vos gains en ligne.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Grand tirage au sort final : Un an de thé d&apos;une valeur de 360€, tiré au sort sous contrôle
            d&apos;huissier !
            <br />
            <strong className="font-bold text-[#8FB43A]">
              Ne manquez pas cette chance de gagner des cadeaux exclusifs et de profiter du meilleur de Thé Tip Top !
            </strong>
          </p>
        </div>
      </section>

      { <section id="ticket-form" className="container mx-auto my-16 px-4 lg:px-12 text-center">
        <TicketForm />
      </section> }

      <section className="container mx-auto my-16 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#8FB43A]">Ce que disent nos clients</h2>
        <TestimonialCarousel />
      </section>
    </>
  );
};

export default Home;
