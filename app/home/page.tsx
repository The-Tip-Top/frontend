
import Image from 'next/image';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ConcourTimer from '@/components/ConcourTimer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="sr-only">
        Jeu concours Thétiptop - Bienvenue chez Thétiptop, votre magasin de Thé Bio à Nice. Découvrez Thetiptop Nice,
        votre nouvelle boutique de vente de thé bio à Nice et participez à notre jeu-concours exclusif ! Thétiptop est
        votre destination de choix pour découvrir une vaste sélection de thés bio à Nice. Située en plein cœur de la
        ville, notre nouvelle boutique vous offre une expérience unique autour du thé, axée sur le bien-être et la
        relaxation. Nous proposons des thés bio pour le bien-être : thé détox, thé minceur, thé vert, thé noir, thé blanc,
        thé rouge, thé oolong, thé matcha, thé bio en vrac, en sachet et en boîte dsp5-archi-022a-4-5.
      </h1>

      <div className="relative w-full h-96 lg:h-[500px]">
        <Image src="/newhead.png" alt="Image du jeu-concours" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white p-4">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold md:mb-4">
            Participez à notre jeu-concours exclusif !
          </h2>
          <p className="text-sm mb-0 sm:text-xl lg:text-2xl md:mb-4">
            Thetiptop - Votre Boutique de Thé Bio à Nice | Jeu Concours pour l&apos;Ouverture
          </p>
          <ConcourTimer />
          <a
            href="/sign-in?concour=true"
            className="text-sm text-white bg-[#6AA843] font-bold py-3 px-6 rounded-full transition-colors shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#505050] hover:bg-[#5A9437]"
            aria-label="Cliquez ici pour participer au jeu concours"
          >
            Participer maintenant
          </a>
        </div>
      </div>

      <section className="container mx-auto mt-8 lg:mt-16 px-4 lg:px-12 bg-red-400">
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
      <hr className="border-t border-gray-300 my-6" />

      {/* Section SEO avec images et descriptions */}
      <section className="container mx-auto mt-8 lg:mt-16 px-4 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">Découvrez les lots</h2>
          <div className="my-8 flex flex-col items-center lg:flex-row lg:items-center">
            <Image
              src="/detox.jpg"
              alt="Infuseurs à thé"
              width={400}
              height={225}
              className="rounded-lg"
            />
            <div className="mt-10 lg:mt-0 lg:ml-6 text-lg text-gray-600 leading-relaxed lg:w-full">
              <p className="text-[#8FB43A] text-xl md:text-3xl mb-4" >Infuseurs à thé: </p>
              <p className="text-[17px] md:text-lg" >Les infuseurs à thé de The tip top sont conçus pour une infusion parfaite à chaque utilisation. Ces infuseurs permettent de libérer toutes les saveurs et les arômes des feuilles de thé et aussi grâce à leur design élégant et pratique, ils sont faciles à utiliser et à nettoyer.</p>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-6" />

          <div className="my-8 flex flex-col items-center lg:items-center lg:flex-row-reverse">
            <Image
              src="/signature.jpg"
              alt="Boîte de thé détox"
              width={400}
              height={225}
              className="rounded-lg"
            />
            <div className="mt-4 lg:mt-0 lg:mr-6 text-lg text-gray-600 leading-relaxed lg:w-full">
              <p className="text-[#8FB43A] text-xl md:text-3xl mb-4">Boîtes détox ou infusion:</p>
              <p className="text-[17px] md:text-lg">Nos boîtes de thé bio détox et infusion offrent un mélange unique de plantes biologiques, spécialement sélectionnées pour leurs bienfaits purifiants et revitalisants.</p>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-6" />

          <div className="my-8 flex flex-col items-center lg:flex-row lg:items-center">
            <Image
              src="/infuseur.jpg"
              alt="Boîte de thé signature"
              width={400}
              height={225}
              className="rounded-lg"
            />
            <div className="mt-4 lg:mt-0 lg:ml-6 text-lg text-gray-600 leading-relaxed lg:w-full">
              <p className="text-[#8FB43A] text-xl md:text-3xl mb-4">Boîtes de thé signature:</p>
              <p className="text-[17px] md:text-lg">Les boîtes de thé signature Thetiptop renferment des créations uniques, conçues pour les amateurs de thé les plus exigeants. Chaque boîte propose des mélanges exclusifs.</p>
            </div>
          </div>
          <hr className="border-t border-gray-300 my-6" />

          <div className="my-8 flex flex-col items-center lg:items-center lg:flex-row-reverse">
            <Image
              src="/coffret.jpg"
              alt="Coffret découverte thé bio"
              width={400}
              height={225}
              className="rounded-lg"
            />
            <div className="mt-4 lg:mt-0 lg:mr-6 text-xl text-gray-600 leading-relaxed lg:w-full">
              <p className="text-[#8FB43A] text-lg md:text-3xl mb-4">Coffrets découverte:</p>
              <p className="text-[17px] md:text-lg">Les coffrets découverte Thetiptop sont parfaits pour explorer toute la richesse et la diversité de nos thés bio. Chaque coffret contient une sélection variée de thés.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-4">
        <a
          href="/sign-in?concour=true"
          className="text-white bg-[#6AA843] font-bold py-3 px-6 rounded-full transition-colors shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#505050] hover:bg-[#5A9437]"
          aria-label="Cliquez ici pour participer au jeu concours"
        >
          Appuyez ici et découvrez votre lot
        </a>
      </div>
      <hr className="border-t border-gray-300 my-6" />
      <section className="container mx-auto my-16 px-4 lg:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#8FB43A]">Ce que disent nos clients</h2>
        <TestimonialCarousel />
      </section>
    </>
  );
};


export default Home;

