import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>À Propos de Thé Tip Top | Boutique de Thé Bio à Nice</title>
        <meta
          name="description"
          content="Découvrez Thé Tip Top, votre boutique de thé bio à Nice. Profitez de notre jeu-concours et de nos thés et infusions : rooibos, thés verts, thés noirs, et bien plus."
        />
        <meta
          name="keywords"
          content="Thé bio, Nice, boutique de thé, Thé Tip Top, jeu concours, rooibos, thés verts, thés noirs, Earl Grey, agriculture biologique, tisanes, théière, infuser, dégustation, fruits rouges"
        />
        <meta property="og:title" content="À Propos de Thé Tip Top | Boutique de Thé Bio à Nice" />
        <meta
          property="og:description"
          content="Découvrez Thé Tip Top, votre boutique de thé bio à Nice, et participez à notre jeu-concours pour célébrer l'ouverture de notre 10ème boutique, avec des thés et infusions de qualité."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://dsp5-archi-022a-4-5-g2.fr/home/about" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#8FB43A] text-center mb-8">
            À Propos de Thé Tip Top
          </h1>

          <article id='article' className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#8FB43A] text-center mb-6">
              Notre Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Chez <strong>Thé Tip Top</strong>, nous croyons en l'art du thé comme un moment de détente, de découverte
              et de bien-être. Que vous soyez amateur de <strong>thés verts</strong>, <strong>thés noirs</strong> ou
              d'<strong>infusions</strong>, nous proposons une large sélection de thés bio, soigneusement sélectionnés.
              Notre boutique, située au cœur de Nice, vous invite à déguster des thés de qualité supérieure dans une
              atmosphère chaleureuse.
            </p>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#8FB43A] text-center mb-4">
              Qualité et Durabilité
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Avec <strong>Thé Tip Top</strong>, chaque tasse de thé est un moment d'exception. Nous nous engageons à
              offrir des <strong>thés et infusions</strong> issus de l'<strong>agriculture biologique</strong>, comme
              notre thé vert de Chine, ou encore nos infusions parfumées aux saveurs 
              fruits rouges et gingembre.
            </p>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#8FB43A] text-center mb-4">
              Notre Présence à Nice
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              En tant que maison de thé passionnée et nouveaux arrivants dans la ville de Nice, nous célébrons l'ouverture de notre <strong>10ème boutique à Nice</strong>.
              À cette occasion, nous organisons un jeu-concours où vous pourrez gagner des infusions, des thés menthe, des thés verts aromatisés et des paniers remplis de nos <strong>meilleurs thés</strong>, comme notre
              célèbre <strong>Earl Grey</strong> à la <strong>bergamote</strong> et nos <strong>thés parfumés</strong>
              aux <strong>agrumes</strong>. Nous sommes venus ici partager avec vous notre amour du thé dans cette magnifique ville.
            </p>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#8FB43A] text-center mb-4">
              Participez à Notre Jeu-Concours
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Après chaque achat de notre délicieux thé, vous recevrez un ticket gagnant, garantissant à chacun une
              surprise spéciale. Au delà de nos thés fruits rouges et ceux au goùt de gingembre provenant d'une agriculture biologique, des cadeaux surprises et même la chance de remporter de
              fabuleux paniers cadeaux remplis de nos thés les plus populaires vous attendent. Que vous soyez un
              passionné de thé ou un novice curieux, <strong>Thé Tip Top</strong> a toujours quelque chose de spécial
              pour vous afin de vous plonger dans l'univers des saveurs devant votre tasse de thé.
            </p>

            <p className="text-base md:text-lg text-gray-700 mb-6">
              Nos équipes vous attendent pour vous faire découvrir les merveilles du thé et de l'infusion. Chaque tasse
              que vous dégustez dans notre <strong>maison de thé</strong> est un moment de plaisir.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;