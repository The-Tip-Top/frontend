import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>À Propos de Thé Tip Top | Boutique de Thé Bio à Nice</title>
        <meta
          name="description"
          content="Découvrez Thé Tip Top, votre boutique de thé bio à Nice. Profitez de notre jeu-concours pour célébrer l'ouverture de notre 10ème boutique."
        />
        <meta
          name="keywords"
          content="Thé bio, Nice, boutique de thé, Thé Tip Top, jeu concours, thé de qualité, thé nature, cadeaux, bien-être"
        />
        <meta property="og:title" content="À Propos de Thé Tip Top | Boutique de Thé Bio à Nice" />
        <meta property="og:description" content="Découvrez Thé Tip Top, votre boutique de thé bio à Nice, et participez à notre jeu-concours pour célébrer l'ouverture de notre 10ème boutique." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-[#8FB43A] text-center mb-8">À Propos de Thé Tip Top</h1>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Notre Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Chez <strong>Thé Tip Top</strong>, nous croyons en l'art du thé comme un moment de détente, de découverte et de bien-être. 
              Avec notre nouvelle expérience au cœur de la ville de Nice, riche en saveurs, notre boutique est un havre de paix où vous 
              pouvez échapper au tumulte de la vie quotidienne et vous plonger dans un monde de délices aromatiques.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Qualité et Durabilité</h3>
            <p className="text-lg text-gray-700 mb-6">
              Avec <strong>Thé Tip Top</strong>, la passion du thé va au-delà de sa simple préparation. Nous nous engageons à offrir à nos clients 
              une sélection exquise de thés bio de la plus haute qualité, soigneusement sélectionnés pour leur saveur riche et dans le plus grand 
              respect de l'environnement. Chaque feuille de thé que nous proposons est un témoignage de notre engagement envers la durabilité, 
              le respect de l'environnement et des agriculteurs engagés.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Notre Présence à Nice</h3>
            <p className="text-lg text-gray-700 mb-6">
              En tant que nouveaux arrivants dans la ville de Nice et désireux de nous faire connaître, c'est avec une grande joie que nous partageons 
              notre amour du thé dans cette magnifique ville. Pour célébrer l'ouverture de notre <strong>10ème boutique à Nice</strong>, nous organisons un 
              jeu-concours très excitant dont tous les tickets seront gagnants.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Participez à Notre Jeu-Concours</h3>
            <p className="text-lg text-gray-700 mb-6">
              Après chaque achat de notre délicieux thé, vous recevrez un ticket gagnant, garantissant à chacun une surprise spéciale. Des remises exclusives, 
              des cadeaux surprises et même la chance de remporter de fabuleux paniers cadeaux remplis de nos thés les plus populaires vous attendent. 
              Que vous soyez un passionné de thé ou un novice curieux, <strong>Thé Tip Top</strong> a toujours quelque chose de spécial pour vous.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Vous trouverez des gammes de thé de haute qualité qui vous seront présentées par nos équipes toujours prêtes à vous accueillir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
