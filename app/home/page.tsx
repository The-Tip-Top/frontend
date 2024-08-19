import React from 'react';
import Image from 'next/image';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { TicketForm } from '@/components/TicketForm';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="sr-only">
        Jeu concours Thétiptop
        Bienvenue chez Thétiptop - Votre Expert en Thé Bio à Nice.
        Découvrez Thetiptop Nice, votre nouvelle boutique de vente de thé bio à Nice et participez à notre jeu-concours exclusif !
        Thétiptop est votre destination de choix pour découvrir une vaste sélection de thés bio à Nice. Située en plein cœur de la ville 
        de Nice, notre nouvelle boutique vous offre une expérience unique autour du thé, axée sur le bien-être et la relaxation.
        Thétiptop, c'est bien plus qu'une boutique de thé. Nous sommes une communauté de passionnés qui croit au pouvoir des ingrédients naturels 
        pour le bien-être. Installée à Nice, notre boutique vous propose une expérience sensorielle unique autour du thé bio.
        Nous avons des thés bio pour le bien-être, thé détox, thé minceur, thé vert, thé noir, thé blanc, thé rouge, thé oolong, thé matcha, thé bio en vrac, thé bio en sachet, thé bio en boîte.
      </h1>
      {/* <div className="relative w-full h-96 tp:20 lg:h-[500px]  absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
        <Image src="/headNouvel.png" alt="Image du jeu-concours" layout="fill" objectFit="cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4">Participez à notre jeu-concours exclusif !</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
            Gagnez des cadeaux incroyables en participant à notre tirage au sort.
          </p>
          <a
            href="#ticket-form"
            className="bg-[#8FB43A] text-white font-bold py-2 px-4 rounded hover:bg-[#7da32b] transition-colors"
          >
            Participer maintenant
          </a>
        </div>
      </div> */}
      <div className="relative w-full h-96 lg:h-[500px]">
        <Image src="/headNouvel.png" alt="Image du jeu-concours" layout="fill" objectFit="cover" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4 mt-8 lg:mt-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4">Participez à notre jeu-concours exclusif !</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6">
          Thetiptop - Votre Boutique de Thé Bio à Nice | Jeu Concours pour l'Ouverture
          </p>
          <a
            href="#ticket-form"
            className="bg-[#8FB43A] text-white font-bold py-2 px-4 rounded hover:bg-[#7da32b] transition-colors"
          >
            Participer maintenant
          </a>
        </div>
      </div>

      <section className="container mx-auto mt-8 lg:mt-16 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Comment se déroule le jeu-concours</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Découvrez Thetiptop, votre nouvelle boutique de vente de thé bio à Nice. Profitez de notre jeu concours 
            pour célébrer l'ouverture et explorez notre gamme de thés relaxants, parfaits pour le bien-être.
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
            Grand tirage au sort final : Un an de thé d'une valeur de 360€, tiré au sort sous contrôle d'huissier !
            <br />
            <strong className=" font-bold text-[#8FB43A]">
              Ne manquez pas cette chance de gagner des cadeaux exclusifs et de profiter du meilleur de Thé Tip Top !
            </strong>
          </p>
        </div>
      </section>

      <section id="ticket-form" className="container mx-auto my-16 px-4 lg:px-12 text-center">
        <TicketForm />
      </section>

      <section className="container mx-auto my-16 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#8FB43A] text-gray-800">Ce que disent nos clients</h2>
        <TestimonialCarousel />
      </section>
    </>
  );
};

export default Home;
