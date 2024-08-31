// Description.jsx
import React from "react";

const Description = () => {
  return (
    <div className="text-[#F4F4F4] pl-6 md:pl-12 mt-8 md:mt-12">
      <h1
        className="text-4xl md:text-6xl uppercase"
        style={{ lineHeight: '1.5' }}
      >
        De nouvelles émotions <br /> commencent ici
      </h1>
      <p className="mt-4">
        Réservez un essai gratuitement en remplissant le formulaire et faites
        <br />
        connaissance avec l'univers Alfa Romeo.
      </p>
    </div>
  );
};

export default Description;
