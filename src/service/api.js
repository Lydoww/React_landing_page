const sendLeadInformation = async (leadData) => {
  const emailParam = "alexis94340@gmail.com"; // Remplacez par une adresse email valide

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

export default sendLeadInformation;
