import React, { useState } from "react";
import Modal from "../../modal/modal";
import ConfirmationMessage from "../ConfirmationMessage";

const FormStep4Coordonnees = ({
  onContactInfoSubmit,
  typeModel,
  purchaseOrLeasing,
  vehicleType,
  leasingDuration,
}) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [telephone, setTelephone] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [cityName, setCityName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);


  const formatPhoneNumberE164 = (phone) => {
    let formattedPhone = phone.replace(/\s+/g, "");
    if (formattedPhone.startsWith("0")) {
      formattedPhone = "+33" + formattedPhone.substring(1);
    }
    return formattedPhone;
  };

  const sendLeadInformation = async (leadData) => {
    const emailParam = "alexis94340@gmail.com";

    try {
      const response = await fetch(
        `https://hooks.zapier.com/hooks/catch/16422019/37w62x0?em=${encodeURIComponent(
          emailParam
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              type_modele: typeModel || "Non spécifié",
              achat_ou_leasing: purchaseOrLeasing || "Non spécifié",
              vehicule_neuf_ou_location: vehicleType || "Non spécifié",
              duree_leasing: leasingDuration || "Non spécifiée", 
              nom: leadData.nom || "Non spécifié",
              prenom: leadData.prenom || "Non spécifié",
              ville: leadData.ville || "Non spécifiée",
              telephone: leadData.telephone || "Non spécifié",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du lead");
      }

      const result = await response.json();
      console.log("Envoi réussi :", result);
    } catch (error) {
      console.error("Erreur lors de l'envoi des informations :", error);
    }
  };

  const handleCheckCity = async () => {
    try {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?codePostal=${codePostal}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de la ville");
      }
      const data = await response.json();

      if (data.length === 0) {
        setCityName("Ville inconnue");
        setModalOpen(true);
        return;
      }

      const city = data[0];

      if (city.codesPostaux.length === 1) {
        setCityName(city.nom);
      } else {
        const matchedPostalCode = city.codesPostaux.find(
          (postalCode) => postalCode === codePostal
        );
        const cityNameWithDetail = matchedPostalCode
          ? `${city.nom} ${codePostal.slice(-2)}`
          : city.nom;

        setCityName(cityNameWithDetail);
      }

      setModalOpen(true);
    } catch (error) {
      console.error("Erreur lors de la récupération de la ville", error);
    }
  };

  const handleConfirm = () => {
    const formattedPhone = formatPhoneNumberE164(telephone);

    const contactInfoWithDetails = {
      nom,
      prenom,
      codePostal,
      ville: cityName,
      telephone: formattedPhone,
    };

    onContactInfoSubmit(contactInfoWithDetails);
    sendLeadInformation(contactInfoWithDetails);
    setModalOpen(false);
    setShowConfirmation(true);
  };

  const handleModify = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCheckCity();
  };

  return (
    <div className="form-style">
      {showConfirmation ? (
        <ConfirmationMessage />
      ) : (
        <>
          <h1 className="font-bold text-white text-2xl mb-8">
            Vos coordonnées :
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="input-style-form4"
                required
              />
              <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="input-style-form4"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 mt-6">
              <input
                type="text"
                placeholder="Code Postal"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                className="input-style-form4"
                pattern="\d{5}"
                required
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="input-style-form4"
                pattern="^0\d{9}$"
                required
              />
            </div>
            <button
              type="submit"
              className="mx-auto px-12 py-3 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-red-700"
            >
              CONTINUER
            </button>
          </form>
          <Modal
            isOpen={modalOpen}
            cityName={cityName}
            onConfirm={handleConfirm}
            onModify={handleModify}
          />
        </>
      )}
    </div>
  );
};

export default FormStep4Coordonnees;
