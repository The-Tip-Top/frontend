import React from 'react';


const Mentions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-50 mt-24">
      <h2 className="text-2xl font-bold mb-4">Mentions légales et politique de confidentialité</h2>
      <p className="mb-4">
        La société <strong>Thé tip top</strong>, soucieuse des droits des individus, notamment au regard des traitements
        automatisés et dans une volonté de transparence avec ses clients, a mis en place une politique reprenant
        l’ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d’actions à la
        disposition des individus afin qu’ils puissent au mieux exercer leurs droits.
      </p>
      <p className="mb-4">
        Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter
        le site :{' '}
        <a href="https://www.cnil.fr/" target="_blank" className="text-blue-600 underline">
          https://www.cnil.fr/
        </a>
      </p>
      <p className="mb-4">
        La poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions
        d&apos;utilisation qui suivent.
      </p>
      <p className="mb-8">
        La version actuellement en ligne de ces conditions d&apos;utilisation est la seule opposable pendant toute la
        durée d&apos;utilisation du site et jusqu&apos;à ce qu&apos;une nouvelle version la remplace.
      </p>
    </div>
  );
};

export default Mentions;
