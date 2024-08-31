import React from "react";

const Footer = () => {
  return (
    <footer className="text-[#f4f4f4d5] py-4 px-6 md:px-12 fixed bottom-0 left-0 w-full mt-6 sm:mt-12">
      <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-20">
        <a
          href="#"
          className="hover:scale-105 transition ease-in-out duration-200"
        >
          POLITIQUE DE CONFIDENTIALITE
        </a>
        <a
          href="#"
          className="hover:scale-105 transition ease-in-out duration-200"
        >
          CONDITIONS GENERALES D'UTILISATION
        </a>
        <a
          href="#"
          className="hover:scale-105 transition ease-in-out duration-200"
        >
          REGLEMENTATION - LOI AGEC
        </a>
        <a
          href="#"
          className="hover:scale-105 transition ease-in-out duration-200"
        >
          COOKIE
        </a>
        <a
          href="#"
          className="hover:scale-105 transition ease-in-out duration-200"
        >
          DROITS D'AUTEUR
        </a>
      </div>
    </footer>
  );
};

export default Footer;
