import React, { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3Achat from "./FormStep3Achat";
import FormStep3Leasing from "./FormStep3Leasing";
import FormStep4Coordonnees from "./FormStep4";
import sendLeadInformation from "../../service/api";

const Form = () => {
  const [step, setStep] = useState(1);
  const [typeModel, setTypeModel] = useState("");
  const [purchaseOrLeasing, setPurchaseOrLeasing] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [leasingDuration, setLeasingDuration] = useState("");
  const [contactInfo, setContactInfo] = useState({}); 

  const handleOptionSelect = (value) => {
    if (step === 1) {
      setTypeModel(value);
      setStep(2);
    } else if (step === 2) {
      setPurchaseOrLeasing(value);
      if (value === "Un achat") {
        setStep(3);
      } else if (value === "Un leasing") {
        setStep(4);
      }
    } else if (step === 3 || step === 4) {
      setStep(5);
    }
  };

  const handleVehicleTypeSelect = (value) => {
    setVehicleType(value);
    handleOptionSelect(value);
  };

  const handleLeasingDurationSelect = (value) => {
    setLeasingDuration(value);
    handleOptionSelect(value);
  };

  const handleContactInfoSubmit = (info) => {
    setContactInfo(info);
    console.log("Form Submitted with contact info:", info);
  };

  const handleConfirm = () => {
    const contactInfoWithDetails = {
      nom: contactInfo.nom,
      prenom: contactInfo.prenom,
      codePostal: contactInfo.codePostal,
      ville: contactInfo.ville,
      telephone: contactInfo.telephone,
    };
    sendLeadInformation(
      contactInfoWithDetails,
      typeModel,
      purchaseOrLeasing,
      vehicleType,
      leasingDuration
    );
  };

  return (
    <div className="ml-6 md:ml-12 mt-8 md:mt-12">
      {step === 1 && <FormStep1 onOptionSelect={handleOptionSelect} />}
      {step === 2 && <FormStep2 onOptionSelect={handleOptionSelect} />}
      {step === 3 && (
        <FormStep3Achat onOptionSelect={handleVehicleTypeSelect} />
      )}
      {step === 4 && (
        <FormStep3Leasing onOptionSelect={handleLeasingDurationSelect} />
      )}
      {step === 5 && (
        <FormStep4Coordonnees
          onContactInfoSubmit={handleContactInfoSubmit}
          typeModel={typeModel}
          purchaseOrLeasing={purchaseOrLeasing}
          vehicleType={vehicleType}
          leasingDuration={leasingDuration}
        />
      )}
    </div>
  );
};

export default Form;
