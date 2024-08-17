import React from 'react';
import Image from 'next/image';
import { TicketForm } from '../../components/TicketForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Home: React.FC = () => {
  return (
    <>
      <div className="relative w-full h-64 lg:h-96 top-15">
        <Image src="/headNouvel.png" alt="Image du jeu-concours" layout="fill" objectFit="cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4">Participez à notre jeu-concours exclusif !</h1>
          <p className="text-lg lg:text-xl mb-6">
            Gagnez des cadeaux incroyables en participant à notre tirage au sort.
          </p>
          <a
            href="#ticket-form"
            className="bg-[#8FB43A] text-white font-bold py-2 px-4 rounded hover:bg-[#7da32b] transition-colors"
          >
            Participer maintenant
          </a>
        </div>
      </div>

      <section className="container mx-auto  mt-8 lg:mt-16 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl text-[#8FB43A] font-bold text-gray-800">Comment se déroule le jeu-concours</h1>
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
            Grand tirage au sort final : Un an de thé dune valeur de 360€, tiré au sort sous contrôle dhuissier !
            <br />
            <strong className="text-gray-800  font-bold text-[#8FB43A]">
              Ne manquez pas cette chance de gagner des cadeaux exclusifs et de profiter du meilleur de Thé Tip Top !
            </strong>
          </p>
        </div>
      </section>

      <section id="ticket-form" className="container mx-auto my-16 px-4 lg:px-12 text-center">
        <TicketForm />
      </section>

      <section className="container mx-auto my-16 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center  text-[#8FB43A] text-gray-800">Ce que nos clients disent</h2>
        <TestimonialCarousel />
      </section>
    </>
  );
};

export default Home;
